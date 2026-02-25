
import {PrismaClient} from "./generated/prisma/client.js";
import {PrismaPg} from "@prisma/adapter-pg";
import {config} from "dotenv";

config();

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({connectionString});

export const prismaClient = new PrismaClient({adapter});


export * from "./generated/prisma/client.js";