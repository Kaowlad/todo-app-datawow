import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useMemo, useCallback } from "react";
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

  const checkCurrentType = useCallback(
    (type: string) => {
      if (store.TaskType === type) {
        return true;
      } else {
        return false;
      }
    },
    [store.TaskType]
  );

  const isAll = useMemo(() => {
    return checkCurrentType("All");
  }, [checkCurrentType]);

  const isDone = useMemo(() => {
    return checkCurrentType("Done");
  }, [checkCurrentType]);

  const isUndone = useMemo(() => {
    return checkCurrentType("Undone");
  }, [checkCurrentType]);

  return (
    <SelectContainer
      className={isActive ? "active" : ""}
      onClick={onActiveMenu}
    >
      <p>{store.TaskType}</p>
      <MdKeyboardArrowDown />
      {isActive && <Backdrop />}
      <MenuContainer isActive={isActive}>
        <MenuItem
          current={isAll}
          onClick={store.setFilterType.bind(this, "All")}
        >
          All
        </MenuItem>
        <MenuItem
          current={isDone}
          onClick={store.setFilterType.bind(this, "Done")}
        >
          Done
        </MenuItem>
        <MenuItem
          current={isUndone}
          onClick={store.setFilterType.bind(this, "Undone")}
        >
          Undone
        </MenuItem>
      </MenuContainer>
    </SelectContainer>
  );
};

export default Filter;
