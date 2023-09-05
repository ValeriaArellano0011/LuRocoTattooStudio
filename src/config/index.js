import { environment } from "../environments";
import { DEVELOPMENT } from "../misc/redux-consts";

export const URL_API = environment === DEVELOPMENT ? 'http://localhost:3000' : "https://lurocotattoo-api.fly.dev"
