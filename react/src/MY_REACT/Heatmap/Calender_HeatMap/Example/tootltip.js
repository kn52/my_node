const dateOptions = {
    year: "numeric",
    month: "short",
    weekday: "long",
    day: "numeric"
  };
  
  const tooltip = (date, count) => {
    const dateString = date.toLocaleDateString("en-US", dateOptions);
    if (count === 0) {
      return `Failure on ${dateString}`;
    }
  
    return `${count} kWh on ${dateString}`;
  };
  
  export default tooltip;
  