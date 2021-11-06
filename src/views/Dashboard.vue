<template>
  <div class="dashboard">
    <users-chart class="dashboard__users-chart" />
    <div class="dashboard__row">
      <div></div>
      <div>
        <payments-chart />
      </div>
    </div>
  </div>
</template>

<script>
import UsersChart from "@/components/dashboard/UsersChart/UsersChart";
import PaymentsChart from "@/components/dashboard/PaymentsChart/PaymentsChart";

export default {
  components: {
    "users-chart": UsersChart,
    "payments-chart": PaymentsChart,
  },
};
</script>

<style scoped>
.dashboard {
  padding: 30px;
}

.dashboard__users-chart {
  margin-bottom: 30px;
}

.dashboard__row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
}
</style>