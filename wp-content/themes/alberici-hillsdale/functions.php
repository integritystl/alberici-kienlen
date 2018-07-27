<?php
/**
 * alberici-hillsdale functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package alberici-hillsdale
 */

//Add the ACF fields and custom post types
require_once ( __DIR__ . '/theme_infrastructure/ACF/ACFTemplateFields.php');
require_once ( __DIR__ . '/theme_infrastructure/ACF/ACFOptionsPage.php');

//Add our ACF template fields and custom post types and what not
if( ! function_exists('alberici_hillsdale_theme_infrastructure_setup')){
	function alberici_hillsdale_theme_infrastructure_setup(){
		\AlbericiHillsdale\ACFTemplateFields::setupTemplateFields();
		\AlbericiHillsdale\ACFOptionsPage::setupOptionsPage();
	}
}
add_action('init', 'alberici_hillsdale_theme_infrastructure_setup');

//Add Market Custom Taxonomy for Posts (also use on Projects)
function add_market_taxonomy() {
	$args = array (
		'labels' => array(
			'name' => 'Markets',
			'singular_name' => 'Market',
			'all_items' => 'All Market Categories',
			'edit_item' => 'Edit Market Categories',
			'view_item' => 'View Market Category',
			'update_item' => 'Update Market Category',
			'add_new_item' => 'Add New Market Category',
		),
		'show_ui' => true,
		'hierarchical' => true,
		'show_in_rest' => true,
		'show_admin_column' => true,
		'capabilities' => array(
			'manage_terms', 'edit_terms', 'delete_terms', 'assign_terms'
		),

	);
	register_taxonomy('market_category', array('post'), $args);

}
add_action('init', 'add_market_taxonomy', 10);

//Add Service Custom Taxonomy for Posts (also use on Projects)
function add_service_taxonomy() {
	$args = array (
		'labels' => array(
			'name' => 'Services',
			'singular_name' => 'Service',
			'all_items' => 'All Service Categories',
			'edit_item' => 'Edit Service Categories',
			'view_item' => 'View Service Category',
			'update_item' => 'Update Service Category',
			'add_new_item' => 'Add New Service Category',
		),
		'show_ui' => true,
		'hierarchical' => true,
		'show_in_rest' => true,
		'show_admin_column' => true,
		'capabilities' => array(
			'manage_terms', 'edit_terms', 'delete_terms', 'assign_terms'
		),

	);
	register_taxonomy('service_category', array('post'), $args);
}
add_action('init', 'add_service_taxonomy', 10);

if ( ! function_exists( 'alberici_hillsdale_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function alberici_hillsdale_setup() {

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in 3 locations.
		register_nav_menus( array(
			'primary-menu' => esc_html__( 'Primary Menu', 'alberici-hillsdale' ),
			'utility-menu' => esc_html__( 'Utility Menu', 'alberici-hillsdale' ),
			'footer-menu' => esc_html__( 'Footer Menu', 'alberici-hillsdale' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'alberici_hillsdale_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function alberici_hillsdale_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'alberici_hillsdale_content_width', 640 );
}
add_action( 'after_setup_theme', 'alberici_hillsdale_content_width', 0 );


/**
 * Enqueue scripts and styles.
 */
function alberici_hillsdale_scripts() {
	wp_enqueue_style( 'alberici-hillsdale-style', get_stylesheet_uri(), array(), time() );

	wp_register_script('alberici-hillsdale-scripts', get_template_directory_uri() . '/js/app.js', array('jquery'), time(), true);
	if (is_page_template('page-news.php')) {
			wp_enqueue_script('alberici-hillsdale-news', get_template_directory_uri() . '/js/react_src/dist/news.js', array(), time(), true );
	}
	// if (is_page_template('page-projects.php')) {
	// 		wp_enqueue_script('alberici-hillsdale-news', get_template_directory_uri() . '/js/react_src/dist/projects.js', array(), time(), true );
	// }


}
add_action( 'wp_enqueue_scripts', 'alberici_hillsdale_scripts' );

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

//Hide sections we don't use
function remove_menus(){
  remove_menu_page( 'edit-comments.php' );          //Comments
}
add_action( 'admin_menu', 'remove_menus' );

function remove_sub_menus(){
  remove_submenu_page( 'themes.php', 'widgets.php' );    //Appearance - Widgets
	remove_submenu_page('edit.php', 'edit-tags.php?taxonomy=post_tag');   //Posts - Tags
	unregister_taxonomy_for_object_type( 'post_tag', 'post' );
}
add_action( 'admin_menu', 'remove_sub_menus' );

//SVG Support in Media Uploader
function add_file_types_to_uploads($file_types){
	$new_filetypes = array();
	$new_filetypes['svg'] = 'image/svg+xml';
	$file_types = array_merge($file_types, $new_filetypes );
	return $file_types;
}
add_action('upload_mimes', 'add_file_types_to_uploads');
