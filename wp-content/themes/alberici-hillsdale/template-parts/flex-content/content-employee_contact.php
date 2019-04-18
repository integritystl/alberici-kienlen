<?php
/**
*
* Component for 50/50 callout. Includes alignment radio (so we can add a class) image, & WizzyWig
*
**/
?>

        <?php
        if( have_rows('contact_people') ):?>
            <div class="contact-people container">
                <div class="contact-people-list">
                <?php
                    while ( have_rows('contact_people') ) : the_row(); ?>
                    <div class="contact-people-component">
                        <?php
                        $ContactProfileImg = get_sub_field('contact_people_profile_image');
                        $ContactType = get_sub_field('contact_people_contact_type');
                        $ContactName = get_sub_field('contact_people_name');
                        $ContactEmail = get_sub_field('contact_people_email');
                        $ContactOfficePhone = get_sub_field('contact_people_office_phone');
                        $ContactFax = get_sub_field('contact_people_fax');
                        ?>
                        <?php if ($ContactProfileImg) : ?>
                          <?php echo wp_get_attachment_image($ContactProfileImg, 'thumbnail'); ?>
                        <?php endif; ?>
                        <?php if ($ContactType) : ?>
                          <p class="contact-type"><?php echo $ContactType; ?></p>
                        <?php endif; ?>
                        <?php if ($ContactName) : ?>
                          <p><?php echo $ContactName; ?></p>
                        <?php endif; ?>
                        <?php if ($ContactEmail) : ?>
                          <p><a href="mailto:<?php echo $ContactEmail; ?>"><?php echo $ContactEmail; ?></a></p>
                        <?php endif; ?>
                        <?php if ($ContactOfficePhone) : ?>
                          <p><a href="tel:<?php echo $ContactOfficePhone; ?>"><?php echo $ContactOfficePhone; ?></a></p>
                        <?php endif; ?>
                        <?php if ($ContactFax) : ?>
                          <p>Fax: <?php echo $ContactFax; ?></p>
                        <?php endif; ?>
                    </div>

                    <?php endwhile;?>
                </div>
                <?php echo $ContactForm; ?>

            </div>
        <?php endif; ?>
