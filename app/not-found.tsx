import Link from "next/link";
import css from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.text}>Sorry, the page you&#39;re looking for doesn&#39;t exist.</p>
      <Link className={css.link} href="/">Co back home</Link>
    </div>
  );
}
