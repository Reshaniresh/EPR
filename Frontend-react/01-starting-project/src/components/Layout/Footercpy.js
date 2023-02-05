import * as React from "react";
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import classes from './Footer.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const Footer = (props) => {
    const [color, setColor] = React.useState("neutral");
    return (<footer class={classes.footer}>
    {/* <div class={classes.footer}> */}
    {/* <Card class={classes.footer_div_1}>
    < InstagramIcon class={classes.footer_social_icon}/>
    < InstagramIcon class={classes.footer_social_icon}/></Card> */}
    {/* <Divider >

</Divider> */}
<div class={classes.social_div}>
< InstagramIcon class={classes.footer_social_icon}/>
< InstagramIcon class={classes.footer_social_icon}/></div>
    <CardContent class={classes.flex_container}>
        
  <Card class={classes.flex_card}><h4 style={{color:"white"}}>Get to Know Us</h4>
  
  </Card>
  <Card class={classes.flex_card}><h4 style={{color:"white"}}>Connect with us</h4></Card>
  <Card class={classes.flex_card}><h4 style={{color:"white"}}>Make money with us</h4></Card>
  <Card class={classes.flex_card}><h4 style={{color:"white"}}>Let us help you
   <ul>
    <li>test 1</li>
    <li>test 1</li>
    </ul></h4></Card>
</CardContent>
    </footer>)}
export default Footer;