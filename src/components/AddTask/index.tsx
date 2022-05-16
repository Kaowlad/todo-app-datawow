import React from "react";
///internal
import { Container, Input } from "../TaskItem/styled";
import { useTodosStore } from "../../store";

const AddTask = () => {
  const [todo, setTodo] = React.useState<string>("");
  const addTodo = useTodosStore((state) => state.addTodo);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTodo(value);
  };
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (key === "Enter" && todo) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <Container>
      <Input
        value={todo}
        placeholder="Add your todo..."
        onChange={onChange}
        onKeyDown={onEnter}
      />
    </Container>
  );
};

export default AddTask;
