import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import "./jsDoc.css";

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
              to={useBaseUrl("docs/")}
            >
              Github{" "}
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
          </div>
        )}
      </main>
    </Layout>
  );
}

export default Home;
