<template>
<div class="py-12">
  <v-container>
    <v-card>
      <v-card-text >
         <v-form ref="form" v-model="valid">
                <v-row>
                <v-col cols="12" >
                  <p class="danger" v-if="error">{{error}}</p>
                </v-col>
                <v-col cols="12" md="6" v-for="(input , index) in inputs" :key="index">
                    <v-text-field
                    :label="input.label"
                    @keyup.enter="$refs[inputs[index+1].key].focus()"
                    :ref="input.key"
                    v-model="form[input.key]"
                    :type="input.key == 'Password' ? 'password':'text' "
                    :disabled="input.disabled"
                    :rules="typeof CreateUpdateServiceValidation[input.key] != 'undefined' ? CreateUpdateServiceValidation[input.key] : []"
                    :hint="input.hint ? input.hint : ''"
                    :error-messages="errors[input.key]"
                    outlined
                    ></v-text-field>
                    <p class="app-error" v-if="input.key == 'Email' && error != null" >{{error}}</p>

                </v-col>

                <v-col cols="12" class="text-center">
                    <v-btn  :loading="loading" @click.prevent="submit" class="w-full" color="primary">تحديث</v-btn>
                </v-col>
                </v-row>
            </v-form>

      </v-card-text>
    </v-card>
  </v-container>
</div>
</template>
<script >
import {required , CreateUpdateServiceValidation } from '@/utils/validations/validations.ts'
import {Upload} from '@/repositories/global'
import { CreateService } from '@/repositories/service'
import router from '@/router'

// import {snackBar} from '@/utils/Helpers'
export default {
    data(){
        return  {
            //  "Password"  ,"Phone"    ,"Gender"    ,"Website"  ,"Twitter"  ,"Instagram" 
            img:null,
             error:null,
            loading:false,
            valid:true,
          
            CreateUpdateServiceValidation,
            inputs:[
              {
                label : "الاسم",
                key:"Name"
                },
                        
                {
                label:"الايقونة",
                key:"Icon"
                }   
            ],  

            errors:{},
            form:{},
            required,
                
        }
    },
    methods:{
      submit() {
        this.$refs.form.validate()
          if(this.valid){
             this.loading = true
                CreateService(this.form ).then(d => {
                    this.error = null
                    this.loading = false
                    this.error =null
                    router.push("/services")
                    // this.$store.commit('ui/snackBar' , 'تم تحديث البيانات بنجاح')
                    // this.$store.commit('SerCreateService/consultunt' , d)
                    
                })
                .catch((e:any) => {
                    this.loading = false
                    window.scrollTo({
                        top: 300,
                        left: 0,
                        behavior: 'smooth'
                    });
                
                })   
          }
       },
    },
    watch: {
    img:{
        handler: function(val)  {
            let formData = new FormData();
            formData.append('file', val);
            Upload(formData)
            .then(d => {
                console.log(d)
                this.form.Img = d
            })
        },
    }
  },
  
  
}
</script>
