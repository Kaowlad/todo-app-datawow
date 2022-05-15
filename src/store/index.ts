import create from "zustand";
import produce from "immer";
///internal
import { TodoStore } from "../typing/store/initializing";
import { TodoState } from "../typing/store/state";
import * as TodosService from "../service";

const state: TodoState = {
  data: [],
  type: "All",
};

export const useTodosStore = create<TodoStore>((set, get) => ({
  ...state,
  getTodos: async () => {
    try {
      const { status, data } = await TodosService.fetchTodos();
      if (status === 200) {
        set(
          produce<TodoState>((state) => {
            state.data = data;
          })
        );
      }
    } catch (error) {
      alert(error);
    }
  },
  setType: (type) => {
    set(
      produce<TodoState>((state) => {
        state.type = type;
      })
    );
  },
}));
