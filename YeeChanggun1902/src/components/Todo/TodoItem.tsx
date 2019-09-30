import * as React from "react";
import {TodoModel} from "../../models/TodoModel";

interface CardItemProps {
    item:TodoModel,
    selectItem:(number)=>void
}

export default class TodoItem extends React.Component<CardItemProps>{
    constructor(props: CardItemProps, context: any) {
        super(props, context);
    }

    render(){
        const {item,selectItem}=this.props;
        return (
            <li data-id={item.id}>{item.content}
                <button className="btn btn-sm float-right" onClick={selectItem.bind(this,item.id)}><i className="icon icon-edit"></i></button>
            </li>
        )
    }
}
