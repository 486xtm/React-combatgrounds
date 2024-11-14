import React, {useEffect} from 'react'
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
export const AdminHome = () => {
  useEffect(() => {
    // Apply theme
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    const chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    // Create legend
    chart.legend = new am4charts.Legend();

    // Chart data
    chart.data = [
      { role: "Supporter", litres: 501.9 },
      { role: "Free Player", litres: 301.9 },
      { role: "Admin", litres: 201.1 },
    ];

    // Set inner radius
    chart.innerRadius = 100;

    // Create series
    const series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "role";

    series.colors.list = [
      am4core.color("#FF6384"),
      am4core.color("#36A2EB"),
      am4core.color("#FFCE56"),
    ];

    // Cleanup chart on component unmount
    return () => {
      chart.dispose();
    };
  }, []);
  return <div className='w-full'>
    <div className='flex justify-center'>
      <img src = "/SignIn/mark.svg" />
    </div>
    <style>
        {`
          #chartdiv {
            width: 100%;
            height: 500px;
          }
        `}
      </style>
      <div id="chartdiv"></div>
      <div className='text-center mt-20 font-[900] text-[25px] text-gray-900'>Round 2 ends in: 2 days, 13 hours, 35 minutes and 8 seconds.</div>
  </div>
}