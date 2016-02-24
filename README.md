#Sublime Config / Walkthrough

####0. Misc Resources
 - [Keyboard Shortcuts](./keyboard-shortcuts.md)
 - [Pro Tips](./protips.md)

###Packages Installed & Examined

#####Presentation/Visual

|  Package Name           |     Utility                                 |
|-------------------------|  -----------------------                    |
|  Origami                |  For maximizing screen real estate          |
|  HTML-CSS-JS Prettify   | for proper indentation with `⇧` + `⌘` + `H` | 
|   CSS3                  | Proper syntax highlighting for CSS          |
|   Bracket Highlighter   | useful visual aid for matching brackets     |
|   MarkdownEditing       | for markdown syntax highlighting            |
|  Pretty JSON            | organized json presentation                  |


##### Utility
|  Package Name           |     Utility                                    |
|-------------------------|  --------------------------------------------   |
|  Emmet                  | HTML /CSS keyboard shortcuts                    |
|  Sidebar Enhancements   | More options from the sidebar                   | 
|   BufferScroll          | for maintaining editor state btw sessions <br/>                            remembers code folds, cursor position, </br>                            pane layout etc.                                |
|   MarkdownTOC           | useful visual aid for matching brackets         |
|  Git                    | for checking out your changes since last commit |



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

####2. 
  

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
  

