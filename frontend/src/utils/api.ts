import { ReviewStateType, ToolsStateType, UserType, WorkState, commentPayload } from "./Types";
import { AxiosInstance } from "./axios";

// tool
export const getToolsApi = () => AxiosInstance.get("/tool");
export const createToolApi = (data: ToolsStateType) => AxiosInstance.post("/tool/create", data)




// project 
export const createProjectApi = (data: WorkState) => AxiosInstance.post("/work/create", data)
export const getAllProjectApi = () => AxiosInstance.get("/work");
export const getSingleProjectApi = (id: string) => AxiosInstance.get(`/work?_id=${id}`)
export const commentOnProjectApi = (data: commentPayload) => AxiosInstance.post(`/comment/create`, data)
export const getCommentOfProjectApi = (workId: string) => AxiosInstance.get(`/comment/${workId}`)


// user

type loginPayload = {
    email: string,
    password: string,
}
export const getClientsApi = () => AxiosInstance.get("/user/client")
export const createUserApi = (data: UserType) => AxiosInstance.post("/user/create", data)
export const loginApi = (data: loginPayload) => AxiosInstance.post("/user/login", data)
export const becomeClientApi = (userId: string) => AxiosInstance.post(`/user/becomeclient/${userId}`);
export const getLoggedInUserApi = () => AxiosInstance.get("/user/sessionUser");
export const getAdminInfoApi = () => AxiosInstance.get("/user/adminInfo")

// reviews
export const createReviewsApi = (data: ReviewStateType) => AxiosInstance.post("/review/create", data)
export const getAllReviewsApi = () => AxiosInstance.get("/review")




