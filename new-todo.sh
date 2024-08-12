#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title New Todo
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 📝

# Documentation:
# @raycast.description Creates a new Todo note with today's date and carries over unchecked items from the most recent note
# @raycast.author YourName
# @raycast.authorURL https://raycast.com/YourName

# Get today's date in the format M/D/YY
TODAY_DATE=$(date "+%-m/%-d/%y")

# Create the note title
NOTE_TITLE="Todo $TODAY_DATE"

# AppleScript to get unchecked items from the most recent note and create a new note
RESULT=$(osascript <<EOF
set newContent to "<h1>$NOTE_TITLE</h1>"

tell application "Notes"
    tell account "iCloud"
        tell folder "To Do"
            set recentNote to note 1
            set oldContent to body of recentNote
        end tell
    end tell
end tell

set oldDelimiters to text item delimiters
set text item delimiters to return
set contentLines to every text item of oldContent
set text item delimiters to oldDelimiters

set skipNextLine to false
repeat with aLine in contentLines
    set lineContent to contents of aLine
    if lineContent starts with "Todo" then
        -- Skip the old title
    else if lineContent contains "☑" then
        -- Skip checked items and the line after (which is usually empty)
        set skipNextLine to true
    else if skipNextLine then
        set skipNextLine to false
    else if lineContent starts with "<li>" and lineContent does not contain "☑" then
        -- Replace <li> with ☐ for unchecked items
        set newContent to newContent & "<div>☐" & (text 5 thru -6 of lineContent) & "</div>"
    else if lineContent starts with "<div>" and lineContent is not "<div><br></div>" then
        -- Keep section headers
        set newContent to newContent & lineContent
    end if
end repeat

tell application "Notes"
    tell account "iCloud"
        tell folder "To Do"
            make new note with properties {name:"$NOTE_TITLE", body:newContent}
        end tell
    end tell
    activate
end tell

return newContent
EOF
)

# Print the result
echo "Created new note '$NOTE_TITLE' in To Do folder with the following content:"
echo "$RESULT"