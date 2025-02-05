export default function useLocalStorage() {
  // Helper function to get item from localStorage and parse it
  const getItem = (key) => {
    const storedValue = localStorage.getItem(key);
    try {
      return storedValue ? JSON.parse(storedValue) : null;
    } catch (e) {
      console.error("Error parsing the stored data", e);
      return null;
    }
  };

  // Helper function to set item to localStorage (stringify)
  const setItem = (key, value) => {
    try {
      const valueToStore = JSON.stringify(value);
      localStorage.setItem(key, valueToStore);
    } catch (e) {
      console.error("Error stringifying the data", e);
    }
  };

  return {
    getItem,
    setItem,
  };
}
