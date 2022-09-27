import { DownloadExcelAction, CreateAction } from '@/utils/datatable/factory';

import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import DateHeader from '@/utils/datatable/header/dateHeader';
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import TextHeader from '@/utils/datatable/header/textHeader';
import ImgHeader from '@/utils/datatable/header/imgHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
// import featuresFilters from './filters'
import PriceHeader from '@/utils/datatable/header/priceHeader';
import filters from './filters'
const headers:HeaderInterface[] = [
  new TextHeader('Title'),
  new PriceHeader('Price'),
  new TextHeader('CatName'),
  new ImgHeader(),
  new TextHeader('Day'),
  new TextHeader('Month'),
  new TextHeader('Year'),
  new DateHeader('Created_at'),
  new ActionsHeader('events'  , {edit : true , view : true , delete : false})
]
const url = "/events"

const params:DatatableIntetrface = {
    headers ,
    filters,
    searchable:true,
    url,
    hasFooter:false,
    title:"events",
    globaleActions:[DownloadExcelAction , CreateAction],
   
}
const datatable = new Datatable(params)
export default datatable
