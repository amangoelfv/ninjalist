import Head from "next/head";
import Link from "next/link";
import styles from "./../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos iure
          quae dolorem obcaecati vel perspiciatis sit harum temporibus soluta
          quas dolores natus maxime odio accusamus, ut, blanditiis, iste
          reiciendis aut!
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos iure
          quae dolorem obcaecati vel perspiciatis sit harum temporibus soluta
          quas dolores natus maxime odio accusamus, ut, blanditiis, iste
          reiciendis aut!
        </p>
        <Link href={"/ninjas"}>
          <a className={styles.btn}>See Ninja List</a>
        </Link>
      </div>
    </>
  );
}
