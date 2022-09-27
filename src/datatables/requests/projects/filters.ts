import Form  from '@/utils/form/Form';
import { FormInterface } from '@/utils/form/interface';
import { statusInput, dateToInput, titleInput, phoneInput, dateFromInput ,emailFilterInput, nameFilterInput } from '@/utils/form/inputs/InputStore';
import Input from '@/utils/form/inputs/Input';
const inputs:Input[] = [
    new Input(statusInput),
    new Input(nameFilterInput),
    new Input(emailFilterInput),
    new Input(titleInput),
    new Input(phoneInput),
    new Input(dateFromInput),
    // new Input(statusInput),

    new Input(dateToInput)
]
const params :FormInterface = {
    inputs
}

const eventsFilters = new Form(params)

export default eventsFilters