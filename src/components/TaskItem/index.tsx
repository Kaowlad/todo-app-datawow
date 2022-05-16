import { BsThreeDots } from "react-icons/bs";
import React, { FC, useState } from "react";
///internal
import { TodoData } from "../../typing/store/state";
import Backdrop from "../Backdrop";
import {
  Container,
  Checkbox,
  EditContainer,
  EditItem,
  Input,
  Button,
  Title,
} from "./styled";
import { useTodosStore } from "../../store";

const TaskItem: FC<TodoData> = (props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [todo, setTodo] = useState<string>(props.title);
  const updateTodo = useTodosStore((state) => state.updateTodo);

  const toggleEditModal = () => {
    setEditModal((oldValue) => !oldValue);
  };

  const onEdit = () => {
    setIsEdit(true);
    toggleEditModal();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTodo(value);
  };

  const onCheckbox = () => {
    updateTodo(props.id, { completed: !props.completed });
  };

  const onSave = () => {
    if (!todo) return;
    updateTodo(props.id, { title: todo });
    setIsEdit(false);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (key === "Enter") {
      onSave();
    }
  };

  return (
    <Container>
      {isEdit ? (
        <>
          <Input
            defaultValue={props.title}
            onChange={onChange}
            onKeyDown={onEnter}
            autoFocus
          />
          <Button onClick={onSave}>Save</Button>
        </>
      ) : (
        <>
          <Checkbox defaultChecked={props.completed} onChange={onCheckbox} />
          <Title isDone={props.completed}>{props.title}</Title>
          <BsThreeDots onClick={toggleEditModal} />
          {editModal && <Backdrop onClick={toggleEditModal} />}
          <EditContainer isActive={editModal}>
            <EditItem onClick={onEdit}>Edit</EditItem>
            <EditItem isRed>Delete</EditItem>
          </EditContainer>
        </>
      )}
    </Container>
  );
};

export default TaskItem;
