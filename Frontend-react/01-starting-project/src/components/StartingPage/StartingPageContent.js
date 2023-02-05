<<<<<<< HEAD
import classes from "./StartingPageContent.module.css";
import Footer from "../Layout/Footer";
import BeauticianListing from "../BeauticianListing/BListing";
const StartingPageContent = () => {
  return (
    <>
      <section className={classes.starting}>
        <BeauticianListing />
        
      </section>
      <Footer />
    </>
=======
import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
>>>>>>> 736c5dd32adfb4741e41eccecc01386114a4fb51
  );
};

export default StartingPageContent;
