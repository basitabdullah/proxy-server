import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

// Enable CORS middleware
app.use(cors());

// Define routes
app.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://inrdeals.com/fetch/stores?token=2c3f5a1662f83d1db90c9441012d4b3ffc21bbfb&id=maa443089855"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.get("/offers", async (req, res) => {
  try {
    const response = await fetch(
      "https://inrdeals.com/api/v1/coupon-feed?token=7d93f1be383789a926af8abea04225ad421ece1c&id=maa443089855"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching offers:", error);
    res.status(500).json({ error: "Failed to fetch offers" });
  }
});

// Start the server
const PORT =  4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
