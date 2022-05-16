import { AxiosPromise } from "axios"
///internal
import { TodoData } from "./store/state"

export interface UpdateParams {
    title?: string
    completed?: boolean
}

export type FetchTodos = () =>  AxiosPromise<TodoData[]>

export type AddTodo = (titile: string) => AxiosPromise<TodoData>

export type UpdateTodo = (id: string, params: UpdateParams) => AxiosPromise<TodoData>