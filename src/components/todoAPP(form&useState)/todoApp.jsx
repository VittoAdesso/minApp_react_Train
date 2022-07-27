import React, {useState} from 'react';
import Todo from './todo';
import './todoApp.css';

const TodoApp = () => {

    const [title, setTitle] = useState(""); // single todo
    const [todos, setTodos] = useState([]);  // list of todos

    const handleChanged = (e) => {
        const value = e.target.value
        setTitle(value);
    };
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(), // generate random id 
            title: title,
            completed: false,
        };

        const temp = [...todos];  // copy the array
        temp.unshift(newTodo); // insert first an item or todo
        setTodos(temp);
        setTitle(""); // to have empty input
    }; 

    const handleUpdate = (id, value) => {
        const temp = [...todos]; // copy the array
        const item = temp.find((item) => item.id === id); //find unique
        item.title = value;
        setTodos(temp);
    }
    const handleDelete = (id) => {
        const todoDelete = todos.filter((item) => item.id !== id); 
        setTodos(todoDelete);
    }

    return (
        <div className="todoContainer">

        <h1>Let's do a list 👨‍💻📎💡</h1>
            <form onSubmit={handleSubmit} className="todoCreateForm" >

                <input onChange={handleChanged} 
                className="todoInput" value={title}/>
                {/* {title} */}
                <input 
                onClick={handleSubmit}
                type="submit"
                className="buttonCreate" 
                value="Create todo"/>
            </form>

            <div className="todosContainer">
                { 
                    todos.map((item, index) => (
                        <Todo 
                        key={index} 
                        item={item} 
                        onUpdate={handleUpdate} 
                        onDelete={handleDelete}>
                        </Todo> //item have a prop, onUpdate & ondelete
                    ))
                }
            </div>
        </div>
    );
}

export default TodoApp;
