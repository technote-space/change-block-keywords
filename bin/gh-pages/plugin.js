const { Fragment } = wp.element;
const { addFilter } = wp.hooks;

import './plugin.scss';

window.cbkParams = window.cbkParams || {};

addFilter( 'gh-pages.renderContent', 'plugin/renderContent', () => <Fragment>
	<p>You can change search keywords of each block.</p>
	<img className='playground__content__screenshot' src='./screenshot.gif'/>
</Fragment> );
