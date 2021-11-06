<template>
  <div class="dashboard">
    <div class="dashboard__statistics">
      <common-statistics
        icon="credit-card-front"
        name="Доход"
        value="46 000 ₸"
      />
      <common-statistics icon="user" name="Регистрации" value="463" />
      <common-statistics icon="book" name="Пройдено уроков" value="1246" />
    </div>
    <users-chart class="dashboard__users-chart" />
    <div class="dashboard__row">
      <div>
        <transactions-list />
      </div>
      <payments-chart />
    </div>
  </div>
</template>

<script>
import CommonStatistics from "@/components/common/CommonStatistics/CommonStatistics";
import UsersChart from "@/components/dashboard/UsersChart/UsersChart";
import TransactionsList from "@/components/dashboard/TransactionsList/TransactionsList";
import PaymentsChart from "@/components/dashboard/PaymentsChart/PaymentsChart";

export default {
  components: {
    "common-statistics": CommonStatistics,
    "users-chart": UsersChart,
    "transactions-list": TransactionsList,
    "payments-chart": PaymentsChart,
  },
};
</script>

<style scoped>
.dashboard {
  padding: 30px;
}

.dashboard__statistics {
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
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