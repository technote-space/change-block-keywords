<?php
/**
 * @author Technote
 * @copyright Technote All Rights Reserved
 * @license http://www.opensource.org/licenses/gpl-2.0.php GNU General Public License, version 2
 * @link https://technote.space/
 */

if ( ! defined( 'CHANGE_BLOCK_KEYWORDS' ) ) {
	exit;
}

return [
	'\Change_Block_Keywords\Classes\Models\Editor' => [
		'enqueue_block_editor_assets' => [
			'enqueue_block_editor_assets' => 1,
		],
	],
];
