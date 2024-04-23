import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import Connection from "@/utils/dbConnection";

export async function POST(request) {
  try {
    await Connection();
    const data = await request.json();

    console.log(data);

    const user = await User.findOne({ email: data.email });
    if (user) {
      return NextResponse.json(
        { message: "user already exist" },
        { status: 400 }
      );
    }

    const pass = bcrypt.hashSync(data.password);

    await User.create({
      username: data.username,
      email: data.email,
      password: pass,
    });
    return NextResponse.json(
      { message: "your account has been created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 },
      { error: error }
    );
  }
}
