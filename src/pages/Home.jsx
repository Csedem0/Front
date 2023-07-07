import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        Created By{" "}
        <a href="https://www.linkedin.com/in/emmanuel-chukwu-3a4546243">
          Csedemo
        </a>
        . Quickly use below links to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/forgotpassword">ForgotPassword</Link>
        </li>
        <li>
          <Link to="/signuppage">SignUpPage</Link>
        </li>
        <li>
          <Link to="/loginpage">LoginPage</Link>
        </li>
        <li>
          <Link to="/letsyouin">LetsYouIn</Link>
        </li>
        <li>
          <Link to="/sendmoney">SendMoney</Link>
        </li>

        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/transferrequest">TransferRequest</Link>
        </li>
        <li>
          <Link to="/confirmation">Confirmation</Link>
        </li>
        <li>
          <Link to="/termsandconditions">TermsAndConditions</Link>
        </li>
        <li>
          <Link to="/tracktransfer">TrackTransfer</Link>
        </li>

        <li>
          <Link to="/privacyandpolicy">PrivacyandPolicy</Link>
        </li>
        <li>
          <Link to="/accountdetails">AccountDetails</Link>
        </li>
        <li>
          <Link to="/paymentdescription">PaymentDescription</Link>
        </li>
        <li>
          <Link to="/verifyemail">VerifyEmail</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
