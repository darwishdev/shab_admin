import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    convertToRequred,
    nameInput,
    iconInput
} from '@/utils/form/inputs/InputStore'
import TextInputComponent from '@/utils/form/components/Text.vue'
import { TextInputInterface ,FormInterface } from '@/utils/form/interface';
import Vue  from 'vue';

const type:TextInputInterface =  {
    name:"Type",
        generateInputHtml : () =>   Vue.extend(TextInputComponent),
        icon: "",
    rules:[],
    label : "Type",
    cols : 6,
    type : 'text',
    value:"project",
    hidden:true,
    initial:"project"
}
const inputs:Input[] = [
    new Input(convertToRequred(nameInput)),
    new Input(convertToRequred(iconInput)),
    new Input(type),
]

const params :FormInterface = {
    inputs
}

const categoryForm = new Form(params)

export default categoryForm
