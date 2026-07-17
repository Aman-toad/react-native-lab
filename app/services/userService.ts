export async function getUsers() {

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!response.ok) {
      throw new Error("Can't Fetch User Details !!")
    }

    const data = response.json();
    return data;

  } catch (error) {
    console.error(error);
  }
}

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};