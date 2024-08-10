"use client"; // Add this line at the top

import React, { useEffect } from 'react'

type Props = {}

const MultiCard = (props: Props) => {
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
    <div style={{width: "auto",height:'400px'}}>
    
    <ins className="adsbygoogle"
    style={{display:"block"}}
    data-ad-format="autorelaxed"
    data-ad-client="ca-pub-4451029645343586"
    data-ad-slot="6635714312"></ins>
    </div>
  )
}

export default MultiCard