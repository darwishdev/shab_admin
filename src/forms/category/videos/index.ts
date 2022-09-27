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

const post:TextInputInterface =  {
    name:"Type",
        generateInputHtml : () =>   Vue.extend(TextInputComponent),
        icon: "",
    rules:[],
    label : "Type",
    cols : 6,
    type : 'text',
    value:"post",
    hidden:true,
    initial:"post"
}
const inputs:Input[] = [
    new Input(convertToRequred(nameInput)),
    new Input(convertToRequred(iconInput)),
    new Input(post),
]

const params :FormInterface = {
    inputs
}

const categoryForm = new Form(params)

export default categoryForm
