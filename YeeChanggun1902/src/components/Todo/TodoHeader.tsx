import * as React from "react";
import '../../styles/components/TodoHeader.css';
import {TodoModel} from "../../models/TodoModel";

interface CardHeaderProps{
    addTodo:(todo:TodoModel)=>void;
}

interface CardHeaderStates{
    text:string;
}

export default class TodoHeader extends React.Component<CardHeaderProps,CardHeaderStates>{
    constructor(props: CardHeaderProps, context: any) {
        super(props, context);
        this.state={
            text:''
        }
    }

    render(){
        return (
            <div className="todo-header">
                <div className="card-title h1">TodoList</div>
                <div className="d-flex col-12 m-2">
                    <input className="form-input mx-1" type="text" value={this.state.text} onChange={this.onTodoInputChange} placeholder="해야할 일을 입력해 보세요!"></input>
                    <button className="btn btn-primary" onClick={this.submitTodo}>제출</button>
                </div>
            </div>
        )
    }
    private submitTodo=():void=>{
        const {addTodo} = this.props;
        addTodo(new TodoModel(this.state.text));
        this.setState({
          text:''
        })
    }

    private onTodoInputChange=(e: { target: { value: string; }; }):void=>{
        this.setState({
            text:e.target.value
        })
    }
}
