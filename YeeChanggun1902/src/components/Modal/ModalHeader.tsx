import * as React from "react";

interface ModalHeaderProps{
    close:()=>void
}

export default class ModalHeader extends React.Component<ModalHeaderProps>{
    render(){
        return (
            <div className="modal-header">
                <a onClick={()=>this.props.close()} className="btn btn-clear float-right" aria-label="Close"></a>
                <div className="modal-title h5">Todo수정</div>
            </div>
        )
    }
}
