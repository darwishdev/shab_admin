import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    linkInput,
    nameInput,
    convertToRequred,
    imgInput, 
    breifInput,
    videosCategoryInput,
} from '@/utils/form/inputs/InputStore'
import { FormInterface } from '@/utils/form/interface';

const inputs:Input[] = [
    new Input(convertToRequred(nameInput)),
    new Input(convertToRequred(breifInput)),
    new Input(convertToRequred(linkInput)),
    new Input(convertToRequred(imgInput)),
    new Input(convertToRequred(videosCategoryInput())),
]

const params : FormInterface = {
    inputs
}
const videoForm = new Form(params)

export default videoForm