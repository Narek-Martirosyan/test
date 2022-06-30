import { useSelector,useDispatch } from "react-redux";
import { changeSearchValue, searchValue } from "../../features/todo-app/todoAppSlice";
import TextField from '@mui/material/TextField';


export default function SearchTodo() {
    const dispatch = useDispatch();

    return(
        <>
            <TextField onChange={(e) => dispatch(changeSearchValue(e.target.value))}
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                focused
                sx={{
                    mr: 5
                }}
            />
        </>
    )
}