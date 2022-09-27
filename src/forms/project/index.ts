import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    websiteInput,
    cityInput,
    instagramInput,
    projectStatusInput,
    convertToRequred,
    twitterInput,
    titleInput,
    breifInput,
    featuredInput,
    projectsCategoryInput ,
    imgInput2 ,
    emailInput,
    phoneInput,
    fundInput,
    activeInput,
} from '@/utils/form/inputs/InputStore'
import { FormInterface } from '@/utils/form/interface';

const inputs:Input[] = [
    new Input(convertToRequred(titleInput)),
    new Input(convertToRequred(fundInput)),
    new Input(convertToRequred(projectsCategoryInput())),
    new Input(convertToRequred(cityInput)),
    new Input(convertToRequred(imgInput2)),
    new Input(convertToRequred(projectStatusInput)),
    new Input(emailInput),
    
    
    new Input(phoneInput),
    new Input(websiteInput),
    new Input(instagramInput),
    new Input(twitterInput),
    new Input(featuredInput),
    new Input(activeInput),
    new Input(breifInput),
]

const params :FormInterface = {
    inputs
}

const proejctForm = new Form(params)

export default proejctForm