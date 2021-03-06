<?php
/**
 * Plugin Name: Change Block Keywords
 * Plugin URI: https://github.com/technote-space/change-block-keywords/
 * Description: This plugin make it easy to change block's search keywords.
 * Author: Technote
 * Version: 2.1.2
 * Author URI: https://technote.space
 * Text Domain: change-block-keywords
 * Domain Path: /languages/
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( defined( 'CHANGE_BLOCK_KEYWORDS' ) ) {
	return;
}

define( 'CHANGE_BLOCK_KEYWORDS', 'Change_Block_Keywords' );

@require_once dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';

WP_Framework::get_instance( CHANGE_BLOCK_KEYWORDS, __FILE__ );
