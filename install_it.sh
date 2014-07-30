#!/bin/bash

html_prod="/usr/local/nginx/html/"


sudo cp index.todo.html $html_prod

for dir in js css img; do
	sudo mkdir -p $html_prod/$dir/
done

sudo cp css/* $html_prod/css/
sudo cp js/* $html_prod/js/
sudo cp img/* $html_prod/img/


