<template>
  <nav class="side-bar">
    <div class="side-bar__logo">
      <i class="bx bx-book-bookmark" />
      <span class="side-bar__logo-text">Nomad</span>
    </div>
    <div class="side-bar__content">
      <div class="side-bar__section">
        <h3 class="side-bar__section-title">Данные</h3>
        <router-link
          to="/"
          exact
          active-class="side-bar__link_active"
          class="side-bar__link"
        >
          <i class="bx bx-bar-chart-alt-2 side-bar__icon" />
          <span class="side-bar__link-text">Аналитика</span>
        </router-link>
      </div>
      <div class="side-bar__section">
        <h3 class="side-bar__section-title">Контент</h3>
        <router-link
          to="/books"
          active-class="side-bar__link_active"
          class="side-bar__link"
        >
          <i class="bx bx-book-alt side-bar__icon" />
          <span class="side-bar__link-text">Книги</span>
        </router-link>
        <router-link
          to="/sections"
          active-class="side-bar__link_active"
          class="side-bar__link"
        >
          <i class="bx bx-bookmarks side-bar__icon" />
          <span class="side-bar__link-text">Разделы</span>
        </router-link>
        <router-link
          to="/units"
          active-class="side-bar__link_active"
          class="side-bar__link"
        >
          <i class="bx bx-pyramid side-bar__icon" />
          <span class="side-bar__link-text">Темы</span>
        </router-link>
      </div>
      <div class="side-bar__section">
        <h3 class="side-bar__section-title">Прочее</h3>
        <router-link
          to="/users"
          active-class="side-bar__link_active"
          class="side-bar__link"
        >
          <i class="bx bx-user side-bar__icon" />
          <span class="side-bar__link-text">Пользователи</span>
        </router-link>
        <router-link
          to="/purchases"
          active-class="side-bar__link_active"
          class="side-bar__link"
        >
          <i class="bx bx-credit-card-front side-bar__icon" />
          <span class="side-bar__link-text">Покупки</span>
        </router-link>
      </div>
    </div>
    <router-link
      to="/settings"
      active-class="side-bar__link_active"
      class="side-bar__link"
    >
      <i class="bx bx-cog side-bar__icon" />
      <span class="side-bar__link-text">Настройки</span>
    </router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.side-bar {
  height: 100%;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: black;
  background-color: $primary-color;
}

.side-bar__logo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
}

.side-bar__logo-text {
  margin-left: 10px;
}

.side-bar__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.side-bar__section {
  width: 100%;
  margin-bottom: 26px;
}

.side-bar__section-title {
  width: 100%;
  margin-bottom: 8px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
}

.side-bar__link {
  width: 100%;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: 300ms;
  border-radius: 10px;
}

.side-bar__link_active {
  color: white;
  background-color: black;
}

.side-bar__icon {
  margin-right: 16px;
  font-size: 26px;
}

.side-bar__link-text {
  font-size: 18px;
  font-weight: 500;
}
</style>