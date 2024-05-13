const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petitionSchema = new Schema(
    {
        petitionNumber: {type: Number, require: true},
        datePetition: { type: Date, default: Date.now },
        requester: {type: String, require: true},
        headRequester: {type: String},
        contact: {type: String, require: true},
        contactEmail: {type: String, require: true},
        petitionDepartment: {type: String, require: true},
        invoiceDepartment: {type: String, require: true},
        projectInvoice: {type: String, require: true},
        petitionName: {type: String, require: true},
        petitionDescription: {type: String, require: true},
        adtService: {type: String, require: true, enum: ['automations', 'dataOffice', 'digitalEngineering', 'digitalLaboratory', 'digitalProducts']},
        petitionLeader:{type: String, require: true},
        requiredProfile1: {type: String, enum: ['audiovisualTechnician', 'bimModeller', 'bimDeveloper', 'dynamoCivil3d', 'dynamoRevit', 'dataBaseDeveloper', 'fullStackDeveloper', 'dataAnalyst', 'manager']},
        requiredProfile2: {type: String, enum: ['audiovisualTechnician', 'bimModeller', 'bimDeveloper', 'dynamoCivil3d', 'dynamoRevit', 'dataBaseDeveloper', 'fullStackDeveloper', 'dataAnalyst', 'manager']},
        requiredProfile3: {type: String, enum: ['audiovisualTechnician', 'bimModeller', 'bimDeveloper', 'dynamoCivil3d', 'dynamoRevit', 'dataBaseDeveloper', 'fullStackDeveloper', 'dataAnalyst', 'manager']},
        petitionPhase: {type: String, require: true, enum: ['accepted', 'rejected', 'evaluated']},
        petitionStatus: {type: String, require: true, enum: ['standby', 'inProgess', 'finished']}
    },
    {
        collection: 'petition',
    }
);
const Petition = mongoose.model('petition', petitionSchema);
module.exports= Petition;