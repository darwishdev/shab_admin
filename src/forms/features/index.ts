import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    nameInput,
    breifInput,
    levelInput,
    convertToRequred,
} from '@/utils/form/inputs/InputStore'
import { FormInterface } from '@/utils/form/interface';

const inputs:Input[] = [
    new Input(convertToRequred(nameInput)),
    new Input(convertToRequred(breifInput)),
    new Input(convertToRequred(levelInput)),
]
const params :FormInterface = {
    inputs
}

const featuresForm = new Form(params)

export default featuresForm