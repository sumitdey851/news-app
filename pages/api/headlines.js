export default function handler(req, res) {
  const setData = (data) => {
    res.status(200).json({data});
  }
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=5d82c7ac29bd43d58fffd2b6a2909c9e"
  )
    .then((response) => response.json())
    .then((data) => setData(data));
}