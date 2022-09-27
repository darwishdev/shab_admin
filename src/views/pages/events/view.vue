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
       title: 'events',
       table: 'events',
       viewable:[
            'Id',
            'Title',
            'Img',
            'Breif',
            'Day',
            'Month',
            'Year',
            'Date',
            'Price',
            'Featured',
            'Created_at',
            'CatName',
            'Video'
      ],
       id: parseInt(router.currentRoute.params.id)
     }
     const d = new View(details)
     return d
   }
  },
}
</script>
