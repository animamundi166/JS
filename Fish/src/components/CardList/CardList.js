import Card from '../Card/Card';

const CardList = (props) => {
  const container = document.createElement('div');
  container.classList.add('cardlist');
  const cardElements = props.cards.map(Card);

  container.append(...cardElements);
  return container;
};

export default CardList;
