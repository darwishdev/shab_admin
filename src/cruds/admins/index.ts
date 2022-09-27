import adminForm from '@/forms/admins';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
import {generateString} from '@/utils/helpers'
const editAddInterface :EditAddInterface = {
    title : "users",
    table : "users",
    injectState : {Role_id : 3 , Admin : true , Phone : generateString(10) },
    form :  adminForm,
}
const editAddUser = new EditAdd(editAddInterface)
export default editAddUser