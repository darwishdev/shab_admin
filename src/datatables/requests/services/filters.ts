import Form  from '@/utils/form/Form';
import { FormInterface } from '@/utils/form/interface';
import { breifFilterInput, roleInput, serviceInput, nameFilterInput, emailFilterInput, statusInput } from '@/utils/form/inputs/InputStore';
import Input from '@/utils/form/inputs/Input';
const inputs:Input[] = [
    new Input(statusInput),
    new Input(nameFilterInput),
    new Input(roleInput),
    new Input(serviceInput),
    new Input(nameFilterInput),
    new Input(emailFilterInput),
    new Input(breifFilterInput)
]
const params :FormInterface = {
    inputs
}

const eventsFilters = new Form(params)

export default eventsFilters