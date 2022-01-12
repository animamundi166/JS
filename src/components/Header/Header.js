const Header = () => {
  const header = document.createElement('header');

  const img = document.createElement('img');
  img.src = 'https://www.mluisconstruction.com/wp-content/uploads/2015/10/FBI-header.jpg';

  header.append(img);
  return header;
};

export default Header;
