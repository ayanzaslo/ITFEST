// pages/about.js

import Head from 'next/head';
import styles from './about.module.css';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Your Company Name</title>
        <meta name="description" content="Learn more about our apartment rental service with 360° virtual tours." />
      </Head>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>Discover your perfect rental with our 360° virtual tours.</p>
        </section>
        
        <section className={styles.content}>
          <h2 className={styles.heading}>Our Mission</h2>
          <p>
            At Imova, our mission is simple: to make your apartment search as easy, transparent, and enjoyable as possible. We understand that finding a new home is a big decision, and we're here to guide you through the process with ease. Our platform features a wide range of rental properties, and with our cutting-edge 360° virtual tours, you can explore each space from the comfort of your own home.
          </p>

          <h2 className={styles.heading}>What We Offer</h2>
          <ul className={styles.features}>
            <li>
              <strong>360° Virtual Tours</strong>: With our immersive 360° views, you can take a virtual walkthrough of each apartment. See every corner, every room, and get a real feel for the space without ever leaving your couch.
            </li>
            <li>
              <strong>A Wide Range of Options</strong>: From urban lofts to family-friendly apartments, we offer properties in various sizes and styles to match your needs.
            </li>
            <li>
              <strong>Convenience & Accessibility</strong>: Our website is easy to navigate, allowing you to filter properties based on your preferences. Whether you're looking for a pet-friendly space, a specific location, or certain amenities, we make sure you find exactly what you need.
            </li>
            <li>
              <strong>Customer-Centered Service</strong>: Our team is here to assist you every step of the way, ensuring you have the best experience possible.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default About;
