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
        const {cardItems}=this.props;
        return (
            <div className="card-body">
                <ul onClick={this.selectItemToEdit}>
                    {cardItems.map((item)=>{
                        return <CardItem key={item.id} item={item}></CardItem>
                    })}
                </ul>
            </div>
        )
    }

    private selectItemToEdit=(e)=>{
        let todoId;
        if(e.target.tagName==="BUTTON"){
            todoId=e.target.parentElement.dataset.id;
        }else if(e.target.tagName==="I"){
            todoId=e.target.parentElement.parentElement.dataset.id;
        }
        this.props.selectItem(Number(todoId));
    }
}
