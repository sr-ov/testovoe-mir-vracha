import * as React from 'react'
import cn from 'classnames'
import styles from './Circle.module.css'
import { CircleItem } from '..'
import { useCiclegraph } from '../../hooks/useCiclegraph'
import { dataCircles } from '../../constants'

interface ICircleProps {}

const Circle: React.FunctionComponent<ICircleProps> = () => {
	const { ciclegraphRef } = useCiclegraph()

	return (
		<div className="relative text-center">
			<div className="inline-block mb-4 lg:mb-0 lg:absolute top-2/4 left-2/4 lg:-translate-x-2/4 lg:-translate-y-2/4 z-10 w-[260px] h-[260px] rounded-full bg-orange-200 overflow-hidden">
				<div className={cn(styles.bgImg, 'relative w-full h-full')}>
					<div className="absolute bottom-8 left-2/4 -translate-x-2/4 z-30 font-bold text-c-sec text-2xl">
						Взрослый
					</div>
				</div>
			</div>

			<div
				className={cn(styles.ciclegraph, 'grid md:grid-cols-2 gap-4 lg:block')}
				ref={ciclegraphRef}
			>
				{dataCircles.map(({ text, imgSrc, textPosition }) => {
					return (
						<CircleItem
							key={text}
							text={text}
							imgSrc={imgSrc}
							textPosition={textPosition}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Circle
