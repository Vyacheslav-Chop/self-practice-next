import css from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to Your Notes App</h1>
        <p className={css.text}>
          Welcome to your personal notebook — a simple yet powerful tool for
          organizing your ideas, tasks, and thoughts. This app helps you quickly
          create notes, sort them by categories, easily find the information you
          need, and keep everything in one place. The convenient interface allows
          you to focus on what matters — your content — without distractions from
          unnecessary features. Whether you are a student, a professional, or a
          creative person, this notebook will become your reliable assistant.
        </p>
        <p className={css.text}>
          Start using it today and discover the simplicity and efficiency of
          managing your notes!
        </p>
      </div>
    </main>
  );
}
