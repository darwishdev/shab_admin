import { CreateAction, DownloadExcelAction } from '@/utils/datatable/factory';
import  ImgHeader  from '@/utils/datatable/header/imgHeader';

import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import DateHeader from '@/utils/datatable/header/dateHeader';
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import TextHeader from '@/utils/datatable/header/textHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import filters from './filters'
const headers:HeaderInterface[] = [
  new TextHeader('Title'),
  new TextHeader('UserName'),
  new TextHeader('CategoryName'),
  new TextHeader('CityName'),
  new TextHeader('Status'),
  new ImgHeader(),
  new ActionsHeader('projects'  , {edit : true , view : true , delete : true})
]
const url = "/projects"

const params:DatatableIntetrface = {
    headers ,
    searchable:true,
    title:"projects",
    url,
    hasFooter:false,
    hasEdit:true,
    globaleActions:[CreateAction ,DownloadExcelAction ],
    filters,
}
const datatable = new Datatable(params)
export default datatable
