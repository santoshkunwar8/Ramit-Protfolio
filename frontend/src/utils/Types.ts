export type WorkState={
    name:string,
    link:string,
    desc:string,
    photos:string[],
    mainImg:string,
    user:string,
    tools:string[],
}

export type ToolType={
    _id:string,
    name:string,
    image:string,
    createdAt:string,
    updatedAt:string
}

export type FilesType={
    name:string,
    file:File,
}

export type ToolsStateType={
    name:string,
    image:string,
}