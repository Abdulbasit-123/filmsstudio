import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import './App.css';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@mui/system';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact />
            <Route path='/movies' component={Movies}/>
            <Route path='/series' component={Series}/>
            <Route path='/search' component={Search}/>
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />

    </BrowserRouter>
      
  
  
  );
}

export default App;

// App
