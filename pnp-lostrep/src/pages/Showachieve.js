import React from 'react'
import Yearslist from './Yearslist.json'
import ReAchieve from './ReAchieve'
import ParticlesBg from 'particles-bg'

const Showachieve = (props) => {
  let y = props['year'] // 년도
  let idx = props['index'] // 인덱스 값

  let templi = Yearslist[y] //  년도 : 해당 년도 활동 목록
  let tlen = [] //  해당 년도의 활동과 해당 활동의 갯수가 들어가는 array
  let i
  // 년도의 활동 개수
  for (i = 0; i < templi.length; i++) {
    tlen.push([templi, i])
  }

  return (
    <>
      <div id={y}>
        <h1 class="z-20 flex items-center w-20 h-8 rounded-full font-semibold text-lg text-white mx-auto bg-black text-top justify-center">
          {y}
        </h1>
      </div>
      {tlen.map((one, index) => (
        <div>
          <ReAchieve ind={one} ix={idx} y={y}></ReAchieve>
        </div>
      ))}
      <ParticlesBg type="cobweb" bg={true} />
    </>
  )
}

export default Showachieve
