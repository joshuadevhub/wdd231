export const getMovies = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    return [];
  }
}