import React, { useState }from 'react';


const Todo = ({item, onUpdate, onDelete}) => { // paso props para que todoAPP lea

    const [isEdit, setisEdit] = useState(false);

    const FormEdit = () => {

        const [newValue, setNewValue] = useState(item.title)
        const handleSubmit = (e) => {
            e.preventDefault();
        }
        const handleChanged = (e) => {
            const value = e.target.value; 
            setNewValue(value);
        }

        const handleClickUpdateTodo = () => {
            onUpdate(item.id, newValue); //funtion
            setisEdit(false);
        }
        return (
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="text" className="todoInput" onChange={handleChanged} value={newValue}/>
                <button className="buttonUpdate" onClick={handleClickUpdateTodo}>Update</button>
            </form>
        );
    }
    const TodoElement = () => {
        return (
            <div className="todoInfo">
            { item.title }
            <button onClick={() => setisEdit(true)}
            className="button">Edit</button>
            <button className="buttonDelete"
            onClick={ (e) => onDelete(item.id) } >Delete</button>
            </div>
        );
    }

    return (
        <div className="todo">
        {isEdit ? <FormEdit></FormEdit> : 
            <TodoElement></TodoElement>
        }
        </div>
    );
}

export default Todo;
