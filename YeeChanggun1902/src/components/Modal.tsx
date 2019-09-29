import * as React from 'react';
import { TodoModel } from '../models/TodoModel';
import {FILTER_STATES, STATES} from "../static";

interface ModalProps {
  submitChange:(id:number,todo:Partial<TodoModel>)=>void,
  todoEdited:TodoModel,
  close:()=>void
}

interface ModalStates{
  id:number,
  content:string,
  state:STATES,
  isBookMarked:boolean
}

export default class Modal extends React.Component<ModalProps,ModalStates>{
  constructor(props: ModalProps, context: any) {
    super(props, context);
    const {id,content,state,isBookMarked}= this.props.todoEdited;
    this.state={
      id:id,
      content:content,
      state:state,
      isBookMarked:isBookMarked
    }
  }

  componentDidMount(): void {
  }

  render(){
    const {content,state,isBookMarked}=this.state;
    return (
      <div className="modal active" id="modal-id">
        <a href="#close" className="modal-overlay" aria-label="Close"></a>
        <div className="modal-container">
          <div className="modal-header">
            <a onClick={()=>this.props.close()} className="btn btn-clear float-right" aria-label="Close"></a>
            <div className="modal-title h5">Todo수정</div>
          </div>
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
          <div className="modal-footer p-centered">
            <a className="btn btn-primary" onClick={this.submitChange}>변경</a>
          </div>
        </div>
      </div>
    )
  }

  private changeIsBookMarked=(e)=>{
    this.setState({
      isBookMarked:e.target.checked
    })
  }

  private changeState=(e)=>{
    this.setState({
      state:e.target.checked?STATES.DONE:STATES.TODO
    })
  }

  private changeContent=(e)=>{
    this.setState({
      content:e.target.value
    })
  }

  private submitChange=(e)=>{
    const {id,content,isBookMarked,state}=this.state;
    this.props.submitChange(id,{
      content,
      isBookMarked,
      state
    })
    this.props.close();
  }
}
