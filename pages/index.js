import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Analysis self-assessment tool</title>
        <meta name="description" content="A tool to assess the quality assurance of analysis workflows." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.homeMain}>
        <a target="_blank" href="https://analysisfunction.civilservice.gov.uk/"><Image
                src="/af_logo.png"
                alt="Analysis Function logo"
                className={styles.logo}
                width={75}
                height={75}
                priority
              /></a>

        <div className={styles.center}>
          <h1>Analysis self-assessment tool</h1>
          <br/>
          <p>Assess your analysis quality assurance against <a target="_blank" href="https://best-practice-and-impact.github.io/qa-of-code-guidance/intro.html">the good practice guidance.</a></p>
        </div>

        <div className={styles.grid}>
          <Link
            href="/register"
            className={styles.card}
          >
            <h2>
              Register <span>-&gt;</span>
            </h2>
            <p>
              Register a new analysis to start assessing it.
            </p>
          </Link>

          <Link
            href="/assess"
            className={styles.card}
          >
            <h2>
              Assess <span>-&gt;</span>
            </h2>
            <p>
              Submit a self-assessment for a registered analysis.
            </p>
          </Link>

          <Link
            href="/review"
            className={styles.card}
          >
            <h2>
              Review <span>-&gt;</span>
            </h2>
            <p>
              Review previous assessments of an analysis.
            </p>
          </Link>

          <Link
            href="/overview"
            className={styles.card}
          >
            <h2>
              Overview <span>-&gt;</span>
            </h2>
            <p>
              Review assessments across all analyses.
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
