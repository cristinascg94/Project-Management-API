const Petition = require('../models/petition.model');

const newPetition = async (req, res) => {
try {
    const newPetition = new Petition(req.body);
    const findPetition = await Petition.find({ petitionName: req.body.petitionName });
    console.log(findPetition);
    if (findPetition.length !== 0) {
        return res.json({message:'This petition has already been registered'})
    }
    const createdPetition = await newPetition.save();
    return res.status(200).json(createdPetition);
} catch (error) {
    console.log(error);
    return res.status(500).json(error)
}
};

const modifyPetition = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
module.exports = {newPetition, modifyPetition};