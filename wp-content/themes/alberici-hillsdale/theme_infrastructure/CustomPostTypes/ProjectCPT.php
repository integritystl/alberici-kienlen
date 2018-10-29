<?php
namespace AlbericiHillsdale;

class ProjectCPT
{
    public static function setupProjects()
	{
        self::createProjectPostType();
		    self::addProjectACF();
    }

    public static function createProjectPostType()
    {
        register_post_type( 'project',
        array(
          'labels' => array(
            'name' => __( 'Projects' ),
            'singular_name' => __( 'Project' )
          ),
          'public' => true,
          'show_ui' => true,
          'show_in_nav_menus' => false,
          'show_in_rest' => true,
          'show_in_menu' => true,
          'has_archive' => false,
          'taxonomies' => array( 'project-type' ),
          'supports' => array( 'title', 'editor', 'custom-fields','thumbnail', 'page-attributes' ),
        )
      );
    }


    public static function addProjectACF()
    {
        if( function_exists('acf_add_local_field_group') ):

            acf_add_local_field_group(array(
                'key' => 'group_5bb3c4173c6f4',
                'title' => 'Projects',
                'fields' => array(
                    array(
                        'key' => 'field_5bb3c4dd72377',
                        'label' => 'Client',
                        'name' => 'project_client',
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
                        'key' => 'field_5bb3c4f072378',
                        'label' => 'Owner',
                        'name' => 'project_owner',
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
                        'key' => 'field_5bb3c50c72379',
                        'label' => 'Project Size',
                        'name' => 'project_size',
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
                        'key' => 'field_5bb3c50c72313423479',
                        'label' => 'Project Intro',
                        'name' => 'project_intro',
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
                        'prepend' => '',
                        'append' => '',
                        'maxlength' => '',
                    ),
                    array(
                        'key' => 'field_5bb3c5207223425',
                        'label' => 'Project Images',
                        'name' => 'project_images',
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
                        'max' => 3,
                        'layout' => 'table',
                        'button_label' => '',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_5bb3c532342317237b',
                                'label' => 'Project Image',
                                'name' => 'project_image',
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
                    array(
                        'key' => 'field_5bb3c5207237a',
                        'label' => 'Services',
                        'name' => 'project_services',
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
                        'max' => 3,
                        'layout' => 'table',
                        'button_label' => '',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_5bb3c5317237b',
                                'label' => 'Name',
                                'name' => 'service_name',
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
                                'key' => 'field_5bb3c54c7237c',
                                'label' => 'Link',
                                'name' => 'service_link',
                                'type' => 'link',
                                'instructions' => '',
                                'required' => 0,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'return_format' => 'array',
                            ),
                        ),
                    ),
                ),
                'location' => array(
                    array(
                        array(
                            'param' => 'post_type',
                            'operator' => '==',
                            'value' => 'project',
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

?>
