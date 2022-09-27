import roleForm from '@/forms/event';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
const editAddInterface :EditAddInterface = {
    title : "events",
    table : "events",
    form :  roleForm
}
const editAddRole = new EditAdd(editAddInterface)
export default editAddRole