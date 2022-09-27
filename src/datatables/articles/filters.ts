import { userNameInput } from '@/utils/form/inputs/InputStore';
import Form  from '@/utils/form/Form';
import { FormInterface } from '@/utils/form/interface';
import { activeFilterInput, titleInput, priceToInput,priceFromInput , dateToInput, dateFromInput , eventsCategoryInput, nameFilterInput, postsCategoryInput } from './../../utils/form/inputs/InputStore';
import Input from '@/utils/form/inputs/Input';
const inputs:Input[] = [
    new Input(nameFilterInput),
    new Input(userNameInput),
    new Input(dateFromInput),
    new Input(dateToInput),
    new Input(postsCategoryInput())
]
const params :FormInterface = {
    inputs
}

const eventsFilters = new Form(params)

export default eventsFilters