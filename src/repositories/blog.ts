import Api from '@/utils/axios/Api';
import post from "@/models/post"

const Http = Api.getInstance();









export const Approve = (id:number) :Promise<post> => {
    return new Promise((resolve, reject) => {
        Http.put(`requests/articles/${id}`)
        .then((d) => {
             resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const Decline = (id:number) :Promise<post> => {
    return new Promise((resolve, reject) => {
        Http.delete(`articles/${id}`)
        .then((d) => {
             resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}

export const Post = (id:number) :Promise<post> => {
    return new Promise((resolve, reject) => {
        Http.get(`articles/${id}`)
        .then((d) => {
             resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}
