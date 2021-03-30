<?php 

get_header();
pageBanner(array(
  'title' => 'All Events',
  'subtitle' => 'See what\'s happening'
))

?>
  <div class="container container--narrow page-section">
    <?php 
      while(have_posts()) {
        the_post(); 
        get_template_part('template-parts/content', 'event');
      }
      echo paginate_links();
    ?>
  <hr class="section-break">
  <p>Checkout our <a href="<?php echo site_url('/past-events'); ?>">past events</a>.</p>
  </div>
<?php get_footer(); ?>