const DocsController = require("../controllers/groupsController");

const { Router } = require("express");

const routes = Router();

const groupsController = new DocsController()

routes.get("/", (req, res) => {
    return groupsController.getDocs(req, res);    
})

routes.post("/", (req, res) => {
  return groupsController.create(req, res);    
})

routes.put("/:id", (req, res) => {
  return groupsController.update(req, res);    
})

routes.delete("/:id", (req, res) => {
  return groupsController.delete(req, res);    
})

routes.get("/:id", (req, res) => {
  return groupsController.getById(req, res);    
})

module.exports = routes;
