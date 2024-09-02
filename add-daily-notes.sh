#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Add to Daily Notes
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 📝
# @raycast.argument1 { "type": "text", "placeholder": "Enter note" }

# Documentation:
# @raycast.description Add a new line to your daily notes
# @raycast.author Your Name
# @raycast.authorURL https://github.com/yourusername

# Get today's date
TODAY=$(date +"%Y-%m-%d")

# Set the path for your daily notes file
NOTES_DIR="$HOME/Documents/DailyNotes"
NOTES_FILE="$NOTES_DIR/$TODAY.txt"

# Create the directory if it doesn't exist
mkdir -p "$NOTES_DIR"

# Get current time in AM/PM format
CURRENT_TIME=$(date +"%I:%M %p")

# Append the new note to the file
echo "$CURRENT_TIME - $1" >> "$NOTES_FILE"

echo "Note added to $TODAY's notes."