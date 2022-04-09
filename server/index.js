import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});