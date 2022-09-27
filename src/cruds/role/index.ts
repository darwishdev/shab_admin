import cityForm from '@/forms/city';
import roleForm from '@/forms/roles';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
const editAddInterface :EditAddInterface = {
    title : "roles",
    table : "roles",
    form :  roleForm
}
const editAddRole = new EditAdd(editAddInterface)
export default editAddRole