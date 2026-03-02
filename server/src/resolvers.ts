import { v4 as uuidv4 } from "uuid";
import {
  Resolvers,
  Form,
  Question,
  Response,
} from "../../generated/graphql.js";
import { forms, responses, questions, answers } from "./store.js";

export const resolvers: Resolvers = {
  Query: {
    forms: () => forms,

    form: (_, { id }) => forms.find((f) => f.id === id) ?? null,

    responses: (_, { formId }) => responses.filter((r) => r.formId === formId),
  },

  Mutation: {
    createForm: (_, { title, description, questions: inputQuestions }) => {
      const formId = uuidv4();

      const newForm: Form = {
        __typename: "Form",
        id: formId,
        title,
        description: description ?? null,
        questions: [],
      };

      forms.push(newForm);

      inputQuestions?.forEach((q) => {
        const newQuestion: Question & { formId: string } = {
          __typename: "Question",
          id: uuidv4(),
          text: q?.text ?? "",
          type: q?.type!,
          required: q?.required ?? false,
          options: q?.options ?? [],
          formId,
        };

        questions.push(newQuestion);
      });

      return newForm;
    },

    submitResponse: (_, { formId, answers: inputAnswers }) => {
      const responseId = uuidv4();

      const newResponse: Response = {
        __typename: "Response",
        id: responseId,
        formId,
        form: {} as Form,
        answers: [],
      };

      responses.push(newResponse);

      inputAnswers.forEach((a) => {
        if (!a) return;

        answers.push({
          __typename: "Answer",
          id: uuidv4(),
          responseId,
          questionId: a.questionId,
          value: a.value ?? null,
          question: {} as Question,
        });
      });

      return newResponse;
    },
  },

  Form: {
    questions: (form) => questions.filter((q) => q.formId === form.id),
  },

  Response: {
    form: (response) => forms.find((f) => f.id === response.formId)!,
    answers: (response) => answers.filter((a) => a.responseId === response.id),
  },

  Answer: {
    question: (answer) => questions.find((q) => q.id === answer.questionId)!,
  },
};
