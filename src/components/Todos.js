import { useEffect, useState, useReducer } from "react";
import TodosList from "./TodosList";
import AddTodoForm from "./AddTodoForm";
import { v4 as uuidv4 } from "uuid";
import { todosReducer } from "../reducers/todosReducer";
import { TodosDispatchContext } from "../context/TodosDispatchContext";

const initialTodos = [
    {
        text: "Forkez et cloner ce repo",
        isCompleted: true,
        id: "1b688c51-e990-4ce3-95a5-9018cf81d23d"
    },
    {
        text: "Refactor todos avec useReducer",
        isCompleted: false,
        id: "efc6331d-7ca2-49a6-b014-378b8280b33d"
    },
    {
        text: "Add dispatch to Context",
        isCompleted: false,
        id: "9e60d353-cd72-40bb-97e6-5841e51635c0"
    },
    {
        text: "Add Color Mode Context",
        isCompleted: false,
        id: "df0ce18c-b4fa-4651-82c0-72fad6b486e4"
    }
];

const Todos = () => {
    const [state, dispatch] = useReducer(
        todosReducer,
        initialTodos,
        (initialTodos) => {
            return JSON.parse(window.localStorage.getItem("my-new-todos")) || initialTodos;
        });
    // const [todos, setTodos] = useState(() => {
    //     return (
    //         JSON.parse(window.localStorage.getItem("my-new-todos")) || initialTodos
    //     );
    // });

    useEffect(() => {
        window.localStorage.setItem("my-new-todos", JSON.stringify(state));
    }, [state]);

    const addTodo = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: uuidv4()
        };
        // setTodos([...todos, newTodo]);
        dispatch({type: "ADD", payload: newTodo});
    };

    const deleteTodo = (task) => {
        // setTodos(todos.filter((el) => el.id !== task.id));
        dispatch({type: "DELETE", payload: task});
    };

    const toggleCompleteTodo = (task) => {
        // setTodos(
        //     todos.map((el) => {
        //         if (el.id === task.id) {
        //             return {
        //                 ...el,
        //                 isCompleted: !el.isCompleted
        //             };
        //         }
        //         return el;
        //     })
        // );
        dispatch({type: "TOGGLE", payload: task});
    };

    return (
        <main>
          <h2 className="text-center">Ma liste de tâches ({state.length})</h2>
          <TodosDispatchContext.Provider value={dispatch} >
            <TodosList todos={state}/>
            <AddTodoForm />
          </TodosDispatchContext.Provider>
        </main>
    );
};

export default Todos;
