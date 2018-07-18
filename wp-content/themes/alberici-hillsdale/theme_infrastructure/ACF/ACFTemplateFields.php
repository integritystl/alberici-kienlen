<?php
namespace AlbericiHillsdale;

class ACFTemplateFields
{
  public static function setupTemplateFields()
  {
    self::setupHomePageFields();
    self::setupFlexContentFields();
  }


  private static function setupFlexContentFields()
  {
    if( function_exists('acf_add_local_field_group') ):


    endif;
  }

  private static function setupHomePageFields()
  {
    if( function_exists('acf_add_local_field_group') ):


      endif;
  }
}
