import Link from "next/link";
import styles from "./layout.module.css";
import Image from 'next/image'
import logo from '../public/logo.gif'
const Layout = () => {
  return (
    <div className={styles.header}>
      {/* <h2 className={styles.logo}>Breaking News!</h2> */}
      <Image src={logo} alt="Website logo" width="150" height="150" />
      <nav>
        <ul>
          <li>
            <Link href="/categories/business">
              <a>Business</a>
            </Link>
          </li>
          <li>
            <Link href="/categories/entertainment">
              <a>Entertainment</a>
            </Link>
          </li>
          <li>
            <Link href="/categories/health">
              <a>Health</a>
            </Link>
          </li>
          <li>
            <Link href="/categories/science">
              <a>Science</a>
            </Link>
          </li>
          <li>
            <Link href="/categories/sports">
              <a>Sports</a>
            </Link>
          </li>
          <li>
            <Link href="/categories/tech">
              <a>Technology</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
