import Typewriter from 'typewriter-effect';
import './TypewriterContent.scss';

const TypewriterContent = () => (
  <div className="typewriter-content">
    <div className="container">
      <Typewriter
        options={{
        autoStart: true,
        loop: false,
      }}
      
      onInit={(typewriter) => {
         typewriter.typeString('Hi, my name is Valentina Peric. ')
           .pauseFor(1000)
         typewriter.typeString('<br/>')
         typewriter.typeString('I am a software engineer.')
           .pauseFor(1500)
           .deleteChars(18)
          typewriter.typeString('coding detective.')
           .pauseFor(1500)
           .deleteChars(17)
          typewriter.typeString('lover of Lord of the Rings.')
           .pauseFor(1500)
           .deleteChars(18)
          typewriter.typeString('great coffee.')
           .pauseFor(1500)
           .deleteChars(29)
          typewriter.typeString("Let's build something great, ")
           .pauseFor(1300)
          typewriter.typeString('<i>together.</i>')
           .start();
         }}
  
        />
      </div>
    </div>
  );

  export default TypewriterContent;

  