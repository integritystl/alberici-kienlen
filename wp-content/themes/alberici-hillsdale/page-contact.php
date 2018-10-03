<?php
/**
 * Template Name: Contact
 *
 * This template displays Contact Page
 *
 * @package alberici-hillsdale
 */
get_header();
$ContactForm = get_field('contact_people_form');
?>
<div id="primary" class="content-area">
	<main id="main" class="site-main">
        <?php get_template_part( 'template-parts/hero' );?>

        <?php if ( get_the_content() ) { ?>
            <div class="entry-content container">
                <?php
                the_content();
                ?>
            </div><!-- .entry-content -->
        <?php } ?>

        <?php
        if( have_rows('contact_people') ):?>
            <div class="container">
                <div class="contact-people-component">
                <?php
                    while ( have_rows('contact_people') ) : the_row();
            
                    $ContactProfileImg = get_sub_field('contact_people_profile_image');
                    $ContactType = get_sub_field('contact_people_contact_type');
                    $ContactName = get_sub_field('contact_people_name');
                    $ContactEmail = get_sub_field('contact_people_email');
                    $ContactOfficePhone = get_sub_field('contact_people_office_phone');
                    $ContactFax = get_sub_field('contact_people_fax');
                    ?>
                    <?php echo wp_get_attachment_image($ContactProfileImg, 'large'); ?>
                    <p><?php echo $ContactType; ?></p>
                    <p><?php echo $ContactName; ?></p>
                    <p>Email: <?php echo $ContactEmail; ?></p>
                    <p>Office: <?php echo $ContactOfficePhone; ?></p>
                    <p>Fax: <?php echo $ContactFax; ?></p>

            
                    <?php endwhile;?>
                </div>
                <?php echo $ContactForm; ?>

            </div>
        <?php endif; ?>
	</main><!-- #main -->
</div><!-- #primary -->
<?php 
get_footer();
 ?>