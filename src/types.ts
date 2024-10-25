export type Todo = {
    text: string,
    status: Status,
    id: string
}

export type Status = 'active' | 'completed'

export type List = 'All' | 'Active' | 'Completed'