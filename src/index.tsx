import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer, Provider} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import TodoContainer from "./containers/TodoContainer";
import TodoStore from "./stores/TodoStore";
import {TodoModel} from "./models/TodoModel";


const todoStore=new TodoStore();

class RootView extends React.Component {
    render() {
        return (
            <Provider todoStore={todoStore}>
                    <TodoContainer/>
            </Provider>
        );
     }
};

ReactDOM.render(<RootView />, document.getElementById('root'));
