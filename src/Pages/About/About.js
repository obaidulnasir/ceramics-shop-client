import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../shared/Footer/Footer";
import Navigation from "../shared/Navigation/Navigation";

const About = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Container>  
        <div className="row w-50 mx-auto text-center my-5">
        <img src="https://i.ibb.co/DRmC48h/TSK-2018.jpg" alt="" />
            <h3 className="my-5">The next generation of fine porcelain from Ceramics Pottery</h3>
          <p>
            CeramicsShop pottery shop is an established shop making and selling
            fine porcelain ceramics since 1989. Opened by Alison who has now
            been developed her ceramic range for 35 years. This etsy shop
            showcases the next generation of ceramics from the family, designed
            and made by Alison's daughter Eilidh and her parter Craig who took
            over the business in 2019. Eilidh's painted designs have been a hit
            in the bricks and mortar shop and can now be accessible to the rest
            of the world via this online outlet.
          </p>
          <p>
            CeramicsShop is a small village in central Scotland based on the route
            between the historic city of Stirling and Loch Lomond. It is
            surrounded by beautiful countryside and has been a great source of
            inspiration to the family for many years.
          </p>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default About;
