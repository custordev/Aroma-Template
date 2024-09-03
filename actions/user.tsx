"use server";
import { db } from "@/lib/db";
// import { userProps } from "@/types/type";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
export async function createUser(data: any) {
  const { email, password, firstName, lastName, name, phone, image } = data;
  console.log(`${data} this is data`);
  try {
    // Hash the PAASWORD
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    console.log(`${existingUser} this is exisiting user`);
    if (existingUser) {
      return {
        error: `(${email}) already exists`,
        status: 409,
        data: null,
      };
    }
    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        name,
        phone,
        image,
      },
    });
    revalidatePath("/dashboard/users");
    console.log(`${newUser} this is new user`);
    return {
      error: null,
      status: 200,
      data: newUser,
    };
  } catch (error) {
    console.log(error);
    return {
      error: `Something Went wrong, Please try again`,
      status: 500,
      data: null,
    };
  }
}
