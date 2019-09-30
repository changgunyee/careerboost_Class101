import * as React from "react";
import {STATES} from "../../static";
import {TodoModel} from "../../models/TodoModel";

interface ModalBodyProps{
    todoEdited:TodoModel
}

interface ModalBodyStates{
    id:number,
    content:string,
    state:STATES,
    isBookMarked:boolean
}

export default class ModalBody extends React.Component<ModalBodyProps,ModalBodyStates>{
    constructor(props: ModalBodyProps, context: any) {
        super(props, context);

        const {id,content,state,isBookMarked}= this.props.todoEdited;
        this.state={
            id:id,
            content:content,
            state:state,
            isBookMarked:isBookMarked
        }
    }

    render(){
        const {content,state,isBookMarked}=this.state;
        return (
            <div className="modal-body">
                <div className="d-flex">
                    <label className="form-checkbox">
                        <input type="checkbox" checked={isBookMarked} onChange={this.changeIsBookMarked}/>
                        <i className="form-icon"></i>북마크
                    </label>
                    <label className="form-switch">
                        <input type="checkbox" checked={state===STATES.DONE?true:false} onChange={this.changeState}/>
                        <i className="form-icon"></i>{state}
                    </label>
                </div>
                <input className="form-input mx-1" type="text" value={content} onChange={this.changeContent}></input>
            </div>
        )
    }

    private changeIsBookMarked=(e: { target: { checked: boolean; }; }):void=>{
        this.setState({
            isBookMarked:e.target.checked
        })
    }

    private changeState=(e: { target: { checked: boolean; }; }):void=>{
        this.setState({
            state:e.target.checked?STATES.DONE:STATES.TODO
        })
    }

    private changeContent=(e: { target: { value: string; }; }):void=>{
        this.setState({
            content:e.target.value
        })
    }

    // private getStates=():ModalBodyStates=>{
    //     return this.state;
    // }
}
