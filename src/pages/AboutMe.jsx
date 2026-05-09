import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="page">
      <h1>Про мене</h1>

      <p>
        Мене звати Денис. Я навчаюсь у НУБіП та вивчаю
        розробку додатків.
      </p>

      <p>
        Мене зацікавило програмування тим, що у цій сфері
        постійно є щось нове та різноманітне.
      </p>

      <p>
        Я вже маю досвід у розробці сайтів, React-застосунків,
        додатків та базовій розробці ігор.
      </p>

      <section>
        <h2>Що хочу вивчити</h2>

        <ul>
          <li>Бази даних</li>
          <li>Комп’ютерні мережі</li>
          <li>Роботу API</li>
          <li>Data Science</li>
        </ul>
      </section>

      <section>
        <h2>Мої проєкти</h2>

        <div className="projects">
          <div className="project-card">
            <h3>HTML + CSS</h3>

            <a
              href="https://github.com/DenisVoytenko1001/react-first-lab.git"
              target="_blank"
              rel="noreferrer"
            >
              React First Lab
            </a>
          </div>

          <div className="project-card">
            <h3>JavaScript</h3>

            <a
              href="https://github.com/DenisVoytenko1001/React13.git"
              target="_blank"
              rel="noreferrer"
            >
              React13
            </a>
          </div>

          <div className="project-card">
            <h3>React</h3>

            <a
              href="https://github.com/DenisVoytenko1001/React13.git"
              target="_blank"
              rel="noreferrer"
            >
              React13
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;