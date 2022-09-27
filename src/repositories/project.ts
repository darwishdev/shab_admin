import Api from '@/utils/axios/Api';
import project from "@/models/project"
const Http = Api.getInstance();









export const Approve = (id:number) :Promise<project> => {
    return new Promise((resolve, reject) => {
        Http.put(`requests/projects/${id}`)
        .then((d) => {
             resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const Decline = (id:number) :Promise<project> => {
    return new Promise((resolve, reject) => {
        Http.delete(`projects/${id}`)
        .then((d) => {
             resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}

export const Project = (id:number) :Promise<project> => {
    return new Promise((resolve, reject) => {
        Http.get(`projects/${id}`)
        .then((d) => {
             resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}
