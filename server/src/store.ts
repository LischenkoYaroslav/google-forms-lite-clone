import { Form, Question, Response, Answer } from "./generated/graphql.js";
import {
  mockForms,
  mockQuestions,
  mockAnswers,
  mockResponses,
} from "./mocks.js";

export const forms: Form[] = [...mockForms];
export const questions: Question[] = [...mockQuestions];

export const responses: Response[] = [...mockResponses];

export const answers: Answer[] = [...mockAnswers];
