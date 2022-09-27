import { phoneInput, emailInput } from './../../../utils/form/inputs/InputStore';
import { roleInput, userNameInput } from '@/utils/form/inputs/InputStore';
import Form  from '@/utils/form/Form';
import { FormInterface } from '@/utils/form/interface';
import { statusInput, dateToInput, dateFromInput , nameFilterInput , emailFilterInput } from '@/utils/form/inputs/InputStore';
import Input from '@/utils/form/inputs/Input';
const inputs:Input[] = [
    new Input(statusInput),
    new Input(nameFilterInput),
    new Input(emailFilterInput),
    new Input(phoneInput),
    new Input(roleInput),
    new Input(dateFromInput),
    new Input(dateToInput)
]
const params :FormInterface = {
    inputs
}

const eventsFilters = new Form(params)

export default eventsFilters