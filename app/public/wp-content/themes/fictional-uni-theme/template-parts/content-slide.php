<div class="hero-slider__slide" style="background-image: url(<?php echo the_field('slide_background_image')['sizes']['SlideshowImage'] ?>);">
  <div class="hero-slider__interior container">
    <div class="hero-slider__overlay">
      <h2 class="headline headline--medium t-center"><?php echo the_title(); ?></h2>
      <p class="t-center"><?php echo the_field('slide_sub_heading') ?></p>
      <p class="t-center no-margin"><a href="<?php echo the_field('slide_cta_link') ?>" class="btn btn--blue"><?php echo the_field('slide_cta_text') ?></a></p>
    </div>
  </div>
</div>