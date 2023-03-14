const { Router } = require('express');
const { getAllTypes } = require('../controller/allType');

const types = Router();

types.get('/', async(req, res)=>{ 
    try {
        const type = await getAllTypes();
        res.status(200).json(type);
    } catch (error) {
        res.status(404).send({error:error.message});
    }
});



module.exports = types;