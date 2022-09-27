import { DownloadExcelAction } from '@/utils/datatable/factory';
import DateHeader  from '@/utils/datatable/header/dateHeader';

import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import TextHeader from '@/utils/datatable/header/textHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import filters from './filters'
const headers:HeaderInterface[] = [
  new TextHeader('Id'),
  new TextHeader('NameAr'),
  new TextHeader('Email'),
  new TextHeader('Phone'),
  new TextHeader('CurrentRole'),
  new TextHeader('NewRole'),
  new DateHeader('CreatedAt'),
  new ActionsHeader('users'  , {edit : true , view : true , pend : true ,approve : true  ,decline : true    })
]
const url = "requests/users/upgrades"
const params:DatatableIntetrface = {
    title : "users",
    headers ,
    description:"users_desc",
    searchable:true,
    filters,
    url,
    globaleActions:[DownloadExcelAction],
    hasFooter:false,
    hasEdit:true
}
const datatable = new Datatable(params)
export default datatable