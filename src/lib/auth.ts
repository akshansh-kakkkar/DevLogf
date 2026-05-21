import { betterAuth } from "better-auth";
import * as process from 'node:process';

export const auth = betterAuth({
    emailAndPassword : {
        enabled : true
    },
    secret : 
    process.env.BETTER_AUTH_SECRET!,
})