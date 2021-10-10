interface myUser {
  name: string;
  age: number;
  hobby: string;
  premium: boolean;
  mood?: string;
}

const user: myUser = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const keys: string[] = Object.keys(user);
for (const key of keys) {
  console.log(`${key} : ${user[key]}`);
}
