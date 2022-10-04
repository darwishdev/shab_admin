import  i18n  from '@/i18n';
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Base from "@/components/base/base.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Base,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      // users rotues
      {
        path: "users",
        name: "users",
        component: () => import('@/views/users/index.vue'),
      },
      {
        path: "users/edit/:id",
        name: "users-edit",
        component: () => import('@/views/users/edit.vue'),
      },
      {
        path: "users/create",
        name: "users-create",
        component: () => import('@/views/users/create.vue'),
      },
      {
        path: "users/view/:id",
        name: "users-view",
        component: () => import('@/views/users/view.vue'),
      },

      // consultunts rotues
      {
        path: "consultunts",
        name: "consultunts",
        component: () => import('@/views/consultunts/index.vue'),
      },
      {
        path: "consultunts/edit/:id",
        name: "consultunts-edit",
        component: () => import('@/views/consultunts/edit.vue'),
      },
      {
        path: "consultunts/create",
        name: "consultunts-create",
        component: () => import('@/views/consultunts/create.vue'),
      },

      // team rotues
      {
        path: "team",
        name: "team",
        component: () => import('@/views/team/index.vue'),
      },
      {
        path: "team/edit/:id",
        name: "team-edit",
        component: () => import('@/views/team/edit.vue'),
      },
      {
        path: "team/create",
        name: "team-create",
        component: () => import('@/views/team/create.vue'),
      },

      // team rotues
      {
        path: "admins",
        name: "admins",
        component: () => import('@/views/admins/index.vue'),
      },
      {
        path: "admins/edit/:id",
        name: "admins-edit",
        component: () => import('@/views/admins/edit.vue'),
      },
      {
        path: "admins/create",
        name: "admins-create",
        component: () => import('@/views/admins/create.vue'),
      },
      // services rotues
      {
        path: "services",
        name: "services",
        component: () => import('@/views/services/index.vue'),
      },
      {
        path: "services/edit/:id",
        name: "services-edit",
        component: () => import('@/views/services/edit.vue'),
      },
      {
        path: "services/create",
        name: "services-create",
        component: () => import('@/views/services/edit.vue'),
      },

      // projects
      {
        path: "projects",
        name: "projects",
        component: () => import('@/views/projects/index.vue'),
      },
      {
        path: "projects/edit/:id",
        name: "projects-edit",
        component: () => import('@/views/projects/edit.vue'),
      },
      {
        path: "projects/view/:id",
        name: "projects-view",
        component: () => import('@/views/projects/view.vue'),
      },
      {
        path: "projects/create",
        name: "projects-create",
        component: () => import('@/views/projects/create.vue'),
      },
      

      // categories
      //projects
      {
        path: "categories/projects",
        name: "categories/projects",
        component: () => import('@/views/categories/projects/index.vue'),
      },
      {
        path: "categories/projects/edit/:id",
        name: "categories/projects-edit",
        component: () => import('@/views/categories/projects/edit.vue'),
      },
      {
        path: "categories/projects/create",
        name: "categories/projects-create",
        component: () => import('@/views/categories/projects/edit.vue'),
      },
      // articles
      {
        path: "categories/articles/create",
        name: "categories/articles-create",
        component: () => import('@/views/categories/articles/create.vue'),
      },
      
      {
        path: "categories/articles",
        name: "categories/articles",
        component: () => import('@/views/categories/articles/index.vue'),
      },
      {
        path: "categories/articles/edit/:id",
        name: "categories/articles-edit",
        component: () => import('@/views/categories/articles/edit.vue'),
      },
      {
        path: "categories/articles/create",
        name: "categories/articles-create",
        component: () => import('@/views/categories/articles/create.vue'),
      },
      // videos
      {
        path: "categories/videos/create",
        name: "categories/videos-create",
        component: () => import('@/views/categories/videos/create.vue'),
      },
      {
        path: "categories/videos",
        name: "categories/videos",
        component: () => import('@/views/categories/videos/index.vue'),
      },
      {
        path: "categories/videos/edit/:id",
        name: "categories/videos-edit",
        component: () => import('@/views/categories/videos/edit.vue'),
      },
      {
        path: "categories/videos/create",
        name: "categories/videos-create",
        component: () => import('@/views/categories/videos/create.vue'),
      },
      // events
      {
        path: "categories/events/create",
        name: "categories/events-create",
        component: () => import('@/views/categories/events/create.vue'),
      },
      {
        path: "categories/events",
        name: "categories/events",
        component: () => import('@/views/categories/events/index.vue'),
      },
      {
        path: "categories/events/edit/:id",
        name: "categories/events-edit",
        component: () => import('@/views/categories/events/edit.vue'),
      },
      {
        path: "categories/events/create",
        name: "categories/events-create",
        component: () => import('@/views/categories/events/create.vue'),
      },

      // cities
      {
        path: "cities",
        name: "cities",
        component: () => import('@/views/cities/index.vue'),
      },
      {
        path: "cities/edit/:id",
        name: "cities-edit",
        component: () => import('@/views/cities/create.vue'),
      },
      {
        path: "cities/create",
        name: "cities-create",
        component: () => import('@/views/cities/create.vue'),
      },


      // articles
      {
        path: "articles",
        name: "articles",
        component: () => import('@/views/articles/index.vue'),
      },
      {
        path: "articles/edit/:id",
        name: "articles-edit",
        component: () => import('@/views/articles/edit.vue'),
      },
      {
        path: "articles/view/:id",
        name: "articles-view",
        component: () => import('@/views/articles/view.vue'),
      },
      {
        path: "articles/create",
        name: "articles-create",
        component: () => import('@/views/articles/create.vue'),
      },
      {
        path: "articles/create",
        name: "articles-pending-create",
        component: () => import('@/views/articles/create.vue'),
      },

      // videos rotues
      {
        path: "videos",
        name: "videos",
        component: () => import('@/views/videos/index.vue'),
      },
      {
        path: "videos/edit/:id",
        name: "videos-edit",
        component: () => import('@/views/videos/edit.vue'),
      },
      {
        path: "videos/view/:id",
        name: "videos-view",
        component: () => import('@/views/videos/view.vue'),
      },
      {
        path: "videos/create",
        name: "videos-create",
        component: () => import('@/views/videos/create.vue'),
      },

      // requests rotues
      {
        path: "requests/services",
        name: "services-pending",
        component: () => import('@/views/requests/services/index.vue'),
      },
      {
        path: "requests/services/:id",
        name: "services-pending-view",
        component: () => import('@/views/requests/services/view.vue'),
      },
      {
        path: "requests/users",
        name: "users-pending",
        component: () => import('@/views/requests/users/index.vue'),
      },
      {
        path: "requests/users/:id",
        name: "users-pending-view",
        component: () => import('@/views/requests/users/view.vue'),
      },
      {
        path: "requests/upgrades",
        name: "users-upgrades",
        component: () => import('@/views/requests/users/upgrades.vue'),
      },
      {
        path: "requests/upgrade/:id",
        name: "users-upgrade-view",
        component: () => import('@/views/requests/users/view.vue'),
      },
      {
        path: "requests/articles",
        name: "articles-pending",
        component: () => import('@/views/requests/articles/index.vue'),
      },
      {
        path: "requests/articles/:id",
        name: "articles-pending-view",
        component: () => import('@/views/articles/view.vue'),
      },
      {
        path: "requests/articles/edit/:id",
        name: "articles-pending-edit",
        component: () => import('@/views/articles/edit.vue'),
      },
      {
        path: "requests/projects",
        name: "projects-pending",
        component: () => import('@/views/requests/projects/index.vue'),
      },
      {
        path: "requests/projects/:id",
        name: "projects-pending-view",
        component: () => import('@/views/projects/view.vue'),
      },
      {
        path: "requests/projects/edit/:id",
        name: "projects-pending-edit",
        component: () => import('@/views/projects/edit.vue'),
      },
      {
        path: "requests/contact",
        name: "contact",
        component: () => import('@/views/requests/contact/index.vue'),
      },

      // chat

      {
        path: "chat",
        name: "chat",
        component: () => import('@/views/chat/index.vue'),
      },
      {
        path: "chat/:id",
        name: "chat-view",
        component: () => import('@/views/chat/view.vue'),
      },




      // pages
      //----------------------------------------------------------
      //----------------------------------------------------------
      // home
      {
        path: "pages/home",
        name: "pages-home",
        component: () => import('@/views/pages/home/index.vue'),
        meta: {
          breadCrumb: [
            {
              text: i18n.t('sidebar.pages'),
              icon:'mdi-tablet-android'
            },
            {
              text: i18n.t('sidebar.home'),
              icon:'mdi-home-outline'
            }
          ]
        }
      },
      {
        path: "pages/home/edit/:id",
        name: "pages-home-edit",
        component: () => import('@/views/pages/home/edit.vue'),
      },

      // roles
      {
        path: "pages/roles",
        name: "pages-roles",
        component: () => import('@/views/pages/roles/index.vue'),
        meta: {
          breadCrumb: [
            {
              text: i18n.t('sidebar.pages'),
              icon:'mdi-tablet-android'
            },
            {
              text: i18n.t('roles'),
              icon:'mdi-card-vip-outline'
            }
          ]
        }
      },
      {
        path: "pages/roles/edit/:id",
        name: "pages-roles-edit",
        component: () => import('@/views/pages/roles/edit.vue'),
      },
      {
        path: "pages/features",
        name: "pages-features",
        component: () => import('@/views/pages/features/index.vue'),
      },
      {
        path: "pages/features/edit/:id",
        name: "pages-features-edit",
        component: () => import('@/views/pages/features/edit.vue'),
      },
      {
        path: "pages/features/create",
        name: "pages-features-create",
        component: () => import('@/views/pages/features/edit.vue'),
      },

       // events
       {
        path: "pages/events",
        name: "pages-events",
        component: () => import('@/views/pages/events/index.vue'),
      },
      {
        path: "pages/events/edit/:id",
        name: "pages-events-edit",
        component: () => import('@/views/pages/events/edit.vue'),
      },
      {
        path: "pages/events/create",
        name: "pages-events-create",
        component: () => import('@/views/pages/events/create.vue'),
      },
      {
        path: "pages/events/view/:id",
        name: "pages-events-view",
        component: () => import('@/views/pages/events/view.vue'),
      },
    ]
  },
  {
    path: '/server-error',
    component: () => import('@/views/errors/server.vue'),
  },
  {
    path: '/login',
    component: Login
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
