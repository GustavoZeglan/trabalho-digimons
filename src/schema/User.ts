import z from "zod";

export const createUserFormSchema = z.object({
    email: z.string({required_error:"O E-mail é obrigatório"}).email({message:"E-mail inválido"}),
    password: z.string({required_error: "A senha é obrigatória"}).min(8, {message: "Senha inválida"}),
})