import App from './src/components/App';
import Header from './src/components/Header/Header';

(async () => {
  const app = await App();
  const header = Header();
  const root = document.getElementById('root');

  root.append(header, app);
})();
