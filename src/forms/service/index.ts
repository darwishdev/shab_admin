import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    nameInput,
    convertToRequred,
    iconInput
} from '@/utils/form/inputs/InputStore'
import { FormInterface } from '@/utils/form/interface';

const inputs:Input[] = [
    new Input(convertToRequred(nameInput)),
    new Input(convertToRequred(iconInput)),
]
const params :FormInterface = {
    inputs
}

const roleForm = new Form(params)

export default roleForm