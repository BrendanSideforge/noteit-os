
export type UserNote = {
    id: number,
    userId: string,
    title: string,
    tags: string[],
    description: string,
    hidden: boolean,
    createdAt: Date
}
