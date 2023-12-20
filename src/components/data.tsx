import blackbread from '@/assets/blackbread.jpg';
import cookie from '@/assets/cookie.jpg';
import keks from '@/assets/keks.jpg';
import kruassan from '@/assets/kruassan.jpg';
import kukuruzabrade from '@/assets/kukuruzabrade.jpg';
import pizza from '@/assets/pizza.jpg';
import ponchiki from '@/assets/ponchiki.jpg';
import rjanoybread from '@/assets/rjanoybread.jpg';
import solomka from '@/assets/solomka.jpg';
import sushki from '@/assets/sushki.jpg';
import whitebread from '@/assets/whitebread.jpg';
import { ReactNode } from 'react';

interface IData {
    img: string,
    title: string,
    price: string,
}

interface IFilter {
    id: string
    content: IData[]
}

export const data: IFilter[] = [
    {
        id: 'Обычные',
        content: [
            {
                img: blackbread, 
                title: 'Черный хлеб',
                price: '100р',
            },
            {
                img: whitebread, 
                title: 'Белый хлеб',
                price: '200р',
            },
            {
                img: rjanoybread, 
                title: 'Ржанной хлеб',
                price: '300р',
            },
            {
                img: kukuruzabrade, 
                title: 'Кукурузный хлеб',
                price: '400р',
            },
        ]
    },
    {
        id: 'Сладкое',
        content: [
            {
                img: cookie, 
                title: 'Печенье',
                price: '100р',
            },
            {
                img: keks, 
                title: 'Кексы',
                price: '250р',
            },
            {
                img: kruassan, 
                title: 'Круассан',
                price: '330р',
            },
            {
                img: ponchiki, 
                title: 'Пончики',
                price: 'от 1000р',
            },
        ]
    },
    {
        id: 'Солёное',
        content: [
            {
                img: pizza, 
                title: 'Пицца',
                price: 'от 1250р',
            },
            {
                img: solomka, 
                title: 'Соломка',
                price: '60р',
            },
            {
                img: sushki, 
                title: 'Сушки',
                price: '90р',
            },
        ]
    },
]
