export type WorkState = {
    name: string,
    link: string,
    desc: string,
    photos: string[],
    mainImg: string,
    user: string,
    tools: string[],
}

export type ToolType = {
    _id: string,
    name: string,
    image: string,
    createdAt?: string,
    updatedAt?: string
}

export type FilesType = {
    name: string,
    file: File,
}

export type ToolsStateType = {
    name: string,
    image: string,
}

export type WorkType = {
    _id: string,
    type: string,
    name: string,
    mainImg: string,
    desc: string,
    rating: number,
    user: UserType,
    photos: string[],
    tools: ToolType[],
    comments: CommentType[],
    platform: string,
}

type CommentType = {
    _id: string,
    text: string,
    user: UserType,
    work: string,
}

type UserType = {
    _id: string,
    username: string,
    email: string,
    profileImg: string,
    isAdmin: boolean,
    isMember: boolean,
    country: string,
}

