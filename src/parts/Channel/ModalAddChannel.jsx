import axios from 'axios'
import React, { useState } from 'react'
import ControlledInput from '../../components/ControlledInput'
import FormButton from '../../components/FormButton'
import FormHeader from '../../components/FormHeader'
import Modal from '../../components/Modal'
import { apiPOST, getHeaders } from '../../services/api'
import { BASE_URL, CHANNELS } from '../../services/constant'
import { getUsersFromLocal } from '../../utils/helper'
import { validateChannel } from '../../utils/validators'

function ModalAddChannel({ isOpen, onClose, onSuccessCallback }) {
  const [channel, setChannel] = useState('')
  const [error, setError] = useState('')
  const [members, setMembers] = useState([])
  const [checkedState, setCheckedState] = useState(
    new Array(getUsersFromLocal().length).fill(false)
  )

  const API = axios.create({
    baseURL: BASE_URL,
    headers: getHeaders(),
  })

  const handleSubmit = e => {
    e.preventDefault()

    if (validateChannel(channel).result) {
      const data = {
        name: channel,
        user_ids: [...members, localStorage.getItem('id')],
      }

      const onSuccess = response => {
        if (response.data?.errors === undefined) {
          onSuccessCallback()
          setChannel('')
          onClose()
        } else {
          setError('has already been taken')
        }
      }

      const onError = error => {
        console.log('ChannelAddError', error)
      }

      apiPOST(API, CHANNELS, data, onSuccess, onError)
    }
  }

  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )

    setCheckedState(updatedCheckedState)

    updatedCheckedState.forEach((item, index) => {
      if (item === true) {
        setMembers(state => {
          return [...state, getUsersFromLocal()[index].id]
        })
      }
    })
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
        <ul className='modal-users'>
          {getUsersFromLocal().map((user, index) => {
            return (
              <li key={index}>
                <input
                  type='checkbox'
                  id={`custom-checkbox-${index}`}
                  name={user.name}
                  value={user.id}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
                <label htmlFor={`custom-checkbox-${index}`}>{user.name}</label>
              </li>
            )
          })}
        </ul>
        <FormButton text='Create' />
      </form>
    </Modal>
  )
}

export default ModalAddChannel
