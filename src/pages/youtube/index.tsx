import Head from "next/head";

export const config = { amp: true };

function MyAmpPage() {
  return (
    <div>
      <Head>
        <script
          async
          key="amp-youtube"
          custom-element="amp-youtube"
          src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"
        />
        <script
          async
          key="amp-bind"
          custom-element="amp-bind"
          src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"
        />
      </Head>

      <div className="video-container" style={{ minHeight: "300px"}}>
        <amp-youtube
          id="my-youtube-video"
          data-videoid="TpwChyyyy4s"
          layout="responsive"
          width="480"
          height="270"
        ></amp-youtube>
        
        <div className="controls">
          <button on="tap:my-youtube-video.play">Play</button>
          <button on="tap:my-youtube-video.pause">Pause</button>
          <button on="tap:my-youtube-video.mute">Mute</button>
          <button on="tap:my-youtube-video.unmute">Unmute</button>
          <button on="tap:my-youtube-video.fullscreen">Fullscreen</button>
        </div>
      </div>
    </div>
  );
}

export default MyAmpPage;
