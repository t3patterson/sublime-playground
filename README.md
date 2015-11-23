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

  Confirm that it works by typing `sublime .` in your terminal and sublime should open with files accessible from current directory.

####3. Configure Editor Settings

  you can customize user settings in as a JSON object:

  `Sublime Text  ->  Preferences  ->  Settings - User`

  (the file name will be: `Preferences.sublime-settings –– User`)


  Here is my preferred initial configuration:
  ```
  {
    "font_size": 15,
    "font_face": "Menlo",
    "tab_size": 2,
    "translate_tabs_to_spaces": true
  }

  ```

  Note: you can see all of the configureable settings in the 'Default':
  `Sublime Text  >  Preferences  >  Settings - Default`

####4. Setup Package Control
  Sublime text supports addons/plugins/extensions, and we access these through a package manager called **Package Control**.

  Package Control requires a one-time install. Here are the directions to complete the installation:

  1. Go to https://packagecontrol.io/installation
  2. Copy the text on the clip board
  3. Open up the console: `View  >  Show Console`
  4. Paste the text in the input-area
    
  Verify that Package Control was installed:
  - Open Command Palette:  `SHIFT` + `⌘` + `P` and type *Package Control*...the text should auto-fill and there should be several options like:
    - *Package Control: Add Channel*
    - *Package Control: Add Repository*
    - *Package Control: Disable Package*
    - ...etc

####5. Install Some Useful Packages
  See the selection of registered packages: `SHIFT` + `⌘` + `P`  and type *install package*
  
  ##### Presentation/Visual
  1. Origami  -  For maximizing screen real estate
  2. Pretty JSON - organize json 
  3. HTML-CSS-JS Prettify
  4. CSS3 - Proper syntax highlighting for CSS
  5. Bracket Highlighter - useful visual aid for matching brackets
  6. MarkdownEditing
   
  ##### Utility
  1. Git - for checking out your changes since last commit
  2. Emmet - HTML shortcuts
  3. Sidebar Enhancements
  4. BufferScroll - for maintaining editor state btw sessions
  5. MarkdownTOC - generating a MarkdownTOC for your entire documentP

####6. Create Color Themes
  - You can see the list of themes located in  `Preferences -> Color Scheme`
    
  - Color schemes are located in `/Packages/Color Scheme - Default`  
  
  - Install color schemes through Package Control.
  
  - For Syntax specific highlighting.  
    `Preferences  ->  Settings - More  ->  Syntax Specific - User`
      
    Example in `CSS.sublime-settings` file
    ```
      {
        extensions: ["css", "scss"]
        "color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme"
      }
    ```

  - *Tip*: **ColorSchemeSelector** package will let you modify color schemes from the command palette.
    - Once installed, just `SHIFT` + `⌘` + `P` to get command pallette and type in 'ColorSchemeSelector: Select Color Scheme' to cycle through all the schemes
  

