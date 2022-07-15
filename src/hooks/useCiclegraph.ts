import { useRef } from 'react'
import { useMount } from 'react-use'

export const useCiclegraph = () => {
	const ciclegraphRef = useRef<HTMLDivElement | null>(null)

	useMount(() => {
		const ciclegraph = ciclegraphRef.current

		if (ciclegraph === null) return

		const circleElements = ciclegraph.childNodes
		let angle = 360 - 90
		const dangle = 360 / circleElements.length

		for (let i = 0; i < circleElements.length; i++) {
			let circle = circleElements[i]
			angle += dangle
			;(circle as HTMLDivElement).style.transform = `rotate(${angle}deg) translate(${
				ciclegraph.clientWidth / 2
			}px) rotate(-${angle}deg)`
		}
	})

	return { ciclegraphRef }
}
