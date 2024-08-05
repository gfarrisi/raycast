#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title New Todo
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 📝

# Documentation:
# @raycast.description Creates a new Todo note with today's date and copies all content from the most recent note
# @raycast.author YourName
# @raycast.authorURL https://raycast.com/YourName

# Get today's date in the format M/D/YY
TODAY_DATE=$(date "+%-m/%-d/%y")

# Create the note title
NOTE_TITLE="Todo $TODAY_DATE"

# AppleScript to get all content from the most recent note and create a new note
RESULT=$(osascript <<EOF
tell application "Notes"
    tell account "iCloud"
        tell folder "To Do"
            set recentNote to note 1
            set oldContent to body of recentNote
            set newContent to "$NOTE_TITLE" & linefeed & oldContent
            
            -- Create the new note with all content from the previous note
            make new note with properties {name:"$NOTE_TITLE", body:newContent}
            
            -- Return the content of the new note
            return newContent
        end tell
    end tell
    activate
end tell
EOF
)

# Print the result
echo "Created new note '$NOTE_TITLE' in To Do folder with the following content:"
echo "$RESULT"