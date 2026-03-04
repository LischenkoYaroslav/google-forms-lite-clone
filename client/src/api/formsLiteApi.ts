import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlBaseQuery } from "./graphqlBaseQuery";
import type {
  Form,
  MutationCreateFormArgs,
  MutationSubmitResponseArgs,
  Response,
} from "@/generated/graphql";

export const formLiteApi = createApi({
  reducerPath: "formLiteApi",
  baseQuery: graphqlBaseQuery({ baseUrl: "http://localhost:4000/graphql" }),
  tagTypes: ["Forms"],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getForms: builder.query<Form[], void>({
      query: () => ({
        document: `query Forms {
            forms {
                id
                title
                description
                questions {
                  id
                  text
                }
            }
        }`,
      }),
      transformResponse: (response: { forms: Form[] }) => response.forms,
      providesTags: ["Forms"],
    }),
    getFormById: builder.query<Form, string>({
      query: (formId) => ({
        document: `query Query($formId: ID!) {
                    form(id: $formId) {
                        id
                        title
                        description
                        questions {
                            id
                            type
                            required
                            text
                            options
                        }
                    }
                }`,
        variables: { formId },
      }),
      transformResponse: (response: { form: Form }) => response.form,
    }),
    getResponsesByFormId: builder.query<Response[], string>({
      query: (formId) => ({
        document: `query Query($formId: ID!) {
                    responses(formId: $formId) {
                        id
                        formId
                        form {
                            title
                            description
                        }
                        answers {
                            id
                            questionId
                            value
                            question {
                                type
                                text
                                required
                                options
                            }
                        }
                    }
                }`,
        variables: { formId },
      }),
      transformResponse: (response: { responses: Response[] }) =>
        response.responses,
    }),
    createForm: builder.mutation<
      Pick<Form, "id" | "title">,
      MutationCreateFormArgs
    >({
      query: (formData) => ({
        document: `mutation CreateForm($title: String!, $description: String, $questions: [QuestionInput]) {
                    createForm(title: $title, description: $description, questions: $questions) {
                          id
                          title
                     }
                }`,
        variables: formData,
      }),

      transformResponse: (response: { createForm: Form }) =>
        response.createForm,
      invalidatesTags: ["Forms"],
    }),
    submitResponse: builder.mutation<
      Pick<Response, "formId">,
      MutationSubmitResponseArgs
    >({
      query: (responseData) => ({
        document: `mutation Mutation($formId: ID!, $answers: [AnswerInput]!) {
                    submitResponse(formId: $formId, answers: $answers) {
                        formId
                    }
                }`,
        variables: responseData,
      }),

      transformResponse: (response: { submitResponse: Response }) =>
        response.submitResponse,
    }),
  }),
});

export const {
  useGetFormsQuery,
  useGetFormByIdQuery,
  useGetResponsesByFormIdQuery,
  useCreateFormMutation,
  useSubmitResponseMutation,
} = formLiteApi;
