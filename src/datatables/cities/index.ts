
import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import TextHeader from '@/utils/datatable/header/textHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import Datatable  from '@/utils/datatable/datatable'
const headers:HeaderInterface[] = [
  new TextHeader('Id'),
  new TextHeader('Name'),
  new ActionsHeader('cities'  , {edit : true , view : false , delete : true})
]
const url = "cities"

const params:DatatableIntetrface = {
    title : "cities",
    headers ,
    description:"articles_desc",
    searchable:true,
    url,
    hasFooter:false,
    hasEdit:true,
    hasCreate:true
}


const datatable = new Datatable(params)
export default datatable

// import { Header } from '@/utils/datatable/datatableInterface';
// import DatatableIntetrface from '@/utils/datatable/datatableInterface'
// import Datatable  from '@/utils/datatable/datatable'
// const headers:Header[] = [
//   {value:'Id', text: 'Id' , isPrice : false , isTotal:false , total:0},
//   {value:'Name', text: 'Name' , isPrice : false , isTotal:false , total:0},
//   {value:'Actions', text: 'Actions' , isPrice : false , isTotal:false , total:0},
// ]
// const url = "cities/"

// const params:DatatableIntetrface = {
//     title : "cities",
//     headers ,
//     description:"cities_desc",
//     searchable:true,
//     url,
//     hasFooter:false,
//     hasEdit:true,
//     hasCreate:true
// }
// const datatable = new Datatable(params)
// export default datatable