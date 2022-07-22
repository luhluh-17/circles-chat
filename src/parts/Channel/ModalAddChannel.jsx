import React from 'react'
import FormButton from '../../components/FormButton'
import FormHeader from '../../components/FormHeader'
import Modal from '../../components/Modal'
import UncontrolledInput from '../../components/UncontrolledInput'

function ModalAddChannel({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form>
        <FormHeader
          title='Channel'
          subtitle='Manage a place where you and your friends hangout'
        />
        <div className='mt-1'>
          <UncontrolledInput label='Name' type={'text'} />
        </div>
        <FormButton text='Create' />
      </form>
    </Modal>
  )
}

export default ModalAddChannel
