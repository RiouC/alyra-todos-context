import { v4 as uuidv4 } from "uuid";
import { useTodosDispatch } from "../context/TodosDispatchContext";

const AddTodoForm = () => {

    const dispatch = useTodosDispatch();
    const addTodo = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: uuidv4()
        };
        // setTodos([...todos, newTodo]);
        dispatch({type: "ADD", payload: newTodo});
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newTodoText = event.target.elements.todo.value;
        addTodo(newTodoText);
        event.target.reset();
    };
    return (
        <form onSubmit={handleFormSubmit}>
          <div className="input-group mb-2">
            <label className="input-group-text" htmlFor="todo">
              Ajouter une tâche
            </label>
            <input className="form-control" id="todo" required />
          </div>
          <button type="submit" className="btn btn-primary">
            allons-y !
          </button>
        </form>
    );
};

export default AddTodoForm;
