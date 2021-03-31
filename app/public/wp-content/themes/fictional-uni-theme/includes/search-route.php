<?php

add_action('rest_api_init', 'uniRegisterSearch');

function uniRegisterSearch() {
    register_rest_route('university/v1', 'search', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'uniSearchResults'
    ));
}

function uniSearchResults() {
    return 'Congrats it worked';
}

?>