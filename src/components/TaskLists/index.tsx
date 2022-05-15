///internal
import { HeadContainer, TaskContainer } from "./styled";
import Filter from "../Filter";
import TaskItem from "../TaskItem";

const TaskLists = () => {
  return (
    <>
      <HeadContainer>
        <h2>Tasks</h2>
        <Filter />
      </HeadContainer>
      <TaskContainer>
        <TaskItem />
      </TaskContainer>
    </>
  );
};

export default TaskLists;
