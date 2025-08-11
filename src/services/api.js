const BESE_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

export async function exchangeRateApi(categories) {
  try {
    const response = await fetch(`${BESE_URL}/${categories}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
