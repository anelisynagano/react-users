import './App.css';
import CardsList from './components/CardsList';
import data from './data';

const App = () => {
    return (
        <CardsList {...data} />
    )
}

export default App;