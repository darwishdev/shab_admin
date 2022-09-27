<template>
  <v-container class="container">
    <v-row>
      <v-col cols="3">
        <v-card class="mx-auto" max-width="500">
          <v-list subheader>
            <v-subheader>Recent chat</v-subheader>

            <v-list-item v-for="chat in recent" :key="chat.title">
              <v-list-item-avatar>
                <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="chat.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">
                  mdi-message-outline
                </v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list subheader>
            <v-subheader>Previous chats</v-subheader>

            <v-list-item v-for="chat in previous" :key="chat.title">
              <v-list-item-avatar>
                <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="chat.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-card class="chat-card" :elevation="1">
          <v-card-title class="chat-title">
            <v-list-item>
              <v-list-item-avatar>
                <v-img
                  :alt="` avatar`"
                  src="https://api.alshabalriyadi.net/assets/1000_ea33515b53.jpg"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="`salma`"></v-list-item-title>
              </v-list-item-content>

              <!-- <v-list-item-icon>
          <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">
            mdi-message-outline
          </v-icon>
        </v-list-item-icon> -->
            </v-list-item>
          </v-card-title>
          <v-card-text class="p-0">
            <div class="view-list" v-if="loading">
              <v-skeleton-loader
                v-for="i in 10"
                :key="i"
                type="list-item-two-line"
              ></v-skeleton-loader>
            </div>
            <v-list class="chat-msgs" ref="msgs" rounded>
              <div
                v-for="i in 30"
                :key="i"
                class="msg-wrapper"
                :class="i % 2 == 0 ? 'mine' : 'his'"
              >
                <div class="chat-name">ahmed manhaby</div>
                <v-list-item class="chat-msg">
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="'item.text'"
                      color="primary"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-list>
          </v-card-text>
          <v-card-actions class="actions">
            <div class="d-flex flex-row align-center w-full">
              <v-text-field
                v-model="msg"
                label="الرسالة"
                @keypress.enter="send"
              ></v-text-field>
              <v-btn icon class="ml-4" @click="send"
                ><v-icon>mdi-send</v-icon></v-btn
              >
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import router from '@/router'
export default Vue.extend({
  name: "users-list",
  components: {},
  data() {
    return {
      loading: false,
      msg: "",
      recent: [
        {
          active: true,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Jason Oner',
        },
        {
          active: true,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Mike Carlson',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Cindy Baker',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Ali Connors',
        },
      ],
      previous: [{
        title: 'Travis Howard',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      }],
    };
  },
  methods: {
    edit() {
      const currentPath = router.currentRoute.path;
      const path = currentPath.replace("view", "edit");
      router.push(path);
    },
    send() {},
  },
  mounted() {
    const elem = document.querySelector(".chat-msgs")!;
    elem.scrollTop = elem.scrollHeight;
    //   this.$refs.msgs?.scrollTop = this.$refs.msgs!.scrollHeight
    //   console.log(this.$refs.msgs!)
  },
});
</script>

<style scoped>
.chat-card {
  transform: translateZ(0);
}
.chat-msgs {
  height: calc(100vh - 200px);
  overflow: scroll;
  padding-bottom: 100px;
}
.actions {
  position: fixed;
  background: var(--main-gredient);
  bottom: 0;
  right: 0;
  width: 100%;
}
.chat-msg {
  background: var(--chat-bg-1);
  border-radius: 15px;
}
.his .chat-msg {
  background: var(--bg-4);
  text-align: left;
}
.his .chat-name {
  text-align: left;
  justify-content: flex-end;
}
.chat-name {
  display: flex;
  margin-bottom: 10px;
  font-size: 18px;
}
.msg-wrapper {
  margin: 20px 0;
}
.chat-title {
  background: var(--main-gredient);
  padding: 0 !important;
}
</style>