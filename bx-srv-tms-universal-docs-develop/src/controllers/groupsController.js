const groupModel = require('../models/groups')
const database = require('../database')

 class groupsController {
    constructor(){
        this.model = groupModel;
        database.sync().then(() => {})
    }
  
    async getDocs(req, res){
        try {
            const group = await this.model.findAll({ where: { isDelete: false }})
            return res.status(200).send({sucess:true , data: { group: group } });
        } catch(e){
            return res.status(500).send({sucess: false, data: "error"});
        }
    }

    async getById(req, res){
        try {
            const group = await this.model.findOne({ where: { id: req.params.id }})
            return res.status(200).send({success: true, data: { group:group,}});  
        } catch(e){
            return res.status(500).send({sucess: false, data: { message:"Error", error: e }});
        }      
    }

    async create(req, res){
        try {
            const group = await this.model.create(req.body);
            return res.status(200).send({sucess:true , data: { group: group } });
        } catch(e){
            return res.status(500).send({sucess: false, data: { message:"Error", error: e }});
        }        
    }

    async update(req, res){
        try {
            const group = await this.model.update( req.body, { where: { id: req.params.id}});
            return res.status(200).send({group: group});
        } catch(e){
            return res.status(500).send({sucess: false,  data: { message:"Error", error: e }});
        }
    }

    async delete(req, res){
        try {
            const group = await this.model.update({ isDelete: true }, { where: { id: req.params.id}});
            return res.status(200).send({sucess:true, data: { group: group}});
        } catch(e) {
            console.log(e)
            return res.status(500).send({sucess: false,  data: { message:"Error", error: e }});
        }
    }
}

module.exports = groupsController;