import { CreateAction, DownloadExcelAction } from '@/utils/datatable/factory';
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import TextHeader from '@/utils/datatable/header/textHeader';
import ImgHeader from '@/utils/datatable/header/imgHeader';
import DateHeader from '@/utils/datatable/header/dateHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import filters from './filters'
const headers:HeaderInterface[] = [
  new TextHeader('Id'),
  new TextHeader('Title'),
  new TextHeader('ViewsCounter'),
  new TextHeader('UserName'),
  new TextHeader('CategoryName'),
  new ImgHeader(),
  new DateHeader('Published_at'),
  new ActionsHeader('articles'  , {edit : true , view : true , delete : true})
]
const url = "articles"

const params:DatatableIntetrface = {
    title : "articles",
    headers ,
    filters,
    description:"articles_desc",
    searchable:true,
    url,
    hasFooter:false,
    hasEdit:true,
    globaleActions:[CreateAction , DownloadExcelAction]
}
const datatable = new Datatable(params)
export default datatable