import articleForm from '@/forms/article';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
const editAddInterface :EditAddInterface = {
    title : "articles",
    table : "articles",
    form :  articleForm,
    id:1
}
const editAddArticle = new EditAdd(editAddInterface)
export default editAddArticle