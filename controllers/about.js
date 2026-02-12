'use strict';

import logger from "../utils/logger.js";
import getAppInfo from "../models/employee.js";


const about = {
  createView(request, response) {
    logger.info("About page loading!");
    response.send('About the Playlist app');   
  },
};


export default about;