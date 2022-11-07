const { Router } = require("express");
const docsController = require("./docs.routes");
const groupsController = require("./groups.routes");
const templatesController = require("./templates.routes");

const app = Router();


app.get("/api/tms/v1/docs/health/liveness", function (req, res) {
    var data = {
      status: 1,
      message: "Its Alive!",
    };
    return res.status(200).json(data);
})
app.get("/api/tms/v1/docs/health/readiness", function (req, res) {
    var data = {
      status: 1,
      message: "Ready",
    };
    return res.status(200).json(data);
})
app.use("/api/tms/v1/docs/groups", groupsController);
app.use("/api/tms/v1/docs/templates", templatesController);
app.use("/api/tms/v1/docs", docsController);

module.exports = app;