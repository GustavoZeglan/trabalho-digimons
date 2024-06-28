import {useCallback, useContext, useEffect, useState} from "react";
import {DigiContext} from "../../context/DigiContext";
import axios from "axios";
import {Card, Flex, Pagination, Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import {Digimon} from "../../model/Digimon";
import styles from "./Home.module.css";

const { Meta } = Card;


export const Home = () => {

    const [totalPages, setTotalPages] = useState(1);
    const {digimons, handleDigimons, page, handlePage} = useContext(DigiContext);
    const navigate = useNavigate();

    const getPokemon = useCallback(async () => {
        try {

            const res = await axios.get(`https://digi-api.com/api/v1/digimon?page=${page-1}&pageSize=20`);


            handleDigimons(res.data.content);
            const pag = res.data.pageable.totalPages;
            setTotalPages(pag);
        } catch (e) {
            console.log(e)
        }
    },[handleDigimons, page])


    useEffect(() => {
        getPokemon()
    }, [page]);

    return (
        <Flex vertical={true} align={"center"} gap={"16px"} style={{padding: "24px 0"}}>
            <Flex wrap={true} justify={"center"} align={"center"} className={styles.Container} gap={"24px"}>
                {
                    digimons.length === 0 ?
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}/>
                     :
                    digimons?.map((digi: Digimon, i: number) => {
                        return (
                            <Card key={i} cover={<img src={`${digi.image}`} className={styles.Card}
                                    alt={""}/>} style={{width: "18%", cursor: "pointer"}}
                                  onClick={() => navigate(`/details/${digi.id}`)}>

                                <Meta title={`ID: ${digi.id}`}/>
                                <Meta title={`Name: ${digi.name}`}/>

                            </Card>
                       )
                    })
                }
            </Flex>
            <Pagination defaultCurrent={page} total={totalPages * 10} showSizeChanger={false} onChange={(n) => handlePage(n)}/>
        </Flex>
    )
}