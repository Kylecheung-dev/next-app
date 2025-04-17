import Head from "next/head";

export const config = { amp: true };

function Page() {
  const date = new Date();

  return (
    <div>
      <Head>
        <script
          async
          key="amp-instagram"
          custom-element="amp-instagram"
          src="https://cdn.ampproject.org/v0/amp-instagram-0.1.js"
        />
      </Head>

      <p>Some time: {date.toJSON()}</p>
      <amp-instagram
        data-shortcode="fBwFP"
        data-captioned
        width="400"
        height="400"
        layout="responsive"
      ></amp-instagram>
    </div>
  );
}

export default Page;
