import mongoose from 'mongoose';
/**
 * схема и функции работы с часами (товаром)
 */

const watchSchema = new mongoose.Schema({
    nameWatch: { 
        type: String, 
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
    imageUrl: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: 'Price must be an Number.'
        }
    },
    countryMade: String,
    gender: String, 
    caseColor: String,
    mechanism: String,
    material: String,
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
