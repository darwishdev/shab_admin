import { DownloadExcelAction } from '@/utils/datatable/factory';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import TextHeader from '@/utils/datatable/header/textHeader';
import LevelHeader from '@/utils/datatable/header/levelHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import featuresFilters from './filters'

const headers:HeaderInterface[] = [
  new TextHeader('Name'),
  new LevelHeader('Level'),
  new ActionsHeader('features'  , {edit : true , view : false , delete : true})
]
const url = "/features"

const params:DatatableIntetrface = {
    headers ,
    searchable:true,
    url,
    globaleActions:[DownloadExcelAction],
    hasFooter:false,
    hasEdit:true,
    filters:featuresFilters,
    hasCreate:true
}
const datatable = new Datatable(params)
export default datatable
