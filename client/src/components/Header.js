import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

export class Header extends Component
{
	renderContent()
	{
		switch (this.props.auth)
		{
			// Se esta comunicando, aun no tiene nada
			case null: return;
			// No esta loggeado
			case false: return <li><a href="/auth/google">Login with Google</a></li>;
			// Ya inicio sesion
			default: return [
				<li key="1"><Payments /></li>,
				<li key="3" style={{ margin: '0 10px' }}>
					Credits: { this.props.auth.credits }
				</li>,
				<li key="2"><a href="/api/logout">Log out</a></li>
			];
		}
	}

	render()
	{
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						to={ this.props.auth ? '/surveys' : '/' }
						className="left brand-logo"
					>
						Emaily
					</Link>
					<ul className="right">
						{ this.renderContent() }
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth })
{
	return { auth };
}

export default connect(mapStateToProps)(Header);