import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export function GET() {
  return Response.json({
    name: "pavan",
    password: "sdlkhsa",
  });
}

export async function POST(req: NextRequest) {
  const body: { username: string; password: string } = await req.json();
  await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });
  return Response.json({ message: "you are signed up" });
}
