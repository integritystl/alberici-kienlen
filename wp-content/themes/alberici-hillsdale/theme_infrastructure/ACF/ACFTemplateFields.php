<?php
namespace AlbericiHillsdale;

class ACFTemplateFields
{
  public static function setupTemplateFields()
  {
    self::setupHomePageFields();
    self::setupFlexContentFields();
	self::setupCardListFields();
	self::setupGeneralHeroFields();
	self::setupFooterCalloutFields();
	self::setupJobsCalloutFields();
	self::setupContactPeopleFields();
	self::setupMarketCalloutsFields();
	self::setupOurClientsFields();
  }

  private static function setupHomePageFields()
  {
	if( function_exists('acf_add_local_field_group') ):

		acf_add_local_field_group(array(
			'key' => 'group_5b6b4b8f6329a',
			'title' => 'Homepage Hero Area',
			'fields' => array(
				array(
					'key' => 'field_5b6b4bbe542d3',
					'label' => 'Featured Image',
					'name' => 'homepage_hero_featured_image',
					'type' => 'image',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'return_format' => 'url',
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
					'key' => 'field_5b6b4bde542d4',
					'label' => 'Title',
					'name' => 'homepage_hero_title',
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
					'key' => 'field_5b6b4bf2542d5',
					'label' => 'Content',
					'name' => 'homepage_hero_content',
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
					'key' => 'field_5b6b4c06542d6',
					'label' => 'Button Text',
					'name' => 'homepage_hero_button_text',
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
					'key' => 'field_5b6b4c1d542d7',
					'label' => 'Button Link',
					'name' => 'homepage_hero_button_link',
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
						'param' => 'page_type',
						'operator' => '==',
						'value' => 'front_page',
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

  private static function setupFlexContentFields()
  {
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
					  'layout_5b71d0fdbe8a6' => array(
							'key' => 'layout_5b71d0fdbe8a6',
							'name' => 'image_text_callout',
							'label' => 'Image Text Callout',
							'display' => 'block',
							'sub_fields' => array(
								array(
									'key' => 'field_5b71d10d1f593',
									'label' => 'Image',
									'name' => 'image',
									'type' => 'image',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '',
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
									'key' => 'field_5b71d12b1f594',
									'label' => 'Header',
									'name' => 'header',
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
									'key' => 'field_5b71d13c1f595',
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
									'placeholder' => '',
									'maxlength' => '',
									'rows' => '',
									'new_lines' => '',
								),
								array(
									'key' => 'field_5b71d1481f596',
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
									'key' => 'field_5b71d15a1f597',
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

						'layout_5b71e4cae73fa' => array(
								'key' => 'layout_5b71e4cae73fa',
								'name' => 'stacked_tile_callout',
								'label' => 'Stacked Tile Callout',
								'display' => 'block',
								'sub_fields' => array(
									array(
										'key' => 'field_5b71e6325ef5c',
										'label' => 'Component',
										'name' => 'component',
										'type' => 'repeater',
										'instructions' => '',
										'required' => 0,
										'conditional_logic' => 0,
										'wrapper' => array(
											'width' => '',
											'class' => '',
											'id' => '',
										),
										'collapsed' => '',
										'min' => 0,
										'max' => 2,
										'layout' => 'block',
										'button_label' => '',
										'sub_fields' => array(
											array(
												'key' => 'field_5b71e8f65ef5d',
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
												'key' => 'field_5b71e90a5ef5e',
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
												'key' => 'field_5b71e9605ef5f',
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
												'placeholder' => '',
												'maxlength' => '',
												'rows' => '',
												'new_lines' => '',
											),
											array(
												'key' => 'field_5b71e9765ef60',
												'label' => 'Link',
												'name' => 'link',
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

	private static function setupGeneralHeroFields() {
		if( function_exists('acf_add_local_field_group') ):

			acf_add_local_field_group(array(
			'key' => 'group_5b6b503fb8695',
			'title' => 'Hero Area',
			'fields' => array(
			array(
				'key' => 'field_5b6b504bf2308',
				'label' => 'Featured Image',
				'name' => 'general_hero_featured_image',
				'type' => 'image',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
				),
				'return_format' => 'url',
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
				'key' => 'field_5b6b5061f2309',
				'label' => 'Title',
				'name' => 'general_hero_title',
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
			),
			'location' => array(
				array(
					array(
					'param' => 'page_type',
					'operator' => '!=',
					'value' => 'front_page',
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
				array(
					'key' => 'field_5b6b23e30a94d',
					'label' => 'Background Image',
					'name' => 'footer_callout_background_image',
					'type' => 'image',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
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
				),
				'location' => array(
					array(
						array(
							'param' => 'page_type',
							'operator' => '!=',
							'value' => 'front_page',
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

	private static function setupJobsCalloutFields()
  {
	if( function_exists('acf_add_local_field_group') ):

		acf_add_local_field_group(array(
			'key' => 'group_5b72e8c40b6b9',
			'title' => 'Jobs Callout',
			'fields' => array(
				array(
					'key' => 'field_5b72e8c611836',
					'label' => 'Header',
					'name' => 'jobs_callout_header',
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
					'key' => 'field_5b72e8e611837',
					'label' => 'Content',
					'name' => 'jobs_callout_content',
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
					'key' => 'field_5b72e8fd11838',
					'label' => 'Job Posts Link',
					'name' => 'jobs_callout_post_link',
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
				array(
					'key' => 'field_5b72e91b11839',
					'label' => 'Careers Form',
					'name' => 'jobs_callout_careers_form',
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
						'param' => 'page_template',
						'operator' => '==',
						'value' => 'page-careers.php',
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
  private static function setupContactPeopleFields()
  {
	if( function_exists('acf_add_local_field_group') ):

		acf_add_local_field_group(array(
			'key' => 'group_5b733eb85ebb9',
			'title' => 'Contact People',
			'fields' => array(
				array(
					'key' => 'field_5b733ec656cf2',
					'label' => 'Contact People',
					'name' => 'contact_people',
					'type' => 'repeater',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'collapsed' => '',
					'min' => 0,
					'max' => 0,
					'layout' => 'table',
					'button_label' => '',
					'sub_fields' => array(
						array(
							'key' => 'field_5b733ed256cf3',
							'label' => 'Profile Image',
							'name' => 'contact_people_profile_image',
							'type' => 'image',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array(
								'width' => '',
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
							'max_size' => '0.3',
							'mime_types' => '',
						),
						array(
							'key' => 'field_5b733ee756cf4',
							'label' => 'Contact Type',
							'name' => 'contact_people_contact_type',
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
							'key' => 'field_5b733f0f56cf5',
							'label' => 'Name',
							'name' => 'contact_people_name',
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
							'key' => 'field_5b733f2156cf6',
							'label' => 'Email',
							'name' => 'contact_people_email',
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
							'key' => 'field_5b733f2e56cf7',
							'label' => 'Office Phone',
							'name' => 'contact_people_office_phone',
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
							'key' => 'field_5b733f3f56cf8',
							'label' => 'Fax',
							'name' => 'contact_people_fax',
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
					),
				),
				array(
					'key' => 'field_5b733f5256cf9',
					'label' => 'Contact Form',
					'name' => 'contact_people_form',
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
						'param' => 'page_template',
						'operator' => '==',
						'value' => 'page-contact.php',
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
  private static function setupMarketCalloutsFields() {
	if( function_exists('acf_add_local_field_group') ):

		acf_add_local_field_group(array(
			'key' => 'group_5ba5222faf982',
			'title' => 'Market Callouts',
			'fields' => array(
				array(
					'key' => 'field_5ba52236c8122',
					'label' => 'Market Callouts',
					'name' => 'market_callouts',
					'type' => 'repeater',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'collapsed' => '',
					'min' => 0,
					'max' => 0,
					'layout' => 'table',
					'button_label' => '',
					'sub_fields' => array(
						array(
							'key' => 'field_5ba52243c8123',
							'label' => 'Image',
							'name' => 'market_callouts_image',
							'type' => 'image',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array(
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'return_format' => 'url',
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
							'key' => 'field_5ba52275c8124',
							'label' => 'Market',
							'name' => 'market_callouts_market',
							'type' => 'post_object',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array(
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'post_type' => array(
								0 => 'market',
							),
							'taxonomy' => '',
							'allow_null' => 0,
							'multiple' => 0,
							'return_format' => 'object',
							'ui' => 1,
						),
					),
				),
			),
			'location' => array(
				array(
					array(
						'param' => 'page_template',
						'operator' => '==',
						'value' => 'page-market.php',
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
  private static function setupOurClientsFields() {
	if( function_exists('acf_add_local_field_group') ):

		acf_add_local_field_group(array(
			'key' => 'group_5bc8b89510051',
			'title' => 'Our Clients',
			'fields' => array(
				array(
					'key' => 'field_5bf433c2c87d3',
					'label' => 'Title',
					'name' => 'our_client_title',
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
					'key' => 'field_5bc8b97871247',
					'label' => 'Our Clients',
					'name' => 'our_clients',
					'type' => 'repeater',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'collapsed' => '',
					'min' => 0,
					'max' => 0,
					'layout' => 'table',
					'button_label' => '',
					'sub_fields' => array(
						array(
							'key' => 'field_5bc8b98771248',
							'label' => 'Image',
							'name' => 'our_clients_image',
							'type' => 'image',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array(
								'width' => '',
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
					),
				),
			),
			'location' => array(
				array(
					array(
						'param' => 'post_template',
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
