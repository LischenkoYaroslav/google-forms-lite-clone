import { Form, Question, Response, Answer } from "../../generated/graphql.js";

export const forms: Form[] = [];
export const questions: (Question & { formId: string })[] = [];

export const responses: Response[] = [];

export const answers: (Answer & {
  id: string;
  responseId: string;
})[] = [];
