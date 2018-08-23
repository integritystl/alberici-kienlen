<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package alberici-hillsdale
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'alberici-hillsdale' ); ?></a>

	<header id="masthead" class="site-header">

		<div class="utility-bar">
			<nav class="utility-bar_menu">
				<?php 
				wp_nav_menu( array(
					'theme_location' => 'utility-menu',
					'menu_id' => 'utility-menu',
				) ); 
				?>
			</nav>
		</div>

		<div class="main-header">
			<div class="container">
				<div class="site-branding">
						<?php
						the_custom_logo();
						if ( is_front_page() && is_home() ) :
							?>
							<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
							<?php
						else :
							?>
							<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
							<?php
						endif;
						$alberici_hillsdale_description = get_bloginfo( 'description', 'display' );
						if ( $alberici_hillsdale_description || is_customize_preview() ) :
							?>
							<p class="site-description"><?php echo $alberici_hillsdale_description; /* WPCS: xss ok. */ ?></p>
						<?php endif; ?>
				</div><!-- .site-branding -->

				
				<nav id="site-navigation" class="main-navigation">
					<?php
					wp_nav_menu( array(
						'theme_location' => 'primary-menu',
						'menu_id'        => 'primary-menu',
					) );
					?>
				</nav><!-- #site-navigation -->
			</div>
		</div>
		<div class="breadcrumbs">
			<?php
			if ( function_exists('yoast_breadcrumb') ) {
				yoast_breadcrumb( '
				<p id="breadcrumbs">','</p>
				' );
			}
			?>
		</div>
		
	</header><!-- #masthead -->

	<div id="content" class="site-content">
