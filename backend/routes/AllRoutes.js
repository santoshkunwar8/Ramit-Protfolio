module.exports = (app)=>{
    app.use("/api/user",require("./UserRoute"));
    app.use("/api/work",require("./WorkRoute"));
    app.use("/api/review",require("./ReviewRoute"));
    app.use("/api/comment",require("./CommentRoute"));
    app.use("/api/tool",require("./ToolsRoute"))
}