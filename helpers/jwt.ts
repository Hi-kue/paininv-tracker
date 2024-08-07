import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers"
import chalk from "chalk";

const log = console.log;

export const verifyJWToken = async (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value;

        if (token === undefined || !token) {
            log(`${chalk.red("Error:")} JWT Token Not Found.`);
            return;
        }

        const decodedData: any = await jwt.verify(token, process.env.JWT_SECRET!);

        const extendedToken = jwt.sign({
            userId: decodedData.userId
        }, process.env.JWT_SECRET!, { expiresIn: '10m' });

        cookies().set("token", extendedToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 10 * 60 * 1000,
        })
        return decodedData.userId;

    } catch (error: any) {
        log(`${chalk.red('Error:')} ${error.message}`);
        cookies().delete("token");
    }
}