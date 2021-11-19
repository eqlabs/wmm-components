import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import "./jsDoc.css";
import styles from "./styles.module.css";

const features = [
  {
    title: "Fantastic Content Creators",
    imageUrl: "img/content-creators.svg",
    description: (
      <>Create new revenue streams. Earn money with your web content.</>
    ),
  },
  {
    title: "Amazing Web Developers",
    imageUrl: "img/web-developers.svg",
    description: (
      <>Join the community. Contribute to open source development.</>
    ),
  },
  {
    title: "Outstanding Media Outlets",
    imageUrl: "img/media-outlets.svg",
    description: (
      <>Create next-gen content platforms. Implement micropayments.</>
    ),
  },
];

const media = [
  {
    title: "Video",
    imageUrl: "img/video.svg",
    description: (
      <>
        New way to pay for streaming videos. Implement a true pay per second
        model.
      </>
    ),
  },
  {
    title: "Audio",
    imageUrl: "img/audio.svg",
    description: (
      <>
        Innovative way to monetize audio contents. Receive payments based on
        actual listening times.
      </>
    ),
  },
  {
    title: "Text",
    imageUrl: "img/text.svg",
    description: (
      <>
        Pay per paragraph is an ideal way to monetize long text contents e.g.
        publications and research documents.
      </>
    ),
  },
];

const components = [
  {
    title: "Easy implementation",
    imageUrl: "img/easy.svg",
    description: (
      <>
        Take advantage from ready-made web components. Just add &lt;tags&gt; in
        to your code and start receiving payments.{" "}
      </>
    ),
  },
  {
    title: "100% customizable",
    imageUrl: "img/customizable.svg",
    description: (
      <>
        Components are easy to implement to your old content or you can freely
        design how they look.{" "}
      </>
    ),
  },
  {
    title: "No registration required",
    imageUrl: "img/cool.svg",
    description: (
      <>
        Receive payments from wide audience. Once contents are published users
        won’t need registration.
      </>
    ),
  },
];

const getStarted = [
  {
    title: "For developers with frontend only",
    description: (
      <div>
        You can start using the component with ease.
        <ol class="get-started-steps">
          <li>Install package or use a hosted version</li>
          <li>
            Use the ready-made components in your code, or customize &amp;
            extend them to make them even more your own
          </li>
          <li>Create an ILP payment url</li>
          <li>Pass this URL to the components</li>
          <li>Deploy your app and startreceiving payments</li>
        </ol>
      </div>
    ),
  },
  {
    title: "For developers with backend",
    description: (
      <div>
        If you need advanced features you can install the backend modules as
        well
        <ol class="get-started-steps">
          <li>Repeat frontend steps 1-4</li>
          <li>
            Create a receipt checking server, using our backend utils for
            enforcing payments
          </li>
          <li>
            Host the receipt checking server together with the frontend, receive
            payments
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "Users just need a Webmonetization wallet",
    description: (
      <div>
        For end-used just download the wallet, transfer assets and GO!
        <ol class="get-started-steps">
          <li>Enter the website that has webmonetization enabled</li>
          <li>Download a webmonetization-enabled wallet, add funds</li>
          <li>Log in to the wallet</li>
          <li>Start supporting the creators you love</li>
        </ol>
      </div>
    ),
  },
];

function LineHeader({ text }) {
  return (
    <div class={styles.lineHeader}>
      <h2 class={styles.lineHeaderText}>{text}</h2>
    </div>
  );
}

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4 text--center", styles.feature)}>
      {imgUrl && (
        <img className={styles.featureImage} src={imgUrl} alt={title} />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <svg
            width="230"
            height="117"
            viewBox="0 0 230 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.8209 51.7013L45.7912 51.59H45.676H37.414H37.2983L37.2689 51.7019L23.3243 104.834H23.1488L9.71342 51.7032L9.68479 51.59H9.568H1H0.806846L0.854671 51.7771L17.2767 116.037L17.3055 116.15H17.422H27.622H27.7373L27.7669 116.039L41.4053 64.844H41.5821L54.9148 116.038L54.9441 116.15H55.06H65.362H65.4785L65.5073 116.037L81.9293 51.7771L81.9772 51.59H81.784H73.522H73.4044L73.3764 51.7041L60.2465 105.038H60.0712L45.8209 51.7013ZM124.869 116.15H124.977L125.011 116.048L143.745 60.866H143.895V116V116.15H144.045H152.919H153.069V116V51.74V51.59H152.919H138.945H138.837L138.803 51.6933L121.701 103.916H121.61L103.591 51.6911L103.556 51.59H103.449H89.2714H89.1214V51.74V116V116.15H89.2714H97.5334H97.6834V116V60.866H97.8353L117.282 116.05L117.317 116.15H117.423H124.869ZM200.971 116.15H201.078L201.113 116.048L219.846 60.866H219.997V116V116.15H220.147H229.021H229.171V116V51.74V51.59H229.021H215.047H214.938L214.904 51.6933L197.802 103.916H197.712L179.693 51.6911L179.658 51.59H179.551H165.373H165.223V51.74V116V116.15H165.373H173.635H173.785V116V60.866H173.937L193.384 116.05L193.419 116.15H193.525H200.971Z"
              class="logo-text"
              stroke-width="0.3"
            />
            <circle
              cx="78.5"
              cy="21.5"
              r="20"
              stroke="#0CD3FF"
              stroke-width="3"
            />
            <path
              d="M86.5 21.5C86.5 27.2691 85.4093 32.4188 83.711 36.0702C81.9552 39.8451 79.8298 41.5 78 41.5C76.1702 41.5 74.0448 39.8451 72.289 36.0702C70.5907 32.4188 69.5 27.2691 69.5 21.5C69.5 15.731 70.5907 10.5812 72.289 6.9298C74.0448 3.15495 76.1702 1.5 78 1.5C79.8298 1.5 81.9552 3.15495 83.711 6.9298C85.4093 10.5812 86.5 15.731 86.5 21.5Z"
              stroke="#0CD3FF"
              stroke-width="3"
            />
            <path
              d="M62 32C64.6338 30.6667 70.0143 28 78.5 28C86.9857 28 92.2113 30.6667 95 32"
              stroke="#0CD3FF"
              stroke-width="3"
              stroke-linecap="square"
            />
            <path
              d="M62 11C64.6338 12.3333 70.0143 15 78.5 15C86.9857 15 92.2113 12.3333 95 11"
              stroke="#0CD3FF"
              stroke-width="3"
              stroke-linecap="square"
            />
            <circle
              cx="121.5"
              cy="21.5"
              r="20"
              stroke="#2ADEA7"
              stroke-width="3"
            />
            <path
              d="M112.319 24.8002L112.225 24.8063V24.9C112.225 27.426 113.08 29.4504 114.545 30.902C115.991 32.3344 118.024 33.2019 120.397 33.4504V36.672V36.772H120.497H122.513H122.613V36.672V33.4917C124.838 33.387 126.76 32.7456 128.134 31.6286C129.53 30.4935 130.353 28.872 130.353 26.844C130.353 25.0051 129.824 23.6355 128.765 22.6271C127.71 21.6223 126.14 20.9873 124.08 20.5898L124.079 20.5897L122.613 20.3169V12.5667C123.905 12.8457 124.94 13.4642 125.67 14.3827C126.424 15.33 126.86 16.604 126.913 18.1714L126.917 18.2731L127.018 18.2678L129.79 18.1238L129.886 18.1189L129.885 18.0232C129.867 15.7176 129.186 13.8203 127.924 12.4308C126.679 11.0591 124.876 10.1913 122.613 9.90742V6.75598V6.65598H122.513H120.497H120.397V6.75598V9.79136C118.085 9.87934 116.214 10.5567 114.914 11.6984C113.595 12.8573 112.873 14.4876 112.873 16.44C112.873 18.2277 113.458 19.6129 114.468 20.628C115.477 21.641 116.901 22.2776 118.57 22.5861C118.57 22.5862 118.571 22.5862 118.571 22.5863L120.397 22.9654V30.8307C118.936 30.5852 117.686 29.9531 116.778 28.9547C115.846 27.9306 115.268 26.5141 115.197 24.716L115.193 24.6135L115.091 24.6202L112.319 24.8002ZM123.034 23.45L123.034 23.4501C124.486 23.737 125.528 24.1379 126.206 24.7151C126.878 25.2873 127.201 26.0407 127.201 27.06C127.201 28.1997 126.738 29.1254 125.924 29.7906C125.128 30.4411 123.991 30.8465 122.613 30.9489V23.366L123.034 23.45ZM117.138 13.4465C117.876 12.807 118.968 12.4351 120.397 12.3682V19.8783L120.052 19.7985L120.052 19.7985L120.048 19.7978C118.756 19.5465 117.741 19.208 117.049 18.6611C116.365 18.1196 115.989 17.367 115.989 16.26C115.989 15.0412 116.386 14.0991 117.138 13.4465Z"
              fill="#2ADEA7"
              stroke="#2ADEA7"
              stroke-width="0.2"
            />
            <path
              d="M172.98 22.2957L175.201 21L172.98 19.7043L160.98 12.7043L158.724 11.3884L158.724 14L158.724 28L158.724 30.6116L160.98 29.2957L172.98 22.2957Z"
              stroke="#FF58D0"
              stroke-width="3"
            />
            <circle
              cx="164.5"
              cy="21.5"
              r="20"
              stroke="#FF58D0"
              stroke-width="3"
            />
          </svg>

          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Documentation{" "}
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.64627 19.6464L19.9427 1.34994M19.9427 1.34994V19.6464M19.9427 1.34994H1.64627"
                  class="button-arrow"
                  stroke-width="2"
                />
              </svg>
            </Link>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to="https://github.com/eqlabs/wmm-components"
            >
              GitHub{" "}
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.64627 19.6464L19.9427 1.34994M19.9427 1.34994V19.6464M19.9427 1.34994H1.64627"
                  class="button-arrow"
                  stroke-width="2"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <div>
            <LineHeader text="Who is it for?" />
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>

            <LineHeader text="Payments per actual use" />
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {media.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>

            <LineHeader text="Web component library" />
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {components.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>

            <LineHeader text="Get started" />
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {getStarted.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>

            <LineHeader text="And there's more" />
          </div>
        )}
      </main>
      <footer>
        <div className="container">
          <div className="row footer-content">
            <div className={clsx("col col--3", styles.footerButtons)}>
              <h2>Contribute</h2>
              <Link
                className={clsx(
                  "button button--outline button--secondary",
                  styles.footerButton
                )}
                to={useBaseUrl("docs/")}
              >
                Documentation{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.64627 19.6464L19.9427 1.34994M19.9427 1.34994V19.6464M19.9427 1.34994H1.64627"
                    class="button-arrow"
                    stroke-width="2"
                  />
                </svg>
              </Link>
              <Link
                className={clsx(
                  "button button--outline button--secondary",
                  styles.footerButton
                )}
                to="https://github.com/eqlabs/wmm-components"
              >
                GitHub{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.64627 19.6464L19.9427 1.34994M19.9427 1.34994V19.6464M19.9427 1.34994H1.64627"
                    class="button-arrow"
                    stroke-width="2"
                  />
                </svg>
              </Link>
            </div>
            <div className={clsx("col col--9", styles.community)}>
              <h2>Community</h2>

              <div className="row">
                <div className="col col--4 community-item">
                  <svg
                    width="231"
                    height="47"
                    viewBox="0 0 231 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="community-logo"
                  >
                    <path
                      d="M46.6167 14.915H25.61C25.4567 15.7583 25.3033 16.64 25.2267 17.4833H31.3217C31.705 17.4833 32.0117 17.79 32.0883 18.1733C32.2417 19.8217 32.395 21.6233 32.395 23.4633C32.395 35.155 28.3317 43.3583 24.7283 43.3583C21.0483 43.3583 16.985 35.155 16.985 23.4633C16.985 11.6183 20.8183 -1.72166 35.73 6.44334V3.56834C32.3567 1.92 28.6 1 24.7667 1C11.695 1 1 11.0817 1 23.4633C1 35.8833 11.6567 45.9267 24.7667 45.9267C37.8383 45.9267 48.5333 35.845 48.5333 23.4633C48.4183 20.4733 47.805 17.56 46.6167 14.915ZM20.3583 4.37334C17.79 6.63501 16.1417 10.315 15.26 14.5317C15.1833 14.7617 15.03 14.915 14.8 14.915H6.32833C6.02167 14.915 5.86833 14.6083 6.02167 14.3783C8.85833 9.39501 13.8417 5.40834 20.205 3.91334C20.435 3.83667 20.5883 4.14334 20.3583 4.37334ZM5.14 17.4833H14.1483C14.455 17.4833 14.685 17.7133 14.6083 18.02C14.3783 19.8217 14.3017 21.6233 14.3017 23.4633C14.3017 25.1883 14.3783 26.9133 14.5317 28.5233C14.5317 28.83 14.3017 29.06 13.995 29.06H4.98667C4.68 29.06 4.37333 28.83 4.22 28.5233C3.76 26.875 3.53 25.15 3.53 23.4633C3.53 21.585 3.83667 19.7833 4.37333 18.02C4.52667 17.7133 4.75667 17.4833 5.14 17.4833ZM6.25167 31.705H14.6467C14.8767 31.705 15.1067 31.8583 15.1067 32.0883C15.8733 36.1517 17.1383 39.64 18.7867 42.055C18.94 42.2083 18.71 42.515 18.48 42.4383C12.9217 40.8667 8.28333 37.225 5.715 32.4717C5.6 32.165 5.86833 31.705 6.25167 31.705ZM30.4783 42.1317C32.1267 39.7167 33.4683 36.19 34.235 32.165C34.3117 31.935 34.465 31.7817 34.695 31.7817H43.09C43.4733 31.7817 43.7033 32.165 43.55 32.5483C40.9817 37.225 36.3433 40.9817 30.785 42.515C30.555 42.63 30.4017 42.285 30.4783 42.1317ZM44.4317 29.1367H35.27C34.9633 29.1367 34.7333 28.9067 34.7333 28.6C34.8867 26.9517 34.9633 25.2267 34.9633 23.54C34.9633 21.6617 34.8867 19.86 34.6567 18.1733C34.6567 17.8667 34.8867 17.6367 35.1933 17.6367H44.2783C44.585 17.6367 44.8917 17.8667 44.9683 18.1733C45.505 19.8983 45.735 21.7767 45.735 23.6167C45.735 25.4183 45.505 27.0667 45.045 28.6767C45.045 28.8683 44.7383 29.1367 44.4317 29.1367Z"
                      class="logo-text"
                      stroke-width="0.641892"
                    />
                    <path
                      d="M65.8218 12.0015C65.8218 17.0231 69.3485 19.2465 74.2935 19.2465C77.7435 19.2465 79.5068 18.1731 80.3118 17.6748V10.8515H74.1402V13.5348H77.0918V15.7965C76.4018 15.9881 75.5585 16.1032 74.5618 16.1032C71.4185 16.1032 69.5018 14.6465 69.5018 11.8481C69.5018 9.08815 71.7252 7.66982 74.6768 7.66982C77.0535 7.66982 78.2418 8.39815 79.0852 8.97315L80.3885 6.25148C79.4302 5.59981 77.8968 4.60315 74.5235 4.60315C69.7701 4.60315 65.8218 7.05648 65.8218 12.0015ZM100.782 19.0165L97.1785 14.0331C99.2102 13.2665 100.245 11.8098 100.245 9.70148C100.245 6.51981 98.0985 4.79482 93.4602 4.79482H86.9435V18.9782H90.5085V14.5315H93.4602L96.3735 18.9782H100.782V19.0165ZM96.5652 9.81647C96.5652 11.0431 95.5302 11.7331 93.2302 11.7331H90.5468V7.86148H93.3452C95.6835 7.86148 96.5652 8.51314 96.5652 9.81647ZM115.578 4.83314H111.668L105.42 19.0165H109.253L110.633 15.6048H116.537L117.917 19.0165H121.827L115.578 4.83314ZM115.578 13.1515H111.553L113.547 8.20648H113.585L115.578 13.1515ZM141.837 4.83314H138.234V13.5348H138.195L130.95 4.83314H127.347V19.0165H130.912V10.3148H130.95L138.195 19.0165H141.799V4.83314H141.837ZM162.46 4.83314H147.434V7.86148H153.184V18.9782H156.787V7.86148H162.499V4.83314H162.46ZM189.37 4.83314H178.024V19.0165H181.589V14.5698H188.642V11.5032H181.589V7.89981H189.37V4.83314ZM210.952 11.9248C210.952 7.47814 207.924 4.60315 202.672 4.60315C197.459 4.60315 194.392 7.51647 194.392 11.9248C194.392 16.3331 197.42 19.2465 202.672 19.2465C207.885 19.2465 210.952 16.3715 210.952 11.9248ZM207.272 11.8865C207.272 14.4548 205.509 16.1032 202.71 16.1032C199.835 16.1032 198.072 14.4548 198.072 11.8865C198.072 9.35648 199.835 7.70814 202.672 7.70814C205.509 7.70814 207.272 9.31815 207.272 11.8865ZM231 19.0165L227.397 14.0331C229.429 13.2665 230.464 11.8098 230.464 9.70148C230.464 6.51981 228.317 4.79482 223.679 4.79482H217.162V18.9782H220.727V14.5315H223.679L226.592 18.9782H231V19.0165ZM226.745 9.81647C226.745 11.0431 225.71 11.7331 223.41 11.7331H220.727V7.86148H223.525C225.864 7.86148 226.745 8.51314 226.745 9.81647ZM80.3885 29.2131H65.3618V32.2415H71.1118V43.3581H74.7151V32.2415H80.4268V29.2131H80.3885ZM100.513 29.2131H96.9102V34.6565H89.5885V29.2131H86.0235V43.3965H89.5885V37.7232H96.9102V43.3965H100.513V29.2131ZM118.645 29.2131H107.337V43.3965H118.837V40.3298H110.94V37.5698H117.917V34.7715H110.94V32.2415H118.645V29.2131ZM156.979 29.2131H153.184L150.884 38.6048H150.845L147.319 29.2131H143.677L140.15 38.6048H140.112L137.812 29.2131H134.017L137.965 43.3965H141.645L145.479 33.5831H145.517L149.312 43.3965H152.992L156.979 29.2131ZM173.96 29.2131H162.652V43.3965H174.152V40.3298H166.255V37.5698H173.232V34.7715H166.255V32.2415H173.96V29.2131ZM193.97 39.4098C193.97 37.6082 192.667 36.4198 190.904 36.0748V36.0365C192.322 35.6532 193.357 34.5415 193.357 32.8548C193.357 30.6315 191.709 29.2131 187.569 29.2131H180.515V43.3965H187.645C192.169 43.3965 193.97 41.7481 193.97 39.4098ZM189.792 33.3915C189.792 34.3115 189.064 34.8865 187.109 34.8865H184.042V32.0115H187.109C189.14 32.0115 189.792 32.5098 189.792 33.3915ZM190.367 38.9498C190.367 39.9081 189.639 40.4448 187.377 40.4448H184.042V37.4165H187.3C189.6 37.4165 190.367 37.9915 190.367 38.9498Z"
                      class="logo-text"
                    />
                  </svg>

                  <h3>
                    <a href="https://www.grantfortheweb.org/">
                      Grant for the Web
                    </a>
                  </h3>
                  <p>
                    Grant for the Web is a fund to boost open, fair, and
                    inclusive standards and innovation in Web Monetization.
                  </p>
                </div>
                <div className="col col--4 community-item">
                  <img
                    src="img/wm-icon-animated.svg"
                    alt="Web Monetization API logo"
                    height="47"
                    class="community-logo"
                  />
                  <h3>
                    <a href="https://webmonetization.org/">
                      Web Monetization API
                    </a>
                  </h3>
                  <p>
                    A JavaScript browser API that allows the creation of a
                    payment stream from the user agent to the website
                  </p>
                </div>
                <div className="col col--4 community-item">
                  <svg
                    width="97"
                    height="47"
                    viewBox="0 0 97 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="community-logo"
                  >
                    <path
                      d="M89.4227 38.3412V2.00347C89.4227 0.254172 91.1986 0.015625 92.9214 0.015625C94.6706 0.015625 96.4199 0.254172 96.4199 2.00347V38.3412C96.4199 39.6399 94.6706 39.9845 92.9214 39.9845C91.172 39.9845 89.4227 39.6399 89.4227 38.3412Z"
                      class="logo-text"
                    />
                    <path
                      d="M78.1052 8.49711C80.5702 8.49711 82.5581 6.61526 82.5581 4.28288C82.5581 1.95047 80.5702 0.0686535 78.1052 0.0686535C75.6404 0.0686535 73.6525 1.95047 73.6525 4.28288C73.679 6.61526 75.6669 8.49711 78.1052 8.49711Z"
                      class="logo-text"
                    />
                    <path
                      d="M74.7391 14.3281V38.3412C74.7391 39.6399 76.4884 39.9845 78.2377 39.9845C79.9869 39.9845 81.7363 39.6399 81.7363 38.3412V14.3281C81.7363 12.5788 79.9869 12.3402 78.2377 12.3402C76.515 12.3402 74.7391 12.5788 74.7391 14.3281Z"
                      class="logo-text"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M39.1966 25.6985C39.1966 18.1447 45.2661 11.4126 54.0392 11.4126C62.7591 11.4126 68.9612 18.0122 68.9612 25.6455C68.9612 33.8619 62.07 39.9579 54.1186 39.9579C45.2927 39.9579 39.1966 33.2258 39.1966 25.6985ZM54.0126 34.1535C58.6775 34.1535 62.1761 30.3368 62.1761 25.6455C62.1761 20.9542 58.6775 17.2436 54.0126 17.2436C49.3478 17.2436 45.9022 21.0072 45.9022 25.725C45.9287 30.3898 49.3478 34.1535 54.0126 34.1535Z"
                      class="logo-text"
                    />
                    <path
                      d="M20.6434 39.9579C26.607 39.9579 35.1944 36.2738 35.1944 32.6162C35.1944 30.8934 33.0475 28.0044 30.6621 29.0381C30.3185 29.1769 29.9436 29.505 29.4701 29.9195C28.0443 31.1679 25.7238 33.1993 20.67 33.1993C15.7932 33.1993 11.2343 30.6284 8.92839 26.5202C7.84181 24.5853 7.31172 22.412 7.31172 20.2386C7.31172 17.6941 8.02726 15.1232 9.48501 12.9233C10.6248 11.174 12.7715 8.36455 16.6943 7.19835C18.6025 6.61526 20.2459 6.37671 21.6506 6.37671C26.0503 6.37671 28.1178 8.68259 28.1178 10.4319C28.1178 11.3595 27.5346 12.1017 26.4214 12.2607C25.7387 12.3582 25.3352 12.1767 24.9907 12.0216C24.7734 11.9238 24.5797 11.8366 24.3541 11.8366C22.9758 11.8366 21.0675 14.222 21.0675 16.2629C21.0675 17.7737 22.1277 19.0989 25.2817 19.0989C32.1729 19.0989 34.9824 14.222 34.9824 10.7765C34.9824 5.7671 29.7875 0.0421231 21.5446 0.0421231C18.6025 0.0421231 16.0052 0.731234 14.5474 1.20833C8.79587 3.09014 5.50933 6.61526 3.78654 9.23918C1.61324 12.5258 0.5 16.3954 0.5 20.2386C0.5 23.5516 1.32167 26.8647 2.96487 29.7802C6.46352 36.0618 13.3282 39.9579 20.6434 39.9579Z"
                      class="logo-text"
                    />
                  </svg>

                  <h3>
                    <a href="https://coil.com/">Coil</a>
                  </h3>
                  <p>
                    Experience web monetized content in your browser while
                    supporting sites you love in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row subfooter">
            <div className="col col--7">
              <p>
                web-monetized-multimedia — A Web Component Library for Web
                Monetisation{" "}
              </p>
            </div>
            <div className="col col--5 text--right">
              <p>
                Developed by{" "}
                <a href="https://www.equilibrium.co">
                  <svg
                    width="162"
                    height="23"
                    viewBox="0 0 162 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="eq-logo"
                  >
                    <path
                      d="M32.2661 11.7863C32.2661 10.4399 32.5407 9.24416 33.0899 8.19896C33.6568 7.15376 34.4362 6.34771 35.4283 5.78083C36.4381 5.19622 37.5807 4.90392 38.8562 4.90392C40.114 4.90392 41.2212 5.17851 42.1778 5.72768C43.1344 6.27685 43.8785 7.05632 44.4099 8.06609C44.9414 9.07586 45.2071 10.2451 45.2071 11.5737V12.7695H35.2688C35.322 13.7793 35.694 14.6119 36.3849 15.2673C37.0935 15.9228 37.9704 16.2505 39.0156 16.2505C39.9191 16.2505 40.6366 16.0468 41.168 15.6394C41.7172 15.2319 42.1512 14.6916 42.4701 14.0184L44.8882 15.3205C44.3568 16.2771 43.6305 17.092 42.7093 17.7652C41.8058 18.4384 40.5569 18.775 38.9625 18.775C37.6516 18.775 36.4823 18.4827 35.4549 17.8981C34.4451 17.2957 33.6568 16.472 33.0899 15.4268C32.5407 14.3639 32.2661 13.1504 32.2661 11.7863ZM42.2309 10.5108C42.1424 9.57189 41.7969 8.82785 41.1946 8.27868C40.5923 7.71179 39.804 7.42834 38.8296 7.42834C37.8376 7.42834 37.0315 7.71179 36.4115 8.27868C35.7914 8.82785 35.4194 9.57189 35.2954 10.5108H42.2309Z"
                      class="logo-text"
                    />
                    <path
                      d="M57.4552 16.5428H57.1894C56.2151 18.0309 54.7181 18.775 52.6986 18.775C51.618 18.775 50.6171 18.4915 49.6959 17.9246C48.7924 17.3577 48.0661 16.5517 47.5169 15.5065C46.9677 14.4436 46.6931 13.2212 46.6931 11.8394C46.6931 10.4577 46.9677 9.24416 47.5169 8.19896C48.0661 7.15376 48.7924 6.34771 49.6959 5.78083C50.6171 5.21394 51.618 4.93049 52.6986 4.93049C54.7181 4.93049 56.2328 5.69225 57.2426 7.21576H57.5083V5.30251H60.3782V22.9882H57.4552V16.5428ZM53.5489 16.2505C54.7181 16.2505 55.6659 15.8608 56.3922 15.0813C57.1363 14.2842 57.5083 13.2035 57.5083 11.8394C57.5083 10.4754 57.1363 9.4036 56.3922 8.62412C55.6659 7.82694 54.7181 7.42834 53.5489 7.42834C52.3797 7.42834 51.432 7.82694 50.7056 8.62412C49.9793 9.4036 49.6161 10.4754 49.6161 11.8394C49.6161 13.2035 49.9793 14.2842 50.7056 15.0813C51.432 15.8608 52.3797 16.2505 53.5489 16.2505Z"
                      class="logo-text"
                    />
                    <path
                      d="M72.3393 16.3568H72.0735C71.3295 17.8626 69.9123 18.6155 67.8219 18.6155C66.8298 18.6155 65.9441 18.3941 65.1646 17.9512C64.3851 17.4906 63.7739 16.8529 63.3311 16.038C62.9059 15.2053 62.6933 14.2487 62.6933 13.1681V5.30251H65.6163V13.0087C65.6163 14.0716 65.882 14.8776 66.4135 15.4268C66.945 15.9582 67.7067 16.224 68.6988 16.224C69.7971 16.224 70.6652 15.8608 71.3029 15.1345C71.9584 14.3904 72.2861 13.3541 72.2861 12.0255V5.30251H75.1826V18.4029H72.3393V16.3568Z"
                      class="logo-text"
                    />
                    <path
                      d="M81.1017 18.4029H78.2052V5.30251H81.1017V18.4029Z"
                      class="logo-text"
                    />
                    <path
                      d="M87.038 18.4029H84.1416V0.53125H87.038V18.4029Z"
                      class="logo-text"
                    />
                    <path
                      d="M92.9744 18.4029H90.0779V5.30251H92.9744V18.4029Z"
                      class="logo-text"
                    />
                    <path
                      d="M98.9107 7.13604H99.1764C100.151 5.66568 101.648 4.93049 103.667 4.93049C104.748 4.93049 105.74 5.21394 106.643 5.78083C107.565 6.34771 108.3 7.15376 108.849 8.19896C109.398 9.24416 109.673 10.4577 109.673 11.8394C109.673 13.2212 109.398 14.4436 108.849 15.5065C108.3 16.5517 107.565 17.3577 106.643 17.9246C105.74 18.4915 104.748 18.775 103.667 18.775C101.648 18.775 100.133 18.0044 99.1233 16.4631H98.8576V18.4029H96.0142V0.53125H98.9107V7.13604ZM102.817 7.42834C101.665 7.42834 100.718 7.82694 99.9736 8.62412C99.2473 9.42131 98.8841 10.4931 98.8841 11.8394C98.8841 13.1858 99.2473 14.2576 99.9736 15.0548C100.718 15.852 101.665 16.2505 102.817 16.2505C103.986 16.2505 104.934 15.8608 105.66 15.0813C106.387 14.2842 106.75 13.2035 106.75 11.8394C106.75 10.4754 106.387 9.4036 105.66 8.62412C104.934 7.82694 103.986 7.42834 102.817 7.42834Z"
                      class="logo-text"
                    />
                    <path
                      d="M114.999 7.10947C115.264 6.45401 115.663 5.98455 116.194 5.70111C116.726 5.39995 117.425 5.24937 118.294 5.24937H119.808V7.72065H117.789C116.867 7.72065 116.132 7.96866 115.583 8.46469C115.052 8.96071 114.786 9.68704 114.786 10.6437V18.4029H111.889V5.30251H114.733V7.10947H114.999Z"
                      class="logo-text"
                    />
                    <path
                      d="M124.381 18.4029H121.485V5.30251H124.381V18.4029Z"
                      class="logo-text"
                    />
                    <path
                      d="M137.067 16.3568H136.801C136.057 17.8626 134.64 18.6155 132.55 18.6155C131.558 18.6155 130.672 18.3941 129.892 17.9512C129.113 17.4906 128.502 16.8529 128.059 16.038C127.634 15.2053 127.421 14.2487 127.421 13.1681V5.30251H130.344V13.0087C130.344 14.0716 130.61 14.8776 131.141 15.4268C131.673 15.9582 132.435 16.224 133.427 16.224C134.525 16.224 135.393 15.8608 136.031 15.1345C136.686 14.3904 137.014 13.3541 137.014 12.0255V5.30251H139.91V18.4029H137.067V16.3568Z"
                      class="logo-text"
                    />
                    <path
                      d="M145.776 6.95003H146.042C146.698 5.69225 147.884 5.06336 149.603 5.06336C151.392 5.06336 152.623 5.78968 153.296 7.24233H153.562C153.934 6.55144 154.421 6.01998 155.024 5.64796C155.626 5.25823 156.423 5.06336 157.415 5.06336C158.708 5.06336 159.763 5.47081 160.577 6.28571C161.41 7.0829 161.826 8.21667 161.826 9.68704V18.4029H158.903V9.84648C158.903 9.08472 158.691 8.50012 158.266 8.09267C157.84 7.6675 157.256 7.45492 156.512 7.45492C155.679 7.45492 155.024 7.72065 154.545 8.2521C154.067 8.78356 153.828 9.54532 153.828 10.5374V18.4029H150.905V9.84648C150.905 9.08472 150.692 8.50012 150.267 8.09267C149.86 7.6675 149.275 7.45492 148.513 7.45492C147.681 7.45492 147.025 7.72065 146.547 8.2521C146.069 8.78356 145.829 9.54532 145.829 10.5374V18.4029H142.933V5.30251H145.776V6.95003Z"
                      class="logo-text"
                    />
                    <path
                      d="M78.2396 0.580453H81.103V3.14305H78.2396V0.580453Z"
                      class="logo-text"
                    />
                    <path
                      d="M90.0434 0.580453H92.9068V3.14305H90.0434V0.580453Z"
                      class="logo-text"
                    />
                    <path
                      d="M121.52 0.580453H124.384V3.14305H121.52V0.580453Z"
                      class="logo-text"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.826172 0.531378H23.2831V14.0055H0.826172V0.531378ZM5.31756 9.51416H18.7917V5.02277H5.31756V9.51416Z"
                      class="logo-text"
                    />
                    <path
                      d="M23.2831 18.4969H0.826172V22.9883H23.2831V18.4969Z"
                      class="logo-text"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}

export default Home;
