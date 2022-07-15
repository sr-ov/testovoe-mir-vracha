import * as React from 'react'
import { Circle } from '..'

interface ISymptomsProps {}

const Symptoms: React.FunctionComponent<ISymptomsProps> = (props) => {
	return (
		<div>
			<div className="text-c-sec mb-10">
				<span className="font-bold text-c-prim">
					Сообщает ли один из ваших пациентов о следующих симптомах?
				</span>{' '}
				(нажмите на любую иконку и узнайте больше)
			</div>
			<div className="lg:flex justify-center items-center">
				<Circle />
			</div>
		</div>
	)
}

export default Symptoms
