import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { initialTodo, checkboxChecked } from '../../features/todo-app/todoAppSlice';

export default function CheckboxInput({index}) {
    const list = useSelector(initialTodo);
    const dispatch = useDispatch();

    return(
        <Checkbox checked={list[index].completed} 
        onClick={(e) => dispatch(checkboxChecked([index, e.target.checked]))}/>
    )
}