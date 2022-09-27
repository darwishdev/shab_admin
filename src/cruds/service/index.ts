import serviceForm from '@/forms/service';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
const editAddInterface :EditAddInterface = {
    title : "services",
    table : "services",
    form :  serviceForm
}
const editAddService = new EditAdd(editAddInterface)
export default editAddService