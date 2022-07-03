const getRange = (count) => Array.from({ length: count }, (_, i) => i);

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomScale = () => {
  const randomRange = Math.random();

  if (randomRange > 0.97) {
    return getRandomInt(800, 900);
  }

  if (randomRange > 0.2) {
    return getRandomInt(300, 799);
  }

  if (randomRange > 0.1) {
    return getRandomInt(30, 299);
  }

  if (randomRange > 0.025) {
    return getRandomInt(1, 29);
  }

  return 0;
};

const shiftDate = (date, numDays) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
};

const randomValues = (daysCount, today) => {
  const range = getRange(daysCount).map((index) => ({
    date: shiftDate(today, -index),
    count: getRandomScale()
  }));

  const reversedRange = [...range].reverse();

  let firstIgnoredMonth;
  for (const r of reversedRange) {
    const month = r.date
      .toLocaleString("default", { month: "short" })
      .toLowerCase();

    if (!firstIgnoredMonth) {
      firstIgnoredMonth = month;
    }

    if (firstIgnoredMonth === month) {
      r.count = -1;
    } else {
      break;
    }
  }
  debugger
  return reversedRange;
};

const randomValues_Custom = (heat_list) => {
  const reversedRange = heat_list?.map((ele,index) => ({
    date: new Date(ele?.date),
    count: ele?.count
  }));

  return reversedRange;
};

export default {
  shiftDate,
  randomValues,
  randomValues_Custom
};
