import { EditAction } from './../../factory';
// import { GlobaleTableAction } from '@/types';
import DataTable  from '@/utils/datatable/components/datatable.vue'
import { ActionsParamInterface } from './actionsInterface'
import { GlobaleTableAction } from '@/utils/datatable/datatableInterface'
import i18n from '@/i18n'
import Vue from 'vue'
import { Delete } from "@/repositories/global"
import router from "@/router"
import {Respond} from "@/repositories/requests"
import ActionsComponent  from '@/utils/datatable/components/actions.vue'
import store  from '@/store'
import { bus } from '@/main'
export default class ActionsHeader{ 
  table:string
  text: string = i18n.t('actions').toString()
  key: string = ''
  isImage?: boolean = false
  total?: number = 0
  actions?: GlobaleTableAction[]
  item : any

  public constructor(tale:string , actions:ActionsParamInterface | GlobaleTableAction[] ){
    this.table = tale
   if (Array.isArray(actions)){
    this.actions = actions || []
   }else {
    let curActions = actions as ActionsParamInterface
    this.actions=[]
     if (curActions.chat) this.actions.push(this._chatAction())
     if (curActions.edit) this.actions.push(this._editAction())
     if (curActions.view) this.actions.push(this._viewAction())
     if (curActions.delete) this.actions.push(this._deleteAction())
     if (curActions.approve) this.actions.push(this._approveAction())
     if (curActions.decline) this.actions.push(this._declineAction())
     if (curActions.pend) this.actions.push(this._pendAction())
     if (curActions.respond) this.actions.push(this._respondAction())
   } 
  }
  
  private _editAction :() => GlobaleTableAction = () => {
    let action : GlobaleTableAction = {
      title : 'edit',
      icon : 'mdi-file-edit-outline',
      action : this.edit,
    }
    return action
  }

  private _chatAction :() => GlobaleTableAction = () => {
    let action : GlobaleTableAction = {
      title : 'chat',
      icon : 'mdi-message-outline',
      action : this.chat,
    }
    return action
  }

  private _approveAction :() => GlobaleTableAction = () => {
    let action : GlobaleTableAction = {
      title : 'approve',
      icon : 'mdi-thumb-up-outline',
      action : this.approve,
    }
    return action
  }
  private _pendAction :() => GlobaleTableAction = () => {
    let action : GlobaleTableAction = {
      title : 'pend',
      icon : 'mdi-briefcase-clock-outline',
      action : this.pend,
    }
    return action
  }
  private _respondAction :() => GlobaleTableAction = () => {
    let action : GlobaleTableAction = {
      title : 'respond',
      icon : 'mdi-briefcase-clock-outline',
      action : this.openResponModal,
    }
    return action
  }

  

  private _declineAction :() => GlobaleTableAction = () => {
    let action : GlobaleTableAction = {
      title : 'decline',
      icon : 'mdi-close-circle-outline',
      action : this.decline,
    }
    return action
  }

  private _viewAction :() => GlobaleTableAction = () => {
    let action : GlobaleTableAction = {
      title : 'view',
      icon : 'mdi-eye-outline',
      action : this.view,
    }
    return action
  }
  private _deleteAction :() => GlobaleTableAction = () => {
    let action : GlobaleTableAction = {
      title : 'delete',
      icon : 'mdi-delete-outline',
      action : this.delete,
    }
    return action
  }

  public openResponModal = (item : any) => {
    let st = store as unknown as any
    st.commit('ui/respondModal' , {status: true ,id: item.UserId})
  }
  public delete = (item : any) => {
    Delete({table : this.table ,id : item.Id}).then((res:any) => {
      bus.$emit('getTableData');
    })
  }

  public edit = (item : any) => {
    router.push({name : `${router.currentRoute.name}-edit` , params:{id : item.Id}})
  }



  public respond = (item: any , action: string ) => {
    Respond(item.Id , this.table , action).then((res : any) => {
      bus.$emit('getTableData');
    })
  }
  public approve = (item : any) => {
    this.respond(item ,'approved')
  }

  public decline = (item : any) => {
    this.respond(item ,'declined')
  }
  public pend = (item : any) => {
    this.respond(item ,'pending' )
  }
  public view = (item : any) => {
    router.push({name : `${router.currentRoute.name}-view` , params:{id : item.Id}})
  }
  public chat = (item : any) => {
    router.push({name : `chat` , query:{id : item.Id}})
  }
  public  generateColumnHtml(item : any) {
    let c  = Vue.extend(ActionsComponent)
    return c
  }
}