import Form  from '@/utils/form/Form';
import { FormInterface } from '@/utils/form/interface';
import { roleInput , nameFilterInput } from './../../utils/form/inputs/InputStore';
import Input from '@/utils/form/inputs/Input';
const inputs:Input[] = [
    new Input(roleInput),
    new Input(nameFilterInput),
]
const params :FormInterface = {
    inputs
}

const featuresFilters = new Form(params)

export default featuresFilters