///internal
import { TodoState } from "./state";
import { TaskType } from "./state";
import { UpdateParams } from "../service";

export interface TodoStore extends TodoState {
    getTodos: () => void
    setType: (type: TaskType) => void
    addTodo: (title: string) => void
    updateTodo: (id: string, params: UpdateParams) => void
}