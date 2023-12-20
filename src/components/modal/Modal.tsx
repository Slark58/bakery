import React, { Dispatch, SetStateAction } from 'react'
import newyear from '@/assets/newyaer.jpg';
import './Modal.scss'
import { X } from 'lucide';

interface IModalProps {
    title: string, 
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}

const Modal = ({title, active, setActive}: IModalProps) => {
  return (
    <div className={active ? 'modal modal__acrive' : 'modal modal__none'}>
        <div className="modal__wrapper">
            <div className="modal__img">
                <img src={newyear} alt="newyear" />
            </div>
            <div className="modal__title">
                Вы добавили {title} в карзину :э
            </div>
        <button className="modal__btn" onClick={() => setActive(false)}>
            Закрыть
        </button>
        </div>
    </div>
  )
}

export {Modal}