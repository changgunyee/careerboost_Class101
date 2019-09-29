import {action, observable} from "mobx";
import {STATES} from "../static";

export class TodoModel{
    readonly id:number;
    @observable public content:string;
    @observable public state:STATES;
    @observable public isBookMarked:boolean;
    private static newId:number=0;

    constructor(content:string, state:STATES=STATES.TODO,isBookMarked:boolean=false){
        this.id=TodoModel.newId++;
        this.content=content;
        this.state=state;
        this.isBookMarked=isBookMarked;
    }

    @action
    changeContent=(content: string):void =>{
        this.content = content;
    }

    @action
    changeState=(state: STATES):void =>{
        this.state = state;
    }

    @action
    changeBookMark=(isBookMarked: boolean):void =>{
        this.isBookMarked = isBookMarked;
    }
}
