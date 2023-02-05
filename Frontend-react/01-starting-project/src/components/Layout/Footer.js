import * as React from "react";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import classes from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import {FaTwitter} from 'react-icons/fa'
const Footer = (props) => {
  const [footer, setFooter] = React.useState();
  // const footer_links =[{
  //   "About us":["links1","links2","links3"],
  //   "Career":["links1","links2","links3"],
  //   "Contact us":["links1","links2","links3"]
  // }]
  const footer_datas= [  
    {  
      'id': 1,   
      'title': "About Us",   
      'links':["Our Business Units","Products","Partners"]
    },  
    {  
      'id': 2,   
      'title': "Career",  
      'links':["current openings","Life at react"]
    },  
    {  
      'id': 3,   
      'title': "Contact Us",  
      'links':["chennai","bangalore","kochin"]
    },  
];
  return (
    <div class={classes.footer_container}>
      <section class={classes.footer_subscriptions}>
        <div class={classes.footer_subscriptions_items}>
          <h2>You can find us</h2>
          <Link to="/" >
            <InstagramIcon style={{background: "radial-gradient(circle at 50% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB )" }}/>
          </Link>
          <Link to="/">
            <FacebookIcon style={{color:"blue"}}/>
          </Link>
          <Link to="/">
            <TwitterIcon style={{color:"skyblue"}}/>
          </Link>
          <Link to="/">
            <YouTubeIcon style={{color:"red"}}/>
          </Link>
        </div>
        <div class={classes.footer_subscriptions_items}>
          <p class={classes.footer_subscription_heading}>
            Hi !! welcome to our brand new EPR
          </p>
          <div class={classes.input_areas}>
            <form>
              <input
                class={classes.footer_input}
                name="email"
                type="email"
                placeholder="Your Email"
              ></input>
              <button class={classes.footer_btn}>save</button>
            </form>
          </div>
        </div>
      </section>
      <div class={classes.footer_links}>
        {footer_datas.map(ele=>{
          return(
          <div class={classes.footer_links_items}>
          <h2>{ele.title}</h2>
          {ele.links.map(e=>{
            return(
             <Link to={"/"+e}>{e}</Link>)
          })}
        </div>)
        })}
      </div>
      <Divider></Divider>
      <section class={classes.epr_rights}>
        <div class={classes.epr_wrap}>
          <div class={classes.epr_logo}>
            <Link to="/" class={classes.epr_logo}>
              React
            </Link>
          </div>
          <small class={classes.website_rights}>React @ 2020</small>
          
        </div>
      </section>
    </div>
  );
};
export default Footer;
