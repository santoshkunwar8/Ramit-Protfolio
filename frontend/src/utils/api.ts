import { ToolsStateType, UserType, WorkState } from "./Types";
import { AxiosInstance } from "./axios";

// tool
export const getToolsApi = () => AxiosInstance.get("/tool");
export const createToolApi = (data: ToolsStateType) => AxiosInstance.post("/tool/create", data)




// project 
export const createProjectApi = (data: WorkState) => AxiosInstance.post("/work/create", data)


// user

type loginPayload = {
    email: string,
    password: string,
}

export const createUserApi = (data: UserType) => AxiosInstance.post("/user/create", data)
export const loginApi = (data: loginPayload) => AxiosInstance.post("/user/login", data)
