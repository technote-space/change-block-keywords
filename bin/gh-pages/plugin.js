const { Fragment } = wp.element;
const { addFilter } = wp.hooks;

import './plugin.scss';

window.cbkParams = window.cbkParams || {};

addFilter( 'gh-pages.renderContent', 'plugin/renderContent', () => <Fragment>
	<p>This page is demonstration of <a href="https://github.com/technote-space/change-block-keywords">Change Block Keywords</a></p>
	<p>You can change search keywords of each block.</p>
	<img className='playground__content__screenshot' src='./screenshot.gif'/>
</Fragment> );
