import React from "react";
import Todo from "./components/Todo";

const myTodoItems = [
    {
        id:1,
        title: 'I need to find something'
    },
    {
        id:2,
        title: 'I need to find something else'
    },

]


const App: React.FC = () => {
    return(
        <div>
            <Todo items={myTodoItems}/>
            <Todo items={myTodoItems}/>
        </div>
    )
}
export default App;