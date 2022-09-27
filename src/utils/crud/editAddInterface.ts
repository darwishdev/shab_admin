import Form from "../form/Form";

export default interface EditAddInterface {
    title: string
    table:string
    form:Form
    injectState?:object
    id?:number
}