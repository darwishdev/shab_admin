import Form from "../form/Form";
import { HeaderInterface } from "./header/headerInterface";

// import {GlobaleTableAction} from '@/types'



export interface Totals {
    key:string
    value:number
}

export default interface DatatableIntetrface {
    title?: string
    icon?: string
    description?:string
    url:string
    itemActions?: GlobaleTableAction[]
    globaleActions? : GlobaleTableAction[]
    searchable?:boolean
    headers: HeaderInterface[]
    filters?:Form
    hasFooter?:boolean
    hasEdit?:boolean
    hasPrice?:boolean
    hasView?:boolean
    hasCreate?:boolean
}



export interface GlobaleTableAction {
    title:string,
    icon?:string
    action:Function
}