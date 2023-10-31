import Hero from "../components/Hero";

function About({ movies }) {
  return (
    <div className="container">
      <main className="about">
        <div className="about__text">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi saepe
            veniam amet ducimus eum nam quisquam explicabo magnam, ea provident
            assumenda nisi reiciendis? Mollitia dolores dolorem, pariatur ipsa
            sint fugiat.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi saepe
            veniam amet ducimus eum nam quisquam explicabo magnam, ea provident
            assumenda nisi reiciendis? Mollitia dolores dolorem, pariatur ipsa
            sint fugiat.
          </p>
        </div>
        <Hero movies={movies.slice(0, 5)} />
      </main>
    </div>
  );
}

export default About;
