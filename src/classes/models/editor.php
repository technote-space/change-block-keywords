<?php
/**
 * @version 1.0.0
 * @author Technote
 * @since 0.0.1
 * @copyright Technote All Rights Reserved
 * @license http://www.opensource.org/licenses/gpl-2.0.php GNU General Public License, version 2
 * @link https://technote.space/
 */

namespace Change_Block_Keywords\Classes\Models;

use WP_Framework_Common\Traits\Package;
use WP_Framework_Core\Traits\Hook;
use WP_Framework_Core\Traits\Singleton;
use WP_Framework_Presenter\Traits\Presenter;

if ( ! defined( 'CHANGE_BLOCK_KEYWORDS' ) ) {
	exit;
}

/**
 * Class Editor
 * @package Change_Block_Keywords\Classes\Models
 */
class Editor implements \WP_Framework_Core\Interfaces\Singleton, \WP_Framework_Core\Interfaces\Hook, \WP_Framework_Presenter\Interfaces\Presenter {

	use Singleton, Hook, Presenter, Package;

	/**
	 * enqueue css for gutenberg
	 */
	/** @noinspection PhpUnusedPrivateMethodInspection */
	private function enqueue_block_editor_assets() {
		$this->enqueue_script( 'change-block-keywords', 'index.min.js', [
			'wp-hooks',
			'wp-compose',
			'wp-editor',
			'wp-data',
			'wp-element',
			'wp-components',
			'wp-plugins',
		], $this->app->get_plugin_version(), false );
		$this->localize_script( 'change-block-keywords', 'cbkParams', [
			'translate' => $this->get_translate_data( [
				'Set Search Keywords',
			] ),
		] );
	}
}