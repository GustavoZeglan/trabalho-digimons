import {Flex, Form, Input, Button} from "antd";
import {useForm} from "react-hook-form";
import z from "zod";
import {createUserFormSchema} from "../../schema/User";
import {zodResolver} from "@hookform/resolvers/zod";
import styles from "./Auth.module.css";
import {useNavigate} from "react-router-dom";

type createUserFormData = z.infer<typeof createUserFormSchema>

export const Auth = () => {

    const { register, handleSubmit,formState: { errors, isValid } } =
        useForm<createUserFormData>({
            resolver: zodResolver(createUserFormSchema)
        })

    const navigate = useNavigate();

    const onSubmit = (data:any) => {
        navigate("/home")
    }


    return (
        <>
            <Flex justify={"center"} align={"center"} style={{width:"100%", height:"100vh"}}>
                <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
                    <h2 style={{alignSelf: "center"}}>Autenticação</h2>
                    <input placeholder={"O E-mail é obrigatório..."} {...register("email")}/>
                    {errors.email && <span className={styles.ErrorMessage}>{errors.email.message}</span>}
                    <input placeholder={"A senha precisa de no mínimo 8 caracteres..."} type={"password"} {...register("password")}/>
                    {errors.password && <span className={styles.ErrorMessage}>{errors.password.message}</span>}
                    <button disabled={!isValid} name={"btn"} style={{width:"100%", cursor: !isValid ? "not-allowed" : "pointer"}}>
                        <strong>
                            Login
                        </strong>
                    </button>
                </form>
            </Flex>
        </>
    )
}