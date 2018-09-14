<?php
namespace AlbericiHillsdale;

class ServiceCPT
{
    public static function setupServices()
	{
        self::createServicePostType();
		    self::addServiceACF();
    }

    public static function createServicePostType()
    {
        register_post_type( 'service',
        array(
          'labels' => array(
            'name' => __( 'Services' ),
            'singular_name' => __( 'Service' )
          ),
          'public' => true,
          'show_ui' => true,
          'show_in_nav_menus' => false,
          'show_in_menu' => true,
          'has_archive' => false,
          'menu_icon' => 'dashicons-portfolio',
          'taxonomies' => array( 'service-type' ),
          'supports' => array( 'title', 'editor', 'custom-fields','thumbnail', 'page-attributes' ),
        )
      );
    }

    public static function addServiceACF()
    {

    }
}

?>