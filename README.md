# travis micheletti - portfolio

### initial wireframe
![image](https://user-images.githubusercontent.com/106038655/176255032-63917173-2aec-42d8-8c84-9e6d5d849c76.png)
![image](https://user-images.githubusercontent.com/106038655/176255095-b672a926-85aa-4026-93b1-09973a305742.png)
![image](https://user-images.githubusercontent.com/106038655/176255139-af955bd5-33f2-4438-b023-7cba727706e1.png)
![image](https://user-images.githubusercontent.com/106038655/176255172-b56e1481-6fdc-4d43-8bf4-f461571b0e7d.png)


### finished design for mobile
![Screen Shot 2022-06-28 at 11 23 58 AM](https://user-images.githubusercontent.com/106038655/176255801-90d1e525-871d-42ab-a1cd-76176608bef0.png)
![Screen Shot 2022-06-28 at 11 24 20 AM](https://user-images.githubusercontent.com/106038655/176255821-47f11522-abb9-4ecf-8b04-0aec5b20f734.png)


### finished design for web
![Screen Shot 2022-06-28 at 1 50 07 PM](https://user-images.githubusercontent.com/106038655/176285230-f6955410-22fd-4792-bc88-3e5f3eaef033.png)
![Screen Shot 2022-06-28 at 11 26 33 AM](https://user-images.githubusercontent.com/106038655/176256229-49f2ad1e-b7f0-4db5-b46c-89d43fe6805f.png)


### deployment
Netlify link: https://sparkly-puppy-63010f.netlify.app/

### installation
to make changes:
1. fork repository
2. clone/copy ssh link
3. git clone <link>
4. navigate to folder for cloned directory in terminal
5. code .

### technologies used
- HTML
- CSS
- JavaScript

### user stories
- As a user, I want an understandable and navigable interface so I can easily find the information about me/Travis I'm looking for
- As a friend/family member, I want to be able to see/experience projects with some context behind what's going on
- As a potential HR manager for a company, I want an intuitive design where I can both find the information about a potential hire and see what they're capable of
- As a software engineer, I want to be able to see the code of a project to judge where they're at in their professional development
- As a software engineer, I also want access to a markdown to take me through their creative process and see how their mind works

### approach taken
- goal was a single-page application so i wanted to do everything via DOM manipulation
- general idea was to start on the HTML and i had the majority of that done within the first day or so
- from there i started setting up basic variables in JS to test being able to access them via console.log
- once i had the bones laid out of being able to use DOM to manipulate the page i started doing the styling
- everything was styled/designed for mobile from the ground up so by the end of the 2nd day i had the framework for what i wanted styling-wise
- once styling was mostly completed i started writing functions for navigating around the page as well as displaying/hiding different pieces of information in the bio
- ended up using a theme selector for my 3rd javascript interaction as i felt it was needed (currently a much bigger fan of the light mode but leaving dark as default for now)
### unsolved problems
- as stated above i do think default light mode is much more aesthetically pleasing and would like to not only make that the default but eventually do more tweaking of the dark mode. did have a gradient previously but found using that (background-image) versus a solid color made switching themes more difficult
- there are limitations with using the single page application that i was able to find some solutions on but didn't implement at this time, primarily the inability to use the browser back button by default
    - as i understand it it's a matter of setting up some pseudo-"events" (this is definitely the wrong wording) that are treated as navigation events/pages that the browser can navigate through. didn't want to just copy and paste a solution though
### future goals
- unfortunately i think the future goal of this project is to take what i learned and do it completely differently (mostly due to aesthetics)
- barebones of HTML may still be useable however so I may go back and eventually do a makeover and change up the interactions
- will probably serve as a sandbox project to try things out on in the future

