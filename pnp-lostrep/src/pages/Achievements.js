import React from 'react'

import Header from '../components/Header'
import AchieveLists from './AchieveLists'
import Yearslist from './Yearslist.json'

const Achievements = () => {
  const FocusOn = (event) => {
    let yid = event.target.value
    console.log(document.getElementById(yid))
    document.getElementById(yid).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    })
  }

  let ye = Object.keys(Yearslist).sort().reverse()
  return (
    <div>
      <Header />
      <div class="mt-24">
        <div className="flex flex-col text-center w-full">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Achievements Page
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            활동성과
          </h1>
        </div>
      </div>

      <br></br>
      <select
        class="fixed grid grid-cols-10 gap-1 m-10 place-items-center"
        onChange={FocusOn}
      >
        <option selected disabled>
          년도 선택
        </option>

        {ye.map((year, index) => (
          <option>{year}</option>
        ))}
      </select>

      <br></br>
      <AchieveLists />

      {/* 활동 성과 나열 태그 */}
    </div>
  )
}

export default Achievements
