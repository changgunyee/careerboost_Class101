import {action, autorun, computed, observable, reaction, toJS} from "mobx";
import {STATES, TodoModel} from "../models/TodoModel";

export default class TodoStore{
    constructor(todoList:TodoModel[]=[]){
        this.todoList=todoList;
    }
    @observable private readonly todoList;
    
    @computed
    get todos(){
        return this.todoList.filter((todo)=> todo.state===STATES.TODO);
    }

    @computed
    get dones(){
        return this.todoList.filter((todo)=>todo.state===STATES.DONE);
    }

    @computed
    get todosBookMarked(){
        return this.todoList.filter((todo)=>todo.isBookMarked===true);
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
    editTodo=(id:number,todo:Partial<TodoModel>):void=>{
        const todoToEdit=this.todoList.find((todo)=>todo.id===id);
        for(let key in todo){
            todoToEdit[key]=todo[key];
        }
    }

    todo=(id:number):TodoModel=>{
        return this.todoList.find((todo)=>{
            return todo.id==id;
        });
    }
}
