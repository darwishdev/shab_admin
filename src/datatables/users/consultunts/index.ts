import { CreateAction, DownloadExcelAction } from '@/utils/datatable/factory';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import TextHeader from '@/utils/datatable/header/textHeader';
import ImgHeader from '@/utils/datatable/header/imgHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import filters from './filters'
const headers:HeaderInterface[] = [
  new TextHeader('NameAr'),
  new TextHeader('Title'),
  new TextHeader('Skills'),
  new ImgHeader("Image"),
  new ActionsHeader('consultunts'  , {edit : true , view : true , delete : true})
]
const url = "/consultunts"
const params:DatatableIntetrface = {
    headers ,
    searchable:true,
    filters,
    url,
    hasFooter:false,
    title:"consultunts",
    importExcel:true,
    globaleActions:[CreateAction , DownloadExcelAction],
}
const datatable = new Datatable(params)
export default datatable
