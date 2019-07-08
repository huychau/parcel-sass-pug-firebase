# Parcel SASS Pug Firebase Development

## Requirements

- npm installed on Mac, Ubuntu

## Getting Started

### Install parcel
```
npm install -g parcel-bundler
```

### Clone this repo
```
git clone git@gitlab.com:huy-chau/parcel-sass-pug-firebase.git
```

- You can update `styles`, `templates`, `scripts` structures follow your patterns.
- Update your Firbase configs in `.env`

### Install packages

At your directory root, run:
```
npm install
```

### Run server
```
npm start
```

Open on web: http://localhost:1234/index.html

### Build
```
npm run-scripts build
```

### Deploy to Firebase

#### Setup (one time)
- Install Firebase CLI `npm install -g firebase-tools`
- Update `.firbaserc` to your configs
- Login  Firebase `firebase login`
- Init firebase `firebase init` (No need this step)
- Choose project `firebase use <project-id>`

#### Deploy
```
npm run-scripts deploy
```

Open on web: https://parcel-sass-pug-firebase.firebaseapp.com

*Note: Live-reload is supported*
