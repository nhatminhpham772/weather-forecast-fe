import {
  string,
  number,
  array,
  record,
  object,
  size,
  optional,
  defaulted,
  assign,
  type Infer,
  date,
  any,
  boolean,
} from "superstruct";

export const AuthenticateSchema = object({
  id: string(),
  email: string(),
  email_notification: boolean(),
  city: any(),
  jwt_token: string(),
});

export type Authenticate = Infer<typeof AuthenticateSchema>
