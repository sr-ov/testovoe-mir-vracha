import * as React from 'react'
import cn from 'classnames'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import Link from 'next/link'
import { DivProps } from 'react-html-props'
import plusIcon from '../../images/icons/plus.svg'
import styles from './CircleItem.module.css'

export type TextPosition = 'top' | 'bottom' | 'left' | 'right'

interface ICircleItemProps extends DivProps {
	textPosition: TextPosition
	text: string
	imgSrc: StaticImageData
}

const CircleItem: React.FunctionComponent<ICircleItemProps> = ({
	textPosition,
	imgSrc,
	text,
}) => {
	return (
		<Link href="#">
			<a className={styles.circle}>
				<div className="flex items-center ml-3 lg:ml-0">
					<div className="relative mr-3 lg:mr-0 shrink-0 basis-20 h-20 lg:basis-auto lg:h-auto rounded-full">
						<div className="absolute -top-5 -left-9 z-10">
							<Image
								src={plusIcon}
								alt="картинка"
								aria-hidden="true"
								width={90}
								height={90}
							/>
						</div>
						<Image src={imgSrc} alt="картинка" height={106} width={111} />
					</div>
					<div className={cn(styles.text, styles[textPosition])}>{text}</div>
				</div>
			</a>
		</Link>
	)
}

export default CircleItem
