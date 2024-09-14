"use client"

import{ Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [670298,1236179, 934579,236434],
                backgroundColor: ['#0747b6', '#2265d8','#2f91fa', '#2256d8']
            }
        ],
        labels: ['Bank1', 'Bank2', 'Bank3', 'Bank4']
    }


  return (
    <Doughnut data={data}
    options={{
        cutout: '60%',
        plugins: {
            legend:{
                display: false
            }
        }
    }} />
  )
}

export default DoughnutChart
