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
    link: string,
    name: string,
    status: string,
    mainImg: string,
    desc: string,
    rating: number,
    user: UserType,
    photos: string[],
    tools: ToolType[],
    comments: CommentType[],
    platform: string,
    updatedAt?: string,
    createdAt?: string,
}

type CommentType = {
    _id: string,
    text: string,
    user: UserType,
    work: string,
}

export type UserType = {
    _id?: string,
    username: string,
    email: string,
    profileImg: string,
    password?: string,
    isAdmin?: boolean,
    isMember?: boolean,

    country: string,
    isClient?: boolean,

}

export type ReviewStateType = {
    user: string,
    rating: number,
    text: string
}
export type ReviewType = {
    text: string,
    rating: number,
    user: UserType,
    _id: string,
    updatedAt: string,
    createdAt: string,

}