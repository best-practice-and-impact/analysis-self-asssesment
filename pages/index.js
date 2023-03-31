import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Analysis self-assessment tool</title>
        <meta name="description" content="A tool to assess the quality assurance of analysis workflows." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <a target="_blank" href="https://analysisfunction.civilservice.gov.uk/"><Image
                src="/af_logo.png"
                alt="Analysis Function logo"
                className={styles.logo}
                width={120}
                height={120}
                priority
              /></a>

        <div className={styles.center}>
          <h1 className={inter.className}>Analysis self-assessment tool</h1>
          <br/>
          <p className={inter.className}>Assess your analysis quality assurance against <a target="_blank" href="https://best-practice-and-impact.github.io/qa-of-code-guidance/intro.html">the good practice guidance.</a></p>
        </div>

        <div className={styles.grid}>
          <Link
            href="/register"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Register <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Register a new analysis to start assessing it.
            </p>
          </Link>

          <Link
            href="/assess"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Assess <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Submit a self-assessment for a registered analysis.
            </p>
          </Link>

          <Link
            href="/review"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Review <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Review previous assessments of an analysis.
            </p>
          </Link>

          <Link
            href="/overview"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Overview <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Review assessments across all analyses.
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
