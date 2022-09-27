import Form  from '@/utils/form/Form';
import { FormInterface } from '@/utils/form/interface';
import {  statusInput } from '@/utils/form/inputs/InputStore';
import Input from '@/utils/form/inputs/Input';
const inputs:Input[] = [
    new Input(statusInput),
]
const params :FormInterface = {
    inputs
}

const requesFilters = new Form(params)

export default requesFilters