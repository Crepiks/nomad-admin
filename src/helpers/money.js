export const formatMoney = (value) =>
  new Intl.NumberFormat("ru-RU").format(value);
