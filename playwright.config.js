// @ts-check
const { defineConfig, devices } = require('@playwright/test');



const config=({
  testDir: './tests',
  timeout:40*1000,
  expect:{
    timeout:40*1000,
  },
  reporter: 'html',
 
  use: {
    headless : false,
    slowMo : 1000,
    browserName:'chromium'
  },

  
});
module.exports=config;

