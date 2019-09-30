import * as React from "react";
import '../../styles/components/FilterList.css';
import {observer} from "mobx-react";
import {FILTER_STATES} from "../../static";

interface FilterListProps{
    changeFilter:(state:FILTER_STATES)=>void,
    filterState:FILTER_STATES
}

@observer
export default class FilterList extends React.Component<FilterListProps>{
    constructor(props: FilterListProps,context?: any) {
        super(props, context);
    }

    render(){
        const {changeFilter,filterState} = this.props;

        const filterDefaultClass='btn mx-1';
        const filterElements=Object.keys(FILTER_STATES).map((state)=>
            (<a key={state} className={filterState===FILTER_STATES[state]? `${filterDefaultClass} btn-primary`:filterDefaultClass} onClick={this.changeFilterByClick.bind(this,state)}>{state}</a>))

        return (
            <div className="filter-list">
                <span className="h4 filter">FILTER: </span>
                {
                    filterElements
                }
            </div>
        )
    }

    private changeFilterByClick=(state:FILTER_STATES):void=>{
        this.props.changeFilter(FILTER_STATES[state])
    }
}
