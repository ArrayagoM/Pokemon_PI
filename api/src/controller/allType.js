const { Type } = require('../db');


const getAllTypes = async () => {
    try {
      const types = await Type.findAll();
      return types;
    } catch (error) {
      return { error: error.message };
    }
  };



module.exports = {
    getAllTypes
};