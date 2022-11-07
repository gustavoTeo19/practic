const TemplatesController = require("../controllers/templatesController");

const { Router } = require("express");

const routes = Router();

const templatesController = new TemplatesController()

routes.get("/", (req, res) => {
    return templatesController.getTemplates(req, res);    
})

routes.post("/", (req, res) => {
  return templatesController.create(req, res);    
})

routes.put("/:id", (req, res) => {
  return templatesController.update(req, res);    
})

routes.delete("/:id", (req, res) => {
  return templatesController.delete(req, res);    
})

routes.get("/:id", (req, res) => {
  return templatesController.getById(req, res);    
})

module.exports = routes;
