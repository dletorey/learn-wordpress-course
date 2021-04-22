<?php

/* 
Plugin Name: Dave Plugin
Description: This is the Dave plugin and it makes everything a little bit more Dave
Version: 0.1.0
Author: Dave Letorey code-red.uk
*/
add_filter('the_content', 'DaveifyTheContent');

function DaveifyTheContent($content) {
    $content = $content . '<p>This content was brought to you by Dave</p>';
    $content = str_replace('Bacon', 'Dave', $content);
    return $content;
}

add_shortcode('programCount', 'countPrograms');

function countPrograms($programs) {
    $programs = wp_count_posts('program')->publish;
    return $programs;
}

?>