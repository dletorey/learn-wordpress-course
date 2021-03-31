class SearchObject {
    //1. create and initiate the object
    constructor() {
        this.openButton = document.querySelectorAll(".js-search-trigger");
        this.closeButton = document.querySelector(".search-overlay__close");
        this.searchOverlay = document.querySelector(".search-overlay");
        this.body = document.querySelector("body");
        this.searchInput = document.querySelector("#search-term");
        this.results = document.querySelector("#search-overlay__results");
        this.spinner = document.createElement('div');
        this.spinner.classList.add('spinner-loader');
        this.isOverlayOpen = false;
        this.isSpinnerVisible = false;
        this.typingTimer;
        this.previousValue;
        this.events();
    }
 
    //2. events
    events(){
        this.openButton[0].addEventListener('click', this.openOverlay.bind(this));
        this.openButton[1].addEventListener('click', this.openOverlay.bind(this));
        this.closeButton.addEventListener('click', this.closeOverlay.bind(this));
        document.addEventListener('keydown', this.keyPressDispatcher.bind(this));
        this.searchInput.addEventListener('keyup', this.typingLogic.bind(this));
    }
 
    //3. methods (or functions)
    createNode(element) {
        return document.createElement(element);
    }
    append(parent, el) {
        return parent.appendChild(el);
    }
    typingLogic() {
        if (this.searchInput.value != this.previousValue) {
            clearTimeout(this.typingTimer);
            if (this.searchInput.value) {
                if (!this.isSpinnerVisible) {
                    this.results.innerHTML = "<div class='spinner-loader'></div>";
                    this.isSpinnerVisible = true;
                }
                this.typingTimer = setTimeout(this.loadResults.bind(this), 2000);
            } else {
                this.results.innerHTML = "";
                this.isSpinnerVisible = false;
            }
        }
        this.previousValue = this.searchInput.value;
    }
    loadResults(){
        let results = this.results;
        fetch('/wp-json/wp/v2/posts?search=' + this.searchInput.value) // Call the fetch function passing the url of the API as a parameter
        .then(response => response.json())
        .then(function(data) {
            results.innerHTML = `
            <h2 class="search-overlay__section-title">General Information</h2>
            <ul class="link-list min-list">
            ${data.map(item => `<li><a href="${item.link}">${item.title.rendered}</a></li>`).join('')}
            </ul>
            `
        })
        .catch(function(ex) {
            // This is where you run code if the server returns any errors
            console.log('Well that failed' + ex.message);
        });
    }
    keyPressDispatcher(e) {
        if (e.keyCode == 83 && !this.isOverlayOpen) {
            this.openOverlay();
        }
        if (e.keyCode == 27 && this.isOverlayOpen) {
            this.closeOverlay();
        }
    }
    openOverlay(){
        this.searchOverlay.classList.add('search-overlay--active');
        this.body.classList.add('body-no-scroll');
        this.isOverlayOpen = true;
    }
    
    closeOverlay(){
        this.searchOverlay.classList.remove('search-overlay--active');
        this.body.classList.remove('body-no-scroll');
        this.isOverlayOpen = false;
    }
}
 
export default SearchObject;