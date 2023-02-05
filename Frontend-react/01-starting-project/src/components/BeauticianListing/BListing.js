import { ClassNames } from "@emotion/react";
import classes from "./BListing.module.css";
import { Fragment } from "react";
import MainNavigation from "../Layout/MainNavigation";
const BeauticianListing = (props) => {
  const productlists=[{id:1,name:"alice",skills:["hair","facial"],desc:"skilled professional",id:2,bname:"ami",skills:["hair","facial"],desc:"skilled professional"}]
  return (
    <main class={classes.main}>
      {productlists.map(element => {
        
      return(
      <card key={element.id}>
        <section id={classes.graphic}>
          <img src="#" alt="Devtools Tech Banner" />
        </section>
        <section id={classes.content}>
          <h1>{element.name}</h1>
         
          <p>
          {element.desc}
          </p>
          <a href="#" target="_blank">
            View more &rarr;
          </a>
        </section>
      </card>)})}
    </main>
  );
};

export default BeauticianListing;
