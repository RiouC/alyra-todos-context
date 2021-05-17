import { useTodosDispatch } from "../context/TodosDispatchContext";

const Todo = (props) => {
    const { todo } = props;
    const dispatch = useTodosDispatch();
    const style = {
        textDecoration: todo.isCompleted ? "line-through" : "none"
    };



    const deleteTodo = (task) => {
        dispatch({type: "DELETE", payload: task});
    };

    const toggleCompleteTodo = (task) => {
        dispatch({type: "TOGGLE", payload: task});
    };


    return (
        <div className="shadow-sm border p-2 d-flex align-items-center justify-content-between mb-2">
          <span style={style}>{todo.text}</span>
          <div className="btn-group">
            {todo.isCompleted ? (
                <button
                  className="btn btn-light btn-sm btn-dark"
                  type="button"
                  onClick={() => toggleCompleteTodo(todo)}
                >
                  Rétablir
                </button>
            ) : (
                <button
                  className="btn btn-light btn-sm"
                  type="button"
                  onClick={() => toggleCompleteTodo(todo)}
                >
                  Terminer
                </button>
            )}
            <button
              className="btn btn-danger btn-sm"
              type="button"
              onClick={() => deleteTodo(todo)}
            >
              Supprimer
            </button>
          </div>
        </div>
    );
};

export default Todo;
