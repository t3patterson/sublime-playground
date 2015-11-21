#Sublime Config / Walkthrough

[Keyboard Shortcuts](./keyboard-shortcuts.md)

###1. Install sublime.

###2. Set up launch from command line
```
$ sudo ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/sublime
```

###3. Configure settings

you can customize user settings in as a JSON object:
`Sublime Text  >  Preferences  >  Settings - User`

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


###4. Sublime package manager