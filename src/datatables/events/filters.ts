import Form  from '@/utils/form/Form';
import { FormInterface } from '@/utils/form/interface';
import { activeFilterInput, titleInput, priceToInput,priceFromInput , dateToInput, dateFromInput , eventsCategoryInput } from './../../utils/form/inputs/InputStore';
import Input from '@/utils/form/inputs/Input';
const inputs:Input[] = [
    new Input(titleInput),
    // new Input(activeFilterInput),
    new Input(eventsCategoryInput()),
    new Input(dateFromInput),
    new Input(dateToInput),
    new Input(priceFromInput),
    new Input(priceToInput),
]
const params :FormInterface = {
    inputs
}

const eventsFilters = new Form(params)

export default eventsFilters