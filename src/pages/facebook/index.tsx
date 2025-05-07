import Head from 'next/head'
 
export const config = { amp: true }
 
function MyAmpPage() {
  const date = new Date()
 
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
      <amp-facebook width="100" height="50"
        layout="responsive"
        data-embed-as="video"
        data-href="https://www.facebook.com/reel/1856951351796292"
        >
      </amp-facebook>
      <amp-facebook width="100" height="50"
        layout="responsive"
        data-embed-as="video"
        data-href="https://www.facebook.com/hypebeastzh/videos/350727605531219"
        >
      </amp-facebook>
    </div>
  )
}
 
export default MyAmpPage