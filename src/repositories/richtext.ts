import Api from '@/utils/axios/Api';
import user from "@/models/user"
const Http = Api.getInstance();


export const UpdateRichText = (id:number ,payload:Object) => {
    return new Promise((resolve, reject) => {
        Http.put(`rich/${id}` , payload)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const RichTextById = (id:number) => {
    return new Promise((resolve, reject) => {
        Http.get(`rich/id/${id}`).then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}

