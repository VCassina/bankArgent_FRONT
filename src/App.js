import "./App.css";
import Routes from "./Routes";
import { Helmet } from 'react-helmet';
 
function App() {
  return (
    <div className="app_div">
      <Helmet>
        <title>ArgentBank - Votre banque en ligne</title>
      </Helmet>
      <Routes />
    </div>
  );
}

export default App;