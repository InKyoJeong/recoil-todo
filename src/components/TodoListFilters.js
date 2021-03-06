import React from "react";
import { useRecoilState } from "recoil";
import todoListFilterState from "../states/todoListFilterState";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">모두</option>
        <option value="Show Completed">완료</option>
        <option value="Show Uncompleted">아직</option>
      </select>
    </>
  );
}

export default TodoListFilters;
