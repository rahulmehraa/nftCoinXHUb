import React from 'react';
import Heading from "../components/Heading";
import './Homeview.css';
import {BiddingData} from "../assets/json/LiveBidding";
import {CategoriesData} from "../assets/json/Categories";
import Discover from "../components/Discover";
import {Workbox} from "../assets/json/WorkBox";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore , {Navigation, Pagination, Scrollbar} from 'swiper';
import {NavItemdata} from "../assets/json/DiscoverTab";
import {Link} from "react-router-dom";
import icon1 from "../assets/images/icons/social_icon1.svg";
import icon2 from "../assets/images/icons/social_icon2.svg"
import icon3 from "../assets/images/icons/social_icon3.svg";
import heart from '../assets/images/icons/heart.svg';
import filter from '../assets/images/icons/filter.svg'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination , Scrollbar]);

function HomeView() {


    // const active_tab = "all";

    // const tabChange = (tab_for) => {
    //     this.active_tab = tab_for;
    // }
    return (
        <React.Fragment>
            <section className="banner-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="banner-info">
                                <span className="star-image"><img src={require("../assets/images/icons/star.png")}
                                                                  alt="star"/> More than 1000 user active per day</span>
                                <img src="" alt=""/>
                                <h1>
                                    Collect Super <br/>
                                    Rate Digital <br/>
                                    <span style={{color: 'var(--yellow)', fontWeight: 700}}>Artworks</span>
                                </h1>
                                <p>
                                    Buy and sell NFT's from the world's <br/>
                                    top artists.
                                </p>
                                <button className="btn btn-primary">
                                    Get Started
                                    <span><img src={require("../assets/images/icons/arrow.png")}
                                               alt="arrow-right"/></span>
                                </button>
                            </div>
                            {/*banner-info*/}
                        </div>
                        {/*col-xl-6 col-lg-6 col-md-6*/}

                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="banner-image">
                                <img src={require("../assets/images/home/banner-image.png")} alt="banner-image11"
                                     className="img-fluid"/>
                            </div>
                            {/*banner-image*/}
                        </div>
                        {/*col-xl-6 col-lg-6 col-md-6*/}
                    </div>
                    {/*row*/}
                </div>
                {/*container*/}

            </section>
            {/*banner-sec*/}

            <section className="user-sec">
                <div className="container">
                    <div className="row heading-row align-items-center mb-5">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="heading">
                                <h1>Top User</h1>
                            </div>
                        </div>
                        {/*col-xl-6 col-lg-6 col-md-6*/}

                        <div className="col-xl-6 col-g-6 col-md-6 col-12">
                            <div className="select-box text-xl-end text-md-end">
                                <select className="select">
                                    <option value="0">Seller</option>
                                    <option value="0">Buyer</option>
                                </select>
                            </div>
                            {/*select-box*/}
                        </div>
                        {/*col-xl-6 col-g-6 col-md-6*/}
                    </div>
                    {/*row heading-row*/}

                    <div className="row top-row mb-5">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="user-box">
                                <div className="row inner-row align-items-center">
                                    <div className="col-xl-7 col-lg-6 col-md-12 mb-md-2">
                                        <div className="image-info-box">
                                            <div className="user-image">
                                                <img src={require("../assets/images/home/user-1.png")} alt="user"
                                                     className="img-fluid"/>

                                                <img src={require("../assets/images/icons/verify.png")} alt="verify"
                                                     className="img-fluid verify"/>
                                            </div>
                                            {/*user-image*/}

                                            <div className="user-info-text">
                                                <h2>Sara Evans</h2>
                                                <h3>783.28 <span>Trx</span></h3>
                                            </div>
                                            {/*user-info-text*/}
                                        </div>
                                        {/*image-info-box*/}
                                    </div>
                                    {/*col-xl-7 col-lg-7 col-md-7*/}

                                    <div className="col-xl-5 col-lg-6 col-md-12">
                                        <div className="social-icons">
                                            <ul className="social-list">
                                                <li>
                                                    <Link to=""><img
                                                        src= {icon1}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon2}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon3}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>
                                            </ul>
                                            {/*social-list*/}
                                        </div>
                                        {/*social-icons*/}
                                    </div>
                                    {/*col-xl-5 col-lg-5 col-md-5*/}
                                </div>
                                {/*row inner-row*/}
                            </div>
                            {/*user-box*/}
                        </div>
                        {/*col-xl-4 col-lg-4 col-md-4*/}

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="user-box">
                                <div className="row inner-row align-items-center">
                                    <div className="col-xl-7 col-lg-6 col-md-12 mb-md-2">
                                        <div className="image-info-box">
                                            <div className="user-image">
                                                <img src={require("../assets/images/home/user-1.png")} alt="user"
                                                     className="img-fluid"/>

                                                <img src={require("../assets/images/icons/verify.png")} alt="verify"
                                                     className="img-fluid verify"/>
                                            </div>
                                            {/*user-image*/}

                                            <div className="user-info-text">
                                                <h2>Sara Evans</h2>
                                                <h3>783.28 <span>Trx</span></h3>
                                            </div>
                                            {/*user-info-text*/}
                                        </div>
                                        {/*<image-info-box*/}
                                    </div>
                                    {/*col-xl-7 col-lg-7 col-md-7*/}

                                    <div className="col-xl-5 col-lg-6 col-md-12">
                                        <div className="social-icons">
                                            <ul className="social-list">
                                                <li>
                                                    <Link to=""><img
                                                        src={icon1}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon2}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon3}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>
                                            </ul>
                                            {/*social-list*/}
                                        </div>
                                        {/*social-icons*/}
                                    </div>
                                    {/*col-xl-5 col-lg-5 col-md-5*/}
                                </div>
                                {/*row inner-row*/}
                            </div>
                            {/*user-box*/}
                        </div>
                        {/*col-xl-4 col-lg-4 col-md-4*/}

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="user-box">
                                <div className="row inner-row align-items-center">
                                    <div className="col-xl-7 col-lg-6 col-md-12 mb-md-2">
                                        <div className="image-info-box">
                                            <div className="user-image">
                                                <img src={require("../assets/images/home/user-1.png")} alt="user"
                                                     className="img-fluid"/>

                                                <img src={require("../assets/images/icons/verify.png")} alt="verify"
                                                     className="img-fluid verify"/>
                                            </div>
                                            {/*user-image*/}

                                            <div className="user-info-text">
                                                <h2>Sara Evans</h2>
                                                <h3>783.28 <span>Trx</span></h3>
                                            </div>
                                            {/*user-info-text*/}
                                        </div>
                                        {/*image-info-box*/}
                                    </div>
                                    {/*col-xl-7 col-lg-7 col-md-7*/}

                                    <div className="col-xl-5 col-lg-6 col-md-12">
                                        <div className="social-icons">
                                            <ul className="social-list">
                                                <li>
                                                    <Link to=""><img
                                                        src={icon1}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon2}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon3}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>
                                            </ul>
                                            {/*social-list*/}
                                        </div>
                                        {/*social-icons*/}
                                    </div>
                                    {/*col-xl-5 col-lg-5 col-md-5*/}
                                </div>
                                {/*row inner-row*/}
                            </div>
                            {/*user-box*/}
                        </div>
                        {/*col-xl-4 col-lg-4 col-md-4*/}
                    </div>

                    <div className="row middle-row mb-5 d-md-none d-lg-none d-xl-flex">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="user-box">
                                <div className="row inner-row align-items-center">
                                    <div className="col-xl-7 col-lg-7 col-md-7">
                                        <div className="image-info-box">
                                            <div className="user-image">
                                                <img src={require("../assets/images/home/user-1.png")} alt="user"
                                                     className="img-fluid"/>

                                                <img src={require("../assets/images/icons/verify.png")} alt="verify"
                                                     className="img-fluid verify"/>
                                            </div>


                                            <div className="user-info-text">
                                                <h2>Sara Evans</h2>
                                                <h3>783.28 <span>Trx</span></h3>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="col-xl-5 col-lg-5 col-md-5">
                                        <div className="social-icons">
                                            <ul className="social-list">
                                                <li>
                                                    <router-link to=""><img
                                                        src={icon1}
                                                        alt="socialicon"
                                                        className="img-fluid"/></router-link>
                                                </li>

                                                <li>
                                                    <router-link to=""><img
                                                        src={icon2}
                                                        alt="socialicon"
                                                        className="img-fluid"/></router-link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon3}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="user-box">
                                <div className="row inner-row align-items-center">
                                    <div className="col-xl-7 col-lg-7 col-md-7">
                                        <div className="image-info-box">
                                            <div className="user-image">
                                                <img src={require("../assets/images/home/user-1.png")} alt="user"
                                                     className="img-fluid"/>

                                                <img src={require("../assets/images/icons/verify.png")} alt="verify"
                                                     className="img-fluid verify"/>
                                            </div>

                                            <div className="user-info-text">
                                                <h2>Sara Evans</h2>
                                                <h3>783.28 <span>Trx</span></h3>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="col-xl-5 col-lg-5 col-md-5">
                                        <div className="social-icons">
                                            <ul className="social-list">
                                                <li>
                                                    <Link to=""><img
                                                        src={icon1}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon2}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon3}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>
                                            </ul>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="user-box">
                                <div className="row inner-row align-items-center">
                                    <div className="col-xl-7 col-lg-7 col-md-7">
                                        <div className="image-info-box">
                                            <div className="user-image">
                                                <img src={require("../assets/images/home/user-1.png")} alt="user"
                                                     className="img-fluid"/>

                                                <img src={require("../assets/images/icons/verify.png")} alt="verify"
                                                     className="img-fluid verify"/>
                                            </div>

                                            <div className="user-info-text">
                                                <h2>Sara Evans</h2>
                                                <h3>783.28 <span>Trx</span></h3>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="col-xl-5 col-lg-5 col-md-5">
                                        <div className="social-icons">
                                            <ul className="social-list">
                                                <li>
                                                    <Link to=""><img
                                                        src={icon1}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon2}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon3}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>
                                            </ul>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="row bottom-row mb-5 d-md-none d-lg-none d-xl-flex">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="user-box">
                                <div className="row inner-row align-items-center">
                                    <div className="col-xl-7 col-lg-7 col-md-7">
                                        <div className="image-info-box">
                                            <div className="user-image">
                                                <img src={require("../assets/images/home/user-1.png")} alt="user"
                                                     className="img-fluid"/>

                                                <img src={require("../assets/images/icons/verify.png")} alt="verify"
                                                     className="img-fluid verify"/>
                                            </div>


                                            <div className="user-info-text">
                                                <h2>Sara Evans</h2>
                                                <h3>783.28 <span>Trx</span></h3>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="col-xl-5 col-lg-5 col-md-5">
                                        <div className="social-icons">
                                            <ul className="social-list">
                                                <li>
                                                    <Link to=""><img
                                                        src={icon1}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon2}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon3}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="user-box">
                                <div className="row inner-row align-items-center">
                                    <div className="col-xl-7 col-lg-7 col-md-7">
                                        <div className="image-info-box">
                                            <div className="user-image">
                                                <img src={require("../assets/images/home/user-1.png")} alt="user"
                                                     className="img-fluid"/>

                                                <img src={require("../assets/images/icons/verify.png")} alt="verify"
                                                     className="img-fluid verify"/>
                                            </div>


                                            <div className="user-info-text">
                                                <h2>Sara Evans</h2>
                                                <h3>783.28 <span>Trx</span></h3>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="col-xl-5 col-lg-5 col-md-5">
                                        <div className="social-icons">
                                            <ul className="social-list">
                                                <li>
                                                    <Link to=""><img
                                                        src={icon1}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon2}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>

                                                <li>
                                                    <Link to=""><img
                                                        src={icon3}
                                                        alt="socialicon"
                                                        className="img-fluid"/></Link>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="user-box">
                                    <div className="row inner-row align-items-center">
                                        <div className="col-xl-7 col-lg-7 col-md-7">
                                            <div className="image-info-box">
                                                <div className="user-image">
                                                    <img src={require("../assets/images/home/user-1.png")} alt="user"
                                                         className="img-fluid"/>

                                                    <img src={require("../assets/images/icons/verify.png")} alt="verify"
                                                         className="img-fluid verify"/>
                                                </div>


                                                <div className="user-info-text">
                                                    <h2>Sara Evans</h2>
                                                    <h3>783.28 <span>Trx</span></h3>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="col-xl-5 col-lg-5 col-md-5">
                                            <div className="social-icons">
                                                <ul className="social-list">
                                                    <li>
                                                        <Link to=""><img
                                                            src={icon1}
                                                            alt="socialicon"
                                                            className="img-fluid"/></Link>
                                                    </li>

                                                    <li>
                                                        <Link to=""><img
                                                            src={icon2}
                                                            alt="socialicon"
                                                            className="img-fluid"/></Link>
                                                    </li>

                                                    <li>
                                                        <Link to=""><img
                                                            src={icon3}
                                                            alt="socialicon"
                                                            className="img-fluid"/></Link>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="row button-row">
                            <div className="col-xl-5 col-md-5 col-lg-5 mx-auto">
                                <div className="view-more-btn">
                                    <button className="btn btn-primary">View More <img
                                        src={require("../assets/images/icons/arrow.png")} alt="arrow"
                                        className="img-fluid"/>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*banner sec*/}

            <section class="bidding-sec">
                <div class="container">
                    <div class="row heading-row align-items-center">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div className="heading">
                                <h1>Live Bidding</h1>
                            </div>
                        </div>
                        {/*col-xl-12 col-lg-12 col-md-12*/}
                    </div>
                    {/*row heading-row*/}

                    <div class="row align-items-center mt-5">
                        {BiddingData.map((items, index) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6 mb-5">

                                    <div className="bidding-main-box" key={index}>
                                        <div className="bidding-image">
                                            <div className="bidding-large-image">
                                                <img src={require(`..//assets/images/home/${items.image}`)}
                                                     alt="bidding-image" class="img-fluid"/>
                                            </div>

                                            <div className="bidding-user">
                                                <img src={require(`../assets/images/home/${items.user}`)}
                                                     alt="bidding-user" class="img-fluid"/>
                                            </div>
                                            {/*bidding-user*/}
                                        </div>
                                        {/*bidding-image*/}

                                        <div className="bidding-info pb-3">
                                            <div className="row info-row align-items-center">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                                                    <div className="user-info">
                                                        <h3>{items.user_name}</h3>
                                                        <h4>{items.user_sub_name}</h4>
                                                    </div>
                                                    {/*user-info*/}
                                                </div>
                                                {/*col-xl-6 col-lg-6 col-md-6*/}

                                                <div className="col-xl-6 col-lg-6 col-md-6 col-6 text-end">
                                                    <div className="like-box">
                                                        <h5>
                                                            <span><img src={heart}
                                                                       alt="heart-image" className="img-fluid"/></span>
                                                            {items.like}
                                                        </h5>
                                                    </div>
                                                    {/*like-box*/}
                                                </div>
                                                {/*col-xl-6 col-lg-6 col-md-6*/}
                                            </div>
                                            {/*row info-row*/}
                                        </div>
                                        {/*bidding-info*/}

                                        <div className="bidding-time pt-3 pb-3">
                                            <div className="row bid-time-row align-items-center">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                                                    <div className="bid-text">
                                                        <h3>
                                                            {items.bid_title}
                                                        </h3>

                                                        <h4>
                                                            Bid {items.bid_price}
                                                            <span>{
                                                                items.bidcurrency
                                                            }</span>
                                                        </h4>
                                                    </div>
                                                    {/*bid-text*/}
                                                </div>
                                                {/*col-xl-6 col-lg-6 col-md-6*/}

                                                <div className="col-xl-6 col-lg-6 col-md-6 col-6 text-end">
                                                    <div className="bid-text" id="bid-time">
                                                        <h3>
                                                            {items.bid_time_title}
                                                        </h3>

                                                        <h4>{items.bid_time}</h4>
                                                    </div>
                                                    {/*bid-text*/}
                                                </div>
                                                {/*col-xl-6 col-lg-6 col-md-6*/}
                                            </div>
                                            {/*row bid-time-row*/}
                                        </div>
                                        {/*bidding-time*/}

                                        <div className="bidding-button">
                                            <button className="btn btn-primary">Place a Bid</button>
                                        </div>
                                        {/*bidding-button*/}
                                    </div>
                                </div>

                            )
                        })}
                        {/*bidding-main-box*/}
                        {/*col-xl-3 col-lg-3 col-md-3*/}
                    </div>
                    {/*row align-items-center*/}
                </div>
                {/*container*/}
            </section>
            {/*bidding-sec*/}


            <section class="collection-sec">
                <div class="container">
                    <div class="inner-wrapper">
                        <div class="row heading-row mb-5">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div className="heading">
                                    <h1>Top Collection</h1>
                                </div>
                            </div>
                            {/*col-xl-6 col-lg-6 col-md-6*/}

                            <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div class="categories-select text-xl-end text-md-end">
                                    <select class="select">
                                        <option value="0">All Categories</option>
                                        <option value="1">Categories</option>
                                        <option value="2">All Categories</option>
                                    </select>
                                    {/*select*/}
                                </div>
                                {/*categories-select*/}
                            </div>
                            {/*col-xl-6 col-lg-6 col-md-6*/}
                        </div>
                        {/*<row heading-row*/}


                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    navigation = {{clickable:true}}
                                    pagination={{clickable : true}}
                                    scrollbar={{draggable:true}}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 1,
                                        },
                                        // when window width is >= 768px
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 40,
                                        },
                                    }} modules="modules" class="mySwiper">

                                        {CategoriesData.map((categoriesinfo, index) => {
                                            return (
                                                <SwiperSlide key = {index}>
                                                <div className="categories-box" key={index}>
                                                    <div className="image-box mb-5">
                                                        <div className="large-image">
                                                            <img src={
                                                                require(`../assets/images/home/${categoriesinfo.large}`)}
                                                                 alt="collection-image" class="img-fluid"/>
                                                        </div>
                                                        {/*large-image*/}

                                                        <div className="small-image">
                                                            <img src={
                                                                require(`../assets/images/home/${categoriesinfo.small}`)}
                                                                 alt="collection-image" class="img-fluid"/>
                                                        </div>
                                                        {/*<small-image*/}

                                                        <div className="extra-small-image">
                                                            <img src={
                                                                require(`../assets/images/home/${categoriesinfo.extra_small}`)}
                                                                 alt="collection-image" class="img-fluid"/>
                                                        </div>
                                                        {/*<extra-small-image*/}

                                                        <div className="collection-user-image">
                                                            <img src={
                                                                require(`../assets/images/home/${categoriesinfo.collection_user}`)}
                                                                 alt="collection-image" class="img-fluid"/>
                                                        </div>
                                                        {/*<collection-user-image*/}
                                                    </div>
                                                    {/*image-box*/}

                                                    <div className="categories-info">
                                                        <div className="row cat-info-row align-items-center">
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                                                                <div className="admin-text">
                                                                    <h3>{categoriesinfo.admin}</h3>
                                                                    <p>{categoriesinfo.sub_admin}</p>
                                                                </div>
                                                                {/*admin-text*/}
                                                            </div>
                                                            {/*col-xl-6 col-lg-6 col-md-6*/}

                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                                                                <div className="button-box text-end">
                                                                    <button className="btn btn-primary">
                                                                        {categoriesinfo.count} Items
                                                                    </button>
                                                                </div>
                                                                {/*button-box*/}
                                                            </div>
                                                            {/*col-xl-6 col-lg-6 col-md-6*/}
                                                        </div>
                                                        {/*row cat-info-row*/}
                                                    </div>
                                                    {/*categories-info*/}
                                                </div>
                                                </SwiperSlide>
                                            )
                                        })}

                                </Swiper>
                            </div>
                            {/*col-xl-12 col-lg-12 col-md-12*/}
                        </div>
                        {/*row*/}
                    </div>
                    {/*inner-wrapper*/}
                </div>
                {/*container*/}
            </section>
            {/*discover-sec*/}
            <section class="discovcer-sec">
                <div class="container">
                    <div class="row heading-row mb-5">
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div className="heading">
                                <h1>Discover</h1>
                            </div>

                        </div>
                        {/*col-xl-6 col-lg-6 col-md-6*/}

                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <ul class="filter-list">
                                <li>
                                    <div class="select-box">
                                        <select class="select">
                                            <option value="0">Recently Added</option>
                                            <option value="0">Today Added</option>
                                            <option value="0">New Added</option>
                                        </select>
                                    </div>
                                    {/*select-box*/}
                                </li>
                                <li>
                                    <div class="filter-btn">
                                        <button class="btn btn-primary">
                                            Filter <span><img src={filter}
                                                              alt="filter" class="img-fluid"/></span>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/*<col-xl-6 col-lg-6 col-md-6*/}
                    </div>
                    {/*row heading-row*/}

                    <div class="row tab-slider-row mb-5">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="swiper-inner-box">
                                <Swiper
                                    slidesPerView={6}
                                    spaceBetween={30}
                                    navigation
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        // when window width is >= 768px
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 50,
                                        },
                                    }} modules="modules" class="mySwiper">

                                    {NavItemdata.map((navitem, index) => {
                                        return (
                                            <SwiperSlide key={index} >
                                                <div class="tab-button">
                                                    <button type="button" className="tab-change-btn">
                                                        {navitem.tabContent}
                                                    </button>
                                                </div>
                                                {/*tab-button*/}
                                            </SwiperSlide>
                                        )
                                    })}

                                </Swiper>
                            </div>
                            {/*swiper-inner-box*/}
                        </div>
                        {/*col-xl-12 col-lg-12 col-md-12*/}
                    </div>

                    <div class="row content-change-row mt-5">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="tab-content" id="pills-tabContent">
                                <div v-show="active_tab == 'all'">
                                    <Discover/>
                                </div>
                                {/*all-tab*/}
                                <div v-show="active_tab == 'photography'">
                                    <Discover/>
                                </div>
                                {/*<photography-tab*/}
                                <div v-show="active_tab == 'art'">
                                    <Discover/>
                                </div>
                                {/*art-tab*/}
                                <div v-show="active_tab == 'games'">
                                    <Discover/>
                                </div>
                                {/*games-tab*/}
                                <div v-show="active_tab == 'music'">
                                    <Discover/>
                                </div>
                                {/*music-tabc*/}
                                <div v-show="active_tab == 'metaverse'">
                                    <Discover/>
                                </div>
                                {/*metaverse-tabc*/}
                                <div v-show="active_tab == 'domains'">
                                    <Discover/>
                                </div>
                                {/*domains-tabs*/}
                                <div v-show="active_tab == 'defi'">
                                    <Discover/>
                                </div>
                                {/*defi-tabsc*/}
                                <div v-show="active_tab == 'memes'">
                                    <Discover/>
                                </div>
                                {/*memes-tabsc*/}
                            </div>
                        </div>
                        {/*col-xl-12 col-lg-12 col-md-12c*/}
                    </div>
                    {/*row content-change-row*/}
                </div>
                {/*container*/}
            </section>
            {/*discover-sec*/}

            <section class="how_it_work">
                <div class="container">
                    <div class="row align-items-center work-row">
                        <div class="col-xl-7 col-lg-7 col-md-12">
                            <div class="row inner-box-row">
                                {Workbox.map((work , index) => {
                                 return(
                                        <div class="col-xl-6 col-lg-6 col-md-6 column-test" key={index}>
                                        <div class="work-box">
                                        <div class="work-image">
                                        <img src={require(`../assets/images/icons/${work.icon}`)} alt="work-icon" class="img-fluid"/>
                                        </div>
                                        {/*work-image*/}

                                        <div class="work-info mt-4">
                                        <h3 class="mb-0 pb-2">{work.title}</h3>
                                        <p class="mb-0">{work.para}</p>
                                        </div>
                                        </div>
                                        {/*work-box*/}
                                        </div>
                                 )
                                })
                                }
                            </div>
                            {/*inner-box-row*/}
                        </div>
                        {/*col-xl-7 col-lg-7 col-md-7*/}

                        <div class="col-xl-4 col-lg-4 col-md-12 ms-auto">
                            <div class="work-info-text">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                        <div className="heading">
                                        <h1>How It Works</h1>
                                        </div>
                                        </div>
                                <p class="mb-0 pt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et
                                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                    est Lorem ipsum dolor
                                    sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                    eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                    accusam et justo duo
                                    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
                            </div>
                            {/*work-info*/}
                        </div>
                        {/*col-xl-5 col-lg-5 col-md-5*/}
                    </div>
                    {/*rowc*/}
                </div>
                {/*container*/}
            </section>
            {/*how_it_work*/}
            <section className="subscribe-sec">
                <div className="container">
                    <div className="subscribe-wrapper">
                        <div className="subscribe-box">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="subscrib-info">
                                        <h3>Subscribe to <strong>CoinXhub</strong> </h3>
                                    </div>
                                    {/*subscribe-info*/}

                                    <div className="form-box">
                                        <form className="form">
                                            <div className="row form-row align-items-center">
                                                <div className="col-xl-7 col-lg-7 col-md-8">
                                                    <div className="input-group">
                                                        <input type="email" className="form-control"
                                                               id="exampleFormControlInput1"
                                                               placeholder="Enter your email"/>
                                                    </div>
                                                </div>
                                                {/*col-xl-7 col-lg-7 col-md-7*/}

                                                <div className="col-xl-5 col-lg-5 col-md-4">
                                                    <div className="submit-button">
                                                        <button type="submit" className="btn btn-primary">Subscribe
                                                        </button>
                                                    </div>
                                                    {/*submit-button*/}
                                                </div>
                                                {/*col-xl-5 col-lg-5 col-md-5*/}
                                            </div>
                                            {/*row form-row*/}
                                        </form>
                                    </div>
                                </div>
                                {/*col-xl-6 col-lg-6 col-md-6*/}

                                <div className="col-xl-6 col-lg-6 col-md-6 order-first order-sm-1">
                                    <div className="subscribe-image">
                                        <img src={require("../assets/images/home/subscribe-image.png")} alt="subscribe-image"
                                             className="img-fluid"/>
                                    </div>
                                    {/*subscribe-image*/}
                                </div>
                                {/*col-xl-6 col-lg-6 col-md-6*/}
                            </div>
                            {/*row*/}
                        </div>
                        {/*subscribe-box*/}
                    </div>
                    {/*subscribe-wrapper*/}
                </div>
                {/*container*/}
            </section>
            {/*subscribe-sec*/}

        </React.Fragment>
    )
};
export default HomeView;

