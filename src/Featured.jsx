import './Featured.css';
import featuredImage from './weather-with-you.jpg';

const Featured = ({ selectedEpisode }) => {
    return (
        <section className="featured">
            <div className='htl1'>
                <h2>Explore</h2>
                <p>What are you gonna watch today?</p>
            </div>
            <div className="featured-content">
                <img src={selectedEpisode ? selectedEpisode.image : featuredImage} alt={selectedEpisode ? selectedEpisode.title : "Weather With You"} />
                <div className="featured-description">
                    <h3>{selectedEpisode ? selectedEpisode.title : "Weather With You"}</h3>
                    <p>{selectedEpisode ? selectedEpisode.description : "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis."}</p>
                </div>
            </div>
        </section>
    );
};

export default Featured;
