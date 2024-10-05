import Aside from "@/components/Aside";
import Cards from "@/components/Cards";
import Chart from "@/components/Charts/BarChart";
import ChartPie from "@/components/Charts/PieChart";
import RadarCharts from "@/components/Charts/RadarChart";
import HeaderDesktop from "@/components/Headers/HeaderDesktop";
import Header from "@/components/Headers/HeaderMobile";

export default function Home() {
  return (
    <div className=" p-3 min-h-screen bg-slate-100 dark:bg-black ">
      <HeaderDesktop />
      <Header />
      <Aside />
      <div className="sm:ml-16   ">
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-2 m-4   justify-items-center   ">
          <Cards />
          <Chart />
          <ChartPie />
          <RadarCharts />
        </div>
      </div>
    </div>
  );
}
