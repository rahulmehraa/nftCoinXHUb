import React from 'react';
import {DiscoverContentData} from "../assets/json/DiscoverContent";

function Discover() {
    return(
        <React.Fragment>

                <div class="row align-items-center mt-5">

                    {DiscoverContentData.map((discovertab, index) => {
                        return(
                            <div className="col-xl-3 col-lg-4 col-md-6 mb-5">
                            <div className="discover-main-box" key = {index}>
                                <div className="discover-image">
                                    <div className="discover-large-image">
                                        <img src={require(`../assets/images/home/${discovertab.image}`)}
                                             alt="bidding-image" className="img-fluid"/>
                                    </div>

                                    <div className="discover-user">
                                        <img src={require(`../assets/images/home/${discovertab.user}`)}
                                        alt="bidding-user" class="img-fluid" />
                                    </div>
                                    {/*bidding-user*/}
                                </div>
                                {/*bidding-image*/}

                                <div className="discover-info pb-3">
                                    <div className="row info-row align-items-center">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                                            <div className="user-info">
                                                <h3>{discovertab.user_name}</h3>
                                                <h4>{discovertab.user_sub_name}</h4>
                                            </div>
                                            {/*<user-info*/}
                                        </div>
                                        {/*col-xl-6 col-lg-6 col-md-6*/}

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-6 text-xl-end">
                                            <div className="like-box">
                                                <h5>
                                                    <span><img src= {require("../assets/images/icons/heart.svg")} alt="heart-image"
                                                               className="img-fluid"/></span>
                                                    {discovertab.like}
                                                </h5>
                                            </div>
                                            {/*like-box*/}
                                        </div>
                                        {/*col-xl-6 col-lg-6 col-md-6*/}
                                    </div>
                                    {/*row info-row*/}
                                </div>
                                {/*bidding-info*/}

                                <div className="discover-time pt-3 pb-3">
                                    <div className="row bid-time-row align-items-center">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                                            <div className="bid-text">
                                                <h3>
                                                    {discovertab.bid_title}
                                                </h3>

                                                <h4>
                                                    Bid {discovertab.bid_price}
                                                    <span >{discovertab.bidcurrency}</span>
                                                </h4>
                                            </div>
                                            {/*bid-text*/}
                                        </div>
                                        {/*col-xl-6 col-lg-6 col-md-6c*/}

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-6 text-xl-end">
                                            <div className="bid-text" id="bid-time">
                                                <h3>
                                                    {discovertab.bid_time_title}
                                                </h3>

                                                <h4>{discovertab.bid_time}</h4>
                                            </div>
                                            {/*<bid-text*/}
                                        </div>
                                        {/*col-xl-6 col-lg-6 col-md-6*/}
                                    </div>
                                    {/*row bid-time-row*/}
                                </div>
                                {/*<bidding-time*/}

                            </div>
                    </div>
                        )
                    } )}
                    {/*bidding-main-box*/}

                {/*col-xl-3 col-lg-3 col-md-3*/}
            </div>
            {/*row align-items-center*/}

        </React.Fragment>
    )
};
export default Discover ;

