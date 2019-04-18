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
        if( function_exists('acf_add_local_field_group') ):

            acf_add_local_field_group(array(
                'key' => 'group_markets_project_category',
                'title' => 'Project Market Category',
                'fields' => array(
                    array(
                        'key' => 'field_project_market_category',
                        'label' => 'Project Market Category',
                        'name' => 'project_market_category',
                        'type' => 'taxonomy',
                        'instructions' => 'Assign the appropriate Project Service category for this Service.',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'taxonomy' => 'market_category',
                        'field_type' => 'select',
                        'allow_null' => 0,
                        'add_term' => 0,
                        'save_terms' => 0,
                        'load_terms' => 0,
                        'return_format' => 'id',
                        'multiple' => 0,
                    ),
                ),
                'location' => array(
                    array(
                        array(
                            'param' => 'post_type',
                            'operator' => '==',
                            'value' => 'market',
                        ),
                    ),
                ),
                'menu_order' => 0,
                'position' => 'side',
                'style' => 'default',
                'label_placement' => 'top',
                'instruction_placement' => 'label',
                'hide_on_screen' => '',
                'active' => 1,
                'description' => '',
            ));

        endif;
    }
}

?>