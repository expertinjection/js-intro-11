import { Actions } from "./Actions.js";
function test1() {
    Actions.visitUrl('https://www.techglobalschool.com')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    Actions.login('TechGlobal', 'Test1234')
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    Actions.validateTitle('TechGlobal')
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
  }
  
  //test1();

  //  async/await
    async function test3() {
        try {
          const data1 = await Actions.visitUrl('https://www.techglobalschool.com');
          console.log(data1);
          const data2 = await Actions.login('TechGlobal', 'Test1234');
          console.log(data2);
          const data3 = await Actions.validateTitle('TechGlobal');
          console.log(data3);
        } catch (err) {
          console.log(err);
        }
      }
test3();
        