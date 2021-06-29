import './card.css';
import Champagne from '../../images/champagne.jpg';
import { Link } from 'react-router-dom';

export const Card = ({title, imageUrl, body}) => {
    return (
        <div className="card-wrapper">
            <div className='jazz-section'>
                <div className="img-container">
                    <img src={Champagne} alt="bebop" />
                </div>
                <div className="jazz-content">
                <div className="jazz-title">
                    <h3>Jazz Section</h3>
                </div>
                <div className="jazz-body">
                    <p>The two featured compositions here are "Soft Mallet, Fast Motor" which is a Bebop/Big Band hybrid piece, 
                        and "Champagne and Cigars" which is a Smooth Jazz composition.</p>
                </div>
                <div className="btn">
                    <button>
                    <Link to='/music'> <a className="card-anchor">
                        View More
                    </a></Link>
                    </button>
                </div>
            </div>
        </div>

        <div className='orchestra-section'>
                <div className="img-container">
                    <img src={Champagne} alt="bebop" />
                </div>
                <div className="orchestra-content">
                <div className="orchestra-title">
                    <h3>Orchestral Cues</h3>
                </div>
                <div className="orchestra-body">
                    <p>In this section you will find orchestral music of all shapes and sizes. From a heartwarming lullaby written 
                        for the most adorable child in the world, to a superhero composition meant to capture the "Age of Heroes". 
                    </p>
                </div>
                <div className="btn">
                    <button>
                    <Link to='/music'> <a className="card-anchor">
                        View More
                    </a></Link>
                    </button>
                </div>
            </div>
        </div>

        <div className='thirty-section'>
                <div className="img-container">
                    <img src={Champagne} alt="bebop" />
                </div>
                <div className="thirty-content">
                <div className="thirty-title">
                    <h3>Scoring Competition</h3>
                </div>
                <div className="thirty-body">
                    <p>As part of a scoring competition amongst friends on Facebook, this challenge tasked all the participants with
                        describing an image with music, but confined to 30 seconds.</p>
                </div>
                <div className="btn">
                    <button>
                    <Link to='/music'> <a className="card-anchor">
                        View More
                    </a></Link>
                    </button>
                </div>
            </div>
        </div>

        <div className='rhythm-section'>
                <div className="img-container">
                    <img src={Champagne} alt="bebop" />
                </div>
                <div className="rhythm-content">
                <div className="rhythm-title">
                    <h3>Rhythm and Blues</h3>
                </div>
                <div className="rhythm-body">
                    <p>Composed in the ancient times of 2009, this R&B track was originally meant to accompany lyrics from a friend, 
                        but after another track was chosen, I deceided to polish this one and make it's own seperate piece. 
                    </p>
                </div>
                <div className="btn">
                    <button>
                    <Link to='/music'> <a className="card-anchor">
                        View More
                    </a></Link>
                    </button>
                </div>
            </div>
        </div>

    </div>
        
    )
}
