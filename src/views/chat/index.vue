<template>
  <v-container class="container">
    <v-row>
      <v-col cols="3">
          <v-list-item class="">
            <v-text-field
              @input="search"
              :label="$t('search')"
              outlined
              dense
            ></v-text-field>
          </v-list-item>
        <v-card class="mx-auto" max-width="500">
         
          <v-expansion-panels v-model="panels" class="mb-6">
            <v-expansion-panel>
              <v-expansion-panel-header>
                {{ $t("chats") }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list-item
                  class="cursor-pointer"
                  @click.prevent="selectChat(chat)"
                  v-for="chat in chats"
                  :key="chat.title"
                >
                  <v-list-item-avatar v-if="chat.Img">
                    <v-img :alt="`${chat.Name}`" :src="image(chat.Img)"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-text="chat.Name"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                {{ $t("users") }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list-item
                  class="cursor-pointer"
                  @click.prevent="selectChat(chat)"
                  v-for="chat in users"
                  :key="chat.title"
                >
                  <v-list-item-avatar v-if="chat.Img">
                    <img :alt="`${chat.Name}`" :src="image(chat.Img)" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-text="chat.Name"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-card class="chat-card" :elevation="1" v-if="currentChat != null">
          <v-card-title class="chat-title">
            <v-list-item>
              <v-list-item-avatar>
                <v-img :alt="currentChat.Name" :src="currentChat.Img"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  v-text="currentChat.Name"
                ></v-list-item-title>
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
                v-for="msg in msgs"
                :key="msg.Id"
                class="msg-wrapper"
                :class="msg.Mine ? 'mine' : 'his'"
              >
                <div class="chat-name" v-text="msg.Name"></div>
                <v-list-item class="chat-msg">
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="msg.Msg"
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
        <v-card class="chat-empty" v-else> no chat selected </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import { ListAllChats, ListChatMsgs, CreateMsg } from "@/repositories/chat";
import { inbox, msg, msgRequest } from "@/models/chat";
import { mapGetters } from "vuex";
import router from "@/router";
import { addParamsToLocation, image } from "@/utils/helpers";
import { ListUsers } from "@/repositories/user";
export default Vue.extend({
  name: "users-list",
  components: {},
  data() {
    return {
      loading: false,
      msg: "",
      panels: 0,
      chatLoading: false,
      chatsLoading: false,
      usersLoading: false,
      chats: [] as inbox[],
      users: [] as inbox[],
      chatsResp: {} as { chats: inbox[]; users: inbox[] },
      currentChat: null as inbox | null,
      msgs: [] as msg[],
    };
  },
  computed: {
    ...mapGetters({
      user: "user/user",
    }),
  },
  methods: {
    search($event) {
      this["chats"] = this.chatsResp["chats"].filter((item: inbox) =>
        item.Name.includes($event)
      );
      this["users"] = this.chatsResp["users"].filter((item: inbox) =>
        item.Name.includes($event)
      );
    },
    image,
    edit() {
      const currentPath = router.currentRoute.path;
      const path = currentPath.replace("view", "edit");
      router.push(path);
    },
    listChats() {
      this.chatsLoading = true;
      ListAllChats().then((res) => {
        this.chatsResp = res;
        this.chats = res.chats;
        this.users = res.users;
        this.chatsLoading = false;
      });
    },

    selectChat(chat: inbox) {
      this.currentChat = chat;
      addParamsToLocation({ id: chat.Id }, router.currentRoute.path);
      this.findChatMsgs(chat.Id);
    },
    findChatMsgs(id: number) {
      this.chatLoading = true;
      ListChatMsgs(id).then((res: msg[]) => {
        this.msgs = res;
        this.chatLoading = false;
        const elem = document.querySelector(".chat-msgs")!;
        elem.scrollTop = elem.scrollHeight;
      });
    },
    send() {
      const payload: msgRequest = {
        ToId: this.currentChat!.Id,
        Msg: this.msg,
      };
      CreateMsg(payload).then((res: any) => {
        const msg: msg = {
          Id: res,
          Msg: this.msg,
          Mine: true,
          Name: "",
          CreatedAt: new Date().toString(),
          Seen: false,
        };
        this.msgs.push(msg);
        this.msg = "";
      });
    },
  },
  mounted() {
    this.listChats();
    if (router.currentRoute.query.id){
      this.findChatMsgs(parseInt(router.currentRoute.query.id as string));
  console.log("hello")

    }
  },
});
</script>
<style src="@/scss/components/chat.css" rel="stylesheet" type="text/css" />
