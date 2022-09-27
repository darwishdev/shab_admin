import Input from '@/utils/form/inputs/Input';
import { FormInterface } from '@/utils/form/interface';
import Form from '@/utils/form/Form';
import { nameFilterInput ,emailFilterInput} from '@/utils/form/inputs/InputStore'
const inputs:Input[] = [
    new Input(nameFilterInput),
    new Input(emailFilterInput),
]


const params :FormInterface = {
    inputs
}
const cashtrayFilter = new Form(params)

export default cashtrayFilter