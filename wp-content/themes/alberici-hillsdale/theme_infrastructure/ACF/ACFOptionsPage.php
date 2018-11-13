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

		if( function_exists('acf_add_local_field_group') ):

			acf_add_local_field_group(array(
				'key' => 'group_5beb17061feef',
				'title' => 'News Page Link',
				'fields' => array(
					array(
						'key' => 'field_5beb1710c3dde',
						'label' => 'Link',
						'name' => 'news_page_link',
						'type' => 'page_link',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'post_type' => array(
							0 => 'page',
						),
						'taxonomy' => '',
						'allow_null' => 0,
						'allow_archives' => 1,
						'multiple' => 0,
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

		if( function_exists('acf_add_local_field_group') ):

			acf_add_local_field_group(array(
				'key' => 'group_5bca218e17c58',
				'title' => 'Set to Kienlen',
				'fields' => array(
					array(
						'key' => 'field_5bca21976f78c',
						'label' => 'Set site',
						'name' => 'set_site',
						'type' => 'radio',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'choices' => array(
							'hillsdale' => 'Hillsdale',
							'kienlen' => 'Kienlen',
						),
						'allow_null' => 0,
						'other_choice' => 0,
						'default_value' => 'Hillsdale',
						'layout' => 'vertical',
						'return_format' => 'value',
						'save_other_choice' => 0,
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

		if( function_exists('acf_add_local_field_group') ):

			acf_add_local_field_group(array(
				'key' => 'group_5b6b1433e3e7a',
				'title' => 'Footer',
				'fields' => array(
					array(
						'key' => 'field_5b6b1439137cf',
						'label' => 'Copyright Message',
						'name' => 'footer_copyright_message',
						'type' => 'text',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'maxlength' => '',
					),
					array(
						'key' => 'field_5b6b1478137d0',
						'label' => 'footer Phone Number',
						'name' => 'footer_phone_number',
						'type' => 'text',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'min' => '',
						'max' => '',
						'step' => '',
					),
				),
				'location' => array(
					array(
						array(
							'param' => 'options_page',
							'operator' => '==',
							'value' => 'footer_settings',
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
