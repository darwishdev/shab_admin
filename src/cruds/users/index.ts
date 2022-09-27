import userForm from '@/forms/users';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
const editAddInterface :EditAddInterface = {
    title : "users",
    table : "users",
    form :  userForm,
}
const editAddUser = new EditAdd(editAddInterface)
export default editAddUser