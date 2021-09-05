import './App.css';
import ServiceContainer from './app/service/ServiceContainer';
import ServiceActionsContainer from './app/serviceActions/ServiceActionsContainer';

function App() {
  return (
    <div className="App">
        <ServiceActionsContainer />
        <ServiceContainer />
    </div>
  );
}

export default App;
