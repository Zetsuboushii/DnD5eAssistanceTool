<script>
import { defineComponent, getCurrentInstance, onMounted } from "vue";
import { useSQLite } from "vue-sqlite-hook";
import Drawer from "@/components/Drawer.vue";

export default defineComponent({
  name: "App",
  setup() {
    const app = getCurrentInstance();
    onMounted(async () => {
      console.log(" in App on Mounted");
      if (app != null) {
        app.appContext.config.globalProperties.$sqlite = useSQLite();
      }
    });
    return;
  },
  components: { Drawer }
});
</script>

<template>
  <Drawer></Drawer>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: "Source Sans Pro", sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-left: 60px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
