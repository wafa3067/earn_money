"use client"; // Add this line at the top

import React, { useEffect } from 'react'

type Props = {}

const CardAds = (props: Props) => {
    useEffect(() => {
        try {
          if (window.adsbygoogle && window.adsbygoogle.length > 0) {
            // Push a new ad
            window.adsbygoogle.push({});
          }
        } catch (error) {
          console.log("error occuered",error)
        }
        // Check if the adsbygoogle object is available
        
      }, []);
    
  return (
    <div style={{width: "auto",height:'200px'}}>
 
    <ins className="adsbygoogle"
    style={{display:"block", textAlign:"center"}}
    data-ad-layout="in-article"
    data-ad-format="fluid"
    data-ad-client="ca-pub-4451029645343586"
    data-ad-slot="8347782044"></ins>
           
           </div>
  )
}

export default CardAds