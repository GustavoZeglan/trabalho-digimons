import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Flex, Spin} from "antd";
import {Digimon} from "../../model/Digimon";
import {DigimonAside} from "../../components/DigimonAside/DigimonAside";
import {DigimonInfo} from "../../components/DigimonInfo";
import styles from "./Details.module.css";
import {LoadingOutlined} from "@ant-design/icons";


export const Details = () => {
    const {id} = useParams();
    const [digimon, setDigimon] = useState<Digimon>();

    const getDigimonInfo = useCallback(async () => {
        try {
            const res = await axios.get(`https://digi-api.com/api/v1/digimon/${id}`)
            setDigimon(res.data);
        } catch (e) {
            console.log(e);
        }
    }, [id]);


    useEffect(() => {
        getDigimonInfo()
    }, [getDigimonInfo])

    return (
        <Flex justify={"center"} gap={"24px"} align={"start"} className={styles.Container}>
            {
                !digimon ? <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}/>
                    :
                    <>
                        <DigimonInfo digimon={digimon!} />
                        <DigimonAside digimon={digimon!}/>
                    </>
            }

        </Flex>

    )
}