import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
///internal
import Backdrop from "../Backdrop";
import { SelectContainer, MenuContainer, MenuItem } from "./styled";

const Filter = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onActiveMenu = () => {
    setIsActive((oldValue) => !oldValue);
  };

  return (
    <SelectContainer
      className={isActive ? "active" : ""}
      onClick={onActiveMenu}
    >
      <p>All</p>
      <MdKeyboardArrowDown />
      {isActive && <Backdrop />}
      <MenuContainer isActive={isActive}>
        <MenuItem>All</MenuItem>
        <MenuItem>Done</MenuItem>
        <MenuItem>Undone</MenuItem>
      </MenuContainer>
    </SelectContainer>
  );
};

export default Filter;
