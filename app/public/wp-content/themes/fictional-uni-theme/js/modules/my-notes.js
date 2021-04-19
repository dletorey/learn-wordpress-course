import $ from 'jquery';

class MyNotes {
    constructor() {
        this.events();
    }

    events() {
        $(".delete-note").on("click", this.deleteNote);
    }

    // Methods go here
    deleteNote() {
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', uniData.nonce);
            },
            url: uniData.root_url + '/wp-json/wp/v2/note/97',
            type: 'DELETE',
            success: (response) => {
                console.log("Congrats you delete the note");
                console.log(response);
            },
            error:  (response) => {
                console.log("Sorry something went wrong");
                console.log(response);
            }
        })
    }
}

export default MyNotes;