<template>
  <v-app>
    <msg-modal/>
    <loading v-if="loading"/>
    <router-view :key="$route.fullpath">
    </router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Loading from "@/components/layouts/Loading.vue";
import MsgModal from "@/components/modals/Msg.vue";
import {mapGetters} from 'vuex'
// import Vuetify from "@/plugins/vuetify";

import { switchLanguage } from "@/utils/helpers";

export default Vue.extend({
  name: "App",
  components: {
    Loading,
    MsgModal,
  },
  computed:{
     ...mapGetters({
      loading: 'ui/loading'
    })
  },
  methods:{
    init() {
      // handle default  language
      const locale = localStorage.getItem("locale") || "ar";
      switchLanguage(locale, this);

      // handle default  theme
      const mode = localStorage.getItem("mode");
      // check if mode is set to make the change
      if (mode) {
        this.$vuetify.theme.dark = mode !== "light";
      }

      setTimeout(() => {
        this.$store.commit("ui/appLoaded");
      }, 2000);
    },
  },
  created(){
    this.init()
    let elem = document.querySelector('#js-licensing')
    elem?.remove()
  }
});
</script>

<style src="@/scss/global/globals.css" rel="stylesheet" type="text/css" />
