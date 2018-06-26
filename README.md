# Event Web
Introduction
A web app to see events happening in your city, big organised and local community events.
The web version of [event-app](https://github.com/emilyparkes/event-app).

### Getting Started:
- create your own branch off of master
- pull down any changes
```shell
git pull origin development
```
- install dependencies
```shell
yarn
```
  - if `sodium` does not build run 
  ```shell
  sudo apt install automake autoconf libtool
  ```
- create your database
```shell
yarn migrate
yarn seed
```
- using auth
  - check the `.env.example` file
  - change it to `.env`
  - change the `JWT_SECRET`
- start the server
```shell
yarn dev
```

### Testing
coming soon...

#### References
[Colour Palette](https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=4527A0&secondary.color=4DD0E1)
