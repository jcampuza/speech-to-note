import React from 'react';
import styled from 'styled-components'

export const Text = styled.p`
	margin: 0;
	margin-bottom: 16px;
	padding: 0;
	font-size: ${props => props.size ? props.size + 'px' : '16px'}
`;

export const Heading = ({ level, children, size }) => {
	const styles = {
		margin: 0,
		padding: 0,
		fontSize: size ? size : 24
	}
	const Tag = `h${level}`;
	return <Tag style={styles}>{children}</Tag>
}