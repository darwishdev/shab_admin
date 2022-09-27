import { titleInput } from './../../../utils/form/inputs/InputStore';
import Form  from '@/utils/form/Form';
import { FormInterface } from '@/utils/form/interface';
import {skillsInput , nameFilterInput  } from '@/utils/form/inputs/InputStore';
import Input from '@/utils/form/inputs/Input';
const inputs:Input[] = [
    new Input(nameFilterInput),
    new Input(titleInput),
    new Input(skillsInput),
]
const params :FormInterface = {
    inputs
}

const eventsFilters = new Form(params)

export default eventsFilters