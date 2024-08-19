const ShrinkifyAbout = () => {
    return (
      <>
        <p>
          <span className="bold">LINK:</span> 
          <a href="https://github.com/santimariani/shrinkui" className="navLink" target="_blank">
          GitHub Repository
          </a>
        </p>
        <p>
          <span className="bold">TECH:</span> React • React Router • JWTs / Tokens • User Creation / Authentication • Password Hashing • Password Salting (Cryptography) 
        </p>
        <br></br>
        <p>
            With this project, I focused primarily on constructing a Single Page Application, learning to use React Router for higher efficiency. In addition, I added a safe method for user creation and authentication through tokens and password hashing/salting. Hence, I was able to block off parts of the website based on clearance, an added layer of experience to my coding arsenal!
        </p>
      </>
    );
  };
  
  export default ShrinkifyAbout;
  