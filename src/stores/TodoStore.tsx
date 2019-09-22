import {action, autorun, computed, observable, reaction, toJS} from "mobx";
import {STATES, TodoModel} from "../models/TodoModel";

export default class TodoStore{
    constructor(todoList:TodoModel[]=[]){
        this.todoList=todoList;
    }
    @observable private todoList;

    @computed
    get todos(){
        return this.todoList.filter((todo)=> todo.state===STATES.TODO);
    }

    @computed
    get dones(){
        return this.todoList.filter((todo)=>todo.state===STATES.DONE);
    }

    @computed
    get all(){
        return this.todoList;
    }

    @action
    addTodo=(newTodo:TodoModel):void=>{
        this.todoList.push(newTodo);
    }

    @action
    editTodo=(id:number,props:object):void=>{
        const todoToEdit=this.todoList.find((todo)=>todo.id===id);
        //수정
        for(let prop in props){
            todoToEdit[prop].call(props[prop]);
        }
    }
}