import React, { useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import "react-calendar-heatmap/dist/styles.css";
import "./heatmap_style.css";
import heat_map_services from './Heat_Map_Services';
import heat_list from './heat_map.json';

const classForValue = (value) => {
  const { date, count } = value;
  if (count === -1) {
    return "heatmap-day color-scale-empty";
  }

  // const month = getMonthName(date).toLowerCase();
  const month = heat_map_services?.getMonthName(date).toLowerCase();

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
  const filteredByMonth = data.filter((item) => heat_map_services?.getMonthName(item.date).toLowerCase() === month.toLowerCase());

  const counts = filteredByMonth.map((item) => item.count).filter((count) => count >= 0);

  const { min, avg, max } = heat_map_services?.getMinAvgMax(counts);

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
    "data-tip": heat_map_services?.tooltip(date, count),
  };
};

const Heat_Map_Element = () => {
  // const today = new Date("09/22/2020");
  const today = new Date("01/01/2020");

  // const daysCount = 365;
  const daysCount = heat_list?.HEAT_MAP?.length;

  // const startDate = random.shiftDate(today, -daysCount);
  const startDate = heat_map_services?.shiftDate(today, -daysCount);
  
  // const randomValues = random.randomValues(daysCount, today);
  const randomValues = heat_map_services?.randomValues_Custom(heat_list?.HEAT_MAP);

  useEffect(() => {

    const svg_ele_tag = document.querySelectorAll(".react-calendar-heatmap");
    const svg_ele = svg_ele_tag[0];
    
    if(svg_ele?.attributes){
      if(svg_ele?.attributes?.length > 1){
        if(svg_ele?.attributes[1]?.nodeName?.toLowerCase() === "viewbox" && svg_ele?.attributes[1]?.nodeValue?.trim() !== "" ){
          svg_ele.attributes[1].nodeValue = heat_map_services?.VIEW_BOX_STRING?.toString();
        }
      }  
    }

    const weeklabels = document.querySelectorAll(".react-calendar-heatmap-weekday-label");
    const week_labels_y_axis = heat_map_services?.TEXT_Y_AXIS;
    // const first_weeklabels = weeklabels[0]?.attributes[1]?.nodeValue;
    
    weeklabels.forEach((label,index) => {
      const  available_attributes = label.attributes;
        if(available_attributes?.length > 1){
          const node_obj = available_attributes[1];
          if(node_obj?.nodeName?.toLowerCase() === "y" && node_obj?.nodeValue?.trim() !== "" ){
            // label.attributes[1].nodeValue = (parseInt(first_weeklabels) + (index * 12))?.toString();
            label.attributes[1].nodeValue = week_labels_y_axis[index];
          }
        }
    });

    const labels = document.querySelectorAll(".react-calendar-heatmap-month-label");

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

  // console.log("WEEKDAY_LABELS", WEEKDAY_LABELS);
  
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
          weekdayLabels={heat_map_services?.WEEKDAY_LABELS}
          gutterSize={2}
        />
      </div>

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

export default Heat_Map_Element;
