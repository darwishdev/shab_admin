import richTextForm from '@/forms/richtext';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
const editAddInterface :EditAddInterface = {
    title : "rich_text",
    table : "rich_text",
    form :  richTextForm,
    id:1
    
}
const editAddProject = new EditAdd(editAddInterface)
export default editAddProject