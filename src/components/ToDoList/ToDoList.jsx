import { ToDo } from "../ToDo";
import { ToDoFilters } from "../ToDoFilters"

const ToDoList = ({
    todos,
    handleSetComplete,
    handleDelete,
    handleClearComplete,
    activeFilter,
    showActiveTodos,
    showAllTodos,
    showCompletedTodos
}) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => {
                return (
                    <ToDo key={todo.id} todo={todo} handleSetComplete={handleSetComplete} handleDelete={handleDelete} />
                )
            })}
            <ToDoFilters
                activeFilter={activeFilter}
                total={todos.length}
                handleClearComplete={handleClearComplete}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
            />
        </div>
    )
}

export { ToDoList }