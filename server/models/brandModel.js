import mongoose from 'mongoose';
import generateTranslit from '../utilits/translit.js';
/**
 * схема и функции работы с Брендами для часов
 */

const brandSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
    },
    translit: {
        type: String,
        require: true,
        unique: true,
    },
    imageUrl: String,
});

brandSchema.pre('save', function(next) {
    if (this.isModified('name')) {
        this.translit = toTranslit(this.name);
    }
    next();
});

const brandModel = mongoose.model('Brand', brandSchema);

// create new 
const addBrand = async (data) => {
    const brand = new brandModel(data);
    return await brand.save();
};
// get all  list
const getAllBrand = async () => {
    return await brandModel.find();
};
// get one  by id
const getBrandById = async (id) => {
    return await brandModel.findById(id);
};

// update info
const updateBrand = async (id, data) => {
    return await brandModel.findByIdAndUpdate(id, data, { new: true });
};

// delete 
const deleteBrand = async (id) => {
    return await brandModel.findByIdAndDelete(id);
};

const BrandWatch = {
    addBrand,
    getAllBrand,
    getBrandById,
    updateBrand,
    deleteBrand,
};

export default BrandWatch;
