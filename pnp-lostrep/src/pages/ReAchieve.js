const ReAchieve = (props) => {
  const color_list = ['indigo-50', 'indigo-100', 'indigo-200'] // 년도별 색상 변경을 위한 배열
  let ind = Object.values(props)
  let idx = ind[0][1]
  let iv = ind[0][0]
  let ix = props['ix']
  let y = props['y']
  let pos
  let co = color_list[1]
  let tix

  // 년도별 색상 변경
  // if (ix < 5) {
  //   co = color_list[0]
  //   tix = ix
  // } else if (ix < 10) {
  //   co = color_list[1]
  //   if (ix % 5 === 0) tix = 0
  //   else if (ix % 10 > 5) tix = (ix % 10) - 5
  //   else tix = ix % 10
  // } else {
  //   co = color_list[2]
  //   if (ix % 5 === 0) tix = 0
  //   else if (ix % 10 > 5) tix = (ix % 10) - 5
  //   else tix = ix % 10
  // }
  // co +
  //         '-' +
  //         (300 - (ix % 3) * 100)
  if (ix % 2 === 0) {
    pos = [
      'mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline',
      'text-center order-1 rounded-lg shadow-xl w-5/12 px-6 py-4' +
        ' bg-' +
        color_list[ix % 3],
    ]
  } else {
    pos = [
      'mb-8 flex justify-between items-center w-full right-timeline',
      'text-center order-1 rounded-lg shadow-xl w-5/12 px-6 py-4' +
        ' bg-' +
        color_list[ix % 3],
    ]
  }

  return (
    <div class={pos[0]}>
      <div class="order-1 w-5/12"></div>
      {/* <div
        id={y}
        class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-20 h-8 rounded-full"
      >
        <h1 class="mx-auto font-semibold text-lg text-white">{y}</h1>
      </div> */}
      <div class={pos[1]}>
        <h3 class="mb-2 font-bold text-black text-xl">{iv[idx]['title']}</h3>
        <p class="text-sm leading-snug tracking-wide text-black text-opacity-100 whitespace-pre-line"></p>
        <h4>{iv[idx]['content']}</h4>
        <p>{iv[idx]['name']}</p>
      </div>
    </div>
  )
}
export default ReAchieve
