import App from './src/components/App';
import Header from './src/components/Header/Header';

(async () => {
  const header = Header();
  const app = await App('bugs');
  const root = document.getElementById('root');

  root.append(header, app);
})();
