import featureForm from '@/forms/features';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
const editAddInterface :EditAddInterface = {
    title : "features",
    table : "features",
    form :  featureForm
}
const editAddRole = new EditAdd(editAddInterface)
export default editAddRole