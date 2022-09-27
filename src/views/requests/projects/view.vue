<template>
    <v-container>
        <v-card :elevation="1">
            <v-card-title>
                 <v-btn
                    @click.prevent="approve"
                    color="green"
                    class="mr-4"
                  >
                  <v-icon
                    small
                  >
                    mdi-thumb-up-outline
                  </v-icon>
                  قبول

                </v-btn>
                 <v-btn
                    @click.prevent="decline"
                    color="red"
                    class="mr-4"
                  >
                  <v-icon
                    small
                  >
                    mdi-thumb-down-outline
                  </v-icon>
                  رفض
                </v-btn>
                <v-btn
                    @click.prevent="wait"
                    color="warning"
                    class="mr-4"
                  >
                  <v-icon
                    small
                  >
                    mdi-pencil
                  </v-icon>
                  انتظار

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
    </v-container>
</template>
<script lang="ts">
import projectModel , {projectPlaceholder} from "@/models/project"
import Vue from "vue";
import {Project , Approve , Decline} from "@/repositories/project"
import router from '@/router'
export default Vue.extend({
  name: "projects-list",
  data() {
      return {
          loading : true,
          item : projectPlaceholder,
          viewable : [
                'UserName',
                'CategoryName',
                'Title',
                'Img',
                'Views',
                'Status',
                'Content',
          ]
      }
  },   
  methods:{
      approve(){
            Approve(parseInt(router.currentRoute.params.id)).then((res:projectModel) => {
               this.goBack()
            })
      },
      decline(){
        Decline(parseInt(router.currentRoute.params.id)).then((res:projectModel) => {
            this.goBack()
        })
      },
      wait(){
        this.goBack()
      },
      goBack(){
        router.push({name : "projects-pending"})
      }
  } ,
  created()  {
      Project(parseInt(router.currentRoute.params.id)).then((res:projectModel) => {
          this.item = res
          this.loading = false
      })
  }
});
</script>