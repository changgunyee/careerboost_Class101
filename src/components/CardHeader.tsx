import * as React from "react";
import '../styles/components/CardHeader.css';
import {FILTER_STATES} from "../containers/TodoContainer";
import {TodoModel} from "../models/TodoModel";


interface CardHeaderProps{
    changeFilter:(state:FILTER_STATES)=>any;
    addTodo:(todo:TodoModel)=>any;
}
interface CardHeaderStates{
    text:string;
}
export default class CardHeader extends React.Component<CardHeaderProps,CardHeaderStates>{
    constructor(props: CardHeaderProps, context: any) {
        super(props, context);
        this.state={
            text:''
        }
    }

    render(){
        const {changeFilter} = this.props;
        return (
            <div className="card-header">
                <div className="card-title h1">TodoList</div>
                <div className="d-flex col-12 m-2">
                    <input className="form-input mx-1" type="text" value={this.state.text} onChange={this.onTodoInputChange} placeholder="해야할 일을 입력해 보세요!"></input>
                    <button className="btn btn-primary" onClick={this.submitTodo}>제출</button>
                </div>
                <div className="divider"></div>
                <div>
                    <span className="h4 filter">FILTER: </span>
                        {
                            Object.keys(FILTER_STATES).map((state)=>(<a key={state} className="btn btn-primary mx-1" onClick={()=>changeFilter(FILTER_STATES[state])}>{state}</a>))
                        }
                </div>
            </div>
        )
    }
    private submitTodo=()=>{
        const {addTodo} = this.props;
        addTodo(new TodoModel(this.state.text));
    }
    private onTodoInputChange=(e)=>{
        this.setState({
            text:e.target.value
        })
    }
}