import "./MyFuture.css";

function MyFuture() {
  return (
    <div className="page">
      <h1>Мій розвиток</h1>

      <h2>Моя майбутня професія</h2>

      <p>
        Я хочу стати Data Scientist та працювати
        з аналізом даних і сучасними технологіями.
      </p>

      <div className="future-list">
        <div className="future-card">
          <h3>1. Покращити frontend-навички</h3>

          <p>
            Вивчити React, сучасний JavaScript та backend.
          </p>
        </div>

        <div className="future-card">
          <h3>2. Освоїти бази даних та мережі</h3>

          <p>
            Навчитись працювати з серверами та API.
          </p>
        </div>

        <div className="future-card">
          <h3>3. Вивчити Data Science</h3>

          <p>
            Освоїти Python, машинне навчання та аналіз даних.
          </p>
        </div>
      </div>

      <blockquote>
        “Success is the sum of small efforts repeated day in and day out.”
      </blockquote>
    </div>
  );
}

export default MyFuture;