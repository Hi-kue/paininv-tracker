import * as z from "zod";

export const userAuthScheme = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});