<template>
  <div class="flex h-screen overflow-hidden bg-white text-gray-600">
    <SideBar />
    <div class="w-full overflow-y-auto">
      <Suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <div></div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "@/components/SideBar.vue";

export default defineComponent({
  name: "App",
  components: {
    SideBar,
  },
});
</script>

<style lang="ts">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
