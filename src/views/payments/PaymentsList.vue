<template>
  <div class="payments-list">
    <h1 class="payments-list__heading">Платежи</h1>
    <payments-table :payments="payments" />
  </div>
</template>

<script>
import PaymentsTable from "@/components/payments/PaymentsTable/PaymentsTable";
import payments from "@/data/payments";

export default {
  components: {
    "payments-table": PaymentsTable,
  },
  data: () => ({
    payments,
  }),
};
</script>

<style scoped>
.payments-list {
  margin: 30px;
  padding: 30px;
  border-radius: 20px;
  background-color: white;
}

.payments-list__heading {
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 500;
}
</style>