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
          'exclude_from_search' => true,
          'publicly_queryable' => false,
          'show_ui' => true,
          'show_in_nav_menus' => false,
          'show_in_menu' => true,
          'show_in_rest' => true,
          'has_archive' => false,
          'menu_icon' => 'dashicons-cart',
          'supports' => array( 'title', 'editor', 'custom-fields','thumbnail' ),
        )
      );
    }

    public static function addServiceACF()
    {

    }
}

?>