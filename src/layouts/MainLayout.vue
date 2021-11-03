<template>
  <div class="main-layout">
    <div class="main-layout__side-bar">
      <common-side-bar />
    </div>
    <div class="main-layout__content">
      <common-header />
      <router-view />
    </div>
  </div>
</template>

<script>
import CommonSideBar from "@/components/common/CommonSideBar/CommonSideBar";
import CommonHeader from "@/components/common/CommonHeader/CommonHeader";

export default {
  components: {
    "common-side-bar": CommonSideBar,
    "common-header": CommonHeader,
  },
};
</script>

<style lang="scss" scoped>
.main-layout {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-rows: 100vh;
  background-color: $background-color;
}

.main-layout__content {
  overflow-y: auto;
}
</style>