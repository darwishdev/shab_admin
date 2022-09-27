import Api from '@/utils/axios/Api';
import project from "@/models/project"
const Http = Api.getInstance();
export const Respond = (id:number , table:string , action: string) :Promise<project> => {
    return new Promise((resolve, reject) => {
        Http.put(`requests/${table}/${action}/${id}`)
        .then((d) => {
             resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}

