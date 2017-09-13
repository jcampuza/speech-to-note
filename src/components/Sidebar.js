import React from 'react';
import styled from 'styled-components';

const defaultStyles = {
	wrapper: {
		zIndex: 9,
		position: 'fixed',
		top: 0,
		bottom: 0,
		transition: 'transform 250ms ease-out',
		willChange: 'transform',
		overflowY: 'auto'
	}
}



const Wrapper = styled.aside`
	position: fixed;
	top: 0;
	bottom: 0;
	padding: 0;
	overflow-x: none;
	overflow-y: auto;
	width: 300px;
	background-color: #fefefe;
	border-right: 1px solid #333333;
`

const SidebarTitle = styled.div`
	display: flex;
	background-color: #d9d9d9;
	align-items: center;
	height: 68px;
`

const SidebarList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`

const SidebarListItem = styled.li`
	padding: 0 1em;
	height: 40px;
	display: flex;
	align-items: center;
	cursor: pointer;

	&:hover {
		background-color: #cccccc;
	}
`

class Sidebar extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const sidebarStyle = {...defaultStyles.wrapper };
		const { isOpen } = this.props;

		if (isOpen) {
			sidebarStyle.transform = 'translateX(0%)';
		} else {
			sidebarStyle.transform = 'translateX(-100%)';
		}

		return (
			<Wrapper style={sidebarStyle}>
				<SidebarTitle>
					
				</SidebarTitle>
				<SidebarList>
					<SidebarListItem>
						Enter a new Text note
					</SidebarListItem>
					<SidebarListItem>
						Enter a new Text note
					</SidebarListItem>
					<SidebarListItem>
						Enter a new Text note
					</SidebarListItem>
				</SidebarList>
			</Wrapper>
		)	
	}
}



// const Sidebar = (props) => {

// 	return (
// 		<Wrapper>
// 			<SidebarTitle>
				
// 			</SidebarTitle>
// 			<SidebarList>
// 				<SidebarListItem>
// 					Enter a new Text note
// 				</SidebarListItem>
// 				<SidebarListItem>
// 					Enter a new Text note
// 				</SidebarListItem>
// 				<SidebarListItem>
// 					Enter a new Text note
// 				</SidebarListItem>
// 			</SidebarList>
// 		</Wrapper>
// 	)
// }

export default Sidebar;