import { Answer, Form, Question, Response } from "./generated/graphql.js";

export const mockForms: Form[] = [
  {
    id: "1",
    title: "Mocked Form 1",
    description: "This is a mocked form.",
    questions: [],
  },
  {
    id: "2",
    title: "Mocked Form 2",
    description: "This is another mocked form.",
    questions: [],
  },
];

export const mockQuestions: Question[] = [
  {
    id: "q1",
    formId: "1",
    text: "What is your name?",
    type: "TEXT",
    required: true,
    options: [],
  },
  {
    id: "q2",
    formId: "1",
    text: "What is your favorite color?",
    type: "TEXT",
    required: false,
    options: [],
  },
];

export const mockResponses: Response[] = [
  {
    id: "r1",
    formId: "1",
    form: {} as Form,
    answers: [],
  },
  {
    id: "r2",
    formId: "1",
    form: {} as Form,
    answers: [],
  },
];

export const mockAnswers: Answer[] = [
  {
    id: "a1",
    questionId: "q1",
    question: {} as Question,
    value: "John Doe",
    responseId: "r1",
  },
  {
    id: "a2",
    questionId: "q2",
    question: {} as Question,
    value: "Blue",
    responseId: "r1",
  },
];
