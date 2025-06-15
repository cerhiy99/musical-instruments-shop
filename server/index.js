require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db.js');
const fileUpload = require('express-fileupload');
const path = require('path');
const router = require('./routes/index.js');
require('./models/models.js');
const errorMiddlawere = require('./middleWare/ErrorMiddleWare');
const ParseController = require('./Controllers/ParseController.js');

const app = express(router);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload({}));
app.use('/api/api', router);
app.use('/api',express.static(path.resolve(__dirname, 'static')));
app.use(errorMiddlawere);

const PORT = process.env.PORT || 4444;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log('server started on port:' + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

//ParseController.parseFile();
//ParseController.ParseProduct();
//ParseController.parseStockFromFile('../files/1748350084049-v8_F6B3_3ad2/rests___261d58b2-1da6-4f2b-91c1-d1966c45e277.xml')
//ParseController.parsePricesFromFileAndSave('../files/1748350064260-v8_F6B3_3ab9/prices___d08bc446-24f6-48e8-8e0b-7578d52ed5c6.xml')
//ParseController.detectFileType('../files/1748350081807-v8_F6B3_3acd/prices___0ea8acd9-188f-4d66-88d4-dde7b5e002d1.xml')
//ParseController.parseAllFilesInFolders();
//ParseController.parsePricesFromFileAndSave('/home/cerhiy/Документи/Людмила/github/musical-instruments-shop/server/files/1748350064260-v8_F6B3_3ab9/prices___d08bc446-24f6-48e8-8e0b-7578d52ed5c6.xml');
//ParseController.parseCategoryGroupsFromFile('/home/cerhiy/Документи/Людмила/github/musical-instruments-shop/server/files/1748348330482-v8_8AD4_12/import___d76204bf-1eba-4eca-84fe-0436223226a5.xml')

//ParseController.moveImagesToStatic();
//ParseController.parseAllFilesInFolders();
