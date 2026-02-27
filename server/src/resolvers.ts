import { v4 as uuid } from "uuid";
import { forms, responses } from "./store.js";
import { Resolvers, Form, Response } from "./generated/graphql.js";

export const resolvers: Resolvers = {
  Query: {
    forms: () => {
      return forms;
    },

    form: (_, { id }) => {
      const form = forms.find((f) => f.id === id);
      return form ?? null;
    },

    responses: (_, { formId }) => {
      return responses.filter((r) => r.formId === formId);
    },
  },

  Mutation: {
    createForm: (_, { title, description, questions }) => {
      const newForm: Form = {
        __typename: "Form",
        id: uuid(),
        title,
        description: description ?? null,
        questions:
          questions?.map((q) => {
            if (!q?.text) throw new Error("Question text is required");
            if (!q?.type) throw new Error("Question type is required");

            return {
              __typename: "Question",
              id: uuid(),
              text: q.text,
              type: q.type,
              options: q.options ?? null,
            };
          }) ?? [],
      };

      forms.push(newForm);
      return newForm;
    },

    submitResponse: (_, { formId, answers }) => {
      const formExists = forms.find((f) => f.id === formId);

      if (!formExists) {
        throw new Error("Form not found");
      }

      const validAnswers =
        answers?.map((a, idx) => {
          if (!a?.questionId)
            throw new Error(`Answer #${idx + 1}: questionId is required`);
          if (!a?.value)
            throw new Error(`Answer #${idx + 1}: value is required`);

          return {
            __typename: "Answer" as const,
            questionId: a.questionId,
            value: a.value,
          };
        }) ?? [];

      const newResponse: Response = {
        __typename: "Response" as const,
        id: uuid(),
        formId,
        answers: validAnswers,
      };

      responses.push(newResponse);
      return newResponse;
    },
  },
};
