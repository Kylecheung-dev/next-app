import Head from "next/head";

export const config = { amp: true };

function MyAmpPage() {
  const date = new Date();

  return (
    <div>
      <Head>
        <script
          async
          key="amp-twitter"
          custom-element="amp-twitter"
          src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js"
        />
      </Head>

      <p>Some time: {date.toJSON()}</p>
      <amp-twitter
        width="375"
        height="472"
        layout="responsive"
        data-tweetid="1919558127676006757"
      ></amp-twitter>
    </div>
  );
}

export default MyAmpPage;
