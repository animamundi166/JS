import showToast from 'native-toast';
import Render from '../Render/Render';

const Header = () => {
  const header = document.createElement('header');

  const textcontainer = document.createElement('div');
  textcontainer.classList.add('textcontainer');

  const h1 = document.createElement('h1');
  h1.textContent = 'Мерзкие твари';

  h1.classList.add('logo');
  h1.onclick = () => {
    showToast({
      message: 'Вы можете заказать любую тварь которая есть на это сайте, а для начала  сообщите нам все данные своей банковской карты',
      position: 'north',
      rounded: true,
      type: 'info',
    });
  };

  const h3 = document.createElement('h3');
  h3.textContent = '№1 на черном рынке РБ';
  h3.onclick = () => { h3.textContent = 'и №1 на черном рынке Казахстана ))'; };

  const logocontainer = document.createElement('div');
  logocontainer.classList.add('logocontainer');

  const fish = document.createElement('button');
  fish.classList.add('creature', 'fish');
  fish.onclick = () => Render('fish');

  const seacreatures = document.createElement('button');
  seacreatures.classList.add('creature', 'seacreatures');
  seacreatures.onclick = () => Render('sea');

  const bugs = document.createElement('button');
  bugs.classList.add('creature', 'bugs');
  bugs.onclick = () => Render('bugs');

  const fossils = document.createElement('button');
  fossils.classList.add('creature', 'fossils');
  fossils.onclick = () => Render('fossils');

  const villagers = document.createElement('button');
  villagers.classList.add('creature', 'villagers');
  villagers.onclick = () => Render('villagers');

  textcontainer.append(h1, h3);
  logocontainer.append(fish, seacreatures, bugs, fossils, villagers);
  header.append(textcontainer, logocontainer);

  return header;
};

export default Header;
