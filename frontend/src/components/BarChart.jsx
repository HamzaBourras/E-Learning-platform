/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
// ProfessorChart.js

import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const ProfessorChart = ({ data }) => {
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: 'Assignments',
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                data: Object.values(data).map((professor) => professor.assignments || 0),
            },
            {
                label: 'Quizzes',
                backgroundColor: 'rgba(255,99,132,0.4)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                data: Object.values(data).map((professor) => professor.quizzes || 0),
            },
            {
                label: 'Courses',
                backgroundColor: 'rgba(255,206,86,0.4)',
                borderColor: 'rgba(255,206,86,1)',
                borderWidth: 1,
                data: Object.values(data).map((professor) => professor.courses || 0),
            },
        ],
    };

    const chartOptions = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return (
        <div>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default ProfessorChart;
