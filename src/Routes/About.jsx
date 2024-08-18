import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <p className="left" style={{ padding: "3vh 4vh" }}>
        <span className="bold">HELLO, THERE!</span>
        <br></br>
        <br></br>
        My name is Santi, a full-stack developer with a love for both beauty and
        logic and an appetite for continual learning and growth.
        <br></br>
        <br></br>
        An alumnus of the <span className="italics">Carolina Code School</span>,
        I learned to quickly absorb new technologies and to recognize those
        software patterns that are helping me take my ambitions beyond the
        classroom walls.
        <br></br>
        <br></br>
        For the front-end, I was equipped with JavaScript, React, HTML, and CSS.
        For the back-end, Python, PostgreSQL, and Supabase became my friends. On
        the horizon, Next.js, TypeScript, and Tailwind beckon me onward. Not a
        dull moment is expected at any turn!
        <br></br>
        <br></br>
        User experience is at the forefront of every project — unique
        interfaces, an ever-passionate goal! And beyond the visible, I enjoy
        employing sound logic to create solid apps that go the above-and-beyond.
        For more on the evolution of my software development journey, see my{" "}
        <Link to="/projects">Projects</Link> below!
        <br></br>
        <br></br>
        <br></br>
        <span className="bold">MY JOURNEY:</span>
        <br></br>
        <br></br>
        Originally born in Argentina (
        <span className="italics">hablo español</span>), I moved to the United
        States in 1996, falling in love with the culture of my new home. I went
        to Wofford College, majoring{" "}
        <span className="italics">summa cum laude</span> in Finance, and then
        devoted the next ten years to non-profit service work, locally and
        abroad. Grateful for these years of service, I returned to my beloved
        Spartanburg, to be closer to family, friends, and home.
        <br></br>
        <br></br>
        <br></br>
        <span className="bold">PROFESSIONAL GROWTH:</span>
        <br></br>
        <br></br>
        Three years ago, I became a realtor and a rapidly growing content
        creator, learning the ins and outs of impromptu marketing. Thanks to my
        efforts and local contributions, I thus become a Planning Commissioner
        for the City of Spartanburg, an Ambassador for OneSpartanburg, Inc.'s
        "Power Up" entrepreneurship program, and a source and point of contact
        for the local news.
        <br></br>
        <br></br>
        Yet what's the point of all work and no fun?! Hence, while juggling all
        this, I also became a{" "}
        <span className="italics">Spartanburg Cocktail Masters</span> annual
        event co-creator, helping to draw in hundreds of people to our beautiful
        city and raising tens of thousands of dollars for a local cause. Keep
        your eyes on our{" "}
        <a
          href="https://burgcocktailmasters.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          website
        </a>{" "}
        every August to join in on the fun!
        <br></br>
        <br></br>
        <br></br>
        <span className="bold">A NEW ADVENTURE BEGINS:</span>
        <br></br>
        <br></br>
        In the midst of such intense activity, I ended up discovering a true
        love for content creation, having taken art and music classes my whole
        life. My observant brother (a classy geek and bona fide dork) encouraged
        me to take a closer look at coding, knowing it would wash with so many
        fun chemicals my ADHD brain, oh-so-OCD prone. And so I became — at long
        happy last — a software developer, ready to bring more beauty and order
        to the world through code.
        <br></br>
        <br></br>
        In my spare time, I enjoy hiking with friends, watching others play
        Minecraft, and -not- talking long walks on the beach, lest the sand get
        in everywhere.
        <br></br>
        <br></br>
        Thank you for taking the time to get to know me! Now join me on my
        adventure by sending me a <Link to="/contact-me">message</Link>, and
        let's get connected to create value and memorable experiences for years
        to come.
        <br></br>
        <br></br>
        <span className="bold">Enjoy your stay!</span> :)
      </p>
    </div>
  );
};

export default About;
