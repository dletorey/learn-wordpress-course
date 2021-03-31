class SearchObject {
    //1. create and initiate the object
    constructor() {
        this.addSearchHTML();
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
                this.typingTimer = setTimeout(this.loadMultiResultTypes.bind(this), 500);
            } else {
                this.results.innerHTML = "";
                this.isSpinnerVisible = false;
            }
        }
        this.previousValue = this.searchInput.value;
    }
    loadResults(){
        let results = this.results;
        fetch(uniData.root_url + '/wp-json/wp/v2/posts?search=' + this.searchInput.value) // Call the fetch function passing the url of the API as a parameter
        .then(response => response.json())
        .then(function(data) {
            results.innerHTML = `
            <h2 class="search-overlay__section-title">General Information</h2>
            ${data.length ? '<ul class="link-list min-list">' : '<p>Sorry there are no results for this query</p>' }
            ${data.map(item => `<li><a href="${item.link}">${item.title.rendered}</a></li>`).join('')}
            ${data.length ? '</ul>' : ''}
            `
        })
        .catch(function(ex) {
            // This is where you run code if the server returns any errors
            console.log('Well that failed' + ex.message);
        });
        this.isSpinnerVisible = false;
    }
    async loadMultiResultTypes() {
        try {
        let results = this.results;
        const [postResponse, pageResponse] = await Promise.all([
            fetch(uniData.root_url + '/wp-json/wp/v2/posts?search=' + this.searchInput.value),
            fetch(uniData.root_url + '/wp-json/wp/v2/pages?search=' + this.searchInput.value)
        ]);
        const posts = await postResponse.json();
        const pages = await pageResponse.json();
        const combinedResults = posts.concat(pages);
        console.log(combinedResults);
        results.innerHTML = `
            <h2 class="search-overlay__section-title">General Information</h2>
            ${combinedResults.length ? '<ul class="link-list min-list">' : '<p>Sorry there are no results for this query</p>' }
            ${combinedResults.map(item => `<li><a href="${item.link}">${item.title.rendered}</a>${item.type == 'post' ? ` by ${item.authorName}` : ''}</li>`).join('')}
            ${combinedResults.length ? '</ul>' : ''}
            `
        } catch(error) {
            results.innerHTML = `<p>Sorry something has gone wrong please try later. ${error}</p>`
        }
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
        setTimeout(() => this.searchInput.focus(), 301)
        this.searchInput.value = '';
        this.isOverlayOpen = true;
    }
    
    closeOverlay(){
        this.searchOverlay.classList.remove('search-overlay--active');
        this.searchInput.blur();
        this.body.classList.remove('body-no-scroll');
        this.isOverlayOpen = false;
    }

    addSearchHTML() {
        document.body.append(`
        <div class="search-overlay">
          <div class="search-overlay__top">
            <div class="container">
              <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>
              <input type="text" class="search-term" placeholder="What are you looking for?" id="search-term">
              <i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>
            </div>
          </div>
          <div class="container">
            <div id="search-overlay__results"></div>
          </div>
        </div>
        `);
    }
}
 
export default SearchObject;