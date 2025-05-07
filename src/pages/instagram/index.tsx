import Head from "next/head";

export const config = { amp: true };

function MyAmpPage() {
  return (
    <div style={{minHeight: "300px"}}>
      <Head>
        <script
          async
          key="amp-instagram"
          custom-element="amp-instagram"
          src="https://cdn.ampproject.org/v0/amp-instagram-0.1.js"
        />
        <script
          async
          key="amp-script"
          custom-element="amp-script"
          src="https://cdn.ampproject.org/v0/amp-script-0.1.js"
        />
      </Head>

      {/* Using amp-instagram component */}
      <amp-instagram
        data-shortcode="DCuBAxozquK"
        width="400"
        height="400"
        layout="responsive"
        id="my-instagram-post"
      ></amp-instagram>
      
      {/* Adding a button with amp-script */}
      <amp-script layout="container" script="instaScript" width="480" height="100">
        <button id="pauseButton">嘗試暫停</button>
      </amp-script>

      {/* Script for Instagram controls */}
      <script id="instaScript" type="text/plain" target="amp-script">{`
        document.getElementById('pauseButton').addEventListener('click', function() {
          // Try to find the Instagram iframe video element
          const iframe = document.querySelector('amp-instagram iframe');
          if (iframe && iframe.contentWindow) {
            try {
              // Try to access iframe content and find video element
              const video = iframe.contentWindow.document.querySelector('video');
              if (video) {
                video.pause();
                console.log('Video paused');
              }
            } catch (e) {
              console.error('Cannot control Instagram video:', e);
            }
          }
        });
      `}</script>
    </div>
  );
}

export default MyAmpPage;
