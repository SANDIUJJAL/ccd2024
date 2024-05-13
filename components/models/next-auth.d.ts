import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        params: object;
        access?: string;
        error?: "RefreshAccessTokenError"
        user: {
            pk?: number;
            username?: string;
            email?: string;
            first_name?: string;
            last_name?: string;
            profile?: {
            };
        };
    }

    interface User {
        access: string;
        refresh: string;
        user: {
            pk: number;
            username: string;
            email: string;
            first_name: string;
            last_name: string;
            profile: {

            };
        },
    }

}

declare module "next-auth/jwt" {
    interface JWT {
        access?: string;
        refresh?: string;
        expires_at: number;
        error?: "RefreshAccessTokenError"
        token: object;
        user: object;
    }
}
