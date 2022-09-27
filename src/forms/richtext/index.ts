import { FormInterface } from '@/utils/form/interface';
import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    titleInput,
    iconInput,
    imgInput,
    valueInput
} from '@/utils/form/inputs/InputStore'

const inputs:Input[] = [
    new Input(titleInput),
    new Input(iconInput),
    new Input(imgInput),
    new Input(valueInput),
]
const params : FormInterface = {
    inputs
}
const richTextForm = new Form(params)

export default richTextForm