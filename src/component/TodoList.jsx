
import {useSelector} from "react-redux";
import {TodoDeleteAlert} from "./TodoDeleteAlert";
import {TodoEditAlert} from "./TodoEditAlert";
import { useRef, useState } from "react";

const TodoList = () => {

    const todoItems=useSelector((state)=>state.todo.value);

    const [truee,setTrue] = useState(true);
    const mark = useRef();

    const todoComplete = ()=>{
        if(truee){
            mark.current.classList.add("lineDelete")
        }else{
            mark.current.classList.remove("lineDelete")
        }
        setTrue(!truee);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Complete</th>
                                <th>SL No</th>
                                <th>Todo Name</th>
                                <th>Edit Todo</th>
                                <th>Remove Todo</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            todoItems.map((item,i)=>{
                                return(
                                    <tr key={i.toString()}>
                                        <td><input onClick={todoComplete} type="checkbox" /></td>
                                        <td>{i}</td>
                                        <td ref={mark}>{item}</td>
                                        <td><button onClick={()=>TodoEditAlert(i,item)} className="btn btn-sm btn-dark">Edit</button></td>
                                        <td><button onClick={()=>{TodoDeleteAlert(i)}} className="btn btn-sm btn-danger">Remove</button></td>
                                    </tr>

                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;