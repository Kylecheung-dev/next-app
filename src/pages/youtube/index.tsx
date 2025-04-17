import Head from "next/head";

export const config = { amp: true };

function MyAmpPage() {
  const date = new Date();

  return (
    <div>
      <Head>
        <script
          async
          key="amp-youtube"
          custom-element="amp-youtube"
          src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"
        />
      </Head>

      <p>Some time: {date.toJSON()}</p>
      <amp-youtube
        data-videoid="mGENRKrdoGY"
        layout="responsive"
        width="480"
        height="270"
      ></amp-youtube>
    </div>
  );
}

export default MyAmpPage;
