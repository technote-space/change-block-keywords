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
	 * @var WP_Framework
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
		static::reset();
	}

	public static function tearDownAfterClass() {
		static::reset();
		static::$app->file->delete( static::$app->define->plugin_assets_dir . DS . 'js' . DS . 'index.min.js' );
	}

	private static function reset() {
		wp_dequeue_script( 'change-block-keywords' );
		static::$app->file->put_contents( static::$app->define->plugin_assets_dir . DS . 'js' . DS . 'index.min.js', '' );
	}

	public function test_enqueue_block_editor_assets() {
		static::reset();

		$this->assertFalse( wp_script_is( 'change-block-keywords' ) );
		do_action( 'enqueue_block_editor_assets' );
		$this->assertTrue( wp_script_is( 'change-block-keywords' ) );
	}
}
