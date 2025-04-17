import Head from 'next/head'
import React from 'react'
const page = () => {
    const date = new Date();
 
    return (
      <div>
        <Head>
          <script
            async
            key="amp-facebook"
            custom-element="amp-facebook"
            src="https://cdn.ampproject.org/v0/amp-facebook-0.1.js"
          />
          
        </Head>
   
        <p>Some time: {date.toJSON()}</p>
        <amp-facebook width="552" height="310"
      layout="responsive"
      data-href="https://www.facebook.com/ParksCanada/posts/1712989015384373">
  </amp-facebook>
      </div>
    )
}

export default page