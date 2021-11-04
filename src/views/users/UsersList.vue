<template>
  <div class="users-list">
    <h1 class="users-list__heading">Пользователи</h1>
    <users-table :users="users" />
  </div>
</template>

<script>
import UsersTable from "@/components/users/UsersTable/UsersTable";
import users from "@/data/users";

export default {
  components: {
    "users-table": UsersTable,
  },
  data: () => ({
    users,
  }),
};
</script>

<style scoped>
.users-list {
  margin: 30px;
  padding: 30px;
  border-radius: 20px;
  background-color: white;
}

.users-list__heading {
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 500;
}
</style>