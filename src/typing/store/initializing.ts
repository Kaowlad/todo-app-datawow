///internal
import { TodoState } from "./state";
import { TaskType } from "./state";

export interface TodoStore extends TodoState {
    getTodos: () => void
    setType: (type: TaskType) => void
    addTodo: (title: string) => void
}