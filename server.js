import express from 'express';
import { createRequestHandler } from '@remix-run/express';
import * as build from './build/server/index.js';

const app = express();
const port = process.env.PORT || 5173;

// Handle asset requests
app.use(express.static('build/client'));

// Handle Remix requests
app.all(
  '*',
  createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
  })
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 