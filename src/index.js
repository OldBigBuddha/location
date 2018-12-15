import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');

// APIのHeader設定
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Language", "ja");
  next();
});

app.get("/location", (req, res) => {
  // 環境変数から緯度経度を取って、JSON形式で返す
});

app.post("/location", (req, res) => {
  // クエリで緯度経度を取得して、環境変数に突っ込む
  // GET /location?lng=xxx&lat=xxx
  const longitude = req.query.lng;
  const latitude  = req.query.lat;
});

app.use("/", (req, res) => {
  res.status(200).send("I'm alive");
});

app.listen(PORT, () => {
  console.log(`Listen now\nport:${PORT}`);
})
