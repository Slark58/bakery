import React, { ChangeEvent, MouseEvent, MouseEventHandler, useState } from 'react'
import { flushSync } from 'react-dom';
import './MainPage.scss'
import { List } from '@/components/List/List';
import { data } from '@/components/data';
import { Modal } from '@/components/modal/Modal';
import Lights from '@/components/lights/Lights';

const MainPage = () => {

    const [selectedOption, setSelectedOption] = useState(data[0].id);
    const [isThumbnail, setIsThumbnail] = useState(true);
    const [title, setTitle] = useState('');
    const [active, setActive] = useState(false);

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
      };

      const handleMove = (title: string) => {
        setTitle(title)
        setActive(true)
        document.startViewTransition(() => {
          flushSync(() => {
            setIsThumbnail((prev) => !prev);
          });
        });
      };
      const selectedData = data.find((item) => item.id === selectedOption);

  return (
    <div className='mainPage'>
        <Modal setActive={setActive} title={title} active={active}/>
        <Lights/>
            <div className="content">
                    <div className="title">Выбирите фильтер</div>
                    <div className="select-container">
                        <select className='select' value={selectedOption} onChange={handleSelectChange}>
                                <option value="Обычные">Обычные</option>
                                <option value="Сладкое">Сладкое</option>
                                <option value="Солёное">Солёное</option>
                        </select>
                     
                    </div>
                    <div className="list">
                    <List
                        data={selectedData!.content}
                        mapperData={(item) => (
                            <div className="card">
                                <div className="card__img">
                                    <img src={item.img}/>
                                </div>
                                <div className="card__title">{item.title}</div>
                                <div className="card__price">Цена: {item.price}</div>
                                <button className='card__btn' onClick={() => handleMove(item.title)}>Купить</button>
                            </div>  
                        )}
                    />
                    </div>
                    
            </div>
    </div>
  )
}

export default MainPage