import {  ToolsStateType, WorkState } from "./Types";
import { AxiosInstance } from "./axios";

// tool
export const getToolsApi=()=>AxiosInstance.get("/tool");
export const createToolApi=(data:ToolsStateType)=>AxiosInstance.post("/tool/create",data)




// project 
export const createProjectApi=(data:WorkState)=>AxiosInstance.post("/work/create",data) 


