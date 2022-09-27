import categoryForm from '@/forms/category/articles';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
const editAddInterface :EditAddInterface = {
    title : "categories",
    table : "categories",
    form :  categoryForm
}
const editAddCategory = new EditAdd(editAddInterface)
export default editAddCategory