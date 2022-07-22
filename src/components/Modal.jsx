import React, { useEffect, useRef } from 'react'
import Icon from './Icon'

function Modal({ children, isOpen, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialogNode = dialogRef.current
    if (isOpen) {
      dialogNode.showModal()
    } else {
      dialogNode.close()
    }
  }, [isOpen])

  useEffect(() => {
    const dialogNode = dialogRef.current
    const handleCancel = event => {
      event.preventDefault()
      onClose()
    }
    dialogNode.addEventListener('cancel', handleCancel)
    return () => {
      dialogNode.removeEventListener('cancel', handleCancel)
    }
  }, [onClose])

  return (
    <dialog className='dialog' ref={dialogRef}>
      <div className='modal'>
        <div className='modal-close-container'>
          <div></div>
          <div className='btn-x' onClick={onClose}>
            <Icon icon='close' />
          </div>
        </div>
        {children}
      </div>
    </dialog>
  )
}

export default Modal
