import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './SkillsChart.css';
import { BiAlignLeft } from 'react-icons/bi';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Python', 'Network Security', 'Forensics', 'Cryptography', 'Linux', 'Web Security'],
  datasets: [
    {
      label: 'Skill Level (%)',
      data: [90, 85, 80, 70, 75, 80],
      backgroundColor: [
        '#00eaffcc',
        '#39ff14cc',
        '#00eaffbb',
        '#39ff14bb',
        '#00eaff99',
        '#39ff1499'
      ],
      borderRadius: 8,
      borderSkipped: false,
    },
  ],
};

const options = {
  indexAxis: 'y',
  scales: {
    x: {
      min: 0,
      max: 100,
      grid: { color: '#232b3a' },
      ticks: { color: '#eaf6fb' }
    },
    y: {
      grid: { color: '#232b3a' },
      ticks: { color: '#eaf6fb' }
    }
  },
  plugins: {
    legend: { display: false },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#181f2a',
      titleColor: '#39ff14',
      bodyColor: '#00eaff'
    }
  },
  responsive: true,
  maintainAspectRatio: false,
};

const SkillsChart = () => (
  <section className="skills-chart-section">
    <h2>Skills Overview</h2>
    <div style={{ height: 320, width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  </section>
);

export default SkillsChart;