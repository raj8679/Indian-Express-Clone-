const navbar = ()=>{
    return `
    <div id="overlay"></div>
        <div id="mobile-menu" class="mobile-main-menu">
            <div id="buttons_section">
                <button id="button_one">Subscribe</button>
                <button id="button_two">Sign In</button>
            </div>

            <div id="menu_options">
                <div>
                    <ul>
                        <li><a href="">Epaper</a></li>
                        <li><a href="">India</a></li>
                        <li><a href="">Premium</a></li>
                        <li><a href="">Cities</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="">Opinion</a></li>
                        <li><a href="">Poltical Plus</a></li>
                        <li><a href="">Explained</a></li>
                        <li><a href="">Science</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="">Sports</a></li>
                        <li><a href="">World</a></li>
                        <li><a href="">Busines</a></li>
                        <li><a href="">Entertainment</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="">Health</a></li>
                        <li><a href="">Lifestyle</a></li>
                        <li><a href="">Technology</a></li>
                        <li><a href="">Education</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="">Eye</a></li>
                        <li><a href="">Trending</a></li>
                        <li><a href="">Investigation</a></li>
                        <li><a href="">Newsletter</a></li>
                    </ul>
                </div>
                <div id="last_sd">
                    <ul>
                        <li><a href="">Photo</a></li>
                        <li><a href="">Videos</a></li>
                        <li><a href="">Audio</a></li>
                        <li><a href="">Webstories</a></li>
                    </ul>
                </div>

            </div>
            <div id="option_last_section">
                <div id="trending_div">Trending</div>
                <div class="last_divSD">Crossword & sudoku</div>
                <div class="last_divSD">UPSC Key</div>
                <div class="last_divSD">Everyday Explainer</div>
                <div class="last_divSD">Health Specials</div>
                <div class="last_divSD">Academic Counselling</div>
                <div class="last_divSD">Follow Authors</div>
                <div class="last_divSD">Cricket</div>
            </div>
        </div>
        <div id="navbar">

            <div id="navbar_top_sd">

                <div class="menu_iconSD">

                    <button id="menu_btn" class="menu_section " type="button">
                        <span class="top_menu"></span>
                        <span class="middle_menu"></span>
                        <span class="bottom_menu"></span>

                        <span id="section_hidden">Sections</span>


                    </button>


                    <button id="search_button"><img id="sections_search_logo"
                            src="../images/search_FILL0_wght300_GRAD0_opsz48.png" alt=""></button>
                </div>
                <div id="language_section">

                    <div id="language">
                        <span>ENGLISH </span>
                        <span>| தமிழ்</span>
                        <span>| বাংলা</span>
                        <span>| മലയാളം</span>
                        <span>| हिंदी</span>
                        <span>| मराठी</span>
                    </div>

                </div>
                <div id="navbar_top_last">
                    <button id="news_letter"><a href="https://indianexpress.com/newsletters/">Newsletter </a><img
                            src="../images/newsletter.png" alt=""></button>
                    <img class="top_last" src="../images/facebook-icon.png" alt="">
                    <img class="top_last" src="../images/twitter-icon.png" alt="">
                    <img class="top_last" src="../images/youtube-icon.png" alt="">
                    <img class="top_last" src="../images/IE-insta-grey.png" alt="">
                </div>


            </div>

            <div id="middle_section_SD">
                <div id="date_time">Wednesday, Sep 28, 2022 <br> <span>EPAPER</span>
                    <span>| TODAY’S PAPER</span>
                </div>
                <div>
                    <img src="../images/indian-express-logo-n (1).png" alt="">
                    <p id="tag_line">JOURNALISM OF COURAGE</p>
                </div>
                <div>

                </div>
            </div>


            <div id="last_navbar_section">
                <div class="last_items">
                    <ul>
                        <li>Home</li>
                        <li>Explained</li>
                        <li>Poltical Pulse</li>
                        <li>India</li>
                        <li>Citites</li>
                        <li>Opinion</li>
                        <li>Entertainment</li>
                        <li>Lifestyle</li>
                        <li>Technology</li>
                        <li>Videos</li>
                        <li>Sports</li>
                        <li>Audio</li>
                        <li>Education</li>
                        <li>Premium</li>
                        <li>Investigation</li>
                        <li></li>
                    </ul>

                </div>
                <div id=" last_buttons_section">
                    <button type="submit" id="last_one">Subscribe</button>
                    <button type="submit" id="last_two">Sign In</button>
                </div>
            </div>

            <div id="navbar_last_section">
                <div id="last_trending">Trending</div>
                <div class="last_divSD">Crossword & sudoku</div>
                <div class="last_divSD">UPSC Key</div>
                <div class="last_divSD">Everyday Explainer</div>
                <div class="last_divSD">Health Specials</div>
                <div class="last_divSD">Academic Counselling</div>
                <div class="last_divSD">Follow Authors</div>
                <div class="last_divSD">Cricket</div>
            </div>

        </div>
    `
}

export {navbar}