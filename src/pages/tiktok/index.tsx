import Head from "next/head";

export const config = { amp: true };

function MyAmpPage() {
  const date = new Date();

  return (
    <div>
      <Head>
        <script
          async
          key="amp-tiktok"
          custom-element="amp-tiktok"
          src="https://cdn.ampproject.org/v0/amp-tiktok-0.1.js"
        />
      </Head>

      <p>Some time: {date.toJSON()}</p>
      <amp-tiktok
        data-src="7277598362637995294"
        width="325"
        height="575"
        layout="responsive"
      ></amp-tiktok>
    </div>
  );
}

export default MyAmpPage;
