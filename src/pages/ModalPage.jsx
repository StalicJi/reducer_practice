import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>
        

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nam quasi ipsum voluptate delectus, aspernatur ut expedita quisquam. Error deserunt ratione commodi quaerat dolores magni possimus, impedit laboriosam! Perspiciatis, commodi!
        </p>
    </Modal>;

  return (
    <div>
        <Button primary onClick={handleClick}>Open Modal</Button>
        {showModal && modal}
       
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nam quasi ipsum voluptate delectus, aspernatur ut expedita quisquam. Error deserunt ratione commodi quaerat dolores magni possimus, impedit laboriosam! Perspiciatis, commodi!
        </p>
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nam quasi ipsum voluptate delectus, aspernatur ut expedita quisquam. Error deserunt ratione commodi quaerat dolores magni possimus, impedit laboriosam! Perspiciatis, commodi!
        </p>
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nam quasi ipsum voluptate delectus, aspernatur ut expedita quisquam. Error deserunt ratione commodi quaerat dolores magni possimus, impedit laboriosam! Perspiciatis, commodi!
        </p>
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nam quasi ipsum voluptate delectus, aspernatur ut expedita quisquam. Error deserunt ratione commodi quaerat dolores magni possimus, impedit laboriosam! Perspiciatis, commodi!
        </p>
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nam quasi ipsum voluptate delectus, aspernatur ut expedita quisquam. Error deserunt ratione commodi quaerat dolores magni possimus, impedit laboriosam! Perspiciatis, commodi!
        </p> <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nam quasi ipsum voluptate delectus, aspernatur ut expedita quisquam. Error deserunt ratione commodi quaerat dolores magni possimus, impedit laboriosam! Perspiciatis, commodi!
        </p>
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nam quasi ipsum voluptate delectus, aspernatur ut expedita quisquam. Error deserunt ratione commodi quaerat dolores magni possimus, impedit laboriosam! Perspiciatis, commodi!
        </p>
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nam quasi ipsum voluptate delectus, aspernatur ut expedita quisquam. Error deserunt ratione commodi quaerat dolores magni possimus, impedit laboriosam! Perspiciatis, commodi!
        </p>
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nam quasi ipsum voluptate delectus, aspernatur ut expedita quisquam. Error deserunt ratione commodi quaerat dolores magni possimus, impedit laboriosam! Perspiciatis, commodi!
        </p>
        
    </div>
  )
}

export default ModalPage
