import phraseGameImg from '../../images/phrase-game-gameplay.png';
import nodeExpressPortfolioImg from '../../images/node-express-portfolio.png';
import './Projects.scss';

const Projects = () => (
    <div className="projects-container">
        <div className="container">
            <PhraseGuessGame />
            <NodeExpressPortfolio />
        </div>
    </div>
);


const PhraseGuessGame = () => (
    <div className="project-section">
        <h1 className="project-title">Phrase Guess Game</h1>
        <div className="project">   
            <div className="project-image">
                <img src={phraseGameImg} alt="phrase guess game"/>
            </div>
            <div className="project-description">
                <p>This is the first game I ever built! It is certainly no halo 3 but it was super fun nonetheless :)</p>
                
                <p>This game was built using HTML, CSS, and JavaScript.</p>
                <p>I utilized object-oriented principles to build a virtual Wheel of Fortune-style guessing game. There are three different screens: a start screen, gameplay, and end game screen depicting if you won or lost. 
                Give it a try!</p>
                <div className="project-buttons">
                    <a className="button" href="https://valentinaperic.github.io/phrase-guess-game/" rel="noreferrer" target="_blank">Live Demo</a>
                    <a className="button" href="https://github.com/valentinaperic/phrase-guess-game" rel="noreferrer" target="_blank">GitHub Repo</a>
                </div>
            </div>
        </div>
    </div>
);

const NodeExpressPortfolio = () => (
    <div className="project-section">
        <h1 className="project-title">Node Express Portfolio</h1>
        <div className="project">   
            <div className="project-image">
                <img src={nodeExpressPortfolioImg} alt="Node Express Portfolio"/>
            </div>
            <div className="project-description">
                <p>This is a portfolio site that was built on Node.js and Express. It showcases some small projects that I have worked on!</p>
                
                <p>It also uses pug templates which is a template engine for Node which was a fun added touch. This app was deployed using Heroku.</p>

                <div className="project-buttons">
                    <a className="button" href="https://github.com/valentinaperic/node-express-portfolio" rel="noreferrer" target="_blank">Live Demo</a>
                    <a className="button" href="https://node-portfolio-valentina-peric.herokuapp.com/" rel="noreferrer" target="_blank">GitHub Repo</a>
                </div>
            </div>
        </div>
    </div>
);

export default Projects;