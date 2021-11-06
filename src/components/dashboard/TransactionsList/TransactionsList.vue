<template>
  <div class="transactions-list">
    <h3 class="transactions-list__heading">Операции</h3>
    <div class="transactions-list__divider" />
    <div class="transactions-list__body">
      <div class="transactions-list__item">
        <div class="transactions-list__column">
          <span class="transactions-list__user">Саяжан Онласын</span>
          <span class="transactions-list__date">05.11.2021</span>
        </div>
        <span class="transactions-list__amount">+500 ₸</span>
      </div>
      <div class="transactions-list__item">
        <div class="transactions-list__column">
          <span class="transactions-list__user">Султан Мустафин</span>
          <span class="transactions-list__date">04.11.2021</span>
        </div>
        <span class="transactions-list__amount">+500 ₸</span>
      </div>
      <div class="transactions-list__item">
        <div class="transactions-list__column">
          <span class="transactions-list__user">Данияр Егеубай</span>
          <span class="transactions-list__date">03.11.2021</span>
        </div>
        <span class="transactions-list__amount">+500 ₸</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.transactions-list {
  border-radius: 14px;
  background-color: white;
}

.transactions-list__heading {
  padding: 16px 20px;
  font-size: 20px;
  font-weight: 500;
}

.transactions-list__divider {
  width: 100%;
  height: 1px;
  background-color: $background-color;
}

.transactions-list__body {
  padding: 10px 20px 20px 20px;
}

.transactions-list__item {
  padding: 6px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.transactions-list__column {
  display: flex;
  flex-direction: column;
}

.transactions-list__user {
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 500;
}

.transactions-list__date {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}

.transactions-list__amount {
  font-size: 16px;
  color: #52c41a;
}
</style>