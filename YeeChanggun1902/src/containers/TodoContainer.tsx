import * as React from "react";
import CardHeader from "../components/CardHeader";
import CardBody from "../components/CardBody";
import {inject, observer} from "mobx-react";
import TodoStore from "../stores/TodoStore";
import '../styles/containers/TodoContainer.css';
import {TodoModel} from "../models/TodoModel";
import Modal from '../components/Modal';
import {FILTER_STATES} from "../static";

interface TodoContainerProps{
}

interface TodoContainerState {
    todoToEdit:TodoModel,
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
            todoToEdit:null,
            filterState:FILTER_STATES.ALL
        }
    }

    render(){
        return (
            <div className={"card-container card p-centered mt-2"}>
                <CardHeader changeFilter={this.changeFilter} addTodo={this.addTodo} filterState={this.state.filterState}></CardHeader>
                <CardBody cardItems={this.getTodoByFilter()} selectItem={this.selectTodoToEdit}></CardBody>
              {
                this.state.todoToEdit ?<Modal close={this.closeModal} todoEdited={this.state.todoToEdit} submitChange={this.editItem} ></Modal>:null
              }
            </div>
        )
    }

    private getTodoByFilter=():TodoModel[]=>{
        return this.todoStore[this.state.filterState];
    }

    private changeFilter=(state:FILTER_STATES):void=>{
        this.setState({
            filterState:state
        })
    }

    private addTodo=(todo:TodoModel):void=>{
        this.todoStore.addTodo(todo);
    }

    private selectTodoToEdit=(id:number):void=>{
        this.setState({
          todoToEdit:this.todoStore.getSingleTodo(id)
        })
    }

    private editItem=(id:number,todo:Partial<TodoModel>):void=>{
        this.todoStore.editTodo(id,todo);
    }

    private closeModal=():void=>{
        this.setState({
            todoToEdit:null
        })
    }
}
