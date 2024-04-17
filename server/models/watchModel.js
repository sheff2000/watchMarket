import mongoose from 'mongoose';
import generateTranslit from '../utilits/translit.js';
/**
 * схема и функции работы с часами (товаром)
 */

const watchSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
    },
    translit: {
        type: String,
        required: true,
        unique: true,
    },
    instock: {
        type: Boolean,
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
    imageUrl: [String],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
    },
    collection: String,
    countryMade: String,
    forMan: String, 
    color: String,
    manual: String,
    material: String,
});

watchSchema.pre('save', function(next) {
    if (this.isModified('name')) {
        this.translit = generateTranslit(this.name);
    }
    next();
});

const watchModel = mongoose.model('Watch', watchSchema);

// create new 
const addWatch = async (data) => {
    const watch = new watchModel(data);
    return await watch.save();
};
// get all  list
const getAllWatch = async () => {
    return await watchModel.find();
};
// get one  by id
const getWatchById = async (id) => {
    return await watchModel.findById(id);
};

// update info
const updateWatch = async (id, data) => {
    return await watchModel.findByIdAndUpdate(id, data, { new: true });
};

// delete 
const deleteWatch = async (id) => {
    return await watchModelModel.findByIdAndDelete(id);
};

const Watch = {
    addWatch,
    getAllWatch,
    getWatchById,
    updateWatch,
    deleteWatch,
};

export default Watch;
