import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const client = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const users = await client.user.findMany();
  console.log(users);
  return Response.json(users);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const body: { username: string; password: string } = await req.json();
  await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });
  return Response.json({ message: "you are signed up" });
}
