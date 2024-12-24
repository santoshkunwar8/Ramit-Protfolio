import {
  ReviewStateType,
  ToolsStateType,
  UserType,
  WorkState,
  commentPayload,
} from "./Types";
import { AxiosInstance } from "./axios";

// tool
type loginPayload = {
  email: string;
  password: string;
};
type resetPasswordType = {
  token: string;
  newPassword: string;
  email: string;
};
type confirmCodeType = {
  hash: string;
  code: string;
};
export const getToolsApi = () => AxiosInstance.get("/tool");
export const createToolApi = (data: ToolsStateType) =>
  AxiosInstance.post("/tool/create", data);

// project
export const createProjectApi = (data: WorkState) =>
  AxiosInstance.post("/work/create", data);
export const getAllProjectApi = () => AxiosInstance.get("/work");
export const getSingleProjectApi = (id: string) =>
  AxiosInstance.get(`/work?_id=${id}`);
export const commentOnProjectApi = (data: commentPayload) =>
  AxiosInstance.post(`/comment/create`, data);
export const getCommentOfProjectApi = (workId: string) =>
  AxiosInstance.get(`/comment/${workId}`);
export const rateProjectApi = (data: {
  user: string;
  work: string;
  rating: number;
}) => AxiosInstance.post(`/work/rating`, data);

// user

export const getClientsApi = () => AxiosInstance.get("/user/client");
export const getTestApi = async() => AxiosInstance.get("/check-session");
export const createUserApi = (data: UserType) =>
  AxiosInstance.post("/user/create", data);
export const loginApi = (data: loginPayload) =>
  AxiosInstance.post("/user/login", data);
export const becomeClientApi = (userId: string) =>
  AxiosInstance.post(`/user/becomeclient/${userId}`);
export const getLoggedInUserApi = () => AxiosInstance.get("/user/sessionUser");
export const getAdminInfoApi = () => AxiosInstance.get("/user/adminInfo");
export const logoutApi = () => AxiosInstance.post("/user/logout");
export const updateUserApi = (userId: string, data: any) =>
  AxiosInstance.put(`/user/${userId}`, data);

// reviews
export const createReviewsApi = (data: ReviewStateType) =>
  AxiosInstance.post("/review/create", data);
export const getAllReviewsApi = () => AxiosInstance.get("/review");

//auth

export const resetPasswordLinkApi = (email: string) =>
  AxiosInstance.post("/auth/sendResetLink", { email });
export const resetPasswordApi = (data: resetPasswordType) =>
  AxiosInstance.post("/auth/resetPassword", data);
export const verifyResetCodeApi = (code: number) =>
  AxiosInstance.post("/auth/verifyResetCode", { code });
export const checkIfTokenIsValidApi = (token: string) =>
  AxiosInstance.post(`/auth/tokenvalid/${token}`);

export const confirmCodeApi = (data: confirmCodeType) =>
  AxiosInstance.post("/auth/confirmCode", data);
