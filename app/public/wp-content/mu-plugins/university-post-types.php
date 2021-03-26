<?php
function university_post_types() {
    register_post_type('event', array(
        'rewrite' => array('slug' => 'events'),
        'has_archive' => true,
        'public' => true,
        'labels' => array(
          'name' => 'Events',
          'add_new_item' => 'Add New Event',
          'edit_item' => 'Edit Event',
          'all_items' => 'All Events',
          'singular_name' => 'Event'
        ),
        'menu_icon' => 'dashicons-calendar-alt'
      ));
    register_post_type('dave', array(
        'rewrite' => array('slug' => 'daves'),
        'has_archive' => true,
        'public' => true,
        'labels' => array(
            'name' => 'DaveType',
            'add_new_item' => 'Add New Dave',
            'edit_item' => 'Edit Dave',
            'all_items' => 'All Daves',
            'singular_name' => 'Dave'
        ),
        'menu_icon' => 'dashicons-universal-access-alt'
    ));
}
add_action('init', 'university_post_types');
?>