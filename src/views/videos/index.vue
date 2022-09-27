<template>
<div>
    <datatable :table="data"/>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import data from "@/datatables/videos";
import datatable from "@/utils/datatable/components/datatable.vue";
export default Vue.extend({
  name: "videos-list",
  components:{
    datatable
  },
  data(){
    return {
        data
    }
  },
});
</script>
