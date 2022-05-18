import React from 'react';
import {CurrencySelect} from "../assets/json/CurrencySelect";
import './Create.css';

function Create() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

   let currency = {
        icon: "btc.png",
            currency_name: "btc",
    };
    function currencyChange(selected_currency) {
        console.log("HERE");
        this.currency = selected_currency;
    };

    return(
        <React.Fragment>
            <section class="create-sec">
                <div class="container">
                    <div class="row heading-row mb-5">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div className="heading">
                                <h1>Create New Item</h1>
                            </div>
                            {/*heading*/}
                        </div>
                        {/*<col-xl-12 col-lg-12 col-md-12*/}
                    </div>
                    {/*row heading-row-->*/}

                    <div class="form-wrapper mt-5">
                        <div class="form-box">
                            <form>
                                <div class="row form-row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 mb-4">
                                        <div class="label mb-2">
                                            <label>Image, Video, Audio, or 3D Model <span>*</span></label>
                                            <p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
                                        </div>
                                        <div class="input-group">
                                            <div class="image-box">
                                                <img src={require("../assets/images/icons/doc.png")} alt="" class="filter-img img-fluid" id="img_url"/>
                                            </div>

                                        </div>
                                        {/*input-group*/}
                                    </div>
                                    {/*col-xl-12 col-lg-12 col-md-12*/}

                                    <div class="col-xl-8 col-lg-12 col-md-12 mb-4">
                                        <div class="label mb-2">
                                            <label>Name <span>*</span></label>
                                        </div>
                                        {/*labelc*/}

                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Name" aria-label="Name"/>
                                        </div>
                                        {/*input-group*/}
                                    </div>
                                    {/*col-xl-8 col-lg-12 col-md-12*/}

                                    <div class="col-xl-8 col-lg-12 col-md-12 mb-4">
                                        <div class="label mb-2">
                                            <label>External link</label>
                                            <p>Coinxhub will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.
                                            </p>
                                        </div>
                                       {/*label*/}

                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="https://yoursite.io/item/123" aria-label="link"/>
                                        </div>
                                        {/*input-group*/}
                                    </div>
                                    {/*col-xl-8 col-lg-12 col-md-12*/}

                                    <div class="col-xl-8 col-lg-12 col-md-12 mb-4">
                                        <div class="label">
                                            <label>Description</label>
                                            <p>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                                        </div>
                                        {/*label*/}

                                        <div class="input-group">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Description of your item" rows="6"></textarea>
                                        </div>
                                        {/*input-group*/}
                                    </div>
                                    {/*col-xl-8 col-lg-12 col-md-12*/}

                                    <div class="col-xl-8 col-lg-12 col-md-12 mb-4">
                                        <div class="label">
                                            <label>Collection</label>
                                            <p>This is the collection where your item will appear</p>
                                        </div>
                                       {/*label*/}

                                        <div class="input-group">
                                            <select class="select">
                                                <option value="0">Choose...</option>
                                                <option value="1">All Collection</option>
                                                <option value="2">Today Collection</option>
                                                <option value="3">Prev Collection</option>
                                            </select>
                                        </div>
                                        {/*input-group*/}
                                    </div>
                                    {/*col-xl-8 col-lg-12 col-md-12*/}

                                    <div class="col-xl-8 col-lg-12 col-md-12 mb-4">
                                        <div class="label mb-2">
                                            <label>Supply</label>
                                            <p>The number of items that can be minted. No gas cost to you! </p>
                                        </div>
                                        {/*label*/}

                                        <div class="input-group">
                                            <input type="text" class="form-control" value="1" id="disable-input" aria-label="Username" aria-describedby="basic-addon1" readonly disabled/>
                                        </div>
                                        {/*input-group*/}
                                    </div>
                                    {/*col-xl-8 col-lg-12 col-md-12*/}

                                    <div class="col-xl-8 co-lg-12 col-md-12 mb-4">
                                        <div class="label">
                                            <label>Blockchain</label>
                                        </div>
                                        {/*label*/}

                                        <div class="input-group">
                                            <div class="dropdown">
                                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span>
                                                <img src={require(`../assets/images/currency/${currency.icon}`)} alt="currency-image" class="img-fluid"/>
                                            </span>
                                                    {currency.currency_name}
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    {CurrencySelect.map((items , index) => {
                                                       return(
                                                           <li key = {index}>
                                                                <span>
                                                              <img src={require(`../assets/images/currency/${items.icon}`)} alt="currency-image" class="img-fluid" onClick={currencyChange.currency}/>
                                                            </span>
                                                               {currency.currency_name}
                                                           </li>
                                                       )
                                                    })
                                                    }

                                                </ul>
                                        </div>
                                    </div>
                                    {/*input-group*/}
                                </div>
                                {/*col-xl-8 co-lg-12 col-md-12*/}

                                <div class="col-xl-8 col-lg-12 col-md-12 mb-4">
                                    <div class="label mb-2">
                                        <label>Freeze metadata</label>
                                        <p>Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage.</p>
                                    </div>
                                    {/*label*/}
                                    <div class="input-group">
                                        <input type="text" class="form-control" value="To freeze your metadata, you must create your item first." id="disable-input" aria-label="Username" aria-describedby="basic-addon1" readonly disabled/>
                                    </div>
                                    {/*input-group*/}
                                </div>
                                {/*col-xl-8 col-lg-12 col-md-12*/}

                                <div class="col-xl-8 col-lg-12 col-md-12">
                                    <div class="create-button">
                                        <button
                                            onClick = {handleSubmit}
                                            class="btn btn-primary">Create</button>
                                    </div>
                                    {/*create-button*/}
                                </div>
                            {/*col-xl-8 col-lg-12 col-md-12*/}
                        </div>
                        {/*row form-row*/}
                    </form>
                </div>
                {/*form-box*/}
            </div>
            {/*form-wrapper*/}
        </div>

                {/*container*/}
</section>
    {/*create-sec*/}
        </React.Fragment>
    )
};
export default Create ;

