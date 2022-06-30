import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { editTodo, deleteTodo, initialTodo } from '../../features/todo-app/todoAppSlice';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'

export default function EditDelete({index}) {
    const dispatch = useDispatch();
    const list = useSelector(initialTodo);

    function edittodo() {
        Swal.fire({
            title: 'Enter editing text',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            inputValue: list[index].title,
            showCancelButton: true,
            confirmButtonText: 'Save',
          }).then((result) => {
            if (result.isConfirmed && result.value) {
                dispatch(editTodo([index, result.value]))
              Swal.fire({
                title: 'Happy Hacking'
              })
            }
          })
    }

    function deletetodo() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {         
                dispatch(deleteTodo(index))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    return(
        <Stack direction={'row'} spacing={1}>
            <IconButton onClick={edittodo} sx={{
              '&:active': {
                color: 'red'
              } 
            }}>
                <EditIcon />
            </IconButton>
            <IconButton onClick={deletetodo} sx={{
              '&:active': {
                color: 'red'
              } 
            }}>
                <DeleteForeverIcon />
            </IconButton>
        </Stack>
    )
}