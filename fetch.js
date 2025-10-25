async function fetchData() {
  try {
    console.log("Data is fetching ...");
    const data = await fetch("https://randomuser.me/api/");
    const user = await data.json();
    console.log(user);
    return user;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
fetchData();
