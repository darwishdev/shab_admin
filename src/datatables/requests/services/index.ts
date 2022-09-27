import { DownloadExcelAction } from '@/utils/datatable/factory';

import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import TextHeader from '@/utils/datatable/header/textHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import filters from './filters'
const headers:HeaderInterface[] = [
  new TextHeader('NameAr'),
  new TextHeader('Email'),
  new TextHeader('RoleName'),
  new TextHeader('ServiceName'),
  new TextHeader('Breif'),
  new ActionsHeader('services'  , { approve : true  ,decline : true ,respond:true   })
]
const url = "requests/services"
const params:DatatableIntetrface = {
    title : "services",
    headers ,
    description:"services_desc",
    searchable:true,
    filters,
    url,
    globaleActions:[DownloadExcelAction],
    hasFooter:false,
    hasEdit:true,
    hasCreate:false
}
const datatable = new Datatable(params)
export default datatable