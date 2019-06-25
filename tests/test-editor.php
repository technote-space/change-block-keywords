<?php
/**
 * Class EditorTest
 *
 * @package Test_Travis
 */

use Change_Block_Keywords\Classes\Models\Editor;
use PHPUnit\Framework\TestCase;

/**
 * @noinspection PhpUndefinedClassInspection
 * Editor test case.
 *
 * @mixin TestCase
 */
class EditorTest extends WP_UnitTestCase {

	/**
	 * @var WP_Framework|Phake_IMock
	 */
	protected static $app;

	/**
	 * @var Editor $editor
	 */
	private static $editor;

	/**
	 * @SuppressWarnings(StaticAccess)
	 */
	public static function setUpBeforeClass() {
		static::$app    = WP_Framework::get_instance( CHANGE_BLOCK_KEYWORDS );
		static::$editor = Editor::get_instance( static::$app );
	}

	public function test_enqueue_block_editor_assets() {
		do_action( 'enqueue_block_editor_assets' );
		$wp_scripts = wp_scripts();

		$this->assertArrayHasKey( 'change-block-keywords', $wp_scripts->registered );
		$this->assertStringEndsWith( '/assets/js/index.min.js', $wp_scripts->registered['change-block-keywords']->src );
		$this->assertContains( 'change-block-keywords', $wp_scripts->registered['change-block-keywords']->src );
		$this->assertArrayHasKey( 'data', $wp_scripts->registered['change-block-keywords']->extra );
		$this->assertContains( ' cbkParams ', $wp_scripts->registered['change-block-keywords']->extra['data'] );
	}
}
