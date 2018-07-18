<?php
namespace AlbericiHillsdale;

class ACFOptionsPage
{
  public static function setupOptionsPage() {

    if( function_exists('acf_add_options_page')){
      acf_add_options_page(array(
        'page_title' 	=> 'Theme Config',
        'menu_title'	=> 'Theme Config',
        'menu_slug' 	=> 'theme-config',
        'capability'	=> 'edit_posts',
        'redirect'		=> false
      ));

      acf_add_options_sub_page(array(
        'page_title' 	=> 'Theme Header Settings',
        'menu_title'	=> 'Header',
        'menu_slug'     => 'header_settings',
        'parent'	=> 'theme-config',
      ));


    }

    if( function_exists('acf_add_local_field_group') ):


    endif;
  }
}
