import { DownloadExcelAction } from '@/utils/datatable/factory';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import TextHeader from '@/utils/datatable/header/textHeader';
import ImgHeader from '@/utils/datatable/header/imgHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import filters from './filters'

const headers:HeaderInterface[] = [
  new TextHeader('Title'),
  new TextHeader('Value'),
  new ImgHeader('Image'),
  new ActionsHeader('rich_text'  , {edit : true , view : false , delete : false})
]
const url = "/rich/page"

const params:DatatableIntetrface = {
    headers ,
    title:"home",
    filters,
    icon:"mdi-home-outline",
    searchable:true,
    globaleActions:[DownloadExcelAction],
    url,
    hasFooter:false,
    hasEdit:true,
    hasCreate:false
}
const datatable = new Datatable(params)
export default datatable
