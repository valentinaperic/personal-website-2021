import Typewriter from 'typewriter-effect';
import './TypewriterContent.scss';

const TypewriterContent = () => (
  <div class="typewriter-content">
    <div class="container">
      <Typewriter
        options={{
        autoStart: true,
        loop: false,
      }}
      
      onInit={(typewriter) => {
         typewriter.typeString('Hi, my name is Valentina Peric. ')
           .pauseFor(1000)
         typewriter.typeString('I am a software engineer.')
           .pauseFor(1500)
           .deleteChars(18)
          typewriter.typeString('coding detective.')
           .pauseFor(1500)
           .deleteChars(17)
          typewriter.typeString('lover of lord of the rings.')
           .pauseFor(1500)
           .deleteChars(18)
          typewriter.typeString('great coffee.')
           .pauseFor(1500)
           .deleteChars(29)
          typewriter.typeString("let's build something great, ")
           .pauseFor(1300)
          typewriter.typeString('<i>together.</i>')
           .start();
         }}
  
        />
      </div>
    </div>
  );

  export default TypewriterContent;

  