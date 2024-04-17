import mongoose from 'mongoose';
/***
 * схема и функции для работы с коллецией - Категории часов
 */
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: String,
    imageUrl: String,
});

categorySchema.pre('save', function(next) {
    if (this.isModified('name')) {
        this.translit = generateTranslit(this.name);
    }
    next();
});

const categoryModel = mongoose.model('Category', categorySchema);

// create new category
const addCategory = async (data) => {
    const category = new categoryModel(data);
    return await category.save();
};
// get all category list
const getAllCategory = async () => {
    return await categoryModel.find();
};
// get one category by id
const getCategoryById = async (id) => {
    return await categoryModel.findById(id);
};

// update category info
const updateCategory = async (id, data) => {
    return await categoryModel.findByIdAndUpdate(id, data, { new: true });
};

// delete category
const deleteCategory = async (id) => {
    return await categoryModel.findByIdAndDelete(id);
};

const CategoryWatch = {
    addCategory,
    getAllCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
};

export default CategoryWatch;