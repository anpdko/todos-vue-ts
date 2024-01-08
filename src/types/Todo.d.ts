
export interface ITodo {
   id: number,
   text: string,
   completed: boolean
}

export interface IStats {
   active: number,
   done: number
}

export type TActiveFilter = "All" | "Active" | "Done"