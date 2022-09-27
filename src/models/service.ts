type serviceReqModel  = {
    Id:number,
    UserId:number,
    CategoryId:number,
    UserName:string,
    UserImg:string,
    CategoryName:string,
    Title:string,
    Img:string,
    Views:string,
    Status:string,
    Content:string,
    Created_at:string,
    Published_at:string
}


export const serviceReqPlaceholder:serviceReqModel = {
    Id:0,
    UserId:0,
    CategoryId:0,
    UserName:"",
    UserImg:"",
    CategoryName:"",
    Title:'',
    Img:'',
    Views:"",
    Status:"",
    Content:"",
    Created_at:"",
    Published_at:""
}
export default serviceReqModel 
