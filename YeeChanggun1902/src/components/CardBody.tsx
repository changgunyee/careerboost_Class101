import * as React from "react";
import CardItem from "./CardItem";
import {observer} from "mobx-react";
import { TodoModel } from '../models/TodoModel';

interface CardBodyProps{
    cardItems:TodoModel[]
    selectItem:(number)=>void
}

@observer
export default class CardBody extends React.Component<CardBodyProps>{
    constructor(props: CardBodyProps | Readonly<CardBodyProps>, context?: any) {
        super(props, context);
    }

    render(){
        const {cardItems,selectItem}=this.props;
        return (
            <div className="card-body">
                <ul>
                    {cardItems.map((item)=>{
                        return <CardItem key={item.id} item={item} selectItem={selectItem}></CardItem>
                    })}
                </ul>
            </div>
        )
    }
}
