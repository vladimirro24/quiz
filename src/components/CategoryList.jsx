import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

const [
	imgCiencia,
	imgDeportes,
	imgFilosofia,
	imgGeografia,
	imgHistoria,
	imgLiteratura,
	imgTecnologia,
] = imgs;

export const CategoryList = () => {
	return (
		<div className='flex flex-col sm:flex-row flex-wrap justify-center gap-4 m-10'>
			{/* Category Link Ciencia */}
			<CategoryCard
				category={categories.ciencia}
				src={imgCiencia}
				alt={`Categoría ${categories.ciencia}`}
				gradientColor='from-purple-600 to-indigo-700'
			/>
			{/* Category Link Deportes */}
			<CategoryCard
				category={categories.deportes}
				src={imgDeportes}
				alt={`Categoría ${categories.deportes}`}
				gradientColor='from-blue-700 to-blue-400'
			/>
			{/* Category Link Filosofia */}
			<CategoryCard
				category={categories.filosofia}
				src={imgFilosofia}
				alt={`Categoría ${categories.filosofia}`}
				gradientColor='from-red-600 to-gray-600'
			/>
			{/* Category Link Geografia */}
			<CategoryCard
				category={categories.geografia}
				src={imgGeografia}
				alt={`Categoría ${categories.geografia}`}
				gradientColor='from-teal-400 to-lime-300'
			/>
			{/* Category Link Historia */}
			<CategoryCard
				category={categories.historia}
				src={imgHistoria}
				alt={`Categoría ${categories.historia}`}
				gradientColor='from-sky-500 to-indigo-800'
			/>
			{/* Category Link Literatura */}
			<CategoryCard
				category={categories.literatura}
				src={imgLiteratura}
				alt={`Categoría ${categories.literatura}`}
				gradientColor='from-amber-500 to-emerald-700'
			/>
			{/* Category Link Tecnologia */}
			<CategoryCard
				category={categories.tecnologia}
				src={imgTecnologia}
				alt={`Categoría ${categories.tecnologia}`}
				gradientColor='from-violet-800 to-rose-600'
			/>
		</div>
	);
};
