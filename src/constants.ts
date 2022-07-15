import type { StaticImageData } from 'next/image'
import img1 from './images/circle/1.png'
import img2 from './images/circle/2.png'
import img3 from './images/circle/3.png'
import img4 from './images/circle/4.png'
import img5 from './images/circle/5.png'
import img6 from './images/circle/6.png'
import img7 from './images/circle/7.png'
import img8 from './images/circle/8.png'
import type { TextPosition } from './components/CircleItem/CircleItem'

export const dataCircles: {
	text: string
	imgSrc: StaticImageData
	textPosition: TextPosition
}[] = [
	{
		text: 'Сколиоз',
		imgSrc: img1,
		textPosition: 'right',
	},
	{
		text: 'Ограниченная способность поднимать руки и переносить предметы',
		imgSrc: img2,
		textPosition: 'right',
	},
	{
		text: 'Нарушения жевания и глотания',
		imgSrc: img3,
		textPosition: 'right',
	},
	{
		text: 'Дыхательная недостаточность/ респираторная дисфункция',
		imgSrc: img4,
		textPosition: 'bottom',
	},
	{
		text: 'Неспособность бегать, изменение походки',
		imgSrc: img5,
		textPosition: 'left',
	},
	{
		text: 'Контрактура суставов',
		imgSrc: img6,
		textPosition: 'left',
	},
	{
		text: 'Вывих бедра',
		imgSrc: img7,
		textPosition: 'left',
	},
	{
		text: 'Утомляемость',
		imgSrc: img8,
		textPosition: 'top',
	},
]
