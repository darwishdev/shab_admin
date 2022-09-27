import cityForm from '@/forms/city';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
const editAddInterface :EditAddInterface = {
    title : "cities",
    table : "cities",
    form :  cityForm
}
const editAddCategory = new EditAdd(editAddInterface)
export default editAddCategory