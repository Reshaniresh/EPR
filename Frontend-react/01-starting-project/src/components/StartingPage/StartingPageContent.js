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
  );
};

export default StartingPageContent;
