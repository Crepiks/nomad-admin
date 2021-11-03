<template>
  <div class="dashboard">
    <users-chart />
  </div>
</template>

<script>
import UsersChart from "@/components/dashboard/UsersChart/UsersChart";

export default {
  components: {
    "users-chart": UsersChart,
  },
};
</script>

<style scoped>
.dashboard {
  padding: 30px;
}
</style>