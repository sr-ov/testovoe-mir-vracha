import * as React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { DivProps } from 'react-html-props'
import cn from 'classnames'
import styles from './Col.module.css'

interface IColProps extends DivProps {
	imgSrc: StaticImageData
	colTitle: string
}

const Col: React.FunctionComponent<IColProps> = ({ colTitle, imgSrc, children }) => {
	return (
		<div>
			<div className="flex items-center flex-col mb-6">
				<div className="text-center mb-6 text-c-sec font-bold">{colTitle}</div>
				<div className={cn(styles.img, 'max-h-[300px] max-w-[300px]')}>
					<Image src={imgSrc} alt="человек" height={300} width={300} />
				</div>
			</div>

			<div className="space-y-4 text-c-prim">
				{React.Children.map(children, (child, i) => {
					return React.cloneElement(child as React.ReactElement, {
						key: i,
						className: styles.text,
					})
				})}
			</div>
		</div>
	)
}

export default Col
