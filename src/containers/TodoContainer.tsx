import * as React from "react";
import CardHeader from "../components/CardHeader";
import CardBody from "../components/CardBody";
import {inject, observer} from "mobx-react";
import TodoStore from "../stores/TodoStore";
import '../styles/containers/TodoContainer.css';
import {STATES, TodoModel} from "../models/TodoModel";

export enum FILTER_STATES{
    ALL="ALL",
    TODO="TODO",
    DONE="DONE"
}

interface TodoContainerProps{
}

interface TodoContainerState {
    filterState:FILTER_STATES
}


@inject("todoStore")
@observer
export default class TodoContainer extends React.Component<TodoContainerProps,TodoContainerState>{
    private todoStore:TodoStore;
    constructor(props,context){
        super(props,context);
        this.todoStore=this.props["todoStore"] as TodoStore;
        this.state={
            filterState:FILTER_STATES.ALL
        }
    }

    render(){
        return (
            <div className={"card-container card p-centered mt-2"}>
                <CardHeader changeFilter={this.changeFilter} addTodo={this.addTodo}></CardHeader>
                <CardBody cardItems={this.getTodos()}></CardBody>
            </div>
        )
    }
    private getTodos=()=>{
        if(this.state.filterState==FILTER_STATES[FILTER_STATES.TODO]){
            return this.todoStore.todos;
        }else if(this.state.filterState==FILTER_STATES.DONE){
            return this.todoStore.dones;
        }else{
            return this.todoStore.all;
        }
    }
    private changeFilter=(state:FILTER_STATES)=>{
        this.setState({
            filterState:state
        })
    }
    private addTodo=(todo:TodoModel)=>{
        this.todoStore.addTodo(todo);
    }
}