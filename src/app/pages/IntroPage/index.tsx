import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
// import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';
import { useJsonResumeSlice } from 'app/pages/HomePage/Features/JSONResume/slice';
import { selectJsonResume } from 'app/pages/HomePage/Features/JSONResume/slice/selectors';
import { IntroBanner } from './components/IntroBanner';

export function IntroPage() {
	const { actions } = useJsonResumeSlice();
	const dispatch = useDispatch();
	const jsonResume = useSelector(selectJsonResume);
	return (
		<>
			<Helmet>
				<title>Intro Page</title>
				<meta
					name="description"
					content="John Marczak - Full Stack Developer and Geek | Home"
				/>
			</Helmet>
			<NavBar />
			<PageWrapper>
				<IntroBanner />
				<Masthead />
				{/* <Features /> */}
			</PageWrapper>
		</>
	);
}
