import { CreateAction, DownloadExcelAction } from '@/utils/datatable/factory';
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import TextHeader from '@/utils/datatable/header/textHeader';
import ImgHeader from '@/utils/datatable/header/imgHeader';
import filters from './filters';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';

const headers:HeaderInterface[] = [
  new TextHeader('Name'),
  new TextHeader('CategoryName'),
  new ImgHeader('Image'),
  // new TextHeader('Breif'),

  new ActionsHeader('videos'  , {edit : true , view : true , delete : true})
]
const url = "videos"

const params:DatatableIntetrface = {
    title : "videos",
    headers ,
    description:"videos_desc",
    searchable:true,
    url,
    hasFooter:false,
    hasEdit:true,
    globaleActions:[CreateAction ,DownloadExcelAction],
    filters
}
const datatable = new Datatable(params)
export default datatable