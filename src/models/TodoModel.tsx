import {observable} from "mobx";

export enum STATES{
    TODO,DONE
}

export class TodoModel{
    readonly id:number;
    @observable private _content:string;
    @observable private _state:number;
    @observable private _isBookMarked:boolean;
    private static _newId:number=1;

    constructor(content:string, state:number=STATES.TODO,isBookMarked:boolean=false){
        this.id=TodoModel._newId++;
        this._content=content;
        this._state=state;
        this._isBookMarked=isBookMarked;
    }


    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get state(): number {
        return this._state;
    }

    set state(value: number) {
        this._state = value;
    }

    get isBookMarked(): boolean {
        return this._isBookMarked;
    }

    set isBookMarked(value: boolean) {
        this._isBookMarked = value;
    }
}