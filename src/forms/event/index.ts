import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    priceInput,
    titleInput,
    breifInput,
    convertToRequred,
    imgInput, 
    videoInput,
    featuredInput,
    eventsCategoryInput,
    dateInput
} from '@/utils/form/inputs/InputStore'
import { FormInterface } from '@/utils/form/interface';

const inputs:Input[] = [
    new Input(convertToRequred(titleInput)),
    new Input(convertToRequred(priceInput)),
    new Input(videoInput),
    new Input(convertToRequred(eventsCategoryInput())),
    new Input(convertToRequred(dateInput)),
    new Input(imgInput),
    new Input(convertToRequred(featuredInput)),
    new Input(convertToRequred(breifInput)),
]

const params : FormInterface = {
    inputs
}
const eventForm = new Form(params)

export default eventForm