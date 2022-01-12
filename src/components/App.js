import CardList from './CardList/CardList';
import getWantedPeople from './API/API';

const App = async () => {
  const container = document.createElement('div');
  const cardList = CardList({
    cards: await getWantedPeople(),
  });

  container.append(cardList);
  return container;
};

export default App;
