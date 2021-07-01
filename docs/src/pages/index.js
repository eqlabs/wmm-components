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
    description: <>Apply true per second model.</>,
  },
  {
    title: "Audio",
    imageUrl: "img/audio.svg",
    description: <>Innovative way to monetize audio content.</>,
  },
  {
    title: "Text",
    imageUrl: "img/text.svg",
    description: <>Pay per number of words read.</>,
  },
];

const components = [
  {
    title: "Easy implementation",
    imageUrl: "img/easy.svg",
    description: <>Just add &lt;tags&gt; and start earning.</>,
  },
  {
    title: "100% customizable",
    imageUrl: "img/customizable.svg",
    description: (
      <>Freely choose how it looks like or just add to your old content.</>
    ),
  },
  {
    title: "No registration required",
    imageUrl: "img/cool.svg",
    description: <>Attract new audience. No need for registration.</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
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
          <img src="img/wmm-logo-large.svg" alt={siteConfig.title} />
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Documentation
            </Link>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Github
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
              <div className="row">
                {media.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
              <div className="row">
                {components.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
