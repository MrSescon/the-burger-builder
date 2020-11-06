import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxi';
import classes from './Layout.module.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

	const sideDrawerClosedHandler = () => {
		setSideDrawerIsVisible(false);
	};

	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible)
	};
		return (
			<Aux>
				<ToolBar drawerToggleClicked={sideDrawerToggleHandler} isAuth={this.props.isAuthenticated} />
				<SideDrawer
					open={sideDrawerIsVisible}
					closed={sideDrawerClosedHandler}
					isAuth={props.isAuthenticated}
				/>
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};

export default connect(mapStateToProps)(Layout);
