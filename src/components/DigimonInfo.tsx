import {Flex, List} from "antd";
import {Digimon, Skill} from "../model/Digimon";
import {EvolutionsList} from "./EvolutionsList";

interface DigimonInfoProps {
    digimon: Digimon
}


export const DigimonInfo = ({digimon}: DigimonInfoProps) => {
    return (
        <Flex vertical={true} gap={"16px"} style={{width: "60%"}}>

            <Flex vertical={true} gap={"8px"} style={{width: "100%"}}>
                <h3>Description:</h3>
                {
                    digimon?.descriptions.map((desc, i) => {
                        if (desc.language === "en_us") return <p>{desc.description}</p>;
                        return null;
                    })
                }
            </Flex>

            <List header={<h3>Skills: </h3>} style={{width: "100%"}} bordered={true} dataSource={digimon?.skills}
                  pagination={{pageSize: 4, position: "top", align: "center"}}
                  renderItem={(item: Skill) => (
                      <List.Item key={item.id}>
                          <strong>{item.skill}</strong>
                          <br/>
                          {item.description}
                      </List.Item>
                  )}
            />

            <EvolutionsList title={"Prior Evolutions:"} digimons={digimon?.priorEvolutions}/>
            <EvolutionsList title={"Next Evolutions:"} digimons={digimon?.nextEvolutions}/>
        </Flex>
    )
}