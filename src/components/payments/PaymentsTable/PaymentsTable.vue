<template>
  <div class="payments-table">
    <div class="payments-table__row payments-table__header">
      <div class="payments-table__cell">ID</div>
      <div class="payments-table__cell">Пользователь</div>
      <div class="payments-table__cell">Дата</div>
      <div class="payments-table__cell">Сумма</div>
      <div></div>
    </div>
    <div
      v-for="payment in payments"
      :key="payment.id"
      class="payments-table__row"
    >
      <div class="payments-table__cell">{{ payment.id }}</div>
      <div class="payments-table__cell">
        {{ getUserFullName(payment.user) }}
      </div>
      <div class="payments-table__cell">{{ payment.createdAt }}</div>
      <div class="payments-table__cell">{{ payment.amount }} ₸</div>
      <div class="payments-table__cell_actions">
        <i class="bx bx-trash payments-table__delete-icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    payments: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getUserFullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.payments-table__row {
  padding: 14px 24px;
  display: grid;
  grid-template-columns: 1fr repeat(3, 2fr) 1fr;
  border-radius: 10px;
  transition: 300ms;
}

.payments-table__row:hover {
  background-color: $background-color;
  cursor: pointer;
}

.payments-table__header {
  background-color: $background-color;
}

.payments-table__cell_actions {
  display: flex;
  justify-content: flex-end;
}

.payments-table__delete-icon {
  font-size: 18px;
  color: red;
}
</style>