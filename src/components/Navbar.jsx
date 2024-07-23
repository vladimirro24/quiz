import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<header className='bg-gray-900 py-6 flex justify-center items-center shadow-lg'>
			<Link to='/'>
				<h1 className='text-white text-4xl font-extrabold hover:text-yellow-400 transition-all duration-500 transform hover:scale-105'>
					Quiz App
				</h1>
			</Link>
		</header>
	);
};
