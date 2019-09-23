import {observable} from "mobx";

export enum STATES{
    TODO='TODO',
    DONE='DONE'
}

export class TodoModel{
    readonly id:number;
    @observable private _content:string;
    @observable private _state:STATES;
    @observable private _isBookMarked:boolean;
    private static _newId:number=0;

    constructor(content:string, state:STATES=STATES.TODO,isBookMarked:boolean=false){
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

    get state(): STATES {
        return this._state;
    }

    set state(value: STATES) {
        this._state = value;
    }

    get isBookMarked(): boolean {
        return this._isBookMarked;
    }

    set isBookMarked(value: boolean) {
        this._isBookMarked = value;
    }
}
