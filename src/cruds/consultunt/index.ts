import cnsultuntForm from '@/forms/consultunt';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
const editAddInterface :EditAddInterface = {
    title : "consultunts",
    table : "consultunts",
    form :  cnsultuntForm
}
const editAddCategory = new EditAdd(editAddInterface)
export default editAddCategory