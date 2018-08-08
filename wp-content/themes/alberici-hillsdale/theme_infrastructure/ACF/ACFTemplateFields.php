<?php
namespace AlbericiHillsdale;

class ACFTemplateFields
{
	public static function setupTemplateFields()
	{
		self::setupHomePageFields();
		self::setupFlexContentFields();
		self::setupCardListFields();
		self::setupFooterCalloutFields();
	}

	private static function setupHomePageFields()
	{
		if( function_exists('acf_add_local_field_group') ):


		endif;
	}

	private static function setupCardListFields() {
		if( function_exists('acf_add_local_field_group') ):
		acf_add_local_field_group(array(
			'key' => 'group_5b6309729fab3',
			'title' => 'Post List Data Type',
			'fields' => array(
				array(
					'key' => 'field_5b63097da4a9c',
					'label' => 'Post List Data Type',
					'name' => 'post_list_data_type',
					'type' => 'radio',
					'instructions' => 'Select the type of data this Page will display.',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'choices' => array(
						'is_news' => 'Lists News Posts',
						'is_projects' => 'Lists Project Posts',
					),
					'allow_null' => 0,
					'other_choice' => 0,
					'default_value' => '',
					'layout' => 'vertical',
					'return_format' => 'value',
					'save_other_choice' => 0,
				),
			),
			'location' => array(
				array(
					array(
						'param' => 'page_template',
						'operator' => '==',
						'value' => 'page-card-list.php',
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
	} //end CardList fields

	private static function setupFlexContentFields(){
		if( function_exists('acf_add_local_field_group') ):

		acf_add_local_field_group(array(
			'key' => 'group_5b50e9f5c360d',
			'title' => 'Flexible Content',
			'fields' => array(
				array(
					'key' => 'field_5b50ea08fd665',
					'label' => 'Flexible Content',
					'name' => 'flexible_content',
					'type' => 'flexible_content',
					'instructions' => 'Add as many components as you\'d like.',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'layouts' => array(
						'5b50ea139fb91' => array(
							'key' => '5b50ea139fb91',
							'name' => 'full_width_callout',
							'label' => 'Full Width Callout',
							'display' => 'block',
							'sub_fields' => array(
								array(
									'key' => 'field_5b50eabdfd666',
									'label' => 'Image',
									'name' => 'image',
									'type' => 'image',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '50',
										'class' => '',
										'id' => '',
									),
									'return_format' => 'id',
									'preview_size' => 'thumbnail',
									'library' => 'all',
									'min_width' => '',
									'min_height' => '',
									'min_size' => '',
									'max_width' => '',
									'max_height' => '',
									'max_size' => '',
									'mime_types' => '',
								),
								array(
									'key' => 'field_5b50eb29fd667',
									'label' => 'Header',
									'name' => 'header',
									'type' => 'text',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '50',
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
									'key' => 'field_5b50eb36fd668',
									'label' => 'Content',
									'name' => 'content',
									'type' => 'textarea',
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
									'maxlength' => '',
									'rows' => '',
									'new_lines' => '',
								),
								array(
									'key' => 'field_5b50eb49fd669',
									'label' => 'Button Text',
									'name' => 'button_text',
									'type' => 'text',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '50',
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
									'key' => 'field_5b50eb53fd66a',
									'label' => 'Button Link',
									'name' => 'button_link',
									'type' => 'url',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '50',
										'class' => '',
										'id' => '',
									),
									'default_value' => '',
									'placeholder' => '',
								),
							),
							'min' => '',
							'max' => '',
						),
						'layout_5b50ecc6e167d' => array(
							'key' => 'layout_5b50ecc6e167d',
							'name' => 'fifty_fifty_callout',
							'label' => '50/50 Callout',
							'display' => 'block',
							'sub_fields' => array(
								array(
									'key' => 'field_5b50ed30e167e',
									'label' => 'Image Alignment',
									'name' => 'image_alignment',
									'type' => 'radio',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '50',
										'class' => '',
										'id' => '',
									),
									'choices' => array(
										'left' => 'Image Aligns Left',
										'right' => 'Image Aligns Right',
									),
									'allow_null' => 0,
									'other_choice' => 0,
									'default_value' => '',
									'layout' => 'vertical',
									'return_format' => 'value',
									'save_other_choice' => 0,
								),
								array(
									'key' => 'field_5b50ed8fe167f',
									'label' => 'Image',
									'name' => 'image',
									'type' => 'clone',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '',
										'class' => '',
										'id' => '',
									),
									'clone' => array(
										0 => 'field_5b50eabdfd666',
									),
									'display' => 'seamless',
									'layout' => 'block',
									'prefix_label' => 0,
									'prefix_name' => 0,
								),
								array(
									'key' => 'field_5b50edc0e1680',
									'label' => 'Content',
									'name' => 'content',
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
									'media_upload' => 0,
									'delay' => 0,
								),
							),
							'min' => '',
							'max' => '',
						),
					),
					'button_label' => 'Add Component',
					'min' => '',
					'max' => '',
				),
			),
			'location' => array(
				array(
					array(
						'param' => 'post_type',
						'operator' => '==',
						'value' => 'page',
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
		//end Flex Fields
		endif;
	}

  	private static function setupFooterCalloutFields() {
		if( function_exists('acf_add_local_field_group') ):

			acf_add_local_field_group(array(
				'key' => 'group_5b6b1789744b2',
				'title' => 'Footer Callout',
				'fields' => array(
					array(
						'key' => 'field_5b6b17914c683',
						'label' => 'Header',
						'name' => 'footer_callout_header',
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
						'key' => 'field_5b6b17a04c684',
						'label' => 'Content',
						'name' => 'footer_callout_content',
						'type' => 'textarea',
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
						'maxlength' => '',
						'rows' => '',
						'new_lines' => '',
					),
					array(
						'key' => 'field_5b6b17b04c685',
						'label' => 'Button Text',
						'name' => 'footer_callout_button_text',
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
						'key' => 'field_5b6b17c04c686',
						'label' => 'Button Link',
						'name' => 'footer_callout_button_link',
						'type' => 'url',
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
					),
				),
				'location' => array(
					array(
						array(
							'param' => 'page_template',
							'operator' => '==',
							'value' => 'default',
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
