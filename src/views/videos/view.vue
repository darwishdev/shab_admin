<template>
<div class="py-12">
  <v-container>
    <v-card>
      <ViewCompenent :d="d"/>
    </v-card>
  </v-container>
</div>
</template>
<script lang="ts" >
import View from '@/utils/crud/view'
import ViewInterface from '@/utils/crud/viewInterface'
import ViewCompenent from '@/utils/crud/view.vue'
import router from '@/router'
export default {
  components:{
    ViewCompenent
  },
  computed:{
   d(){
     const details : ViewInterface = {
       title: 'videos',
       table: 'videos',
       viewable:[
            "Id",
            "Name",
            "Breif",
            "Url",
            "Image",
            "CategoryName"
      ],
       id: parseInt(router.currentRoute.params.id)
     }
     const d = new View(details)
     return d
   }
  },
}
</script>
