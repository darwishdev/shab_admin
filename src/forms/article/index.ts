import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    titleInput,
    convertToRequred,
    articlesStatusInput,
    postsCategoryInput,
    viewsCounterInput,
    contentInput,
    imgInput2 
} from '@/utils/form/inputs/InputStore'
import { FormInterface } from '@/utils/form/interface';

const inputs:Input[] = [
    new Input(convertToRequred(titleInput)),
    new Input(convertToRequred(imgInput2)),
    new Input(viewsCounterInput),
    new Input(convertToRequred(postsCategoryInput())),
    new Input(convertToRequred(articlesStatusInput)),
    new Input(convertToRequred(contentInput))
]

const params :FormInterface = {
    inputs
}

const proejctForm = new Form(params)

export default proejctForm