<?php
namespace AlbericiHillsdale;

class ACFOptionsPage {
	public static function setupOptionsPage() {

    if( function_exists('acf_add_options_page')){
    	acf_add_options_page(array(
    		'page_title' 	=> 'Global Settings',
    		'menu_title'	=> 'Global Settings',
    		'menu_slug' 	=> 'global-settings',
    		'capability'	=> 'edit_posts',
    		'redirect'		=> false
    	));

    	acf_add_options_sub_page(array(
    		'page_title' 	=> 'Theme Footer Settings',
    		'menu_title'	=> 'Footer',
    		'menu_slug'     => 'footer_settings',
    		'parent'	=> 'global-settings',
    	));
    }

		if( function_exists('acf_add_local_field_group') ):
      acf_add_local_field_group(array(
    	'key' => 'group_5b4f90235b48b',
    	'title' => 'Global Settings',
    	'fields' => array(
    		array(
    			'key' => 'field_5b4f907d41a4b',
    			'label' => '404 Page',
    			'name' => '404_page',
    			'type' => 'wysiwyg',
    			'instructions' => '',
    			'required' => 0,
    			'conditional_logic' => 0,
    			'wrapper' => array(
    				'width' => '',
    				'class' => '',
    				'id' => '',
    			),
    			'default_value' => '',
    			'tabs' => 'all',
    			'toolbar' => 'full',
    			'media_upload' => 1,
    			'delay' => 0,
    		),
    	),
    	'location' => array(
    		array(
    			array(
    				'param' => 'options_page',
    				'operator' => '==',
    				'value' => 'global-settings',
    			),
    		),
    	),
    	'menu_order' => 0,
    	'position' => 'normal',
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
