#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title New todo blank
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 📝

# Documentation:
# @raycast.description Creates a new Todo note with today's date in the To Do folder in Apple Notes
# @raycast.author YourName
# @raycast.authorURL https://raycast.com/YourName

# Get today's date in the format M/D/YY
TODAY_DATE=$(date "+%-m/%-d/%y")

# Create the note title
NOTE_TITLE="Todo $TODAY_DATE"

# AppleScript to create a new note in the To Do folder
osascript <<EOF
tell application "Notes"
    tell account "iCloud"
        tell folder "To Do"
            make new note with properties {name:"$NOTE_TITLE", body:"$NOTE_TITLE"}
        end tell
    end tell
    activate
end tell
EOF

echo "Created new note '$NOTE_TITLE' in To Do folder"

 -- Create the new note with carried over items
            make new note with properties {name:"$NOTE_TITLE", body:newContent}


            