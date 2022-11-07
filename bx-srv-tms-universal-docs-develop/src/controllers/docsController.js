const docModel = require('../models/docs')
const database = require('../database')

 class docsController {
    constructor(){
        this.model = docModel;
        database.sync().then(() => {})
    }
  
    async getDocs(req, res){
        try {
            console.log("akii")
            const doc = await this.model.findAll({ where: { isDelete: false }})
            return res.status(200).send({sucess:true , data: { doc: doc } });
        } catch(e){
            return res.status(500).send({sucess: false, data: "error"});
        }
    }

    async getById(req, res){
        try {
            const doc = await this.model.findOne({ where: { id: req.params.id }})
            return res.status(200).send({success: true, data: { doc:doc,}});  
        } catch(e){
            return res.status(500).send({sucess: false, data: { message:"Error", error: e }});
        }      
    }

    async create(req, res){
        try {
            const doc = await this.model.create(req.body);
            return res.status(200).send({sucess:true , data: { doc: doc } });
        } catch(e){
            return res.status(500).send({sucess: false, data: { message:"Error", error: e }});
        }        
    }

    async update(req, res){
        try {
            const doc = await this.model.update( req.body, { where: { id: req.params.id}});
            return res.status(200).send({doc: doc});
        } catch(e){
            return res.status(500).send({sucess: false,  data: { message:"Error", error: e }});
        }
    }

    async delete(req, res){
        try {
            const doc = await this.model.update({ isDelete: true }, { where: { id: req.params.id}});
            return res.status(200).send({sucess:true, data: { doc: doc}});
        } catch(e) {
            console.log(e)
            return res.status(500).send({sucess: false,  data: { message:"Error", error: e }});
        }
    }
}

module.exports = docsController;