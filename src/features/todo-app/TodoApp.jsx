import './style.scss';
import { initialTodo, searchHandler } from "./todoAppSlice";
import { useSelector } from "react-redux";
import Checkbox from '../../components/Checkbox';
import EditDelete from '../../components/EditDelete';
import AddTodo from '../../components/AddTodo';
import Counter from '../../components/Counter';
import SearchTodo from '../../components/SearchTodo';

export default function TodoApp() {
    const list = useSelector(searchHandler);

    return(
        <div className='todo-app'>
            <div style={{display: 'flex'}}>
                <SearchTodo />
                <AddTodo />
            </div>
            {list.map((item, index) => {
                return(
                    <div key={item.title + '-' + index} className='todo-app-item'>
                        <div className='check-title'>
                            <Checkbox index={index}/>
                            <span>{item.completed ? <del>{item.title}</del> : item.title}</span>
                        </div>
                        <EditDelete index={index} />
                    </div>
                )
            })}
            <Counter />
        </div>
    )
}