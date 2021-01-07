import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  // SideBar
  { path: "/", redirect: { name: "DigitColor" }, meta: { sidebar: false } },
  {
    path: "/digitcolor",
    name: "DigitColor",
    component: () => import("../views/DigitColor.vue"),
    meta: { sidebar: true, fa: "tachometer-alt", renderName: "Digit Color" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
