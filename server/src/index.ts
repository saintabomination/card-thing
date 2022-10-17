import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const DEFAULT_PORT: number = 3001;
const port = process.env.PORT || DEFAULT_PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
