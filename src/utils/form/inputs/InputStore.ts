import i18n from '@/i18n';
import Vue  from 'vue';
import DateInputComponent from '../components/Date.vue'
import TextInputComponent from '../components/Text.vue'
import RichInputComponent from '../components/rich.vue'
import FileInputComponent from '../components/File.vue'
import SwitchInputComponent from '../components/Switch.vue'
import SelectInputComponent from '../components/Select.vue'
import ComboInputComponent from '../components/Combo.vue'
import { InputInterface } from '@/utils/form/interface';
import { TextInputInterface , SwitchInputInterface , DateInputInterface , SelectInputInterface } from '../interface';
import {max , required , email, num} from "@/utils/validations/validations" 


export const dateInput:DateInputInterface =  {
  name:"Date",
  label : "date",
  limit:'date',
  min : "",
  max : "",
  type:'date',
  generateInputHtml : () =>   Vue.extend(DateInputComponent),
  cols:6,
  value : "",
}

export const dateFromInput:DateInputInterface =  {
  name:"DateFrom",
  label : "date_from",
  limit:'date',
  min : "",
  max : "",
  type:'date',
  generateInputHtml : () =>   Vue.extend(DateInputComponent),
  cols:6,
  value : "",
}

export const dateToInput:DateInputInterface =  {
  name:"DateTo",
  label : "date_to",
  limit:'date',
  min : "",
  max : "",
  type:'date',
  generateInputHtml : () =>   Vue.extend(DateInputComponent),
  cols:6,
  value : "",
}



export const contentInput:TextInputInterface =  {
  name:"Content",
    generateInputHtml : () =>   Vue.extend(RichInputComponent),
    icon: "",
  rules:[],
  label : "Content",
  cols : 12,
  type : 'text',
  value:""
}




export const breifInput:TextInputInterface =  {
  name:"Breif",
    generateInputHtml : () =>   Vue.extend(RichInputComponent),
    icon: "",
  rules:[],
  label : "Breif",
  cols : 12,
  type : 'text',
  value:""
}


export const breifFilterInput:TextInputInterface =  {
  name:"Breif",
    generateInputHtml : () =>   Vue.extend(TextInputComponent),
    icon: "",
  rules:[],
  label : "Breif",
  cols : 12,
  type : 'text',
  value:""
}




export const skillsInput:TextInputInterface =  {
  name:"Skills",
    generateInputHtml : () =>   Vue.extend(TextInputComponent),
    icon: "",
  rules:[],
  label : "Skills",
  cols : 6,
  type : 'text',
  value:""
}

export const skillsInput1:TextInputInterface =  {
  name:"Skills1",
    generateInputHtml : () =>   Vue.extend(TextInputComponent),
    icon: "",
  rules:[],
  maxLength:15,
  label : "Skills1",
  cols : 4,
  type : 'text',
  value:""
}

export const skillsInput2:TextInputInterface =  {
  name:"Skills2",
    generateInputHtml : () =>   Vue.extend(TextInputComponent),
    icon: "",
 
  label : "Skills2",
  maxLength:15,
  cols : 4,
  type : 'text',
  value:""
}

export const skillsInput3:TextInputInterface =  {
  name:"Skills3",
    generateInputHtml : () =>   Vue.extend(TextInputComponent),
    icon: "",
  rules:[],
  label : "Skills3",
  maxLength:15,
  cols : 4,
  type : 'text',
  value:""
}

export const levelInput:TextInputInterface =  {
  name:"Level",
    generateInputHtml : () =>   Vue.extend(TextInputComponent),
    icon: "",
  rules:[
    (value:string) => num(value),
  ],
  isNumber : true,
  label : "Level",
  cols : 6,
  type : 'text',
  hint:"ادخل 1 لاتاحة الميزة في عضوية مبادر , 2 عضوية طموح , 3 لعضوية ريادي",
  value:""
}
export const valueInput:TextInputInterface =  {
  name:"Value",
  icon: "",
  rules:[],
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  label : "Value",
  cols : 6,
  type : 'text',
  value:""
}

export const imgInput:TextInputInterface =  {
  name:"Image",
  icon: "",
  generateInputHtml : () =>   Vue.extend(FileInputComponent),
  rules:[],
  label : "Img",
  isImg : true,
  cols : 6,
  type : 'file',
  value:""
}

export const imgInput2:TextInputInterface =  {
  name:"Img",
  icon: "",
  generateInputHtml : () =>   Vue.extend(FileInputComponent),
  rules:[],
  label : "Img",
  isImg : true,
  cols : 6,
  type : 'file',
  value:""
}

export const fundInput:TextInputInterface =  {
  name:"Fund",
  icon: "",
  rules:[
      (value:string) => num(value),
  ],
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  isNumber:true,
  label : "Fund",
  cols : 6,
  type : 'text',
  value:""
}

export const titleInput:TextInputInterface =  {
  name:"Title",
  icon: "",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  label : "title",
  cols : 6,
  type : 'text',
  value:""
}


export const videoInput:TextInputInterface =  {
  name:"Video",
  icon: "",
  label : "video",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  cols : 6,
  type : 'text',
  value:""
}


export const linkInput:TextInputInterface =  {
  name:"Url",
  icon: "",
  label : "video",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  cols : 6,
  type : 'text',
  value:""
}

export const websiteInput:TextInputInterface =  {
  name:"Website",
  icon: "",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
 
  label : "Website",
  cols : 6,
  type : 'text',
  value:""
}

export const instagramInput:TextInputInterface =  {
  name:"Instagram",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  icon: "",

  label : "Instagram",
  cols : 6,
  type : 'text',
  value:""
}

export const twitterInput:TextInputInterface =  {
  name:"Twitter",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  icon: "",

  label : "Twitter",
  cols : 6,
  type : 'text',
  value:""
}


export const categoryInput:SelectInputInterface =  {
  name:"CatId",
  cache : false,
  text : 'Name',
  initialFetch:true,
  clearable:false,
  valueKey : 'Id',
  generateInputHtml : () =>   Vue.extend(ComboInputComponent),
  value :"",
  type : 'combo',
  url:'cats',
  icon : 'mdi-store-settings-outline',
  label : 'category'
}


export const cityInput:SelectInputInterface =  {
  name:"CityId",
  cache : false,
  text : 'Name',
  cols:6,
  initialFetch:true,
  clearable:false,
  valueKey : 'Id',
  generateInputHtml : () =>   Vue.extend(ComboInputComponent),
  value :"",
  type : 'combo',
  url:'cities',
  icon : 'mdi-store-settings-outline',
  label : 'city'
}


export const eventsCategoryInput = () => {
  let input = {...categoryInput}
  input.payload = {type : 'event'}
  return input
}

export const videosCategoryInput = () => {
  let input = {...categoryInput}
  input.payload = {type : 'video'}
  return input
}

export const projectsCategoryInput = () => {
  let input = {...categoryInput}
  input.payload = {type : 'project'}
  return input
}

export const postsCategoryInput = () => {
  let input = {...categoryInput}
  input.payload = {type : 'post'}
  return input
}


export const statusInput:SelectInputInterface =  {
  name:"status",
  cache : true,
  text : 'key',
  initialFetch:false,
  clearable:true,
  generateInputHtml : () =>   Vue.extend(SelectInputComponent),
  valueKey : 'value',
  value : '',
  type : 'select',
  items:[
    {
      key : 'معلقة',
      value : 'pending'
    },
    {
      key : 'ملغية',
      value : 'declined'
    }
  ],
  icon : 'mdi-store-settings-outline',
  label : 'type'
}
export const requestType:SelectInputInterface =  {
  name:"requestType",
  cache : true,
  text : 'key',
  initialFetch:false,
  clearable:true,
  generateInputHtml : () =>   Vue.extend(SelectInputComponent),
  valueKey : 'value',
  value : '',
  type : 'select',
  items:[
    {
      key : 'معلقة',
      value : 'pending'
    },
    {
      key : 'ملغية',
      value : 'declined'
    },
    {
      key : 'مقبولة',
      value : 'approved'
    },
  ],
  icon : 'mdi-store-settings-outline',
  label : 'type'
}
export const categoryTypeInput:SelectInputInterface =  {
  name:"Type",
  cache : true,
  text : 'key',
  initialFetch:false,
  clearable:false,
  generateInputHtml : () =>   Vue.extend(ComboInputComponent),
  valueKey : 'value',
  value : '',
  type : 'select',
  items:[
    {
      key : 'مشاريع',
      value : 'project'
    },
    {
      key : 'مقالات',
      value : 'post'
    },
    {
      key : 'فعاليات',
      value : 'event'
    },
    {
      key : 'فيديوهات',
      value : 'video'
    },
  ],
  icon : 'mdi-store-settings-outline',
  label : 'type'
}

export const roleInput:SelectInputInterface =  {
    name:"Role_id",
    cache : false,
    text : 'Name',
    initialFetch:true,
    generateInputHtml : () =>   Vue.extend(ComboInputComponent),
    cols:6,
    clearable:true,
    valueKey : 'Id',
    type : 'select',
    url:'roles',
    icon : 'mdi-store-settings-outline',
    label : 'role'
}
export const serviceInput:SelectInputInterface =  {
  name:"Service_id",
  cache : false,
  text : 'Name',
  initialFetch:true,
  generateInputHtml : () =>   Vue.extend(ComboInputComponent),
  cols:6,
  clearable:true,
  valueKey : 'Id',
  type : 'select',
  url:'services',
  icon : '',
  label : 'service'
}
export const newRoleInput:SelectInputInterface =  {
  name:"NewRole",
  cache : false,
  cols:6,
  text : 'Name',
  initialFetch:true,
  generateInputHtml : () =>   Vue.extend(ComboInputComponent),
  clearable:true,
  valueKey : 'Id',
  type : 'select',
  url:'roles',
  icon : 'mdi-store-settings-outline',
  label : 'role'
}

export const featuredInput:SwitchInputInterface =  {
    name:"Featured",
    label : "featured",
    generateInputHtml : () =>   Vue.extend(SwitchInputComponent),
    cols : 6,
    type : 'switch',
    initial : false,
    value:false
}

export const activeInput:SwitchInputInterface =  {
  name:"Active",
  label : "active",
  generateInputHtml : () =>   Vue.extend(SwitchInputComponent),
  initial : false,
  cols : 6,
  value: false,
  type : 'switch',
}


export const activeFilterInput:SelectInputInterface =  {
  name: "active",
  text: 'key',
  cache: true,
  initialFetch: false,
  cols: 6,
  clearable: true,
  type: 'select',
  generateInputHtml: () => Vue.extend(SelectInputComponent),
  items: [
    {
      key: i18n.t("active").toString(),
      value: '1'
    },
    {
      key: i18n.t("not_active"),
      value: '0'
    }
  ],
  icon: 'mdi-lock-outline',
  label: 'status',
  valueKey: 'value'
}        



export const articlesStatusInput:SelectInputInterface =  {
  name: "Status",
  cache: true,
  text: 'key',
  valueKey: 'value',
  initialFetch: false,
  cols: 6,
  clearable: true,
  type: 'select',
  generateInputHtml: () => Vue.extend(SelectInputComponent),
  items: [
    {
      key: i18n.t("active").toString(),
      value: 'active'
    },
    {
      key: i18n.t("pending"),
      value: 'pending'
    }
  ],
  icon: 'mdi-lock-outline',
  label: 'status',
  
}        


export const projectStatusInput:SelectInputInterface =  {
  name: "Status",
  cache: true,
  initialFetch: false,
  cols: 6,
  clearable: true,
  type: 'select',
  generateInputHtml: () => Vue.extend(SelectInputComponent),
  items:[
      "تحت التاسيس",
      "قائم",
      "متعثر",
      "اخري",
  ],
  icon: 'mdi-lock-outline',
  label: 'status',
  
}        


export const nameArInput:TextInputInterface =  {
    name:"NameAr",
    icon: "",
    rules:[
        (value:string) => required(value) ,
    ],
    generateInputHtml : () =>   Vue.extend(TextInputComponent),
    required:true,
    label : "NameAr",
    cols : 6,
    type : 'text',
    value:""
}

export const nameArInput2:TextInputInterface =  {
  name:"Name_ar",
  icon: "",
  rules:[
      (value:string) => required(value) ,
  ],
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  required:true,
  label : "NameAr",
  cols : 6,
  type : 'text',
  value:""
}
export const nameInput:TextInputInterface =  {
    name:"Name",
    icon: "",
    generateInputHtml : () =>   Vue.extend(TextInputComponent),
    rules:[
        (value:string) => required(value) ,
      // (value:string) => name(value) ,
    ],
    required:true,
    label : "Name",
    cols : 6,
    type : 'text',
    value:""
}


export const userNameInput:TextInputInterface =  {
  name:"UserName",
  icon: "",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  label : "UserName",
  cols : 6,
  type : 'text',
  value:""
}

export const nameFilterInput:TextInputInterface =  {
  name:"Name",
  icon: "",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  label : "Name",
  cols : 6,
  type : 'text',
  value:""
}
export const nameArFilterInput:TextInputInterface =  {
  name:"NameAr",
  icon: "",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  label : "Name_ar",
  cols : 6,
  type : 'text',
  value:""
}

export const serialInput:TextInputInterface =  {
  name:"Serial",
  icon: "",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  label : "Serial",
  cols : 6,
  type : 'text',
  value:""
}


export const priceInput:TextInputInterface =  {
  name:"Price",
  icon: "",
  rules:[
      (value:string) => required(value) ,
      (value:string) => num(value) ,
  ],
  required:true,
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  label : "Price",
  isNumber:true,
  cols : 6,
  type : 'number',
  value:""
}


export const viewsCounterInput:TextInputInterface =  {
  name:"ViewsCounter",
  icon: "",
  rules:[
      (value:string) => num(value) ,
  ],
  required:false,
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  label : "views_counter",
  isNumber:true,
  cols : 6,
  type : 'number',
  value:""
}

export const priceFromInput:TextInputInterface =  {
  name:"PriceFrom",
  icon: "",
  rules:[
      (value:string) => num(value) ,
  ],
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  label : "price_from",
  isNumber:true,
  cols : 6,
  type : 'number',
  value:""
}

export const priceToInput:TextInputInterface =  {
  name:"PriceTo",
  icon: "",
  rules:[
      (value:string) => num(value) ,
  ],
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  label : "price_to",
  isNumber:true,
  cols : 6,
  type : 'number',
  value:""
}
export const emailInput:TextInputInterface =  {
    name:"Email",
    icon: "",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  rules:[
        (value:string) => required(value) ,
      (value:string) => email(value) ,
    ],
    label : "Email",
    cols : 6,
    type : 'text',
    value:""
}




export const emailFilterInput:TextInputInterface =  {
  name:"Email",
  icon: "",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  label : "Email",
  cols : 6,
  type : 'text',
  value:""
}



export const passwordInput:TextInputInterface =  {
    name:"Password",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  icon: "",
    rules:[
        (value:string) => required(value) ,
    ],
    label : "Password",
    cols : 6,
    type : 'password',
    value:""
}
export const phoneInput:TextInputInterface =  {
    name:"Phone",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  icon: "",
    rules:[
        (value:string) => required(value) ,
    ],
    label : "Phone",
    cols : 6,
    type : 'text',
    value:""
}


export const iconInput:TextInputInterface =  {
  name:"Icon",
  icon: "",
  generateInputHtml : () =>   Vue.extend(TextInputComponent),
  label : "Icon",
  cols : 6,
  type : 'text',
  value:""
}







export const convertToRequred = (input:InputInterface) => {
    const req = {...input}
    req.required = true
    req.rules ? 
        req.rules?.push((value:string) => required(value)) : 
        req.rules = [(value:string) => required(value)]
    
    return req
}

export const setInputLabel = (input:InputInterface , label: string) => {
  const req = {...input}
  req.label = label
  return req
}


export const setInputCols = (input:InputInterface , cols: number) => {
  const req = {...input}
  req.cols = cols
  return req
}