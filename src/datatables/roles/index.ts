import { DownloadExcelAction } from '@/utils/datatable/factory';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import TextHeader from '@/utils/datatable/header/textHeader';
import ImgHeader from '@/utils/datatable/header/imgHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import PriceHeader from '@/utils/datatable/header/priceHeader';
import SwitchHeader from '@/utils/datatable/header/switchHeader';
import filters from './filters'

const headers:HeaderInterface[] = [
  new TextHeader('Name'),
  new PriceHeader('Price'),
  new ImgHeader(),
  new SwitchHeader('Active'),
  new ActionsHeader('roles'  , {edit : true , view : false , delete : false})
]
const url = "/roles"

const params:DatatableIntetrface = {
    headers ,
    searchable:true,
    url,
    hasFooter:false,
    hasEdit:true,
    globaleActions:[DownloadExcelAction],
    title:"roles",
    filters,
    hasCreate:false
}
const datatable = new Datatable(params)
export default datatable
