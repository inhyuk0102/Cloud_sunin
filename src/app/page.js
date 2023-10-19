
'use client'
import React from 'react'
import Lottie from 'react-lottie-player'
import Link from "next/link"
import loadingLottie from "/Users/inhyuk-ryu/cloud/developer.json"
export default function Home() {
  return(
    <div>
      <h1 className="title"  style={{fontSize: '50px'}}> 
        선인고등학교 클라우드 동아리
      </h1>

      <p>
      <Lottie 
      loop
      animationData={loadingLottie}
      play
      style={{ width: 1000, height: 500 }}
    />
      </p>

      </div> 
  )

}
