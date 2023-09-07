"use client";
import styles from "./page.module.scss";
import { logo, marketplace, mouse, envelope } from "@/assets";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import SubscribeForm from "@/components/SubscribeForm/SubscribeForm";
import { Button } from "@/components/Button/Button";
import { cubicBezier, motion } from "framer-motion";
import { SeeMore } from "@/components/Scroll/SeeMore";
import { Loading } from "@/components/Loading/Loading";

export default function Home() {
  const pattern = " • VeriTrust";
  const repetitions = 42;

  return (
    <>
      <main className={styles.main}>
        <Loading />
        <header className={styles.logo}>
          <Image width={60} height={60} src={logo} alt="VeriTrust logo" />
        </header>
        <section className={styles.first_section}>
          <div className={styles.intro_text}>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.1,
                ease: cubicBezier(0.6, 0.6, 0, 0.1),
              }}
            >
              Procure with confidence, VeriTrust backs you up
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.3,
                ease: cubicBezier(0.6, 0.6, 0, 0.1),
              }}
            >
              We transformed the tender system, providing greater security,
              transparency and confidence in the contracting process.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
              ease: cubicBezier(0.6, 0.6, 0, 0.1),
            }}
          >
            <Button className={styles.button} redirectTo="/marketplace">
              Enter the App
            </Button>
          </motion.div>
          <SeeMore />
        </section>
        <section className={styles.second_section}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: cubicBezier(0.6, 0.6, 0, 0.1) }}
          >
            Features
          </motion.h2>
          <div className={styles.second_section_body}>
            <motion.div
              className={styles.marketplace}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.1,
                ease: cubicBezier(0.6, 0.6, 0, 0.1),
              }}
            >
              <h3>Marketplace</h3>
              <p>
                Facilitates the search and promotion of opportunities, ensuring
                a transparent and competitive environment for all parties.
              </p>
              <div className={styles.marketplace_img}>
                <Image
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", maxWidth: "450px" }}
                  src={marketplace}
                  alt="marketplace image"
                />
              </div>
            </motion.div>
            <div className={styles.characteristics}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: 0.2,
                  ease: cubicBezier(0.6, 0.6, 0, 0.1),
                }}
              >
                <div>
                  <h3>Proposal privacy</h3>
                  <p>
                  During the bidding phase, only one hash is sent with the bid. Then there is a reveal phase where the hash is compared with the real information, and it is verified that it is the correct information.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: 0.3,
                  ease: cubicBezier(0.6, 0.6, 0, 0.1),
                }}
              >
                <div>
                  <h3>Reveal on Blockchain</h3>
                  <p>
                    Through blockchain technology the reveal is made public,
                    transparent and immutable.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: 0.3,
                  ease: cubicBezier(0.6, 0.6, 0, 0.1),
                }}
              >
                <div>
                  <h3>Arbitration</h3>
                  <p>
                    In cases of disputes or claims. We integrate Kleros, where
                    experts make impartial decisions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <div className={styles.repeat_pattern}>
          <motion.p
            initial={{ x: 0 }}
            whileInView={{ x: -100 }}
            transition={{
              duration: 0.3,
              delay: 0.1,
              ease: cubicBezier(0.6, 0.6, 0, 0.1),
            }}
          >
            {Array(repetitions).fill(pattern).join("")}
          </motion.p>
        </div>
        <section className={styles.third_section}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: cubicBezier(0.6, 0.6, 0, 0.1) }}
          >
            Key Benefits
          </motion.h2>
          <div className={styles.card_container}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.1,
                ease: cubicBezier(0.6, 0.6, 0, 0.1),
              }}
            >
              <h3>Increased Security and Transparency</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.2,
                ease: cubicBezier(0.6, 0.6, 0, 0.1),
              }}
            >
              <h3>Proposal Privacy</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.3,
                ease: cubicBezier(0.6, 0.6, 0, 0.1),
              }}
            >
              <h3>Verifiability and Auditability</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.4,
                ease: cubicBezier(0.6, 0.6, 0, 0.1),
              }}
            >
              <h3>Efficiency and Cost Savings</h3>
            </motion.div>
          </div>
        </section>
        <section className={styles.newsletter}>
          <motion.div
            className={styles.envelope_img}
            initial={{ opacity: 0, x: 250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
              ease: cubicBezier(0.6, 0.6, 0, 0.1),
            }}
          >
            <Image src={envelope} alt="envelop image" />
          </motion.div>
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -250 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.1,
                ease: cubicBezier(0.6, 0.6, 0, 0.1),
              }}
            >
              Get the latest news!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.2,
                ease: cubicBezier(0.6, 0.6, 0, 0.1),
              }}
            >
              We will only send content from time to time, making sure it adds
              value.
            </motion.p>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: 0.3,
              ease: cubicBezier(0.6, 0.6, 0, 0.1),
            }}
          >
            <SubscribeForm />
          </motion.span>
        </section>
      </main>
      <Footer />
    </>
  );
}
