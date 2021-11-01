<template>
  <div class="main-layout">
    <div class="main-layout__side-bar">
      <common-side-bar />
    </div>
    <div class="main-layout__content">
      <router-view />
    </div>
  </div>
</template>

<script>
import CommonSideBar from "@/components/common/CommonSideBar/CommonSideBar";

export default {
  components: {
    "common-side-bar": CommonSideBar,
  },
};
</script>

<style scoped>
.main-layout {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100vh;
}

.main-layout__main-layout__content {
  overflow-y: auto;
}
</style>