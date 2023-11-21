// components/DoughnutChart.tsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, labels, width = 230, height = 230 }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // @ts-ignore
        chartInstance.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [
              {
                data: data,
                backgroundColor: [
                  '#00a2ff',
                  '#61d836',          
                ],
                borderColor: [
                    '#00a2ff',
                    '#61d836',

                    ],
               
              },
            ],
          },
          options: {
            responsive: false,
            maintainAspectRatio: false,
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels, width, height]);

  return <canvas ref={chartRef} width={width} height={height}></canvas>;
};

export default DoughnutChart;
