/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as auth from "../auth.js";
import type * as constants from "../constants.js";
import type * as formFields from "../formFields.js";
import type * as forms from "../forms.js";
import type * as http from "../http.js";
import type * as quests from "../quests.js";
import type * as users from "../users.js";
import type * as usersQuests from "../usersQuests.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  constants: typeof constants;
  formFields: typeof formFields;
  forms: typeof forms;
  http: typeof http;
  quests: typeof quests;
  users: typeof users;
  usersQuests: typeof usersQuests;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
