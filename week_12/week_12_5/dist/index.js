import { PrismaClient } from "./generated/prisma/index.js";
const prisma = new PrismaClient();
async function main() {
    const newUser = await prisma.user.create({
        data: {
            username: "abhi3132",
            password: "1234as",
            firstName: "abhi",
            lastName: "Singh",
            email: "abhi.singh3132@gmail.com",
        },
    });
    console.log(newUser);
}
main().catch((err) => {
    console.log(err), "error";
});
//# sourceMappingURL=index.js.map