import { DownloadExcelAction } from '@/utils/datatable/factory';
import DateHeader  from '@/utils/datatable/header/dateHeader';
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import TextHeader from '@/utils/datatable/header/textHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import filters from './filters'
const headers:HeaderInterface[] = [
  new TextHeader('NameAr'),
  new TextHeader('Email'),
  new TextHeader('Type'),
  new TextHeader('RoleName'),
  new TextHeader('Phone'),
  new TextHeader('Status'),
  new DateHeader('CreatedAt'),
  new ActionsHeader('users'  , {edit : true , view : true , pend : true , chat: true ,approve : true  ,decline : true    })
]
const url = "requests/users"
const params:DatatableIntetrface = {
    title : "users",
    headers ,
    description:"users_desc",
    searchable:true,
    filters,
    url,
    globaleActions:[DownloadExcelAction],

}
const datatable = new Datatable(params)
export default datatable