import { DeleteAction, EditAction } from '@/utils/datatable/factory';
import { CreateAction , DownloadExcelAction } from '@/utils/datatable/factory';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import TextHeader from '@/utils/datatable/header/textHeader';
import ImgHeader from '@/utils/datatable/header/imgHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import filters from './filter'
import {GlobaleTableAction} from '@/utils/datatable/datatableInterface'


const headerAc : GlobaleTableAction[] = [EditAction() , DeleteAction()]
const headers:HeaderInterface[] = [
  new TextHeader('Id'),
  new TextHeader('Name_ar'),
  new TextHeader('Email'),
  new ImgHeader(), 
  new TextHeader('Phone'),
  new TextHeader('Role'),
  new ActionsHeader('users'  , {edit:true})
]
const url = "/users"

const params:DatatableIntetrface = {
    headers ,
    searchable:true,
    url,
    hasFooter:false,
    hasEdit:true,
    title:"users",
    filters,
    globaleActions:[CreateAction , DownloadExcelAction],
    // itemActions:,
}
const datatable = new Datatable(params)
export default datatable
