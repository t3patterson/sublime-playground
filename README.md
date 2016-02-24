#Sublime Playground Tutorial

Point of this repo is to use the files posted here as a demo site in the context of exploring sublime packages. The site is broken as-is but we will fix it as we explore of features of the packages listed below.

###Packages Installed & Examined

|  Package Name           |     Utility                                 |
|-------------------------|  -----------------------                    |
|  Origami                |  For maximizing screen real estate          |
|  Autofilename           |  For completing filenames in local directories |
|  HTML-CSS-JS Prettify   | for proper indentation with `⇧` + `⌘` + `H` | 
|   ColorHighlighter      | Show hex/rgba colorhighlighting for CSS     |
|   CSS3                  | Proper syntax highlighting for CSS3          |
|   Bracket Highlighter   | useful visual aid for matching brackets     |
|  Sidebar Enhancements   | More options from the sidebar                   | 
|   BufferScroll          | for maintaining editor state btw sessions <br/>                            remembers code folds, cursor position, </br>                            pane layout etc.                                |

####0. Setup the demo folders and files files
[Clone the repo](https://github.com/t3patterson/sublime-playground-tutorial-part1)


####1.Setup Package Control
  Sublime text supports addons/plugins/extensions, and we access these through a package manager called **Package Control**.

  Package Control requires a one-time install. Here are the directions to complete the installation:

  1. Go to https://packagecontrol.io/installation
  2. Copy the text on the clip board
  3. Open up the console: `View  ->  Show Console` or alternately `^` + `` ` ``
  4. Paste the text from packagecontrol.io in the input-area and hit `enter`
  5. Verify that Package Control was installed:
    - Open Command Palette:  `⇧` + `⌘` + `P` and type *Package Control*...the text should auto-fill and there should be several options like:
      - *Package Control: Add Channel*
      - *Package Control: Add Repository*
      - *Package Control: Disable Package*
      - ...etc
    - If not working, quit editor and restart

