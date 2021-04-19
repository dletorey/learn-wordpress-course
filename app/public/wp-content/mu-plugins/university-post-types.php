<?php
function university_post_types() {
    register_post_type('campus', array(
        'show_in_rest' => true,
        'capability_type' => 'campus', // allows permissions to be set for Campus Manager to edit events
        'map_meta_cap' => true, // allows permissions to be set for Campus Manager to edit events
        'supports' => array('title', 'editor', 'excerpt'),
        'rewrite' => array('slug' => 'campuses'),
        'has_archive' => true,
        'public' => true,
        'labels' => array(
          'name' => 'Campuses',
          'add_new_item' => 'Add New Campus',
          'edit_item' => 'Edit Campus',
          'all_items' => 'All Campuses',
          'singular_name' => 'Campus'
        ),
        'menu_icon' => 'dashicons-location-alt'
      ));
    register_post_type('event', array(
        'show_in_rest' => true,
        'capability_type' => 'event', // allows permissions to be set for event planners to edit events
        'map_meta_cap' => true, // allows permissions to be set for event planners to edit events
        'supports' => array('title', 'editor', 'excerpt'),
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
    register_post_type('program', array(
        'show_in_rest' => true,
        'supports' => array('title'),
        'rewrite' => array('slug' => 'programs'),
        'has_archive' => true,
        'public' => true,
        'labels' => array(
          'name' => 'Programs',
          'add_new_item' => 'Add New Program',
          'edit_item' => 'Edit Program',
          'all_items' => 'All Programs',
          'singular_name' => 'Program'
        ),
        'menu_icon' => 'dashicons-awards'
      ));
    register_post_type('note', array(
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'public' => false,
        'show_ui' => true,
        'labels' => array(
          'name' => 'Notes',
          'add_new_item' => 'Add New Note',
          'edit_item' => 'Edit Note',
          'all_items' => 'All Notes',
          'singular_name' => 'Note'
        ),
        'menu_icon' => 'dashicons-welcome-write-blog'
      ));
    register_post_type('professor', array(
        'show_in_rest' => true,
        'supports' => array('title', 'editor'),
        'public' => true,
        'labels' => array(
          'name' => 'Professors',
          'add_new_item' => 'Add New Professor',
          'edit_item' => 'Edit Professor',
          'all_items' => 'All Professors',
          'singular_name' => 'Professor'
        ),
        'menu_icon' => 'dashicons-welcome-learn-more'
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