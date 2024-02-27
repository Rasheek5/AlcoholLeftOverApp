import EncryptedStorage from 'react-native-encrypted-storage';

export function storeSession(key: string, data: any) {
  return new Promise(async (res, reject) => {
    try {
      await EncryptedStorage.setItem(key, JSON.stringify(data));
      res('done');
    } catch (error) {
      reject();
    }
  });
}

export function retrieveSession<T>(key: string) {
  return new Promise<T>(async (res, reject) => {
    try {
      const data = await EncryptedStorage.getItem(key);

      if (data) {
        return res(JSON.parse(data));
      }

      reject(null);
    } catch (error) {
      reject(null);
    }
  });
}

export function clearStorage() {
  return new Promise(async (res, reject) => {
    try {
      await EncryptedStorage.clear();
      res('done');
    } catch (error) {
      reject();
    }
  });
}
