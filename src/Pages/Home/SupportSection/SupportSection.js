import React from 'react';
import { Container } from 'react-bootstrap';

const SupportSection = () => {
    return (
        <div >
            <div className="bg-light py-5">
            <Container>
                <div className="row text-center">
                    <h2 className="mb-3"> Connect with us</h2>
                    <div className="col-md-3">
                    <i class="fs-1 bi bi-building"></i>
                        <h4>Address</h4>
                        <p>Kichijoji Sun Road 21/1, Tokyo.</p>
                    </div>
                    <div className="col-md-3">
                    <i class="fs-1 bi bi-telephone"></i>
                        <h4>Telephone</h4>
                        <p>+ 123 456 789, + 123 456 789</p>
                    </div>
                    <div className="col-md-3">
                    <i class="fs-1 bi bi-envelope"></i>
                        <h4>E-mail</h4>
                        <p>connect@ceramicsshop.com</p>
                    </div>
                    <div className="col-md-3">
                    <i class="fs-1 bi bi-briefcase"></i>
                        <h4>Working Hour</h4>
                        <p>Thursday to Sunday – 12.00 – 20.00h.</p>
                    </div>
                </div>
            </Container>
            </div>
        </div>
    );
};

export default SupportSection;

// <Container>
//                 <div className="row text-center">
//                     <h2>What is Etsy?</h2>
//                     <div className="col-md-4">
//                         <h3>A community doing good</h3>
//                         <p>Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.</p>
//                     </div>
//                     <div className="col-md-4">
//                         <h3>A community doing good</h3>
//                         <p>There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
//                     </div>
//                     <div className="col-md-4">
//                         <h3>A community doing good</h3>
//                         <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
//                     </div>
//                 </div>
//             </Container>