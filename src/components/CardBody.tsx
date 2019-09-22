import * as React from "react";
import CardItem from "./CardItem";
import {observer} from "mobx-react";

interface CardBodyProps{
    cardItems
}

interface CardBodyStates{

}

@observer
export default class CardBody extends React.Component<CardBodyProps,CardBodyStates>{
    constructor(props: CardBodyProps | Readonly<CardBodyProps>, context?: any) {
        super(props, context);
    }

    render(){
        const cardItems=this.props.cardItems;
        return (
            <div className="card-body">
                <ul>
                    {cardItems.map((item)=>{
                        return <CardItem key={item.id} item={item}></CardItem>
                    })}
                </ul>
            </div>
        )
    }
}