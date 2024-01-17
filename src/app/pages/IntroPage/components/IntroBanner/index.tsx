/**
 *
 * IntroBanner
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {}

export function IntroBanner(props: Props) {
	return <Div></Div>;
}

const Div = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	text-align: center;
	border-color: #666;
	background-image: url('https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg');
	background-size: cover;
	background-attachment: fixed;
	background-position: center;
	strong {
		color: ${p => p.theme.text};
	}
`;
