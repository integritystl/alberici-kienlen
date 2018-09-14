<?php
  global $post;
  $url = get_permalink($post->ID);
  $url = esc_url($url);
?>
<div class="share-menu">
  <p class="share-now">Share Now</p>
  <nav class="social-navigation menu">
    <ul class="menu">
      <li class="menu-item facebook">
        <a target="_blank" rel="noopener" aria-label="Share to Facebook" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $url; ?>"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
      </li>
      <li class="menu-item twitter">
        <a target='_blank' rel="noopener" aria-label="Share to Twitter" href='https://twitter.com/share?url=<?php echo $url; ?>'><i class="fab fa-twitter" aria-hidden="true"></i></a>
      </li>
      <li class="menu-item linkedin">
        <a target='_blank' rel="noopener" aria-label="Share to Linkedin" href='https://www.linkedin.com/shareArticle?url=<?php echo $url; ?>'><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
      </li>
      <li class="menu-item googleplus">
        <a target="_blank" rel="noopener" aria-label="Share to GooglePlus" href="https://plus.google.com/share?url=<?php echo $url; ?>"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a>
      </li>
    </ul>
  </nav>
</div>
