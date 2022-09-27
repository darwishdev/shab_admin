
import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    convertToRequred,
    nameInput
} from '@/utils/form/inputs/InputStore'
import { FormInterface } from '@/utils/form/interface';

const inputs:Input[] = [
    new Input(convertToRequred(nameInput))
]

const params :FormInterface = {
    inputs
}

const cityForm = new Form(params)

export default cityForm


// import Input from '@/utils/form/inputs/Input';
// import Form from '@/utils/form/Form';
// import { 
//     convertToRequred,
//     nameInput
// } from '@/utils/form/inputs/InputStore'

// const inputs:Input[] = [
//     new Input(convertToRequred(nameInput))
// ]

// const cityForm = new Form(inputs , ()=>{})

// export default cityForm