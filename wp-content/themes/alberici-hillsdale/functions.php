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
require_once ( __DIR__ . '/theme_infrastructure/CustomPostTypes/ServiceCPT.php');
require_once ( __DIR__ . '/theme_infrastructure/CustomPostTypes/MarketCPT.php');
require_once ( __DIR__ . '/theme_infrastructure/CustomPostTypes/ProjectCPT.php');

//Add our ACF template fields and custom post types and what not
if( ! function_exists('alberici_hillsdale_theme_infrastructure_setup')){
	function alberici_hillsdale_theme_infrastructure_setup(){
		\AlbericiHillsdale\ACFTemplateFields::setupTemplateFields();
		\AlbericiHillsdale\ACFOptionsPage::setupOptionsPage();
		\AlbericiHillsdale\ServiceCPT::setupServices();
		\AlbericiHillsdale\MarketCPT::setupMarkets();
		\AlbericiHillsdale\ProjectCPT::setupProjects();

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
		'show_in_nav_menus' => false,
		'hierarchical' => true,
		'show_in_rest' => true,
		'show_admin_column' => true,
		'capabilities' => array(
			'manage_terms', 'edit_terms', 'delete_terms', 'assign_terms'
		),

	);
	register_taxonomy('market_category', array('project'), $args);

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
	register_taxonomy('service_category', array('project'), $args);
}
add_action('init', 'add_service_taxonomy', 10);

//Add Location Custom Taxonomy for Posts (use on Projects)
function add_location_taxonomy() {
	$args = array (
		'labels' => array(
			'name' => 'Locations',
			'singular_name' => 'Location',
			'all_items' => 'All Location Categories',
			'edit_item' => 'Edit Location Categories',
			'view_item' => 'View Location Category',
			'update_item' => 'Update Location Category',
			'add_new_item' => 'Add New Location Category',
		),
		'show_ui' => true,
		'hierarchical' => true,
		'show_in_rest' => true,
		'show_admin_column' => true,
		'capabilities' => array(
			'manage_terms', 'edit_terms', 'delete_terms', 'assign_terms'
		),

	);
	register_taxonomy('location_category', array('project'), $args);
}
add_action('init', 'add_location_taxonomy', 10);

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

		add_image_size( 'tile_image', 700, 400, true );
		add_image_size( 'blog_image', 400, 400, true );

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


function custom_second_logo( $wp_customize ) {
 $wp_customize->add_setting( 'custom_logo_scroll' ); // Add setting for logo uploader

		 // Add control for logo uploader (actual uploader)
		 $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'custom_logo_scroll', array(
				 'label'    => __( 'Upload Secondary Logo', 'alberici' ),
				 'section'  => 'title_tagline',
				 'settings' => 'custom_logo_scroll',
		 ) ) );
 }
 add_action( 'customize_register', 'custom_second_logo' );

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

	wp_enqueue_style( 'alberici-fontawesome',  get_template_directory_uri() . '/fonts/css/all.css');

	wp_enqueue_script( 'jquery-sidr', get_template_directory_uri() . '/js/jquery.sidr.min.js', array('jquery'), time(), true );

	wp_enqueue_script( 'modernizr-grid', get_template_directory_uri() . '/js/modernizr-grid.min.js', array(), time(), true );

	wp_enqueue_script('alberici-hillsdale-scripts', get_template_directory_uri() . '/js/app.js', array('jquery'), time(), true);


	if (is_page_template('page-card-list.php')) {
			wp_register_script('alberici-hillsdale-news', get_template_directory_uri() . '/js/react_src/dist/cardList.js', array(), time(), true );
			wp_enqueue_script('alberici-hillsdale-news', get_template_directory_uri() . '/js/react_src/dist/cardList.js', array(), time(), true );
			wp_localize_script('alberici-hillsdale-news', 'wpObj', array(
				'posts_endpoint' => home_url('/wp-json/wp/v2/posts?_embed'),
				'projects_endpoint' => home_url('/wp-json/wp/v2/project?_embed'),
				'categories_endpoint' => home_url('/wp-json/wp/v2/categories?hide_empty=true'),
				'marketCat_endpoint' => home_url('/wp-json/wp/v2/market_category?hide_empty=true'),
				'serviceCat_endpoint' => home_url('/wp-json/wp/v2/service_category?hide_empty=true'),
				'locationCat_endpoint' => home_url('/wp-json/wp/v2/location_category?hide_empty=true'),
				'post_id' => get_the_ID(), //send to front end to make sure our local storage filter settings are only for a certain post
				'site_config' => get_field('set_site', 'options')
			));
	}
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

//Remove default WP Emoji calls to cut back on unnecessary calls
// Ref: https://kinsta.com/knowledgebase/disable-emojis-wordpress/
/**
 * Disable the emoji's
 */
function disable_emojis() {
 remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
 remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
 remove_action( 'wp_print_styles', 'print_emoji_styles' );
 remove_action( 'admin_print_styles', 'print_emoji_styles' );
 remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
 remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
 remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
 add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
 add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
}
add_action( 'init', 'disable_emojis' );

/**
 * Filter function used to remove the tinymce emoji plugin.
 *
 * @param array $plugins
 * @return array Difference betwen the two arrays
 */
function disable_emojis_tinymce( $plugins ) {
 if ( is_array( $plugins ) ) {
 return array_diff( $plugins, array( 'wpemoji' ) );
 } else {
 return array();
 }
}

/**
 * Remove emoji CDN hostname from DNS prefetching hints.
 *
 * @param array $urls URLs to print for resource hints.
 * @param string $relation_type The relation type the URLs are printed for.
 * @return array Difference betwen the two arrays.
 */
function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
 if ( 'dns-prefetch' == $relation_type ) {
 /** This filter is documented in wp-includes/formatting.php */
 $emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );

$urls = array_diff( $urls, array( $emoji_svg_url ) );
 }

return $urls;
}

add_action( 'widgets_init', 'alberici_hillsdale_theme_widgets_init' );
function alberici_hillsdale_theme_widgets_init() {
    register_sidebar( array(
        'name' => __( 'Right Sidebar', 'alberici_hillsdale_theme' ),
        'id' => 'right-sidebar',
        'description' => __( 'Widgets in this area will be shown on all posts and pages.', 'alberici_hillsdale_theme' ),
        'before_widget' => '<li id="%1$s" class="widget %2$s">',
	'after_widget'  => '</li>',
	'before_title'  => '<h2 class="widgettitle">',
	'after_title'   => '</h2>',
    ) );
}


// Yoast Breadcrumb customization. This is so we can have Home > Projects > Project Detail
// and the like for News, Services and Projects.
// Ref: https://wordpress.stackexchange.com/questions/100012/how-to-add-a-page-to-the-yoast-breadcrumbs
add_filter( 'wpseo_breadcrumb_links', 'update_yoast_news_breadcrumb_trail' );

function update_yoast_news_breadcrumb_trail( $links ) {
    global $post;

    if ( is_home() || is_singular( 'post' ) || is_archive() ) {
        $breadcrumb[] = array(
            'url' => get_field('news_page_link', 'option'),
            'text' => 'News',
        );

        array_splice( $links, 1, -2, $breadcrumb );
    }

    return $links;
}

add_filter( 'wpseo_breadcrumb_links', 'update_yoast_services_breadcrumb_trail' );

function update_yoast_services_breadcrumb_trail( $links ) {
    global $post;

    if ( is_singular( 'service' ) ) {
        $breadcrumb[] = array(
            'url' => get_field('services_page_link', 'option'),
            'text' => 'Services',
        );

        array_splice( $links, 1, -2, $breadcrumb );
    }

    return $links;
}

add_filter( 'wpseo_breadcrumb_links', 'update_yoast_projects_breadcrumb_trail' );

function update_yoast_projects_breadcrumb_trail( $links ) {
    global $post;

    if ( is_singular( 'project' ) ) {
        $breadcrumb[] = array(
            'url' => get_field('projects_page_link', 'option'),
            'text' => 'Projects',
        );

        array_splice( $links, 1, -2, $breadcrumb );
    }

    return $links;
}

//This tells the client to pay attention to the size of their feature images when adding them
function filter_featured_image_admin_text( $content, $post_id, $thumbnail_id ){
    $help_text = '<p>' . __( 'Please use an image that is 600 x 600 pixels tall.', 'my_domain' ) . '</p>';
    return $help_text . $content;
}
add_filter( 'admin_post_thumbnail_html', 'filter_featured_image_admin_text', 10, 3 );
