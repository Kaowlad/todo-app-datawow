import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
///internal
import Backdrop from "../Backdrop";
import {
  Container,
  Checkbox,
  EditContainer,
  EditItem,
  Input,
  Button,
} from "./styled";

const TaskItem = () => {
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
          <Input onBlur={onBlurInput} autoFocus />
          <Button>Save</Button>
        </>
      ) : (
        <>
          <Checkbox />
          <p>TaskItem</p>
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
