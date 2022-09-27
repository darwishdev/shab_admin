import { Delete } from "@/repositories/global"
import {Respond} from "@/repositories/requests"
import store  from '@/store'
import { bus } from '@/main'
import { GlobaleTableAction } from './datatableInterface';
import router from '@/router'
import { UsersExcel } from "@/repositories/user";
export const CreateAction : GlobaleTableAction = {
      title : "  create",
      icon : "  mdi-plus",
      action : () =>  router.push({ name: `${router.currentRoute.name}-create` })
}
     
export const DownloadExcelAction : GlobaleTableAction = {
     title:'download_excel',
     icon:'mdi-download-outline',
     action:() => {
      console.log("router.currentRoute.query")
      console.log(router.currentRoute)
      UsersExcel(router.currentRoute.name , router.currentRoute.query).then((r: any) => {
            let source = `${process.env.VUE_APP_IMG_URL}${r}`;
            console.log(source);
            console.log(r);
            var el = document.createElement("a");
            el.setAttribute("href", source);
            el.setAttribute("target", "_blank");
            document.body.appendChild(el);
            el.click();
            el.remove();
          })
     }

}


   
export const UploadExcelAction : GlobaleTableAction = {
  title:'upload_excel',
  icon:'mdi-upload-outline',
  action:() => {
    console.log("router.currentRoute.query")
    console.log(router.currentRoute)
    UsersExcel(router.currentRoute.name , router.currentRoute.query).then((r: any) => {
      let source = `${process.env.VUE_APP_IMG_URL}${r}`;
      console.log(source);
      console.log(r);
      var el = document.createElement("a");
      el.setAttribute("href", source);
      el.setAttribute("target", "_blank");
      document.body.appendChild(el);
      el.click();
      el.remove();
    })
  }

}



export const  EditAction : () => GlobaleTableAction = () => {
      let action : GlobaleTableAction = {
        title : 'edit',
        icon : 'mdi-file-edit-outline',
        action : edit,
      }
      return action
    }
  
    export const  ApproveAction : () => GlobaleTableAction = () => {
      let action : GlobaleTableAction = {
        title : 'approve',
        icon : 'mdi-thumb-up-outline',
        action : approve,
      }
      return action
    }
    export const  PendAction : () => GlobaleTableAction = () => {
      let action : GlobaleTableAction = {
        title : 'pend',
        icon : 'mdi-briefcase-clock-outline',
        action : pend,
      }
      return action
    }
    export const  RespondAction : () => GlobaleTableAction = () => {
      let action : GlobaleTableAction = {
        title : 'respond',
        icon : 'mdi-briefcase-clock-outline',
        action : openResponModal,
      }
      return action
    }
  
    
  
    export const  DeclineAction : () => GlobaleTableAction = () => {
      let action : GlobaleTableAction = {
        title : 'decline',
        icon : 'mdi-close-circle-outline',
        action : decline,
      }
      return action
    }
  
    export const  ViewAction : () => GlobaleTableAction = () => {
      let action : GlobaleTableAction = {
        title : 'view',
        icon : 'mdi-eye-outline',
        action : view,
      }
      return action
    }
    export const  DeleteAction : () => GlobaleTableAction = () => {
      let action : GlobaleTableAction = {
        title : 'delete',
        icon : 'mdi-delete-outline',
        action : remove,
      }
      return action
    }
  
    const openResponModal = (item : any) => {
      let st = store as unknown as any
      st.commit('ui/respondModal' , {status: true ,id: item.UserId})
    }
    const remove = (item : any) => {
      const table = router.currentRoute.name
      Delete({table : table ,id : item.Id}).then((res:any) => {
        bus.$emit('getTableData');
      })
    }
  
    const edit = (item : any) => {
      router.push({name : `${router.currentRoute.name}-edit` , params:{id : item.Id}})
    }
  
  
  
    const respond = (item: any , action: string ) => {
      const table = router.currentRoute.name
      Respond(item.Id , table , action).then((res : any) => {
        bus.$emit('getTableData');
      })
    }
    const approve = (item : any) => {
      respond(item ,'approved')
    }
  
    const decline = (item : any) => {
      respond(item ,'declined')
    }
    const pend = (item : any) => {
      respond(item ,'pending' )
    }
    const view = (item : any) => {
      router.push({name : `${router.currentRoute.name}-view` , params:{id : item.Id}})
    }