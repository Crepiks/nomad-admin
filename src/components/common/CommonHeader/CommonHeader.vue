<template>
  <header class="header">
    <div class="header__row">
      <i class="bx bx-bell header__icon" />
      <i class="bx bx-user header__icon" />
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
}

.header__icon {
  margin-left: 24px;
  font-size: 24px;
  cursor: pointer;
}
</style>