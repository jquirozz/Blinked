import { useRef } from 'react'
import { useDraggable } from 'react-use-draggable-scroll'

import './DragLine.scss'

function DragLine ({ children }) {
  const ref = useRef()
  const { events } = useDraggable(ref)

  return (
    <div className='DragLine' ref={ref} {...events}>
      {children}
    </div>
  )
}

export default DragLine
