import { NavLink } from 'react-router-dom';
import Ballpit from './Ballpit.tsx'
import CardSwap, { Card } from './CardSwap.tsx';

export const BallpitBG = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
    <Ballpit
        count={30}
        gravity={0}
        friction={1}
        wallBounce={0.95}
        followCursor={false}
        maxSize={0.75}
        ambientColor="#a11919ff"
        colors={["#5227FF","#7cff67","#ff6b6b"]}
    />
    </div>
  );
}

export const CardSwapComp = () => {
  return (
    <div style={{ height: '500px', position: 'relative' }}>
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={true}
        height={300}
        width={300}
      >
        <Card>
          <NavLink
            to="/#guess"
          ><img src="src\assets\guessOutputImage.png" alt="GuessOutput" style={{borderRadius: '15px',height: '300px',margin: '0px 0px 0px 3px'}}/>
          </NavLink>
          </Card>
        <Card>
          <a
            href="https://www.youtube.com/@JSpresso1"
            target="_blank"
            rel="noreferrer"
          ><img src="src\assets\youtubeImg.png" alt="GuessOutput" style={{borderRadius: '15px',height: '300px',margin: '0px 0px 0px 3px'}}/>
          </a>
        </Card>
        <Card>
          <NavLink
            to="/roadmap"
          ><img src="src\assets\roadmapImg.png" alt="GuessOutput" style={{borderRadius: '15px',height: '300px',margin: '0px 0px 0px 3px'}}/>
          </NavLink>
        </Card>
      </CardSwap>
    </div> 
  )}