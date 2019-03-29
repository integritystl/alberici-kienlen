<?php
namespace AlbericiHillsdale;

class MarketCPT
{
    public static function setupMarkets()
	{
        self::createMarketPostType();
		    self::addMarketACF();
    }

    public static function createMarketPostType()
    {
        register_post_type( 'market',
        array(
          'labels' => array(
            'name' => __( 'Markets' ),
            'singular_name' => __( 'Market' )
          ),
          'public' => true,
          'show_ui' => true,
          'show_in_nav_menus' => false,
          'show_in_menu' => true,
          'has_archive' => false,
          'menu_icon' => 'dashicons-lightbulb',
          'taxonomies' => array( 'market-type' ),
          'supports' => array( 'title', 'editor', 'custom-fields','thumbnail', 'page-attributes' ),
        )
      );
    }

    public static function addMarketACF()
    {

    }
}

?>