export class  Actions {
    static visitUrl(url) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (url.startsWith('www') || url.startsWith('https://')) {
              resolve('URL visited successfully');
            } else {
              reject('Wrong URL');
            }
          }, 1000);
        });
      }
      static login(username, password) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (username === 'TechGlobal' && password === 'Test1234') {
              resolve('Logged in successfully');
            } else {
              reject('Wrong credentials');
            }
          }, 3000);
        });
      }
      static validateTitle(title) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (title !== '' && title !== null && title !== undefined) {
              resolve('Title validated successfully');
            }
            reject('Wrong title');
        }, 500);
    });
}
}
