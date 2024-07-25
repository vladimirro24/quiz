import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Question } from '../components/Question';
import { questions, imgs } from '../data';

// Función para barajar las preguntas de cada categoría y también reducirla al número de 5
const shuffleArray = array => {
	const newArray = array.sort(() => Math.random() - 0.5);
	return newArray.slice(0, 5);
};

export const CategoryPage = () => {
	// Leer El parametro de la URL
	const { category } = useParams();

	const [imgCategory] = imgs.filter(
		img => img === `/src/assets/${category.toLowerCase()}.png`
	);

	const [questionsFiltered, setQuestionsFiltered] = useState(
		questions.filter(question => question.category === category)
	);
	const [indexQuestion, setIndexQuestion] = useState(0);
	const [activeQuiz, setActiveQuiz] = useState(false);

	useEffect(() => {
		const newQuestions = shuffleArray(questionsFiltered);
		setQuestionsFiltered(newQuestions);
	}, []);

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-green-200 p-10'>
			{activeQuiz ? (
				<Question
					filteredQuestion={questionsFiltered[indexQuestion]}
					setIndexQuestion={setIndexQuestion}
					indexQuestion={indexQuestion}
					questionsFiltered={questionsFiltered}
					setActiveQuiz={setActiveQuiz}
				/>
			) : (
				<>
					<div className='flex flex-col items-center gap-5 bg-white shadow-lg m-10 rounded-lg p-6 transform transition-transform duration-500 hover:scale-105'>
						<h1 className='text-4xl text-teal-800 font-extrabold text-center'>
							{category}
						</h1>
					</div>

					<button
						className='mt-6 px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-md transition-transform duration-300 hover:bg-teal-700 hover:shadow-lg'
						onClick={() => setActiveQuiz(true)}
					>
						Iniciar Quiz
					</button>
				</>
			)}
		</div>
	);
};
