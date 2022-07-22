import React, { useState } from 'react'
import ControlledInput from '../../components/ControlledInput'
import FormButton from '../../components/FormButton'
import FormHeader from '../../components/FormHeader'
import Modal from '../../components/Modal'
import { apiPOST } from '../../services/api'
import { CHANNELS } from '../../services/constant'
import { validateChannel } from '../../utils/validators'

function ModalAddChannel({ isOpen, onClose }) {
  const [channel, setChannel] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (validateChannel(channel).result) {
      const data = {
        name: channel,
        user_ids: [localStorage.getItem('id')],
      }

      const onSuccess = response => {
        if (response.data?.errors === undefined) {
          onClose()
          setChannel('')
        } else {
          setError('has already been taken')
        }
      }

      const onError = error => {
        console.log('ChannelAddError', error)
      }

      apiPOST(CHANNELS, data, onSuccess, onError)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <FormHeader
          title='Channel'
          subtitle='Manage a place where you and your friends hangout'
        />
        <div className='mt-1'>
          <ControlledInput
            label='Name'
            value={channel}
            onValueChange={setChannel}
            validate={() => validateChannel(channel, error)}
          />
        </div>
        <FormButton text='Create' />
      </form>
    </Modal>
  )
}

export default ModalAddChannel
