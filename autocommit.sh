#!/bin/bash
CURRENT_DATE=$(date +"%d/%m/%Y %H:%M:%S")
COMMIT_MESSAGE="Actualización Auto. - $CURRENT_DATE"
git add .
git commit -m "$COMMIT_MESSAGE"
git push origin main
