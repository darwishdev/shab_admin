<template>
<div>
  <h3 class="mb-8">{{$t(input.label)}}</h3>
   <ejs-richtexteditor @change="change" ref="defaultRTE" :height="400">
        <div v-html="initial"></div>
    </ejs-richtexteditor>
</div>
</template>



<script>
import {bus} from '@/main'
import { Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
    import Vue from "vue";
    export default Vue.extend({
        props:['input' , 'initial'],
        provide: {
          richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
        },
        methods:{
          change(val){
             bus.$emit("changeFormStateKey", {key: this.input.name, value : val.value});
            console.log(val.value)
            // var rteValue = this.$refs.rteObj.ej2Instances.value;
            this.$emit('input' , val.value)
          }
        },
        watch:{
          "$refs.rteObj.ej2Instances.value":(val) => {
            console.log(val)
          }
        }
    })
</script>

<style>
@import "../../../scss/components/rich.css";

</style>