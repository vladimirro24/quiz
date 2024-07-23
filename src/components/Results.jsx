import React from 'react';
import { Link } from 'react-router-dom';

export const Results = ({ score, questionsFiltered, onReset }) => {
	const percentage = ((score / questionsFiltered.length) * 100).toFixed(0);
	
	let message;
	if (percentage === '100') {
		message = '¡Eres un maestro absoluto!';
	} else if (percentage >= 80) {
		message = '¡Impresionante, casi perfecto!';
	} else if (percentage >= 60) {
		message = '¡Muy bien, has dominado la mayoría!';
	} else if (percentage >= 40) {
		message = '¡Buen trabajo, sigue practicando!';
	} else {
		message = '¡No te preocupes, cada error es una oportunidad para aprender!';
	}

	return (
		<div className='flex flex-col justify-evenly items-center bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white shadow-2xl rounded-3xl w-full max-w-lg h-auto p-8'>
			<h1 className='text-5xl font-extrabold mb-4 text-center animate-pulse'>
				{message}
			</h1>

			<div className='flex flex-col gap-4 text-center'>
				<span className='text-2xl font-semibold'>¡Acertaste!</span>
				<span className='font-black text-8xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent animate-bounce'>
					{percentage}%
				</span>
				<span className='text-xl'>
					De las preguntas ({score} de {questionsFiltered.length})
				</span>
			</div>

			<div className='flex gap-4 mt-6'>
				<button
					className='bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold transition-transform transform hover:scale-105 hover:bg-yellow-600 shadow-lg'
					onClick={onReset}
				>
					Vamos de nuevo
				</button>

				<Link to='/'>
					<button className='bg-blue-500 text-white px-6 py-3 rounded-lg font-bold transition-transform transform hover:scale-105 hover:bg-blue-600 shadow-lg'>
						Volver al Inicio
					</button>
				</Link>
			</div>
		</div>
	);
};
