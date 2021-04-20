<?php 
add_action('rest_api_init', 'uniLikeRoutes');

function uniLikeRoutes() {
    register_rest_route('uni/v1', 'manageLike', array(
        'methods' => 'POST',
        'callback' => 'createLike'
    ));

    register_rest_route('uni/v1', 'manageLike', array(
        'methods' => 'DELETE',
        'callback' => 'deleteLike'
    ));
}

function createLike(){
    return 'Thanks for trying to create a like';
}

function deleteLike(){
    return 'Thanks for trying to delete a like';
}

?>