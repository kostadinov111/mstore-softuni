// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'https://my-json-server.typicode.com/kostadinov111/mstore-db',
  apiUrl: 'https://mstore-db-default-rtdb.europe-west1.firebasedatabase.app',
  // apiUrl: 'https://console.firebase.google.com/project/mstore-db/database/mstore-db-default-rtdb/data',
  apiUrlAuth: 'http://localhost:3000/api',
  apirUrlAlbums: 'http://localhost:8080/api/albums'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
