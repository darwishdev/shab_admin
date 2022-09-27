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
  new TextHeader('Id'),
  new TextHeader('NameAr'),
  new TextHeader('Phone'),
  new TextHeader('Email'),
  new TextHeader('Title'),
  new DateHeader('CreatedAt'),
  new ActionsHeader('articles'  , {edit : true , view : true , pend : true ,approve : true  ,decline : true    })
]
const url = "requests/articles"
const params:DatatableIntetrface = {
    title : "articles",
    headers ,
    description:"articles_desc",
    searchable:true,
    filters,
    url,
    globaleActions:[DownloadExcelAction],
    hasFooter:false,
    hasEdit:true,
    hasCreate:true
}
const datatable = new Datatable(params)
export default datatable