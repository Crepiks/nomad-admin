<template>
  <div class="users-chart">
    <h3 class="users-chart__heading">Пользователи</h3>
    <div class="users-chart__divider" />
    <div class="users-chart__body">
      <apexchart :options="options" :series="series" type="area" height="350" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    series: [
      {
        name: "Регистраций",
        data: [31, 40, 28, 51, 42, 23, 14],
      },
      {
        name: "Активных в день",
        data: [40, 62, 95, 82, 74, 102, 140],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: false,
      },
      grid: {
        show: false,
      },
      theme: {
        mode: "light",
        monochrome: {
          enabled: true,
          color: "#ffc752",
          shadeTo: "light",
          shadeIntensity: 0.9,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2021-10-29",
          "2021-10-30",
          "2021-10-31",
          "2021-11-01",
          "2021-11-02",
          "2021-11-03",
          "2021-11-04",
        ],
        labels: {
          format: "dd/MM/yyyy",
        },
        axisBorder: {
          show: false,
        },
        tooltip: false,
      },
      tooltip: {
        x: {
          format: "dd/MM/yyyy",
        },
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
.users-chart {
  border-radius: 14px;
  background-color: white;
}

.users-chart__heading {
  padding: 20px 30px;
  font-size: 24px;
  font-weight: 500;
}

.users-chart__divider {
  width: 100%;
  height: 1px;
  background-color: $background-color;
}

.users-chart__body {
  padding: 20px 30px;
}
</style>