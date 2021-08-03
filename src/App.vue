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

<script setup name="App" lang="ts">
import SideBar from "@/components/SideBar.vue";
</script>
