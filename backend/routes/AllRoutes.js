module.exports = (app)=>{
    app.use("/api/user",require("./UserRoute"));
    // app.use("/api/work",require("./WorkRoute"));
    app.use("/api/review",require("./ReviewRoute"))
}