const RobinsonCrusoeAbout = () => {
  return (
    <>
      <p>
        <span className="bold">LINK:</span>
        <a href="https://github.com/santimariani/crusoe" className="navLink" target="_blank">
          GitHub Repository
        </a>
      </p>
      <p>
        <span className="bold">TECH:</span> FastAPI • PostgreSQL • Postico •
        Video Implementation
      </p>
      <br></br>
      <p>
        For the next step-up, I used FastAPI to interact with a self-created
        database, which I made using PostgreSQL. To go the extra mile, I challenged myself to create "blinking
        eyes" as if one were waking up on a beach after a boat crash... blurry vision and all. Yet, most excitingly, I <span className="italics">finally</span> pulled off adding video to a project! And so, {" "}
        <span className="italics">
          The Utterly Curious & Stupendously Miraculous Redemption of One Mister
          Robinson Crusoe, Not Esquire
        </span>{" "}
        was gleefully born.{" "}
      </p>
    </>
  );
};

export default RobinsonCrusoeAbout;
