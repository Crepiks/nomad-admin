<template>
  <div class="main-layout">
    <div class="main-layout__side-bar">
      <common-side-bar />
    </div>
    <div class="main-layout__content">
      <div class="main-layout__header-wrapper">
        <common-header class="main-layout__header" />
      </div>
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
  position: relative;
  overflow-y: auto;
}

.main-layout__header-wrapper {
  height: 70px;
}

.main-layout__header {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 270px);
  height: 70px;
  z-index: 1;
}
</style>