import Form  from '@/utils/form/Form';
import { FormInterface } from '@/utils/form/interface';
import { activeFilterInput, nameFilterInput, priceFromInput , priceToInput } from './../../utils/form/inputs/InputStore';
import Input from '@/utils/form/inputs/Input';
const inputs:Input[] = [
    new Input(nameFilterInput),
    new Input(activeFilterInput),
    new Input(priceFromInput),
    new Input(priceToInput),
]
const params :FormInterface = {
    inputs
}

const rolesFilters = new Form(params)

export default rolesFilters