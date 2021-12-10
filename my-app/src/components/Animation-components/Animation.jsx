import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Bitcoin from "../../images/bitcoin.png";
import Ethereum from "../../images/ethereum.png";
import Dash from "../../images/dash.png";
import Monaco from "../../images/monaco.png";
import AltCoin from "../../images/altcoin.png";
import { Button } from "../Button-components/Button";
import { Link } from "react-router-dom";

//taggar med styling till return
const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #242424;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2); // funktion tillämpar speciell bredd

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
//stylat custom tagg samt motion.img för att nyttja animerings-importen
const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;
//vänstra boxen för texten och knappen
const BoxLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: #f5af19;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;
//placeringen på coins samt var coins "barnen till boxen skall vara utplacerade"
const BoxRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 33px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 100px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }
  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
  ${Image}:nth-child(5) {
    bottom: 200px;
    right: 300px;
  }
`;
const Animation = () => {
  //prefix för användning av animationen på  p-tagg
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 }, //varifrån
    visible: { opacity: 1, x: 0 }, //var
  };
  return (
    <Section>
      <Container>
        <BoxLeft>
          <h1>Welcome to BitbyBit</h1>
          <motion.p
            //använder  fadeLeft prefix samt motion för att använda animeringens attribut
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }} //tid för platssätting
          >
            Unlimited posibilities
          </motion.p>
          {/* använder button komponent */}
          <Link to="sign-up">
            <Button className="button-link" buttonStyle="button-outline">
              Get Started
            </Button>
          </Link>
        </BoxLeft>
        <BoxRight>
          <Image
            src={AltCoin}
            alt="bitcoin"
            //whiletap gör att du kan klicka och minska bilden med hjälp av scale
            whileTap={{ scale: 0.9 }}
            //drag för att kunna dra omkring bilden i boxen, och hur mycket i dragConstraints
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            //initial samt animate används för att animera bilderna när sidan visas/laddas om
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={Ethereum}
            alt="etherum"
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={Dash}
            alt="dash"
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={Monaco}
            alt="monaco"
            whileTap={{ scale: 0.7 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={Bitcoin}
            alt="altcoin"
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 200, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
        </BoxRight>
      </Container>
    </Section>
  );
};

export default Animation;
