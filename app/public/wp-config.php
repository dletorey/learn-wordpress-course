<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'r4sNqD2sJKjSECGvXlJCepahTaQHEtO0baG+wKQ4+ffFPiOHBUbQc2Bno3z/z5tN5GYtOWdFeYGQHK3LBMKVBg==');
define('SECURE_AUTH_KEY',  '7Qbl9tqbiNQ+apTuVIVJEyypeRMHRlDptmWWnqP9gTVbKUAs1kRLRIYxRbaxij3WBQ+FvMwd6kWImevWi3mLYA==');
define('LOGGED_IN_KEY',    'LQDbRNTpO/MiHyViNfOaDTZj1yzndSrzD6JkVdAyX1dtippEM/h/2v7rMBrpOF59E36hS5+wWGqrpY8fdZGDBA==');
define('NONCE_KEY',        'WYPb4UNEijLZycI0v3tpGnJKWH802HWVrRv/tUMDlvlhAxCr/4M+5cTHtPL6G+9/CkNxdzV+JUco0Gxe4GOxZA==');
define('AUTH_SALT',        '7RHAi0N61Bg8eNa94LdH+qGsiTxNuBfa26saWL86iUTWds7Ywk1NOiod8tO3eAsReyB2rsGLmuDGzCX1fHIGww==');
define('SECURE_AUTH_SALT', '2Nt8e/GqIyoDMMuc3TvLQp4SvfptrWP0+O0ElbOXHpTEPPcCs3Xm398zwIG1bz2bvxEt6uvdYWP11CZ7JGJKFg==');
define('LOGGED_IN_SALT',   'Uq5cmOUhApcjyrKRifY3djinCc9y1S8ojkt9MKf9pHa21eKs1KBQN6Kjs53Z3QflPTN3j6jz4qEhGJz+Ls6Gjw==');
define('NONCE_SALT',       'RxwqloEsSQmgQ6J7rEYzUdGFU5ued/mN887mEYctELBssLkcje7p1xSfr+lBGz5hg4l1pDVEUNn012VsILjecw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
