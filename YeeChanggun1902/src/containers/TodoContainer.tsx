import * as React from "react";
import CardHeader from "../components/CardHeader";
import CardBody from "../components/CardBody";
import {inject, observer} from "mobx-react";
import TodoStore from "../stores/TodoStore";
import '../styles/containers/TodoContainer.css';
import {STATES, TodoModel} from "../models/TodoModel";
import Modal from '../components/Modal';

export enum FILTER_STATES{
    ALL="ALL",
    TODO="TODO",
    DONE="DONE",
    BOOKMARK="BOOKMARK"
}

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
                <CardBody cardItems={this.getTodos()} selectItem={this.selectTodoToEdit}></CardBody>
              {
                this.state.todoToEdit ?<Modal close={this.closeModal} todoEdited={this.state.todoToEdit} submitChange={this.editItem} ></Modal>:null
              }
            </div>
        )
    }
    private getTodos=()=>{
        if(this.state.filterState===FILTER_STATES[FILTER_STATES.TODO]){
            return this.todoStore.todos;
        }else if(this.state.filterState===FILTER_STATES.DONE){
            return this.todoStore.dones;
        }else if(this.state.filterState===FILTER_STATES.BOOKMARK){
            return this.todoStore.todosBookMarked;
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
    private selectTodoToEdit=(id:number)=>{
        this.setState({
          todoToEdit:this.todoStore.todo(id)
        })
    }
    private editItem=(id:number,todo:Partial<TodoModel>)=>{
        this.todoStore.editTodo(id,todo);
    }
    private closeModal=()=>{
        this.setState({
            todoToEdit:null
        })
    }
}
