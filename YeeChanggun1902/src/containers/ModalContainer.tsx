import * as React from 'react';
import { TodoModel } from '../models/TodoModel';
import ModalBody from "../components/Modal/ModalBody";
import ModalHeader from "../components/Modal/ModalHeader";

interface ModalProps {
  submitChange:(id:number,todo:Partial<TodoModel>)=>void,
  todoEdited:TodoModel,
  close:()=>void
}

export default class ModalContainer extends React.Component<ModalProps>{
  private modalBody: React.RefObject<ModalBody>;

  constructor(props: ModalProps) {
    super(props);
    this.modalBody=React.createRef();
  }

  render(){
    const {close,todoEdited}=this.props;
    return (
      <div className="modal active" id="modal-id">
        <a href="#close" className="modal-overlay" aria-label="Close"></a>
        <div className="modal-container">
          <ModalHeader close={close}></ModalHeader>
          <ModalBody todoEdited={todoEdited} ref={this.modalBody}></ModalBody>
          <div className="modal-footer p-centered">
            <a className="btn btn-primary" onClick={this.submitChange}>변경</a>
          </div>
        </div>
      </div>
    )
  }
  private submitChange=():void=>{
    const {id,content,isBookMarked,state}=this.modalBody.current.state;
    const {submitChange,close}=this.props;
    submitChange(id,{
      content,
      isBookMarked,
      state
    })
    close();
  }
}
