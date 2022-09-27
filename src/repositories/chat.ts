import Api from '@/utils/axios/Api';
import {inbox , msg , msgRequest} from "@/models/chat"

const Http = Api.getInstance();


export type UserType = {
    Id:number,
    Admin:boolean,
    Name:string,
    Name_ar:string,
    Email:string,
    Img:string,
    Serial:string,
    Points:number,
    Role_id:number,
    City_id:number,
    Phone:string,
    Breif:string,
    Role:string,
    Color:string,
    Password:string
}




export const ListAllChats = () :Promise<{chats : inbox[] , users: inbox[]}> => {
    return new Promise((resolve, reject) => {
        Http.get('chat')
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const ListChatMsgs = (id:number) :Promise<msg[]> => {
    return new Promise((resolve, reject) => {
        Http.get(`chat/${id}`)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}


export const CreateMsg = (payload:msgRequest) :Promise<number> => {
    return new Promise((resolve, reject) => {
        Http.post(`chat` , payload)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}

