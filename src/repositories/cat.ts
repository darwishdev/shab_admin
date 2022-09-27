import Api from '@/utils/axios/Api';
const Http = Api.getInstance();

export const ListCatsByType = (type:string) => {
    return new Promise((resolve, reject) => {
        Http.get(`cats/${type}`)
        .then((d) => {
            resolve(d)
        }).catch((e:any) => {
            reject(e)
        })
    })
}
