import Chart from 'chart.js/auto';
import './LineChart.scss';

const LineChart = (props) => {
  const canvasContainer = document.createElement('div');
  canvasContainer.classList.add('canvasContainer');
  const canvas = document.createElement('canvas');
  canvas.classList.add('canvas');

  const label = [props.continent];
  const labels = ['Cases', 'Deaths', 'Recovered'];
  const data = [props.cases, props.deaths, props.recovered];

  // eslint-disable-next-line no-new
  new Chart(canvas, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label,
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 3,
        }],
    },
  });

  canvasContainer.append(canvas);
  return canvasContainer;
};

export default LineChart;
