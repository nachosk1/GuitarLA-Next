import React from 'react'
import Head from "next/head"

function Layout({children, title = '', description = ''}) {
  return (
    <>
    <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name='description' content={description}/>
    </Head>
    <h1>Desde el layout</h1>
      {children}
    </>
  )
}

export default Layout
