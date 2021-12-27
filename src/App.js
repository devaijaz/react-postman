import HttpClientDataProvider from './context';
import Home from './pages/Home';

function App() {
  return <div style={{ "minWidth": "1024px" }}>
    <HttpClientDataProvider>
      <Home />
    </HttpClientDataProvider>
  </div>
}

export default App;
