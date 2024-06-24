import {Flex, Form, Input, Button} from "antd";
import {useForm} from "react-hook-form";
import z from "zod";
import {createUserFormSchema} from "../../schema/User";
import {zodResolver} from "@hookform/resolvers/zod";
import styles from "./Auth.module.css";
import {useNavigate} from "react-router-dom";

type createUserFormData = z.infer<typeof createUserFormSchema>

export const Auth = () => {

    const { register, handleSubmit, watch, formState: { errors } } =
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
                    <input placeholder={"E-mail:"} {...register("email")}/>
                    {errors.email && <span className={styles.ErrorMessage}>{errors.email.message}</span>}
                    <input placeholder={"Senha:"} {...register("password")}/>
                    {errors.password && <span className={styles.ErrorMessage}>{errors.password.message}</span>}
                    <button name={"btn"} style={{width:"100%"}}>
                        <strong>
                            Login
                        </strong>
                    </button>
                </form>
            </Flex>
        </>
    )
}