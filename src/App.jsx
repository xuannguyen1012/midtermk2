import './App.css';
import { useState } from 'react';
import Header from './Header';
import Featured from './Featured';
import NewRelease from './NewRelease';

function App() {
    const [selectedEpisode, setSelectedEpisode] = useState(null);

    return (
        <div className="App">
            <Header />
            <main>
                <Featured selectedEpisode={selectedEpisode} />
                <NewRelease onEpisodeClick={setSelectedEpisode} />
            </main>
        </div>
    );
}

export default App;

