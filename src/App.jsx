import { ToastContainer } from 'react-toastify';
import RoutesApp from './routes';

function App() {
  return (
    <div className="container-app">
      <ToastContainer autoClose={4500} />
      <RoutesApp/>
    </div>
  );
}

export default App;
