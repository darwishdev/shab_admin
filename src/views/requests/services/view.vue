<template>
    <v-container>
        <v-card :elevation="1">
            <v-card-title>
                 <v-btn
                    @click.prevent="send"
                    color="green"
                    class="mr-4"
                  >
                  <v-icon
                    small
                  >
                    mdi-thumb-up-outline
                  </v-icon>
                  ارسال رسالة
                </v-btn>               
            </v-card-title>
            <v-card-text>
                <div class="view-list" v-if="loading">
                    <v-skeleton-loader
                         v-for="(key, index) in viewable" :key="index"
                        type="list-item-two-line"
                        ></v-skeleton-loader>

                </div>
                <div class="view-list" v-else>
                    <div class="view-item"  v-for="(key, index) in viewable" :key="index">
                        <h2>
                            {{key}}
                        </h2>
                        <v-img v-if="key == 'Img'" :src="item[key]" :width="200"></v-img>
                        <div v-else-if="key == 'Content'" v-html="item[key]"></div>
                        <h3 v-else-if="item[key]">
                            {{item[key]}}
                        </h3>
                        <h3 v-else>
                            {{$t('not_defined')}}
                        </h3>
                    </div>
                </div>
            </v-card-text>
    </v-card>
     <v-dialog v-model="msgModal" width="600">
      <v-card>
        <v-card-title text-center>
                 <!-- <h2> ارسل رسالة الي العميل في صندوقه الخاص</h2> -->
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-textarea
                    label="ارسل رسالة الي العميل في صندوقه الخاص"
                    counter="400"
                    v-model="msg"
                    outlined
                    ></v-textarea>
            </v-col>
            <v-col cols="12">
            <v-btn class="app-btn" @click.prevent="sendMessage(approvedServiceId)">ارسال</v-btn>
            </v-col>
          </v-row>

        </v-card-text>

      </v-card>
    </v-dialog>
    </v-container>
</template>
<script lang="ts">
import serviceReqModel , {serviceReqPlaceholder} from "@/models/service"
import router from '@/router'
import Vue from "vue";
import {Service  , Decline} from "@/repositories/service"
import {Approve} from '@/repositories/user'
export default Vue.extend({
  name: "posts-list",
  data() {
      return {
            loading : true,
            item : serviceReqPlaceholder,
            approvedServiceId: 0,
            msgModal : false,
            dialog : false,
            msg : "",
            viewable : [
                    'Name',
                    'Email',
                    'Phone',
                    'Breif',
                    'CreatedAt',
            ]
      }
  },   
  methods:{
        send(id:number){
                this.approvedServiceId = id
                this.msgModal = true
              
        },
        sendMessage(id:number){
            // Approve( router.currentRoute.path.split('/')[2], id).then((res) => {
            //     this.approvedServiceId = 0
            //     this.msgModal = false
            //     this.goBack()
            // })
            console.log("Asd")
        },
        goBack(){
            router.push({name : "services-pending"})
        }
  },
  created()  {
      Service(parseInt(router.currentRoute.params.id)).then((res:serviceReqModel) => {
          this.item = res
          this.loading = false
      })
  }
});
</script>