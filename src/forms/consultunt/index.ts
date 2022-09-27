import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    nameArInput,
    titleInput,
    breifInput,
    convertToRequred,
    imgInput, 
    skillsInput1,
    setInputCols,
    skillsInput2,
    skillsInput3
} from '@/utils/form/inputs/InputStore'
import { FormInterface } from '@/utils/form/interface';

const inputs:Input[] = [
    new Input(convertToRequred(nameArInput)),
    new Input(convertToRequred(titleInput)),
    new Input(convertToRequred(setInputCols(skillsInput1 , 4))),
    new Input(setInputCols(skillsInput2 , 4)),
    new Input(setInputCols(skillsInput3 , 4)),
    new Input(setInputCols(imgInput,12)),
    new Input(convertToRequred(breifInput)),
]

const params : FormInterface = {
    inputs
}
const eventForm = new Form(params)

export default eventForm