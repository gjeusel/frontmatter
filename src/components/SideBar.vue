<template>
  <div class="flex flex-col w-56 p-4 overflow-auto text-sm font-medium bg-gray-100">
    <div class="w-32 self-center">
      <img class="" src="../assets/logo.png" alt="logo" />
    </div>

    <nav class="flex flex-col flex-1 pt-3 mt-4 border-t">
      <div class="space-y-2">
        <div v-for="(route, i) in routes" :key="i">
          <router-link
            :to="route.path"
            class="flex items-center py-2 group rounded-md hover:text-gray-900 hover:bg-gray-200"
            :class="{
              'text-gray-900 bg-gray-200': route.name === currentRoute.name,
              'border-l-4 border-indigo-400': route.name === currentRoute.name,
            }"
            v-if="route.meta.sidebar"
          >
            <span class="pl-3">
              {{ route.meta.renderName || route.name }}
            </span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import router from "@/router";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "SideBar",
  props: {},
  components: {},
  setup() {
    const routes = router.getRoutes();
    const currentRoute = useRoute();
    return { routes, currentRoute };
  },
});
</script>

<style scoped lang="postcss">
/* Style */
</style>
