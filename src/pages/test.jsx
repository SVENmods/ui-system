import Selecto from 'react-selecto'
import { useRef } from 'react'

const TestComp = () => {
	const cubes = []
	for (let i = 0; i < 60; ++i) {
		cubes.push(i)
	}

	const selectoRef = useRef(null)

	return (
		<>
			<div>
				<Selecto
					ref={selectoRef}
					dragContainer={'.elements'}
					selectableTargets={['.selecto-area .cube']}
					hitRate={50}
					selectFromInside={true}
					ratio={0}
					onSelect={(e) => {
						e.added.forEach((el) => {
							el.classList.add('selected')
						})
						e.removed.forEach((el) => {
							el.classList.remove('selected')
						})
					}}
				/>

				<div
					className='flex flex-wrap gap-1 p-2 border rounded-xl elements selecto-area'
					id='selecto1'
				>
					{cubes.map((i) => (
						<div
							className='bg-base-300 [&.selected]:bg-blue-400 border w-10 h-10 transition-colors duration-100 cube'
							key={i}
						></div>
					))}
				</div>
				<div className='empty elements'></div>
			</div>
		</>
	)
}

export default TestComp
