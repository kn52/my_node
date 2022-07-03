
const dateOptions = {
    year: "numeric",
    month: "short",
    weekday: "long",
    day: "numeric"
};

const getRange = (count = 0, ele = "") => Array.from({ length: count }, (_, i) => ele.length > 0 ? ele : i);

const TEXT_Y_AXIS = (map_list, init = "22") => map_list?.reduce((r_axis, ele, index) => {
    const Y = (parseInt(init) + (ele * index * 12))?.toString();
    r_axis.push(Y);
    return r_axis;
},[]);

const VIEW_BOX_STRING = "0 0 664 126";

const randomValues_Custom = (heat_list) => {
    const reversedRange = heat_list?.map((ele, index) => ({
        date: new Date(ele?.date),
        count: ele?.count
    }));

    return reversedRange;
};

const shiftDate = (date, numDays) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
};

const WEEKDAY_LABELS = ["", "SUN", "", "MON", "", "TUE", "", "WED", "", "THU", "", "FRI", "", "SAT"];

const getMonthName = (date) => date.toLocaleString("default", { month: "short" });

const getMinAvgMax = (arr) => {
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }

    return {
        min,
        avg: Math.trunc(sum / arr.length),
        max
    };
};

const tooltip = (date, count) => {
    const dateString = date.toLocaleDateString("en-US", dateOptions);
    if (count === 0) {
        return `Failure on ${dateString}`;
    }

    return `${count} kWh on ${dateString}`;
};

export default {
    getRange,
    TEXT_Y_AXIS,
    VIEW_BOX_STRING,
    randomValues_Custom,
    shiftDate,
    WEEKDAY_LABELS,
    getMonthName,
    getMinAvgMax,
    tooltip
}