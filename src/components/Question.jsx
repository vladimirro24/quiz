import React, { useEffect, useState } from 'react';
import { Results } from './Results';

export const Question = ({
	filteredQuestion,
	questionsFiltered,
	indexQuestion,
	setIndexQuestion,
	setActiveQuiz,
}) => {
	const [score, setScore] = useState(0);
	const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
	const [answered, setAnswered] = useState(false);
	const [answersRandom, setAnswersRandom] = useState([]);
	const [activeResults, setActiveResults] = useState(false);

	useEffect(() => {
		const answers = [
			...filteredQuestion.incorrect_answers,
			filteredQuestion.correct_answer,
		];
		setAnswersRandom(answers.sort(() => Math.random() - 0.5));
	}, [filteredQuestion]);

	const checkAnswer = (answerText, index) => {
		if (answerText === filteredQuestion.correct_answer) {
			setScore(score + 1);
		}
		setSelectAnswerIndex(index);
		setAnswered(true);
	};

	const onNextQuestion = () => {
		setIndexQuestion(indexQuestion + 1);
		setSelectAnswerIndex(null);
		setAnswered(false);
	};

	const onReset = () => {
		setScore(0);
		setActiveQuiz(false);
		setIndexQuestion(0);
	};

	return (
		<>
			{activeResults ? (
				<Results
					questionsFiltered={questionsFiltered}
					score={score}
					onReset={onReset}
				/>
			) : (
				<div className='flex flex-col justify-between bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-xl w-full max-w-md h-auto p-8 rounded-3xl'>
					<div className='flex justify-between mb-4'>
						<span className='text-xl font-bold text-white'>
							{/* Número de pregunta actual y Número de preguntas totales */}
							{indexQuestion + 1} / {questionsFiltered.length}
						</span>
						<div className='text-white'>
							<span className='font-semibold'>Dificultad: </span>
							<span className='font-bold'>
								{/* La dificultad de la pregunta */}
								{filteredQuestion.difficulty}
							</span>
						</div>
					</div>

					<button
						className='bg-red-500 text-white px-6 py-2 rounded-full font-bold transition-transform transform hover:scale-105 hover:bg-red-600'
						onClick={onReset}
					>
						Reiniciar
					</button>
					
					<div className='my-6'>
						<h1 className='text-2xl font-semibold text-white mb-4'>
							{filteredQuestion.question}
						</h1>
					</div>

					{/* Las respuestas aquí */}
					<div className='grid grid-cols-2 gap-4'>
						{/* Mapeamos un arreglo de respuesta correcta y respuestas incorrectas */}
						{answersRandom.map((answer, index) => (
							<button
								className={`transition-transform transform border-2 p-4 rounded-lg flex justify-center items-center text-center font-medium text-white ${
									selectAnswerIndex !== null &&
									index === selectAnswerIndex
										? answer === filteredQuestion.correct_answer
											? 'bg-green-500 border-green-700'
											: 'bg-red-500 border-red-700'
										: 'bg-gray-800 border-transparent'
								} hover:border-white hover:scale-105`}
								key={answer}
								onClick={() => checkAnswer(answer, index)}
								disabled={answered && selectAnswerIndex !== index}
							>
								<p className='text-lg'>{answer}</p>
							</button>
						))}
					</div>

					{/* Condicional para mostrar el botón de siguiente pregunta o el de finalizar */}
					<div className='mt-6'>
						{indexQuestion + 1 === questionsFiltered.length ? (
							<button
								className='bg-yellow-500 text-black px-6 py-2 rounded-full font-medium transition-transform transform hover:scale-105 hover:bg-yellow-600'
								onClick={() => {
									setAnswered(false);
									setActiveResults(true);
								}}
							>
								Finalizar
							</button>
						) : (
							<button
								className='bg-yellow-500 text-black px-6 py-2 rounded-full font-medium transition-transform transform hover:scale-105 hover:bg-yellow-600'
								onClick={onNextQuestion}
							>
								Siguiente Pregunta
							</button>
						)}
					</div>
				</div>
			)}
		</>
	);
};
