import { CreateAction, DownloadExcelAction, UploadExcelAction } from '@/utils/datatable/factory';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import TextHeader from '@/utils/datatable/header/textHeader';
import ImgHeader from '@/utils/datatable/header/imgHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import filters from './filters'

const headers:HeaderInterface[] = [
  new TextHeader('NameAr'),
  new TextHeader('Title'),
  new ImgHeader('Image'), 
  new TextHeader('Skills'),
  new ActionsHeader('consultunts'  , {edit : true ,  delete : true})
]
const url = "/team"

const params:DatatableIntetrface = {
    headers ,
    url,
    filters,
    importExcel:true,
    globaleActions:[CreateAction , DownloadExcelAction],
    title:"team",
}
const datatable = new Datatable(params)
export default datatable
