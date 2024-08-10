import React from "react";
import HorizontalAds from "../google_ads/horizontal_ads";
import CardAds from "../google_ads/card_ads";
import MultiCard from "../google_ads/multi_card";

type Props = {
  head:String,
  part1: String,
  part2: String,
  part3: String,
  part4: String,
  part5: String,
  part6: String,
  part7: String,
  part8: String,
  part9: String,
  part10: String,
};
const SurvayPage= ({head,part1,part2,part3,part4,part5,part6,part7,part8,part9,part10}:Props) => {
  return (
  <div>
<nav className="flex items-center justify-between flex-wrap bg-teal p-6 bg-slate-300 ">
  <div className="flex items-center flex-no-shrink text-black mr-6">
    <span className="font-semibold text-xl tracking-tight">Earn Money</span>
  </div>
  
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        Home
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        Contact
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
        About
      </a>
    </div>
    <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">login</a>
    </div>
  </div>
</nav>


      <div style={{backgroundColor:"white"}}>
        <h1>{head}</h1>
        <HorizontalAds />
        <p>
          {part1}
        </p>
        <CardAds />
        <p>
          {part2}
        </p>
        <HorizontalAds />
        <p>
          {part3}
        </p>
        <CardAds />
        <p>
          {part4}
        </p>
        <MultiCard />
        <p>
          {part5}
        </p>
        <HorizontalAds />
        <p>
          {part6}
        </p>
         <MultiCard /> 
        <p>
          {part7}
        </p>
        <CardAds />
        <p>
          {part8}
        </p>
        <HorizontalAds />
        <p>
          {part9}
        </p>
        <MultiCard />
        <p>
          {part10}
        </p>
        <HorizontalAds />
      </div>
    </div>
  
  );
}

export default SurvayPage;
