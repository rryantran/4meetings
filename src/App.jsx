import supabase from "./supabase";

async function testConnection() {
  try {
    const { data, error } = await supabase.from("test").select("*");

    if (error) {
      console.error("Error retrieving data: ", error);
      return;
    }

    console.log("Data retrieved: ", data);
  } catch (err) {
    console.error("Error: ", err);
  }
}
const App = () => {
  testConnection();

  return <></>;
};

export default App;
