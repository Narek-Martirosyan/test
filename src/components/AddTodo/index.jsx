import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { addTodo } from '../../features/todo-app/todoAppSlice';
import { useDispatch } from 'react-redux';

export default function AddTodo() {
    const dispatch = useDispatch();
    return(
        <Box component={'form'} onSubmit={(e) => {
            e.preventDefault();
            if(e.target[0].value.trim()) {
                dispatch(addTodo(e.target[0].value))
            }
            e.target[0].value = '';
        }} sx={{
            display: 'flex',
            alignItems: 'center'
        }} >
            <TextField
                label="Add to do"
                variant="standard"
                focused
            />
            <IconButton type='submit' sx={{
                '&:active': {
                    color: 'green'
                }
            }}>
                <AddIcon />
            </IconButton>
        </Box>
    )
}