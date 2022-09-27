import Api from '@/utils/axios/Api';
import serviceReqModel from '@/models/service'
const Http = Api.getInstance();








export const Video = (id:number) => {
    return new Promise((resolve, reject) => {
        Http.get(`videos/${id}`)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const UpdateVideo = (id:number , payload:Object , ) => {
    return new Promise((resolve, reject) => {
        Http.put(`videos/${id}` , payload)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}

export const CreateVideo = (payload:Object) => {
    return new Promise((resolve, reject) => {
        Http.post(`videos` , payload)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const DeleteVideo = (id:number) => {
    return new Promise((resolve, reject) => {
        Http.delete(`videos/${id}`)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}

