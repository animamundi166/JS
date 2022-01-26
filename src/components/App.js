import getResponse from './API/getAPI';
import LineChart from './LineChart/LineChart';
import Dropdown from './Dropdown/Dropdown';
import Card from './Card/Card';
import './Container.scss';

const App = async () => {
  const container = document.createElement('div');
  container.classList.add('main');

  const continents = Dropdown({
    options: await getResponse(''),
  });
  continents.classList.add('continents');

  const createCard = async (materic) => {
    const data = await getResponse(materic);
    const card = Card(data);
    return card;
  };

  const createChart = async (materic) => {
    const data = await getResponse(materic);
    const lineChart = LineChart(data);
    return lineChart;
  };

  let card = await createCard();

  let lineChart = await createChart();

  continents.onchange = async (event) => {
    const continent = event.target.selectedOptions[0].value;
    container.removeChild(card);
    container.removeChild(lineChart);
    lineChart = await createChart(continent);
    card = await createCard(continent);
    container.append(card, lineChart);
  };

  container.append(continents, card, lineChart);
  return container;
};

export default App;
