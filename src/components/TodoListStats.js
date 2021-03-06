import { useRecoilValue } from "recoil";
import todoListStatsState from "../states/todoListStatsState";

function TodoListStats() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>모든 투두: {totalNum}</li>
      <li>완료: {totalCompletedNum}</li>
      <li>미완료: {totalUncompletedNum}</li>
      <li>비율: {formattedPercentCompleted}</li>
    </ul>
  );
}

export default TodoListStats;
