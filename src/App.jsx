import { useState } from "react";
import Navbar from "./components/nav";
import "./App.css";
import Review from "./components/review";
import Advantages from "./components/advantages";
import Info from "./components/info";
import Evaluation from "./components/evaluation";
import BreifInfo from "./components/breifInfo";
import ProsCos from "./components/prosCos";
import Quotes from "./components/quotes";
import Summary from "./components/summary";
import ParameterEvaluation from "./components/parameterEvaluation";
import UserReviews from "./components/userReviews";
import Regulation from "./components/regulation";
import Commission from "./components/commission";
import DepositAndWithdrawal from "./components/depositAndWithdrawal";
import SupportedCoinsAndMarket from "./components/supportedCoinsAndMarket";
import Contacts from "./components/contacts";
import Article from "./components/article";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[100px]">
        <Review />
        <Advantages />
        <Info />
        <Evaluation />
        <BreifInfo />
        <ProsCos />
        <Quotes />
        <Summary />
        <ParameterEvaluation />
        <UserReviews />
        <Regulation />
        <Commission />
        <DepositAndWithdrawal />
        <SupportedCoinsAndMarket />
        <Contacts />
        <Article />
        <Footer />
      </div>
    </>
  );
}

export default App;
