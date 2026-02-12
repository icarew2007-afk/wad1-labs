'use strict';

import logger from "../utils/logger.js";
import getAppInfo from "../models/employee.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const data = getAppInfo.getAppInfo();

    response.render("about", data);
  },
};

export default about;
