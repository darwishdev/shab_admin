import viedoForm from '@/forms/video';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
const editAddInterface :EditAddInterface = {
    title : "videos",
    table : "videos",
    form :  viedoForm
}
const editAddViedo = new EditAdd(editAddInterface)
export default editAddViedo