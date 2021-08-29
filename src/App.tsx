import './App.css';
import ServiceHistory from './app/serviceHistory/ServiceHistory';
import ServiceListContainer from './app/service/ServiceListContainer';
import ServiceItemContainer from './app/service/ServiceItemContainer';
import ServiceItemListContainer from './app/service/ServiceItemList/ServiceItemLIstContianer';

function App() {
  return (
    <div className="App">
        <ServiceHistory />
        <ServiceListContainer />
        <ServiceItemContainer />
        <ServiceItemListContainer />
    </div>
  );
}

export default App;
