<!-- WRITE CODE FOR MOBILE FIRST -->
Home page loads
            -link to css, script to java bottom of body or defer if in head
            -event listener for click/hover for different elements
            -have the center graphic interactive somehow?
    -What is seen?
        -top left: name title - h1?
            -h1
        -nav on left(bottom for mobile - below buttons): links to socials
            -nav
            -flexbox
        -nav on bottom: buttons for bio, projects, resume
            -nav
            -flexbox
        -upper right: rounded out photo
            -css styles to round
        -for mobile: cascading: picture - name - graphic - buttons - links
            -set media query to min screen size to change stylings for larger tablets and pc's
    -Interactions?
        -LinkedIn,GitHub -> opens new window to respective site
            -look up how to open new window onclick in JS
        -Contact Me/Email -> email via form? copies email add?
            -look up forms and easiest implementation
        -Bio, projects, resume -> navigates to respective page
Bio page loads
    -What is seen?
        -"Who am I?" on top for title
        -nav on left(bottom for mobile - below buttons): links to socials + home page
        -nav on bottom: buttons for bio, projects, resume
        -left half of white space
            -brand statement on left
        -right half of white space
            -4 buttons/hover areas for extra info:
                -sports
                -games
                -food
                -music
                    -these will be enabled by an event listener for hover/click
                    -need to be sure this is obvious to do w/ a tooltip(as shown below)
            -tool tip to encourage clicking/hovering of extra info buttons
        -for mobile: cascading: title, brand statement, 4 buttons/hover areas for extra info, nav buttons, nav links
    -Interactions?
        -LinkedIn,GitHub -> opens new window to respective site
        -Contact Me/Email -> email via form? copies email add?
        -Bio, projects, resume -> navigates to respective page
        -Home button -> navigates home
Projects page loads
    -What is seen?
        -nav on left(bottom for mobile - below buttons): links to socials + home page
        -nav on bottom: buttons for bio, projects, resume
        -project squares: pictures w/ title above and a link to github repo
            -pictures on-click bring up a slideshow?
        -for mobile: title, single project images/links cascading down() perhaps to be replaced with sliding tiles in the future), nav buttons, nav links
    -Interactions?
        -LinkedIn,GitHub -> opens new window to respective site
        -Contact Me/Email -> email via form? copies email add?
        -Bio, projects, resume -> navigates to respective page
        -Home button -> navigates home
Resume page loads
    -What is seen?
        -nav on left(bottom for mobile - below buttons): links to socials + home page
        -nav on bottom: buttons for bio, projects, resume
        -top title reads "Professional Experience"
        -main content div features resume in pdf format, maybe it will accept images in pdf format? if not need to look into it
            -figure out best/most intuitive way to place a pdf doc into the page w/ DOM
            <!-- -display: none? visability: hidden? -->
        -for mobile: title, resume image, nav buttons, nav links
    -Interactions?
        -LinkedIn,GitHub -> opens new window to respective site
        -Contact Me/Email -> email via form? copies email add?
        -Bio, projects, resume -> navigates to respective page
        -Home button -> navigates home
Contact Me page?
    -basic form for interacting with me - unsure on execution of this one yet


<!-- OTHER IDEAS -->
-move home button to upper right on desktop?
-1 main div to encompass the primary elements that will change between different screens
-separate div for my photo on home page and home button for desktop?
-retro gaming theme?
-"press play" to navigate past home screen?