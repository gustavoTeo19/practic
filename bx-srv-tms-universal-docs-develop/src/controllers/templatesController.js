const templateModel = require("../models/templates");
const database = require("../database");

class templatesController {
  constructor() {
    this.model = templateModel;
    database.sync().then(() => {});
  }

  async getTemplates(req, res) {
    try {
        console.log("passouuu")
     // this.model.Template.belongsTo(this.model.TemplateDocument.getInstance().getModel(), {"foreignKey": "template_document_id", "as": "docs"});
     // const template = await this.model.Template.findAll({ where: { isDelete: false },include: [this.model.Template.associations.docs] });
      return res
        .status(200)
        .send({ sucess: true, data: { template: template } });
    } catch (e) {
      return res.status(500).send({ sucess: false, data: "error" });
    }
  }

  async getById(req, res) {
    try {
      const template = await this.model.Template.findOne({
        where: { id: req.params.id },
      });
      return res
        .status(200)
        .send({ success: true, data: { template: template } });
    } catch (e) {
      return res
        .status(500)
        .send({ sucess: false, data: { message: "Error", error: e } });
    }
  }

  async create(req, res) {
    const t = await database.transaction();

    try {
      const temp = await this.model.Template.create(req.body.template, {
        transaction: t,
      });

      const docs = req.body.documents;

      const DocsArr = docs.map((item) => {
        (item.templateDocumentId = temp.id),
          (item.tenantId = 1),
          (item.idUserCreate = 1),
          (item.idUserUpdate = 1);
        return item;
      });

      await this.model.TemplateDocument.bulkCreate(DocsArr, { transaction: t });

      await t.commit();

      return res.status(200).send({ sucess: true, data: { template: temp } });
    } catch (error) {
      await t.rollback();
      return res
        .status(500)
        .send({ sucess: false, data: { message: "Error", error: error } });
    }
  }

  async update(req, res) {
    const t = await database.transaction();

    try {
      const temp = await this.model.Template.update(req.body.template, {
        transaction: t,
        where: { id: req.params.id },
      });

      const docs = req.body.documents;

      for (var i = 0; i < docs.length; i++) {
        if (!docs[i].id) {
          await this.model.TemplateDocument.create(
            {
              tenantId: 1,
              templateDocumentId: req.params.id,
              documentId: docs[i].documentId,
              idUserCreate: 1,
              idUserUpdate: 1,
            },
            { transaction: t }
          );
        } else {
          await this.model.TemplateDocument.update(
            {
              idUserUpdate: 1,
              isDelete: docs[i].isDelete,
            },
            { transaction: t, where: { id: docs[i].id } }
          );
        }
      }

      await t.commit();

      return res.status(200).send({ sucess: true, data: { template: temp } });
    } catch (error) {
      await t.rollback();
      return res
        .status(500)
        .send({ sucess: false, data: { message: "Error", error: error } });
    }
  }

  async delete(req, res) {
    try {
      const template = await this.model.Template.update(
        { isDelete: true },
        { where: { id: req.params.id } }
      );
      const templateDoc = await this.model.TemplateDocument.update(
        { isDelete: true },
        { where: { templateDocumentId: req.params.id } }
      );

      return res
        .status(200)
        .send({ sucess: true, data: { template: template } });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .send({ sucess: false, data: { message: "Error", error: e } });
    }
  }
}

module.exports = templatesController;
