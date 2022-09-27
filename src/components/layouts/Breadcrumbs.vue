<template>
<div v-if="$route.name != 'home'" class="d-flex align-center px-8 ">
  <span class="bold me-10">{{$t($route.name)}}</span>
  <v-breadcrumbs :items="breadCrumbs">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :to="item.to"
        
        :disabled="item.disabled"
        exact
      >
      <v-icon class="me-10">{{item.icon}}</v-icon>
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</div>
</template>

<script>
import router from '@/router'
export default {
  computed: {
    breadCrumbs() {
      if (typeof router.currentRoute.meta.breadCrumb === "function") {
        return router.currentRoute.meta.breadCrumb.call(this, router.currentRoute);
      }
      return router.currentRoute.meta.breadCrumb;
    },
  },
};
</script>
