import { CreateAction, DownloadExcelAction } from './../../../utils/datatable/factory';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import TextHeader from '@/utils/datatable/header/textHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import filters from './filter'

const headers:HeaderInterface[] = [
  new TextHeader('Id'),
  new TextHeader('Name_ar'),
  new TextHeader('Email'),
  new ActionsHeader('users'  , {edit : true ,  delete : true})
]
const url = "/admins"

const params:DatatableIntetrface = {
    headers ,
    filters,
    searchable:true,
    url,
    hasFooter:false,
    // hasEdit:true,
    globaleActions:[CreateAction , DownloadExcelAction],
    title:"admins",
    // hasCreate:true
}
const datatable = new Datatable(params)
export default datatable
