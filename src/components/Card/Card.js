import './Card.scss';

const Card = (props) => {
  const container = document.createElement('div');
  container.classList.add('card');

  const continent = document.createElement('p');
  continent.classList.add('continent');
  continent.innerText = `Continent: ${props.continent}`;

  const deaths = document.createElement('p');
  deaths.classList.add('deaths');
  deaths.innerText = `Deaths: ${props.deaths}`;

  const todayCases = document.createElement('p');
  todayCases.classList.add('todayCases');
  todayCases.innerText = `Today Cases: ${props.todayCases}`;

  container.append(continent, deaths, todayCases);

  return container;
};

export default Card;
