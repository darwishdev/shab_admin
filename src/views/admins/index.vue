<template>
    <datatable :table="data"/>
</template>
<script lang="ts">
import Vue from "vue";
import data from "@/datatables/users/admins";
import datatable from "@/utils/datatable/components/datatable.vue";
export default Vue.extend({
  name: "admins-list",
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
