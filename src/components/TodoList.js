
import { useDispatch } from 'react-redux';
import { todoActions } from './../store/todoSlice';

const TodoList = (props) => {
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(todoActions.delete({id:id}))
    }

    return (
        <ul>
            {props.list.map(todo => (
                <li key={todo.id}>{todo.name}
                    <button onClick={() => {deleteHandler(todo.id)}}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList;