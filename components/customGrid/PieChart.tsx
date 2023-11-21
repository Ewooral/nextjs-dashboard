// components/PieChart.tsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart: React.FC<{ data: number[]; labels: string[]; width?: number; height?: number }> = ({ data, labels, width = 300, height = 200 }) => {
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
          type: 'pie',
          data: {
            labels: labels,
            datasets: [
              {
                data: data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
                  'rgba(255, 206, 86, 0.7)',
                  'rgba(75, 192, 192, 0.7)',
                ],
              },
            ],
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

export default PieChart;
