import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "pages/SignUpPage";
import NotFound from "pages/NotFound";
import SplashPage from "pages/Splash";
import ForgotPasswordPage from "pages/ForgotPassword";

const VerifyEmail = React.lazy(() => import("pages/VerifyEmail"));
const PaymentDescription = React.lazy(() => import("pages/PaymentDescription"));
const AccountDetails = React.lazy(() => import("pages/AccountDetails"));
const PrivacyandPolicy = React.lazy(() => import("pages/PrivacyandPolicy"));
const TrackTransfer = React.lazy(() => import("pages/TrackTransfer"));
const TermsAndConditions = React.lazy(() => import("pages/TermsAndConditions"));
const Confirmation = React.lazy(() => import("pages/Confirmation"));
const TransferRequest = React.lazy(() => import("pages/TransferRequest"));
const History = React.lazy(() => import("pages/History"));
const SendMoney = React.lazy(() => import("pages/SendMoney"));
const LetsYouIn = React.lazy(() => import("pages/LetsYouIn"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const Home = React.lazy(() => import("pages/Home"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<SplashPage />}>
      <Router>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/letsyouin" element={<LetsYouIn />} />
          <Route path="/sendmoney" element={<SendMoney />} />
          <Route path="/history" element={<History />} />
          <Route path="/transferrequest" element={<TransferRequest />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/tracktransfer" element={<TrackTransfer />} />
          <Route path="/privacyandpolicy" element={<PrivacyandPolicy />} />
          <Route path="/accountdetails" element={<AccountDetails />} />
          <Route path="/paymentdescription" element={<PaymentDescription />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
