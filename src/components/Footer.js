import React from 'react';
import {FooterData} from "../assets/json/Footer";
import * as state from "../assets/json/Footer";
import {Link} from "react-router-dom";
import './footer.css';

function Footer() {
    const [accountData, name, link] = state.FooterData;

    return (
        <React.Fragment>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-5 col-md-12 text-md-center">
                            <div class="row inner-row">
                                <div class="col-xl-10 col-lg-10 col-md-10 mx-md-auto mb-md-5">
                                    <div class="footer-box">
                                        <div class="logo-image mb-4">
                                            <img src={require("../assets/logo.png")} alt="footer-logo"
                                                 class="img-fluid"/>
                                        </div>
                                        {/*logo-image*/}

                                        <div class="company-info">
                                            <p class="mb-0">
                                                lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                                aliquyam erat, sed diam voluptua. at vero eos et accusam et
                                                justo duo dolores et ea rebum. stet clita kasd gubergren, no
                                                sea takimata sanc
                                            </p>
                                        </div>
                                        {/*company-info*/}
                                    </div>
                                    {/*footer-box*/}
                                </div>
                                {/*col-xl-10 col-lg-10 col-md-10*/}
                            </div>
                            {/*row inner-row*/}
                        </div>
                        {/*col-xl-5 col-lg-5 col-md-5*/}

                        <div class="col-xl-7 col-lg-7 col-md-12">

                            <div class="row inner-row">

                                <div class="col-xl-4 col-lg-4 col-md-4">
                                    <div class="footer-box">
                                        <div class="footer-heading mb-4">
                                            <h6>My Account</h6>
                                        </div>

                                        {/*<ul className="footer-list">*/}
                                        {/*    {FooterData.map((footerlist , index) => {*/}
                                        {/*        return(*/}
                                        {/*            */}
                                        {/*        )*/}
                                        {/*    })}*/}
                                        {/*</ul>*/}
                                        <ul class="footer-list">
                                            {
                                                FooterData.map((footerlist, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <ul>
                                                                    {footerlist.AccountData.map((items, count) => {
                                                                        return (
                                                                            <li key={count}>
                                                                                <Link to={items.link}>{items.name}</Link>
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </li>
                                                        )
                                                    }
                                                )}
                                        </ul>
                                    </div>
                                    {/*footer-box*/}
                                </div>
                                {/*col-xl-4 col-lg-4 col-md-4*/}

                                <div class="col-xl-4 col-lg-4 col-md-4">
                                    <div class="footer-box">
                                        <div class="footer-heading mb-4">
                                            <h6>Information</h6>
                                        </div>
                                        <ul className="footer-list">
                                            {
                                                FooterData.map((infolist, index) => {
                                                        return (

                                                            <li key={index}>
                                                                <ul>
                                                                    {infolist.InformationData.map((items, count) => {
                                                                        return (
                                                                            <li key={count}>
                                                                                <Link to={items.link}>{items.name}</Link>
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </li>
                                                        )
                                                    }
                                                )}
                                        </ul>
                                    </div>
                                    {/*footer-box*/}
                                </div>
                                {/*col-xl-4 col-lg-4 col-md-4*/}

                                <div class="col-xl-4 col-lg-4 col-md-4">
                                    <div class="footer-box">
                                        <div class="footer-heading mb-4">
                                            <h6>Recent Sold Out</h6>
                                        </div>

                                        <ul class="footer-sold-list">
                                            {FooterData.map((soldlist, index) => {
                                                return(
                                                    <li key={index}>
                                                        <ul>
                                                            {soldlist.SoldData.map((items, count) => {
                                                                return (
                                                                    <li key={count}>
                                                                        <div class="sold-box">
                                                                            <div class="sold-image">
                                                                                <img src={require(`../assets/images/footer/${items.image}`)}
                                                                                alt="footer-image" class="img-fluid"/>
                                                                            </div>
                                                                            {/*sold-image*/}

                                                                            <div class="sold-info">
                                                                                <h5 class="mb-0 pb-1">{items.id}}</h5>
                                                                                <p class="mb-0 pb-1">{items.highest}}</p>
                                                                                <h6>{items.price}} <span
                                                                                    style = {{color : "var(--yellow)"}}>{items.currency}</span></h6>
                                                                            </div>
                                                                            {/*sold-info*/}
                                                                        </div>
                                                                        {/*sold-box*/}
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </li>
                                                )

                                            })}

                                    </ul>
                                </div>
                                {/*footer-box*/}
                            </div>
                            {/*col-xl-4 col-lg-4 col-md-4*/}
                        </div>
                        {/*row inner-row*/}
                    </div>
                    {/*col-xl-7 col-lg-7 col-md-7*/}
                </div>
                {/*row*/}
            </div>
            {/*container*/}
        </footer>
    {/*footer*/
    }
</React.Fragment>
)
};
export default Footer;
