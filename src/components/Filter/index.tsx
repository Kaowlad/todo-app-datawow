import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
///internal
import Backdrop from "../Backdrop";
import { SelectContainer, MenuContainer, MenuItem } from "./styled";
import { useTodosStore } from "../../store";

const Filter = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const store = useTodosStore((state) => ({
    setFilterType: state.setType,
    TaskType: state.type,
  }));

  const onActiveMenu = () => {
    setIsActive((oldValue) => !oldValue);
  };

  return (
    <SelectContainer
      className={isActive ? "active" : ""}
      onClick={onActiveMenu}
    >
      <p>{store.TaskType}</p>
      <MdKeyboardArrowDown />
      {isActive && <Backdrop />}
      <MenuContainer isActive={isActive}>
        <MenuItem onClick={store.setFilterType.bind(this, "All")}>All</MenuItem>
        <MenuItem onClick={store.setFilterType.bind(this, "Done")}>
          Done
        </MenuItem>
        <MenuItem onClick={store.setFilterType.bind(this, "Undone")}>
          Undone
        </MenuItem>
      </MenuContainer>
    </SelectContainer>
  );
};

export default Filter;
