const MODEL = require('../models');

exports.create = async (req, res) => {
    //get data from request
    const body = req.body;
    //validate data
    if (!body.name || body.code) {
        return res.status(400).json({ message: 'Invalid data' });
    }
    //create new role
    try {
        const saveNewRole = await new MODEL.roles(body).save();
        return res.status(201).send(saveNewRole);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating role' });
    }
}