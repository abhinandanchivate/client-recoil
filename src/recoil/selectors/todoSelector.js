import { selector } from "recoil";
import { todoListState, filterState } from "../atoms/todoState";
import { SHOW_COMPLETED, SHOW_UNCOMPLETED } from "../types";

export const filteredTodoListSelector = selector({
  key: "filteredTodoListSelector",
  get: ({ get }) => {
    const filter = get(filterState);
    const list = get(todoListState);

    switch (filter) {
      case SHOW_COMPLETED:
        return list.filter((e) => e.isComplete);
      case SHOW_UNCOMPLETED:
        return list.filter((e) => !e.isComplete);
      default:
        return list;
    }
  },
});
