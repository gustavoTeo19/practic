const DocsController = require("../controllers/docsController");

const { Router } = require("express");

const routes = Router();

const docsController = new DocsController()

routes.get("/", (req, res) => {
    return docsController.getDocs(req, res);    
})

routes.post("/", (req, res) => {
  return docsController.create(req, res);    
})

routes.put("/:id", (req, res) => {
  return docsController.update(req, res);    
})

routes.delete("/:id", (req, res) => {
  return docsController.delete(req, res);    
})

routes.get("/:id", (req, res) => {
  return docsController.getById(req, res);    
})

module.exports = routes;
