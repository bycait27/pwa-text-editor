import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// export a function to POST to the database
export const putDb = async (content) => {
  console.log('GET from the database');

  // create a connection to the database and version we want to use
  const contactDb = await openDB('jate', 1);

  // create a new transaction and specify the database and data privileges
  const tx = contactDb.transaction('jate', 'readwrite');

  // open up the desired object store
  const store = tx.objectStore('jate');

  // use the put method to update the data in the database
  const request = store.put({ id: 1, value: content });

  // get confirmation of the request
  const result = await request;
  console.log('Data saved to the database', result);
};

// export a function to GET to the database
export const getDb = async () => {
  console.log('GET from the database');

  // create a connection to the database and version we want to use
  const contactDb = await openDB('jate', 1);

  // create a new transaction and specify the database and data privileges
  const tx = contactDb.transaction('jate', 'readonly');

  // open up the desired object store
  const store = tx.objectStore('jate');

  // use the .getAll() method to get all data in the database
  const request = store.getAll();

  // get confirmation of the request
  const result = await request;
  console.log('result.value', result);
  return result.value;
};

initdb();
