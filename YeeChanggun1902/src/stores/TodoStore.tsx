import {action, autorun, computed, observable, reaction, toJS} from "mobx";
import {TodoModel} from "../models/TodoModel";
import {STATES} from "../static";

export default class TodoStore{
    constructor(todoList:TodoModel[]=[]){
        this.todoList=todoList;
    }
    @observable private readonly todoList;

    @computed
    get todo(){
        return this.todoList.filter((todo)=> todo.state===STATES.TODO);
    }

    @computed
    get done(){
        return this.todoList.filter((todo)=>todo.state===STATES.DONE);
    }

    @computed
    get bookmark(){
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

    getSingleTodo=(id:number):TodoModel=>{
        return this.todoList.find((todo)=>{
            return todo.id==id;
        });
    }
}
