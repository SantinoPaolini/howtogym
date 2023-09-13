import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

const handler = async (req, res) => {
    const requestMethod = req.method;
    switch (requestMethod) {
        case 'GET':
            const ejercicios = await prisma.ejercicios.findMany();
            res.send(ejercicios)
        default:
            res.status(200).json({ message: 'Welcome to API Routes!' })
    }
}

export default handler; 