import axios from "axios";
///internal
import { FetchTodos, AddTodo, UpdateTodo, DeleteTodo } from "../typing/service";
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

export const updateTodo: UpdateTodo = (id, params) => {
  return axios({
    url: endpoint(`/todos/${id}`),
    method: "PATCH",
    data: {
      title: params.title || undefined,
      completed: params.completed
    }
  })
}

export const deleteTodo: DeleteTodo= (id) => {
  return axios({
    url: endpoint(`/todos/${id}`),
    method: "DELETE",
  })
}
