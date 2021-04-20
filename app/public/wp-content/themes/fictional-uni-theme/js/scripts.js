import "../css/style.css"

// Our modules / classes
import MobileMenu from "./modules/MobileMenu"
import HeroSlider from "./modules/HeroSlider"
import GoogleMap from "./modules/GoogleMap"
import SearchObject from "./modules/Search"
import MyNotes from "./modules/my-notes"
import Like from "./modules/like"


// Instantiate a new object using our modules/classes
var mobileMenu = new MobileMenu()
var heroSlider = new HeroSlider()
const googleMap = new GoogleMap()
const search = new SearchObject()
const mynotes = new MyNotes()
const like = new Like()

// Allow new JS and CSS to load in browser without a traditional page refresh
if (module.hot) {
  module.hot.accept()
}
