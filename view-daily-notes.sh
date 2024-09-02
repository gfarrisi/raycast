#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title View Daily Notes
# @raycast.mode fullOutput

# Optional parameters:
# @raycast.icon 📄

# Documentation:
# @raycast.description View your daily notes
# @raycast.author Your Name
# @raycast.authorURL https://github.com/yourusername

# Get today's date
TODAY=$(date +"%Y-%m-%d")

# Set the path for your daily notes file
NOTES_DIR="$HOME/Documents/DailyNotes"
NOTES_FILE="$NOTES_DIR/$TODAY.txt"

# Check if the file exists
if [ -f "$NOTES_FILE" ]; then
    echo "Daily Notes for $TODAY:"
    echo "----------------------"
    cat "$NOTES_FILE"
else
    echo "No notes found for $TODAY."
fi