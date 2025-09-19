import { use, useEffect, useState } from "react";

function TabContent({tabState}){
  // fade 값으로 css 를 지정하도록 함
  let [fade, setFade] = useState('')


  // useEffect 로 timer 를 실행
  // 0.2초 후에 fade = ani_end 로 변경
  useEffect(()=>{
    let timer = setTimeout(()=>{
      setFade('ani_end')
    }, 100)
    return(()=>{
      clearTimeout(timer)
      setFade('')
    })
  }, [tabState])

  return(
    <div className={`ani_start ${fade}`}>
    {[
      <div>내용 1</div>,
      <div>내용 2</div>,
      <div>내용 3</div>,
    ][tabState]}
    </div>
  )
}
export default TabContent;