import axios from "axios";
///internal
import { FetchTodos, AddTodo } from "../typing/service";
import { endpoint } from "../utils/service";

export const fetchTodos: FetchTodos = () => {
  return axios({
    url: endpoint("/todos"),
    method: "GET",
  });
};

export const addTodo: AddTodo = (title) => {
  return axios({
    url: endpoint("/todos"),
    method: "POST",
    data: {
      title: title,
      completed: false,
    },
  });
};
