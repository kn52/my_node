const WEEKDAY_LABELS = ["", "SUN", "", "MON", "", "TUE", "", "WED", "", "THU", "", "FRI", "", "SAT"];

const getMonthName = (date) =>
  date.toLocaleString("default", { month: "short" });

export { WEEKDAY_LABELS, getMonthName };
