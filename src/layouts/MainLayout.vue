<template>
  <div>
    <common-side-bar />
    <router-view />
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

<style>
</style>