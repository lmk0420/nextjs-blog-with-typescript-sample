import React, { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home: FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Read <Link href="/posts/first-post">
            <a>this page!</a>
            </Link>
        </h1>
      </main>
    </div>
  )
}

export default Home