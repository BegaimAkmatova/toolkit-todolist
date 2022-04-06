import { useState } from "react";
import { useDispatch } from 'react-redux';
import { todoActions } from './../store/todoSlice';

const Todos = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const inputChangeHandler = (e) => {
        setInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(todoActions.todo({
            name: input,
            id:Math.random().toString()
        }))
        setInput('')
    }
    return (
        <form onSubmit={submitHandler}>
            <input onChange={inputChangeHandler} value={input}/>
            <button>Add todo</button>
        </form>
    )
}

export default Todos;