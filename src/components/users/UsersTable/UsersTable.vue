<template>
  <div class="users-table">
    <div class="users-table__row users-table__header">
      <div class="users-table__cell">ID</div>
      <div class="users-table__cell">Имя</div>
      <div class="users-table__cell">Фамилия</div>
      <div class="users-table__cell">Телефон</div>
      <div class="users-table__cell">Дата создания</div>
      <div class="users-table__cell">Последний вход</div>
      <div></div>
    </div>
    <div v-for="user in users" :key="user.id" class="users-table__row">
      <div class="users-table__cell">{{ user.id }}</div>
      <div class="users-table__cell">{{ user.firstName }}</div>
      <div class="users-table__cell">{{ user.lastName }}</div>
      <div class="users-table__cell">{{ user.phone }}</div>
      <div class="users-table__cell">{{ user.createdAt }}</div>
      <div class="users-table__cell">{{ user.lastLogIn }}</div>
      <div class="users-table__cell_actions">
        <i class="bx bx-trash users-table__delete-icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.users-table__row {
  padding: 14px 24px;
  display: grid;
  grid-template-columns: 1fr repeat(5, 2fr) 1fr;
  border-radius: 10px;
  transition: 300ms;
}

.users-table__row:hover {
  background-color: $background-color;
  cursor: pointer;
}

.users-table__header {
  background-color: $background-color;
}

.users-table__cell_actions {
  display: flex;
  justify-content: flex-end;
}

.users-table__delete-icon {
  font-size: 18px;
  color: red;
}
</style>