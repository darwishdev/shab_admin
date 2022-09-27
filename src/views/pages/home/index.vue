<template>
<div>
    <datatable :table="data"/>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import data from "@/datatables/richtext";
import datatable from "@/utils/datatable/components/datatable.vue";
export default Vue.extend({
  name: "consultutns-list",
  components:{
    datatable
  },
  watch: {
   
    "$route.name" :{
      handler(newValue) {
        console.log("newValue")
        console.log(newValue)
      }
    }
  },
  data(){
    return {
        data
    }
  },
});
</script>
