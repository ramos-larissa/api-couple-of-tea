import { Prisma, Permission } from "@prisma/client";

export class User implements Prisma.UserUncheckedCreateInput{
    id?: string;
    email: string;
    password: string;
    name: string;
    role?: Permission;
    createdAt?: Date;
    updatedAt?: Date;
}
