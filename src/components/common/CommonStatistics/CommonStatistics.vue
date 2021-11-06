<template>
  <div class="statistics">
    <div class="statistics__icon-wrapper">
      <i :class="`bx bx-${icon} statistics__icon`" />
    </div>
    <div class="statistics__column">
      <span class="statistics__name">{{ name }}</span>
      <span class="statistics__value">{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "user",
    },
    name: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.statistics {
  padding: 14px;
  display: flex;
  border-radius: 10px;
  background-color: white;
}

.statistics__icon-wrapper {
  width: 60px;
  height: 60px;
  margin-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fef4df;
  border-radius: 50%;
}

.statistics__icon {
  font-size: 32px;
  color: $primary-color;
}

.statistics__column {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.statistics__name {
  margin-bottom: 2px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
}

.statistics__value {
  font-size: 26px;
  font-weight: 500;
}
</style>