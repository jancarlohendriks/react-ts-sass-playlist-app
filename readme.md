## Get started

### Clone

[Clone to CodeSandbox](https://githubbox.com/jancarlohendriks/react-ts-sass-playlist-app.git)

[Clone to Stackblitz](https://stackblitz.com/github/jancarlohendriks/react-ts-sass-playlist-app.git)

```
https://github.com/jancarlohendriks/react-ts-sass-playlist-app.git
```

### Install dependencies

```
npm i
```

### Run project

Application

```
npm run dev
```

Server:
```
npm run dev:server
```

## App Features

* You can view an overview of all artists. With a search bar you can quickly find your favorite artist.
* You can request an artist detail page with all of the artist's songs.
* You can create and delete playlists.
* You can add songs to a playlist.
* You can view a playlist with all added songs. Here you also have the option to remove a song from the playlist.

## Tasks

- [x] Set up JSON Web Server.
- [x] List component for displaying artists, playlists and songs
- [x] useFetch to load data with state feedback (loading, fetched, error)
- [x] useDebounce to smooth artists search by user input and reduce network requests.
- [x] Load artists in List component
- [x] React Router Dom for the navigation.
- [x] Dynamic routes for artist detail page.
- [x] Playlist page and ability to create new playlists.
- [x] Zustand for state management + functions for add & remove playlists and songs.
- [x] Incorporate Zustand's useStore in components to interact with state
- [x] Zustand persist configuration to save state in Local Storage
- [ ] Clean-up data fetch (use /api route?)
- [ ] Incorporate infinite scroll to reduce loading time
- [ ] Improve UI