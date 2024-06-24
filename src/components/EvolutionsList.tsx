import {Digimon, Evolution} from "../model/Digimon";
import {Image, List} from "antd";

interface EvolutionsListProps {
    title: string,
    digimons: Evolution[],
}

export const EvolutionsList = ({title, digimons}: EvolutionsListProps) => {

    return (
        <List header={<h3>{title} </h3>} style={{width: "100%"}} bordered={true} dataSource={digimons}
              grid={{gutter:16,column:4}}
              renderItem={(item: Evolution) => (
                  <List.Item key={item.id}>
                      <strong>{item.digimon}</strong>
                      <Image src={`${item.image}`} style={{borderRadius: "8px"}}  preview={false}/>
                  </List.Item>
              )}
        />
    )
}