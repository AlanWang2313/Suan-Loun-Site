import { useState } from "react"

function Categories(){
    function toggleArrow(){
        if (arrowUp){
            setArrowDown(true)
            setArrowUp(false)
        }else{
            setArrowDown(false)
            setArrowUp(true)
        }
    }
    const [arrowDown, setArrowDown] = useState(false)
    const [arrowUp, setArrowUp] = useState(true)
    return(
    <div className='categories-options'>
        <h3 className='text' onClick={toggleArrow}>Categorias 
          <span className='bi bi-chevron-up' hidden={arrowUp}></span>
          <span className='bi bi-chevron-down' hidden={arrowDown}></span></h3>
      </div>
    )
}

export default Categories