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
      if( function_exists('acf_add_local_field_group') ):

        acf_add_local_field_group(array(
        	'key' => 'group_5bfdac6de4418',
        	'title' => 'Project Service Category',
        	'fields' => array(
        		array(
        			'key' => 'field_5bfdac8e87d03',
        			'label' => 'Project Service Category',
        			'name' => 'project_service_category',
        			'type' => 'taxonomy',
        			'instructions' => 'Assign the appropriate Project Service category for this Service.',
        			'required' => 0,
        			'conditional_logic' => 0,
        			'wrapper' => array(
        				'width' => '',
        				'class' => '',
        				'id' => '',
        			),
        			'taxonomy' => 'service_category',
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
        				'value' => 'service',
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