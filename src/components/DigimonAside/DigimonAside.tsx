import {Digimon} from "../../model/Digimon";
import {Flex, Image} from "antd";
import styles from "./DigimonAside.module.css";

interface DigimonAsideProps {
    digimon: Digimon
}

export const DigimonAside = ({digimon}: DigimonAsideProps) => {

    return (
        <Flex vertical={true} gap={"16px"}>
            <Flex vertical={true} justify={"center"} align={"center"} gap={"8px"}
                  className={styles.Container}>
                <Image src={`${digimon?.images[0].href}`} preview={false} width={"80%"}/>
                <h1>
                    {digimon?.name}
                </h1>
            </Flex>

            <Flex justify={"center"} gap={"16px"}>
                <Flex vertical={true} gap={"4px"} align={"center"}>
                    <h4>Level</h4>
                    {
                        digimon?.levels.map((lv, i) => {
                            return <p key={i}>{lv.level}</p>
                        })
                    }
                </Flex>
                <Flex vertical={true} gap={"4px"} align={"center"}>
                    <h4>Attributes</h4>
                    {
                        digimon?.attributes.map((at, i) => {
                            return <p key={i}>{at.attribute}</p>
                        })
                    }
                </Flex>
                <Flex vertical={true} gap={"4px"} align={"center"}>
                    <h4>Type</h4>
                    {
                        digimon?.types.map((type, i) => {
                            return <p key={i}>{type.type}</p>
                        })
                    }
                </Flex>
            </Flex>

        </Flex>
    )

}