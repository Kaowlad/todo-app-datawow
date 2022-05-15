import { AxiosPromise } from "axios"
///internal
import { TodoData } from "./store/state"

export type FetchTodos = () =>  AxiosPromise<TodoData[]>