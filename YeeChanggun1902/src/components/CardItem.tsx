import * as React from "react";
import {TodoModel} from "../models/TodoModel";

interface CardItemProps {
    item:TodoModel,
}

interface CardItemStates{

}

export default class CardItem extends React.Component<CardItemProps,CardItemStates>{
    constructor(props: CardItemProps, context: any) {
        super(props, context);
    }

    render(){
        const {item}=this.props;
        return (
            <li data-id={item.id}>{item.content}
                <button className="btn btn-sm float-right"><i className="icon icon-edit"></i></button>
            </li>
        )
    }
}
