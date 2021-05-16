import phraseGameImg from '../../images/phrase-game-gameplay.png';
import './Projects.scss';

const Projects = () => (
    <div class="projects-container">
        <div class="container">
            <h1 class="project-title">Phrase Guess Game</h1>
            <div class="project">   
                <div class="project-image">
                    <img src={phraseGameImg} alt="phrase guess game"/>
                </div>
                <div class="project-description">
                    <p>This is the first game I ever built! It is certainly no halo 3 but it was super fun nonetheless :)</p>
                       
                       <p>This game was built using HTML, CSS, and JavaScript.</p>
                       <p>I utilized object-oriented principles to build a virtual Wheel of Fortune-style guessing game. There are three different screens: a start screen, gameplay, and end game screen depicting if you won or lost. 
                       Give it a try!</p>

                    
                    <div class="project-buttons">
                        <a class="button" href="https://valentinaperic.github.io/phrase-guess-game/" rel="noreferrer" target="_blank">Live Demo</a>
                        <a class="button" href="https://github.com/valentinaperic/phrase-guess-game" rel="noreferrer" target="_blank">GitHub Repo</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Projects;