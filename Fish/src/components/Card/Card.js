import showToast from 'native-toast';

const Card = (props) => {
  const container = document.createElement('div');
  container.classList.add('card');

  const img = document.createElement('img');
  img.src = props.img;

  const fullName = document.createElement('p');
  fullName.classList.add('fullname');
  fullName.innerText = props.name;

  container.onclick = () => {
    showToast({
      message: props.price,
      position: 'north',
      rounded: true,
      type: 'info',
    });
  };
  container.append(img, fullName);

  return container;
};

export default Card;
