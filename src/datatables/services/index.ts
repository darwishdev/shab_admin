import { DownloadExcelAction, CreateAction } from '@/utils/datatable/factory';

import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import TextHeader from '@/utils/datatable/header/textHeader';

import filters from './filters';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
// import featuresFilters from './filters'

const headers:HeaderInterface[] = [
  new TextHeader('Name'),
  new ActionsHeader('services'  , {edit : true , view : false , delete : true})
]
const url = "/services"

const params:DatatableIntetrface = {
    headers ,
    searchable:true,
    url,
    hasFooter:false,
    globaleActions:[CreateAction ,DownloadExcelAction ],
    hasEdit:true,
    filters,

}
const datatable = new Datatable(params)
export default datatable
