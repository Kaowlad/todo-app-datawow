export interface TodoData {
    id: string
    title: string
    completed: boolean
}

export type TaskType = "All" | 'Done' | "Undone"

export interface TodoState {
    data: TodoData[]
    type: TaskType
    progress: number
    done: number
}