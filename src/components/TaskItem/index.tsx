import { BsThreeDots } from "react-icons/bs";
import { FC, useState } from "react";
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

const TaskItem: FC<TodoData> = (props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);

  const toggleEditModal = () => {
    setEditModal((oldValue) => !oldValue);
  };

  const onEdit = () => {
    setIsEdit(true);
    toggleEditModal();
  };

  const onBlurInput = () => {
    setIsEdit(false);
  };

  return (
    <Container>
      {isEdit ? (
        <>
          <Input defaultValue={props.title} onBlur={onBlurInput} autoFocus />
          <Button>Save</Button>
        </>
      ) : (
        <>
          <Checkbox checked={props.completed} />
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
