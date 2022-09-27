import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    nameInput,
    emailInput,
    convertToRequred,
    passwordInput
} from '@/utils/form/inputs/InputStore'
import { FormInterface } from '@/utils/form/interface';

const inputs:Input[] = [
    new Input(convertToRequred(nameInput)),
    new Input(convertToRequred(emailInput)),
    new Input(passwordInput)
]

const params :FormInterface = {
    inputs
}
const editAdminForm = new Form(params)
export default editAdminForm