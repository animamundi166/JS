const Card = (props) => {
  const container = document.createElement('div');
  container.classList.add('card');

  const leftcontainer = document.createElement('div');
  const img = document.createElement('img');
  img.src = props.src;

  const rightcontainer = document.createElement('div');
  rightcontainer.classList.add('rightcontainer');
  const fullName = document.createElement('p');
  fullName.classList.add('fullname');
  fullName.innerText = props.fullName;

  const birthday = document.createElement('p');
  birthday.innerHTML = `<span> <b>Date of Birth: </b></span> ${props.birthday === null ? '-' : props.birthday}`;

  const nationality = document.createElement('p');
  nationality.innerHTML = `<span> <b>Nationality: </b></span> ${props.nationality === null ? '-' : props.nationality}`;

  const description = document.createElement('p');
  description.innerHTML = `<span> <b>Description: </b></span> ${props.description === null ? '-' : props.description}`;

  leftcontainer.append(img);
  rightcontainer.append(fullName, birthday, nationality, description);
  container.append(leftcontainer, rightcontainer);

  return container;
};

export default Card;
