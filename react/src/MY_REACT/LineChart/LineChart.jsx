import {CanvasJSChart} from 'canvasjs-react-charts';

const splineOptions = {
    animationEnabled: true,
    title:{
        text: "Monthly Sales - 2017"
    },
    axisX: {
        valueFormatString: "MMM"
    },
    axisY: {
        title: "Sales (in USD)",
        prefix: "$"
    },
    data: [{
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
            { x: new Date(2017, 0), y: 25060 },
            { x: new Date(2017, 1), y: 27980 },
            { x: new Date(2017, 2), y: 42800 },
            { x: new Date(2017, 3), y: 32400 },
            { x: new Date(2017, 4), y: 35260 },
            { x: new Date(2017, 5), y: 33900 },
            { x: new Date(2017, 6), y: 40000 },
            { x: new Date(2017, 7), y: 52500 },
            { x: new Date(2017, 8), y: 32300 },
            { x: new Date(2017, 9), y: 42000 },
            { x: new Date(2017, 10), y: 37160 },
            { x: new Date(2017, 11), y: 38400 }
        ]
    }]
}

const lineOptions = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title:{
        text: "Bounce Rate by Week of Year"
    },
    axisY: {
        title: "Bounce Rate",
        suffix: "%"
    },
    axisX: {
        title: "Week of Year",
        prefix: "W",
        interval: 2
    },
    data: [{
        type: "line",
        toolTipContent: "Week {x}: {y}%",
        dataPoints: [
            { x: 1, y: 64 },
            { x: 2, y: 61 },
            { x: 3, y: 64 },
            { x: 4, y: 62 },
            { x: 5, y: 64 },
            { x: 6, y: 60 },
            { x: 7, y: 58 },
            { x: 8, y: 59 },
            { x: 9, y: 53 },
            { x: 10, y: 54 },
            { x: 11, y: 61 },
            { x: 12, y: 60 },
            { x: 13, y: 55 },
            { x: 14, y: 60 },
            { x: 15, y: 56 },
            { x: 16, y: 60 },
            { x: 17, y: 59.5 },
            { x: 18, y: 63 },
            { x: 19, y: 58 },
            { x: 20, y: 54 },
            { x: 21, y: 59 },
            { x: 22, y: 64 },
            { x: 23, y: 59 }
        ]
    }]
}

const stepOptions = {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    title:{
        text: "Stock Movement"
    },
    axisY:{
        title: "Stock In Hand"
    },
    data: [{
        type: "stepLine",
        xValueFormatString: "MMM YYYY",
        markerSize: 5,
        dataPoints: [
            { x: new Date("2017- 01- 01"), y: 1792 },
            { x: new Date("2017- 02- 20"), y: 1526 },
            { x: new Date("2017- 03- 11"), y: 1955 },
            { x: new Date("2017- 04- 05"), y: 1727 },
            { x: new Date("2017- 05- 04"), y: 1523 },
            { x: new Date("2017- 06- 21"), y: 1257 },
            { x: new Date("2017- 07- 05"), y: 1520 },
            { x: new Date("2017- 08- 03"), y: 1853 },
            { x: new Date("2017- 09- 11"), y: 1738 },
            { x: new Date("2017- 10- 03"), y: 1754 }
        ]
    }]
}

const LineChart = () => <>
    <div>
        <div><CanvasJSChart options = {lineOptions}/></div>
        <div><CanvasJSChart options = {splineOptions}/></div>
        <div><CanvasJSChart options = {stepOptions}/></div>
        <div style={{height:'50px',left:'0',bottom:'0',position:'fixed',background:'red',width:'100%',textAlign:'center',verticalAlign:'center'}}>
        Footer
    </div>
    </div>;
    
    </>

export default LineChart;