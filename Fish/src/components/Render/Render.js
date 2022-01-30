import App from '../App';

const Render = async (api) => {
  const root = document.getElementById('root');
  const app = await App(api);
  root.removeChild(root.lastChild);
  root.append(app);
};

export default Render;
