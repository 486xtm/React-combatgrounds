import React, { useEffect, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useDispatch, useSelector } from "react-redux";
import { getDashBoardData } from "../../../api/admin";
export const AdminHome = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector(({ admin }) => admin.dash);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getDashBoardData(dispatch);
  }, []);

  useEffect(() => {
    // Apply theme
    if (!dashboard) return;
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    const chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    // Create legend
    chart.legend = new am4charts.Legend();

    // Chart data
    chart.data = [
      { role: "Admin", count: dashboard.admins },
      { role: "Supporter", count: dashboard.supporters },
      { role: "Free Player", count: dashboard.freePlayers },
    ];

    // Set inner radius
    chart.innerRadius = 100;

    // Create series
    const series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "count";
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
  }, [dashboard]);
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <img src="/pictures/common/mark.png" />
      </div>
      <p className="mx-auto text-3xl font-extrabold">
        Total Players: {dashboard ? dashboard.totalPlayers : "---"}
      </p>
      <style>
        {`
          #chartdiv {
            width: 100%;
            height: 500px;
          }
        `}
      </style>
      <div id="chartdiv"></div>
      <div className="text-center mt-20 font-[900] text-[25px] text-gray-900">
        {dashboard ? dashboard.remain : "loading..."}
      </div>
      <div className="text-center mt-20 font-[900] text-[25px] text-gray-900">
        {dashboard
          ? `Total transfered turns for this round: ${dashboard.turns}`
          : "loading..."}
      </div>
      <div
        className="text-center mt-10 font-[900] text-[25px] text-gray-900 cursor-pointer hover:text-gray-600"
        onClick={() => setShowModal(true)}
      >
        {dashboard
          ? `Cash Bounty: ${dashboard.bounty ? dashboard.bounty : "$0"}`
          : "loading..."}
      </div>
    </div>
  );
};
