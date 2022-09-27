import Form  from '@/utils/form/Form';
import { FormInterface } from '@/utils/form/interface';
import { setInputLabel , nameFilterInput,projectStatusInput,userNameInput, projectsCategoryInput , cityInput } from '@/utils/form/inputs/InputStore';
import Input from '@/utils/form/inputs/Input';
const inputs:Input[] = [
    new Input(setInputLabel(nameFilterInput , 'project_name')),
    new Input(userNameInput),
    new Input(projectStatusInput),
    // new Input(cityInput),
    new Input(projectsCategoryInput()),
    new Input(cityInput)
]
const params :FormInterface = {
    inputs
}

const eventsFilters = new Form(params)

export default eventsFilters