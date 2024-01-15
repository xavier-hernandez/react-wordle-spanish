# Wordle in Spanish

This is a clone of https://github.com/cwackerfuss/react-wordle translated in spanish with a spanish wordlist.

Docker Image: https://hub.docker.com/r/xavierh/wordle-spanish-espanol

``` yaml
version: '3.3'
services:
    wordle-es:
        image: xavierh/wordle-spanish-espanol:latest
        container_name: wordle-es
        ports:
            - '80:80'
        restart: always
```
