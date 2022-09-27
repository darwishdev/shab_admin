import { DownloadExcelAction } from '@/utils/datatable/factory';
import DateHeader from '@/utils/datatable/header/dateHeader';

import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import TextHeader from '@/utils/datatable/header/textHeader';
import ImgHeader from '@/utils/datatable/header/imgHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import filters from './filters'
const headers:HeaderInterface[] = [
  new TextHeader('NameAr'),
  new TextHeader('Email'),
  new TextHeader('Phone'),
  new TextHeader('Title'),
  new DateHeader('CreatedAt'),
  new ActionsHeader('projects'  , {edit : true , view : true , pend : true ,approve : true  ,decline : true  ,respond:true  })
]
const url = "requests/projects"
const params:DatatableIntetrface = {
    title : "projects",
    headers ,
    description:"projects_desc",
    searchable:true,
    filters,
    globaleActions:[DownloadExcelAction],
    url,
    hasFooter:false,
    hasEdit:true
}
const datatable = new Datatable(params)
export default datatable