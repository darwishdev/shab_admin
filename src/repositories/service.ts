import Api from '@/utils/axios/Api';
import serviceReqModel from '@/models/service'
const Http = Api.getInstance();







export const UpdateService = (payload:Object , id:number) => {
    return new Promise((resolve, reject) => {
        Http.put(`services/${id}` , payload)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}

export const CreateService = (payload:Object) => {
    return new Promise((resolve, reject) => {
        Http.post(`services` , payload)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const DeleteService = (id:number) => {
    return new Promise((resolve, reject) => {
        Http.delete(`services/${id}`)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const ServiceById = (id:number) => {
    return new Promise((resolve, reject) => {
        Http.get(`services/${id}`)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}



export const Approve = (id:number) :Promise<number> => {
    return new Promise((resolve, reject) => {
        Http.put(`requests/services/${id}`)
        .then((d) => {
             resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const Decline = (id:number) :Promise<number> => {
    return new Promise((resolve, reject) => {
        Http.delete(`services/${id}`)
        .then((d) => {
             resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}

export const Service = (id:number) :Promise<serviceReqModel> => {
    return new Promise((resolve, reject) => {
        Http.get(`requests/services/${id}`)
        .then((d) => {
             resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}
