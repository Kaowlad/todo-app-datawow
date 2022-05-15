import { useEffect, useMemo } from "react";
///internal
import { HeadContainer, TaskContainer } from "./styled";
import Filter from "../Filter";
import TaskItem from "../TaskItem";
import { useTodosStore } from "../../store";

const TaskLists = () => {
  const store = useTodosStore((state) => ({
    TaskType: state.type,
    todoLists: state.data,
    getTodos: state.getTodos,
  }));

  const filterList = useMemo(() => {
    switch (store.TaskType) {
      case "All":
        return store.todoLists;
      case "Done":
        return store.todoLists.filter((item) => item.completed === true);
      case "Undone":
        return store.todoLists.filter((item) => item.completed === false);
      default:
        return [];
    }
  }, [store]);

  useEffect(() => {
    store.getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeadContainer>
        <h2>Tasks</h2>
        <Filter />
      </HeadContainer>
      <TaskContainer>
        {filterList.map((todo) => (
          <TaskItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </TaskContainer>
    </>
  );
};

export default TaskLists;
