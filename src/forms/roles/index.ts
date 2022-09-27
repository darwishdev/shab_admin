import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    priceInput,
    nameInput,
    breifInput,
    activeInput,
    convertToRequred,
    imgInput 
} from '@/utils/form/inputs/InputStore'
import { FormInterface } from '@/utils/form/interface';

const inputs:Input[] = [
    new Input(convertToRequred(nameInput)),
    new Input(convertToRequred(breifInput)),
    new Input(convertToRequred(priceInput)),
    new Input(imgInput),
    new Input(activeInput)
]
const params :FormInterface = {
    inputs
}

const roleForm = new Form(params)

export default roleForm