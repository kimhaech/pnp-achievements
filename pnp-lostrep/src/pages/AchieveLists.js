import React from 'react'
import Showachieve from './Showachieve'
import Yearslist from './Yearslist.json'

const AchieveLists = () => {
  // 년도값
  const y_li = Object.keys(Yearslist).sort().reverse()

  let i

  const i_list = {} // Yearslist의 키값에 해당하는 values
  const i_len = [] // 년도의 값들의 길이

  // list에 년도별 값 추가
  for (i = 0; i < y_li.length; i++) {
    let t = y_li[i]
    let t2 = Yearslist[t]
    i_list[t] = t2
    i_len.push(i_list[t].length)
  }

  // 태그 return
  return (
    <div class="container bg-white-200 mx-auto w-full h-full">
      <div class="relative wrap overflow-hidden p-10 h-full">
        <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
        {y_li.map((year, index) => (
          <div id="{year}">
            <Showachieve year={year} index={index}></Showachieve>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AchieveLists
