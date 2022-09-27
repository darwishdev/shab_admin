import projectForm from '@/forms/project';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
const editAddInterface :EditAddInterface = {
    title : "projects",
    table : "projects",
    form :  projectForm
}
const editAddProject = new EditAdd(editAddInterface)
export default editAddProject