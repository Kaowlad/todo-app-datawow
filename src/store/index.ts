import create from "zustand";
import produce from "immer";
///internal
import { TodoStore } from "../typing/store/initializing";
import { TodoState } from "../typing/store/state";
import * as TodosService from "../service";

const state: TodoState = {
  data: [],
  type: "All",
  progress: 0,
  done: 0
};

export const useTodosStore = create<TodoStore>((set, get) => ({
  ...state,
  getTodos: async () => {
    try {
      const { status, data } = await TodosService.fetchTodos();
      if (status === 200) {
        const completed = data.filter((todo) => todo.completed === true).length
        const progress = (completed / data.length) * 100
        const TwoDecimal = Math.round(progress * 100) / 100
        set(
          produce<TodoState>((state) => {
            state.data = data;
            state.progress = TwoDecimal
            state.done = completed
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
  addTodo: async (title) => {
    try {
      const { status } = await TodosService.addTodo(title);
      if (status === 201) {
        get().getTodos();
      }
    } catch (error) {
      alert(error);
    }
  },
  updateTodo: async (id, params) => {
    try {
      const { status } = await TodosService.updateTodo(id, params);
      if (status === 200) {
        get().getTodos();
      }
    } catch (error) {
      alert(error);
    }
  },
  deleteTodo: async (id) => {
    try {
      const { status } = await TodosService.deleteTodo(id);
      if (status === 200) {
        get().getTodos();
      }
    } catch (error) {
      alert(error);
    }
  },
}));
