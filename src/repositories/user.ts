import Api from '@/utils/axios/Api';
import user from "@/models/user"
const Http = Api.getInstance();







export const Login = (payload:Object) => {
    return new Promise((resolve, reject) => {
        Http.post('login' , payload)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}



export const Approve = (type:string , id:number) => {
    return new Promise((resolve, reject) => {
        Http.put(`requests/${type}/${id}`)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}
export const ApproveService = (payload:object , id:number) => {
    return new Promise((resolve, reject) => {
        Http.put(`requests/services/${id}` , payload)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const Notifications = () => {
    return new Promise((resolve, reject) => {
        Http.get('me/notifications')
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}
export const ListUsers = () => {
    return new Promise((resolve, reject) => {
        Http.get('users')
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}

export const Validate = () :Promise<boolean> => {
    return new Promise((resolve , reject) => {
        Http.get<boolean>(`validate`).then((res) => {
            resolve(res)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const UserById = (id:number) :Promise<user> => {
    return new Promise((resolve , reject) => {
        Http.get<user>(`users/${id}`).then((res) => {
            resolve(res)
        }).catch((e:any) => {
            reject(e)
        })
    })
}



export const UsersExcel = (table : string , payload : object) :Promise<user> => {
    return new Promise((resolve , reject) => {
        Http.post<user>(`${table}/excel` , payload).then((res) => {
            resolve(res)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const UpdateUser = (payload:Object , id:number) => {
    return new Promise((resolve, reject) => {
        Http.put(`users/${id}` , payload)
        .then((d) => {
            resolve(d.data)
        }).catch((e:any) => {
            reject(e)
        })
    })
}

