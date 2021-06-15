/** @format */

import React from "react";
import FirstNav from "../../Components/FirstNav";
import Navbar from "../../Components/Navbar2";
// import image1 from "../../Images/locked.png";
import Logo from "../../Images/logo.png";
import Bilaxy from "../../Images/bil.png";
import Donate1 from "../../Images/donimage.png";

class Donate extends React.Component  {
    constructor(props)  {
      super(props);
      this.state = {containerDim: 0};
    }

    async componentWillMount() {
       const call = "https://api.etherscan.io/api?module=account&action=balance&address=0xF4a6680FE9966Da033e2307712C0e06D1b4A00dc&tag=latest&apikey=YourApiKeyToken"
       const response = await fetch(call)
       const data = await response.json()
       this.setState({
        containerDim: data.result,
      });
    }

    render() {
        return (
            <div className="">
                <FirstNav />
                <Navbar />
                <section className='Donate-section' name='wellcome' id='wellcome'>
                    <div className='container'>
                        <div className="row">
                            <div class="col-6">
                                <div className='row mr-auto ml-auto'> 
                                <div className='col-sm-12 aos-init mr-auto ml-auto' data-aos='fade-up' data-aos-offset='100'>
                                    <p></p>
                                    <h1 className="justify-content-center onefont">Bilaxy FundRaiser</h1>
                                    <img src={Bilaxy} className='w-200' alt='...' />
                                    <h2 className="justify-content-center onefont">ONEMOON has been accepted on Bilaxy!</h2>
                                    <p className="justify-content-center">The ONEMOON community is happy to announce Bilaxy has approved ONEMOON(HRC20 Token). 
                                    The ONEMOON decentralized community can now donate for the Bilaxy fund for the requiested Bilaxy listing fee.</p>
                                    <p className="justify-content-center">The Bilaxy Listing will solve a major complaint from the community that there wasn't enough
                                    easy places for users to trade ONEMOON. Furthermore, This listing would also usher in a new CoinMarketCap and CoinGecko Listing. ONEMOON would also be the first HARMONY HRC20 Token to ever be listed on an external exchange - this
                                    would be a huge accomplishment for the Entire ONEMOON and Harmony Community.</p>
                                    <p className="justify-content-center">Here is a detailed breakdown of what is required.  After the amounts have been met please
                                    do not continue to send donations! Any donations above and beyound the required amounts will remain in the DAO fundraise wallet for future
                                    Community Proposals. </p>
                                    <ul className="list-group">
                                        {/* <li className="list-group-item active">5 ETH is Required is required to be sent to Bilaxy.</li>
                                        <li className="list-group-item active">5 ETH Worth of ONEMOON is required to be sent to Bilaxy.</li> */}
                                        <li className="list-group-item active">The Total Fundraise is for 5 ETH, and 5 ETH worth of ONEMOON(2 Trillion). This is from Bilaxy as the Requested Listing Fee Amounts. The ONEMOON is used to create a Market Maker in the listing pair.</li>
                                        <li className="list-group-item active">The Total Amounts only update when page is refreshed, or by checking on Etherscan or Harmony Explorer.</li>
                                        <li className="list-group-item active">The donation period has currently no deadline and will remain open until donation targets are met.</li>
                                        <li className="list-group-item active">Both ETH & ONEMOON assets are required as the Bilaxy Listing Fee. After both amounts are raised, they will be sent to Bilaxy. In 10 days or less Bilaxy will list ONEMOON.</li>
                                    </ul>
                                    {/* <a target="_blank" href="https://one.mochiswap.io/#/swap?outputCurrency=0xCB35e4945c7F463c5CCBE3BF9f0389ab9321248F"className="justify-content-center">0xcb35e4945c7f463c5ccbe3bf9f0389ab9321248f</a> */}
                                    {/* <p className="justify-content-center col-md-7 col-offset-4"> <img src={line} className='col-md-7 col-offset-4 text-center' alt='...' /></p> */}
                                    {/* <a target="_blank" href="#" className='btn button button-live-chat'>FUNDRAISE STATS:</a> */}
                                    {/* <button className='button-Buy-now'>
                                    TRADE NOW <FaArrowRight />
                                    </button> */}
                                </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div className='row mr-auto ml-auto'> 
                                <div className='col-sm-12 aos-init mr-auto ml-auto' data-aos='fade-up' data-aos-offset='100'>
                                    <p></p>
                                    <h1 className="justify-content-center onefont"><span>Ways to</span> DONATE</h1>
                                    <img src={Logo} className='w-200' alt='...' />
                                    <h2 className="">ETH Raised so far: {this.state.containerDim}</h2>
                                    <p>Total Donation Needed: 5 ETH</p>
                                    <p>*ETH from Ethereum Mainet only please.</p>
                                    <h2 className="">ONEMOON Raised so far: 0</h2>
                                    <p>Total Donation Needed: 2 Trillion ONEMOON</p>
                                    <p>*ONEMOON from Harmony Mainet only please.</p>
                                    <h2 className="">DAO Fundraiser Wallet Address:</h2>
                                    <p>*Please double check the donation address is correct before sending!</p>
                                    <p className="bg-primary" style={{fontSize: 14, color: "#00FFFF!important", width: "400px" }}>0xF4a6680FE9966Da033e2307712C0e06D1b4A00dc</p>
                                    <img src={Donate1} className='w-200' alt='...' />
                                </div>
                                </div>
                            </div>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


export default Donate;