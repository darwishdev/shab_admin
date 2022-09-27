import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    roleInput, 
    featuredInput, 
    nameArInput2, 
    nameInput,
    emailInput, 
    passwordInput,
    phoneInput,
    websiteInput,
    instagramInput,
    convertToRequred,
    twitterInput,
} from '@/utils/form/inputs/InputStore'
import { FormInterface } from '@/utils/form/interface';

const inputs:Input[] = [
    new Input(convertToRequred(nameArInput2)),
    new Input(convertToRequred(nameInput)),
    new Input(emailInput),
    new Input(convertToRequred(roleInput)),
    new Input(convertToRequred(phoneInput)),
    new Input(passwordInput),
    new Input(featuredInput),
    new Input(websiteInput),
    new Input(instagramInput),
    new Input(twitterInput),
]

const params :FormInterface = {
    inputs
}
const editUserForm = new Form(params)
export default editUserForm