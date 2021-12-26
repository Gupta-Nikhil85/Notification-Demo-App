import Header from './components/header'
import Hero  from './components/hero';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Hero/>
      </div>
    </Provider>
  );
}

export default App;
