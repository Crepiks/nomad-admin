<template>
  <div class="payments-chart">
    <h3 class="payments-chart__heading">Платежи</h3>
    <div class="transactions-list__divider" />
    <apexchart
      :options="options"
      :series="series"
      type="bar"
      height="260"
      class="payments-chart__body"
    />
  </div>
</template>

<script>
import moment from "moment";
import { formatMoney } from "@/helpers/money";

export default {
  data: () => ({
    series: [
      {
        name: "Прибыль",
        data: [40000, 100000, 46000, 24000, 70000, 174000, 35000],
      },
    ],
    options: {
      chart: {
        type: "bar",
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
      tooltip: {
        x: {
          formatter(value) {
            return moment(value).format("DD/MM/YYYY");
          },
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 10,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
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
          formatter(value) {
            return moment(value).format("DD/MM");
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (value) {
            return formatMoney(value) + " ₸";
          },
        },
      },
      grid: {
        show: false,
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
.payments-chart {
  border-radius: 14px;
  background-color: white;
}

.payments-chart__heading {
  padding: 16px 20px;
  font-size: 20px;
  font-weight: 500;
}

.transactions-list__divider {
  width: 100%;
  height: 1px;
  background-color: $background-color;
}

.payments-chart__body {
  padding: 16px 14px 16px 6px;
}
</style>