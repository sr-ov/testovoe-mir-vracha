import type { NextPage } from 'next'
import cn from 'classnames'
import styles from '../styles/Home.module.css'
import { Symptoms, Cols } from '../components'

const Home: NextPage = () => {
	return (
		<div className={cn(styles.container, 'min-h-screen')}>
			<main className={cn(styles.main, 'px-4 md:px-8 pt-2 md:pt-8 pb-6 lg:pb-28')}>
				<h1 className="font-black text-center mb-2 text-c-prim text-3xl sm:text-4xl md:text-[40px]">
					А вдруг СМА?
				</h1>
				<h2 className="font-bold text-center mb-4 md:mb-9 text-c-prim text-xl sm:text-2xl md:text-4xl">
					Выберите, кто Ваш пациент:
				</h2>

				<Cols />
				<Symptoms />
			</main>
		</div>
	)
}

export default Home
