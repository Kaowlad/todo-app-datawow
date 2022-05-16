///internal
import { ProgressContainer, ProgressBar } from "./styled";
import { useTodosStore } from "../../store";

const Progress = () => {
  const store = useTodosStore((state) => ({
    taskDone: state.done,
    percentage: state.progress,
  }));

  return (
    <ProgressContainer>
      <h1>Progress</h1>
      <ProgressBar percentage={store.percentage} />
      <p>{store.taskDone} completed</p>
    </ProgressContainer>
  );
};

export default Progress;
