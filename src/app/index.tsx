/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { useJsonResumeSlice } from './pages/HomePage/Features/JSONResume/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectJsonResume } from './pages/HomePage/Features/JSONResume/slice/selectors';
import { IntroPage } from './pages/IntroPage';
import { ChartsPage } from './pages/ChartsPage';

export function App() {
	const { actions } = useJsonResumeSlice();
	const dispatch = useDispatch();
	const jsonResume = useSelector(selectJsonResume);

	const { i18n } = useTranslation();
	return (
		<BrowserRouter>
			<Helmet
				titleTemplate="%s | John Marczak"
				defaultTitle="John Marczak - Full Stack Developer and Geek"
				htmlAttributes={{ lang: i18n.language }}
			>
				<meta
					name="description"
					content="John Marczak - Full Stack Developer and Geek"
				/>
			</Helmet>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/intro" element={<IntroPage />} />
				<Route path="/charts" element={<ChartsPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<GlobalStyle />
		</BrowserRouter>
	);
}
