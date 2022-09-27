import { DownloadExcelAction } from '@/utils/datatable/factory';

import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import TextHeader from '@/utils/datatable/header/textHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import filters from './filters'

const headers:HeaderInterface[] = [
  new TextHeader('Id'),
  new TextHeader('Name'),
  new TextHeader('Email'),
  new TextHeader('Phone'),
  new TextHeader('Msg'),
  new ActionsHeader('contact_requests'  , {edit : false , view : false ,approve : false  ,decline : false ,respond :true})
]
const url = "requests/contacts"
const params:DatatableIntetrface = {
    title : "articles",
    headers ,
    description:"articles_desc",
    searchable:true,
    filters,
    url,
    hasFooter:false,
    hasEdit:true,
    globaleActions:[DownloadExcelAction],
    hasCreate:true
}
const datatable = new Datatable(params)
export default datatable