<template>
  <div class="users-chart">
    <h3 class="users-chart__heading">Пользователи</h3>
    <apexchart :options="options" :series="series" type="area" height="350" />
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
      theme: {
        mode: "light",
        monochrome: {
          enabled: true,
          color: "#ffc752",
          shadeTo: "light",
          shadeIntensity: 0.9,
        },
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

<style scoped>
.users-chart {
  padding: 30px;
  border-radius: 14px;
  background-color: white;
}

.users-chart__heading {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
}
</style>