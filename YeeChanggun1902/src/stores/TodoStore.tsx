import {action, autorun, computed, observable, reaction, toJS} from "mobx";
import {TodoModel} from "../models/TodoModel";
import {STATES} from "../static";

export default class TodoStore{
    constructor(todoList:TodoModel[]=[]){
        this.todoList=todoList;
    }
    @observable private todoList;

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
    editTodo=(id:number,newTodo:Partial<TodoModel>):void=>{
        this.todoList=this.todoList.map((todo:TodoModel):TodoModel=>{
            if(todo.id===id) {
                for (let key in newTodo) {
                    todo[key] = newTodo[key];
                }
            }
            return todo;
        })
    }

    getSingleTodo=(id:number):TodoModel=>{
        return this.todoList.find((todo)=>{
            return todo.id==id;
        });
    }
}
