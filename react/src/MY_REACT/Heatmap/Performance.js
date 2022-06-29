import React, { useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

import random from "./random";
import tooltip from "./tootltip";
import { WEEKDAY_LABELS, getMonthName } from "./date";
import { getMinAvgMax } from "./math";

import "react-calendar-heatmap/dist/styles.css";
import "./heatmap_style.css";

const classForValue = (value) => {
  const { date, count } = value;
  if (count === -1) {
    return "heatmap-day color-scale-empty";
  }

  const month = getMonthName(date).toLowerCase();

  let scale = 0;
  if (count >= 900) {
    scale = 5;
  }
  if (count >= 800) {
    scale = 4;
  }

  if (count >= 500 && count < 800) {
    scale = 3;
  }

  if (count >= 11 && count < 500) {
    scale = 2;
  }

  if (count > 0 && count <= 10) {
    scale = 1;
  }

  return `heatmap-day heatmap-month-${month} color-scale-${scale}`;
};

const getStatsForMonth = (data, month) => {
  const filteredByMonth = data.filter(
    (item) => getMonthName(item.date).toLowerCase() === month.toLowerCase()
  );

  const counts = filteredByMonth
    .map((item) => item.count)
    .filter((count) => count >= 0);

  const { min, avg, max } = getMinAvgMax(counts);

  return {
    min,
    avg,
    max,
  };
};

const getDayTooltip = (date, count) => {
  if (count < 0) {
    return {};
  }

  return {
    "data-place": "top",
    "data-tip": tooltip(date, count),
  };
};

const Performance = () => {
  // const today = new Date("09/22/2020");
  // const startDate1 = new Date("1/05/2020");
  const today = new Date("09/22/2020");

  const daysCount = 365;

  const startDate = random.shiftDate(today, -daysCount);
  const randomValues = random.randomValues(daysCount, today);


  useEffect(() => {

    const weeklabels = document.querySelectorAll(
      ".react-calendar-heatmap-weekday-label"
    );

    const first_weeklabels = weeklabels[0]?.attributes[1]?.nodeValue;

    weeklabels.forEach((label,index) => {
      const  available_attributes = label.attributes;
        if(available_attributes?.length > 1){
          const node_obj = available_attributes[1];
          if(node_obj?.nodeName?.toLowerCase() === "y" && node_obj?.nodeValue?.trim() !== "" ){
            label.attributes[1].nodeValue = (parseInt(first_weeklabels) + (index * 12))?.toString();
          }
        }
    });

    const labels = document.querySelectorAll(
      ".react-calendar-heatmap-month-label"
    );

    const SEP = "&nbsp;&nbsp;&nbsp;";
    labels.forEach((label) => {
      const month = label.innerHTML;
      const { min, avg, max } = getStatsForMonth(randomValues, month);

      label.dataset.html = true;
      label.dataset.place = "bottom";
      label.dataset.tip = `Min: ${min} ${SEP} Avg: ${avg} ${SEP} Max: ${max}`;
    });

    ReactTooltip.rebuild();

    let clicked = false;
    let resetTimeout = null;

    labels.forEach((label) => {
      label.addEventListener("click", () => {
        clicked = !clicked;
      });

      label.addEventListener("mouseenter", () => {
        clearTimeout(resetTimeout);

        const month = label.innerHTML.toLowerCase();
        document
          .querySelectorAll(".heatmap-day")
          .forEach((day) => (day.style.opacity = 1));
        document
          .querySelectorAll(`.heatmap-day:not(.heatmap-month-${month})`)
          .forEach((day) => (day.style.opacity = 0.07));
      });

      label.addEventListener("mouseleave", () => {
        if (clicked) {
          return;
        }

        resetTimeout = setTimeout(() => {
          document
            .querySelectorAll(".heatmap-day")
            .forEach((day) => (day.style.opacity = 1));
        }, 800);
      });
    });
  }, [randomValues]);
  console.log("WEEKDAY_LABELS", WEEKDAY_LABELS);
  return (
    <div className="performance">
      <header>
        <div className="performace_header">
          <div className="mb-4 font-weight-bold">
            2000,contribution last year
          </div>
          <div className="mb-3 date_div">
            <input
              className="value_contain"
              type="date"
              id="bs_onVarientExecutionDateChange"
              // value={variantExecutionDateChange}
            />
             <input
              className="value_contain"
              type="date"
              id="bs_onVarientExecutionDateChange"
              // value={variantExecutionDateChange}
            />
          </div>
        </div>
      </header>

      <div className="heatmap">
        <CalendarHeatmap
          startDate={startDate}
          endDate={today}
          values={randomValues}
          classForValue={(value) => classForValue(value)}
          tooltipDataAttrs={(value) => getDayTooltip(value.date, value.count)}
          showWeekdayLabels={true}
          weekdayLabels={WEEKDAY_LABELS}
          gutterSize={2}
        />
        
      </div>
      {/* <div class="heatmap">
        <svg class="react-calendar-heatmap" viewBox="0 0 664 126">
          <g transform="translate(30, 14)" class="react-calendar-heatmap-all-weeks">
            <g transform="translate(0, 0)" class="react-calendar-heatmap-week">
              <rect width="10" height="10" x="0" y="24" class="heatmap-day color-scale-empty"><title></title></rect>
              <rect width="10" height="10" x="0" y="36" class="heatmap-day color-scale-2"><title></title></rect>
            </g>
          </g>
        </svg>
      </div> */}

      <div className="description-scales">
        <div className="scales">
          <div className="range_scale">
            <div>Error</div>
            <div className="scale color-scale-0" data-tip="Error"></div>
          </div>
          <div className="range_scale">
            <div>Pending</div>
            <div className="scale color-scale-1" data-tip="Pending"></div>
          </div>
          <div className="range_scale">
            <div>Completed</div>
            <div className="scale color-scale-2" data-tip="Completed"></div>
          </div>
          <div className="range_scale">
            <div>Fail</div>
            <div className="scale color-scale-3" data-tip="Fail"></div>
          </div>
          <div className="range_scale">
            <div>Not Available</div>
            <div className="scale color-scale-4" data-tip="Not Available"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
