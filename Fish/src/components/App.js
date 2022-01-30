import CardList from './CardList/CardList';
import getResponse from './API/API';

const App = async (api) => {
  const container = document.createElement('div');
  const cardList = CardList({
    cards: await getResponse(api),
  });
  container.append(cardList);
  return container;
};

export default App;
