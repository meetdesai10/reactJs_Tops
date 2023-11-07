import React, { useState } from 'react'

export default function MyAccordian({question,answer}) {
  let [showans, setshowans] = useState(false);
  return (
    <>
       <div className="accordion">
              <div className="que">
                <p className="icon"
                 
                  onClick={() => setshowans(!showans)}
                >
                  {showans ? "➖" : "➕"}
                </p>
                {question}
              </div>
              <div className='ans' style={{height:showans ? "100px":"0px"}}>{answer}</div>
            </div>
    </>
  )
}
