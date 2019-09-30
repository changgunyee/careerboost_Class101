import * as React from "react";

interface ModalFooterProps{
    submitChange:()=>void
}

export default class ModalFooter extends React.Component<ModalFooterProps>{
    render(){
        return (
            <div className="modal-footer p-centered">
                <a className="btn btn-primary" onClick={this.props.submitChange}>변경</a>
            </div>
        )
    }
}
