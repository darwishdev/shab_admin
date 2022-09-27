export type inbox  = {
    Id:number,
    Name:string,
    Img:string
}

export type msg  = {
    Id:number,
    Msg:string,
    Mine:boolean,
    Name:string,
    CreatedAt:string,
    Seen:boolean
}

export type msgRequest  = {
    ToId:number,
    Msg:string
}
