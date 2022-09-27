<template>
<div class="py-12">
  <v-container v-if="!loading">
    <Form :form="d.form"/>
     <v-btn color="primary" class="submit-btn mt-8" @click.prevent="submit">{{$t('submit')}}</v-btn>
  </v-container>
</div>
</template>
<script lang="ts">
import Form from '../form/components/Form.vue'
import EditAdd from './editAdd'
import router from '@/router'
// import {snackBar} from '@/utils/Helpers'
export default {
  data(){
    return{
      loading:true
    }
  },
  
 props:{
     d:{
         required: true,
         type:EditAdd
     },
     inject:{
      required:false,
      default:{}
     }
 },
 methods:{
    async submit(){
       this.d.submit().then((res : any) => {
         router.back()
       }).catch((e:any) => {
         console.log(e)
       })
    }
  },
 components:{
     Form
 },
//  beforeRouteLeave (to, from, next) { 
//    this.d.form.resetState()
//    next()
//   },
 async created(){
  this.d.form.injectState(this.inject)
    this.d.form.resetState()
   if (router.currentRoute.params.id) {
     await this.d.setId(parseInt(router.currentRoute.params.id))
   }
   this.loading = false
 }
}
</script>
