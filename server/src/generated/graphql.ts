import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['ID']['output'];
  question: Question;
  questionId: Scalars['ID']['output'];
  responseId: Scalars['ID']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type AnswerInput = {
  questionId: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Form = {
  __typename?: 'Form';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  questions: Array<Question>;
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createForm: Form;
  submitResponse: Response;
};


export type MutationCreateFormArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<Array<InputMaybe<QuestionInput>>>;
  title: Scalars['String']['input'];
};


export type MutationSubmitResponseArgs = {
  answers: Array<InputMaybe<AnswerInput>>;
  formId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  form?: Maybe<Form>;
  forms?: Maybe<Array<Form>>;
  responses?: Maybe<Array<Response>>;
};


export type QueryFormArgs = {
  id: Scalars['ID']['input'];
};


export type QueryResponsesArgs = {
  formId: Scalars['ID']['input'];
};

export type Question = {
  __typename?: 'Question';
  formId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  options: Array<Scalars['String']['output']>;
  required: Scalars['Boolean']['output'];
  text: Scalars['String']['output'];
  type: QuestionType;
};

export type QuestionInput = {
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  text: Scalars['String']['input'];
  type: QuestionType;
};

export type QuestionType =
  | 'CHECKBOX'
  | 'DATE'
  | 'MULTIPLE_CHOICE'
  | 'TEXT';

export type Response = {
  __typename?: 'Response';
  answers: Array<Answer>;
  form: Form;
  formId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Answer: ResolverTypeWrapper<Answer>;
  AnswerInput: AnswerInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Form: ResolverTypeWrapper<Form>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Question: ResolverTypeWrapper<Question>;
  QuestionInput: QuestionInput;
  QuestionType: QuestionType;
  Response: ResolverTypeWrapper<Response>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Answer: Answer;
  AnswerInput: AnswerInput;
  Boolean: Scalars['Boolean']['output'];
  Form: Form;
  ID: Scalars['ID']['output'];
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  Question: Question;
  QuestionInput: QuestionInput;
  Response: Response;
  String: Scalars['String']['output'];
}>;

export type AnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['Question'], ParentType, ContextType>;
  questionId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  responseId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type FormResolvers<ContextType = any, ParentType extends ResolversParentTypes['Form'] = ResolversParentTypes['Form']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  questions?: Resolver<Array<ResolversTypes['Question']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createForm?: Resolver<ResolversTypes['Form'], ParentType, ContextType, RequireFields<MutationCreateFormArgs, 'title'>>;
  submitResponse?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationSubmitResponseArgs, 'answers' | 'formId'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  form?: Resolver<Maybe<ResolversTypes['Form']>, ParentType, ContextType, RequireFields<QueryFormArgs, 'id'>>;
  forms?: Resolver<Maybe<Array<ResolversTypes['Form']>>, ParentType, ContextType>;
  responses?: Resolver<Maybe<Array<ResolversTypes['Response']>>, ParentType, ContextType, RequireFields<QueryResponsesArgs, 'formId'>>;
}>;

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = ResolversObject<{
  formId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['QuestionType'], ParentType, ContextType>;
}>;

export type ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = ResolversObject<{
  answers?: Resolver<Array<ResolversTypes['Answer']>, ParentType, ContextType>;
  form?: Resolver<ResolversTypes['Form'], ParentType, ContextType>;
  formId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Answer?: AnswerResolvers<ContextType>;
  Form?: FormResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
}>;

