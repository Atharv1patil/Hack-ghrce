import React from 'react'
import Hyperspeed from './Hyperspeed'

function Hero() {
  return (
    <Hyperspeed
  effectOptions={{"distortion":"xyDistortion","length":400,"roadWidth":9,"islandWidth":2,"lanesPerRoad":3,"fov":90,"fovSpeedUp":150,"speedUp":3,"carLightsFade":0.4,"totalSideLightSticks":50,"lightPairsPerRoadWay":30,"shoulderLinesWidthPercentage":0.05,"brokenLinesWidthPercentage":0.1,"brokenLinesLengthPercentage":0.5,"lightStickWidth":[0.02,0.05],"lightStickHeight":[0.3,0.7],"movingAwaySpeed":[20,50],"movingCloserSpeed":[-150,-230],"carLightsLength":[20,80],"carLightsRadius":[0.03,0.08],"carWidthPercentage":[0.1,0.5],"carShiftX":[-0.5,0.5],"carFloorSeparation":[0,0.1],"colors":{"roadColor":526344,"islandColor":657930,"background":0,"shoulderLines":1250072,"brokenLines":1250072,"leftCars":[8195355,11076889,16715818],"rightCars":[15855310,15131313,14670218],"sticks":15855310}}}
/>
  )
}

export default Hero