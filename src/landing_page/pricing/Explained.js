import React from 'react';
function Explained() {
    return ( <div className="container p-5">
        <div className="row p-5">
            <h1>
                Charges Explained
            </h1>
        </div>

        <div className="row" id='explained'>

            <div className="col px-5">
                <h2>Securities/Commodities transaction tax</h2>

                <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>

                <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                <h2>Transaction/Turnover Charges</h2>

                <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>

                <h2>Call & Trade</h2>
                <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

                <h2>Stamp charges</h2>
                <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                <h2>NRI brokerage charges</h2>
                <ul>
                <li>    For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower). </li>
                <li>    For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower). </li>
                <li>    ₹500 + GST as yearly account maintenance charges (AMC) charges. </li>
                </ul>
            </div>
            <div className="col px-5">
                <h2>GST</h2>
                <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

                <h2>SEBI Charges</h2>
                <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

                <h2>DP (Depository participant) charges</h2>
                <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>


                <h2>Pledging charges</h2>
                <p>₹30 + GST per pledge request per ISIN.</p>

                <h2>AMC (Account maintenance charges)</h2>
                <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>
                <p>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>

                <h2>Corporate action order charges</h2>
                <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

            </div>
        </div>
    </div> );
}

export default Explained;