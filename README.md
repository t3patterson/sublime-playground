#Sublime Config / Walkthrough

####0. Misc Resources
 - [Keyboard Shortcuts](./keyboard-shortcuts.md)
 - [Pro Tips](./protips.md)

####1. Install sublime.

  Get your copy here: http://www.sublimetext.com/
  You can pay for it, or not. If you don't pay, it will keep asking you to purchase.

####2. Set up launch from command line
  You want to be able to launch sublime from your terminal.

  ```
  $ sudo ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/sublime
  ```

  Confirm that it works by typing `sublime .` in your terminal and the application should open with files accessible from current directory.

####3. Configure Editor Settings
  Settings are configured in this file:  
  `Sublime Text  ->  Preferences  ->  Settings - User`
  
  (the file name will be: `Preferences.sublime-settings –– User`)
  
  You can customize user settings as a JSON object. Here is my preferred initial configuration:
  ```
  {
    "font_size": 15,
    "font_face": "Menlo",
    "tab_size": 2,
    "translate_tabs_to_spaces": true
  }

  ```

  You can see all of the configureable settings in the '——Default' settings file:  
  `Sublime Text  ->  Preferences  ->  Settings - Default`

  You can't change this file...all changes must be made in the `——User` settings file. 

####4. Setup Package Control
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

####5. Install Some Useful Packages
  See the selection of registered packages: Go to command palette(`⇧` + `⌘` + `P`) and type *install package*

  It should auto complete to *Package Control: Install Package*
  
#####Presentation/Visual

|  Package Name           |     Utility                                 |
|-------------------------|  -----------------------                    |
|  Origami                |  For maximizing screen real estate          |
|  Pretty JSON            | organized json presentation                  |
|  HTML-CSS-JS Prettify   | for proper indentation with `⇧` + `⌘` + `H` | 
|   CSS3                  | Proper syntax highlighting for CSS          |
|   Bracket Highlighter   | useful visual aid for matching brackets     |
|   MarkdownEditing       | for markdown syntax highlighting            |


 
##### Utility
|  Package Name           |     Utility                                    |
|-------------------------|  --------------------------------------------   |
|  Emmet                  | HTML /CSS keyboard shortcuts                    |
|  Sidebar Enhancements   | More options from the sidebar                   | 
|   BufferScroll          | for maintaining editor state btw sessions <br/>                            remembers code folds, cursor position, </br>                            pane layout etc.                                |
|   MarkdownTOC           | useful visual aid for matching brackets         |
|  Git                    | for checking out your changes since last commit |

####6. Create Color Themes
  - You can see the list of themes located in  `Preferences -> Color Scheme`
    
  - Color schemes are located in `/Packages/Color Scheme –– Default`  
  
  - Install color schemes through Package Control.
  
  - For Syntax specific highlighting.  
    `Preferences  ->  Settings - More  ->  Syntax Specific –– User`
      
    Example in `CSS.sublime-settings` file
    ```
      {
        extensions: ["css", "scss"],
        "color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme"
      }
    ```

  - *Tip*: **ColorSchemeSelector** package will let you modify color schemes from the command palette.
    - Once installed, just `⇧` + `⌘` + `P` to get command palette and type in 'ColorSchemeSelector: Select Color Scheme' to cycle through all the schemes
  

