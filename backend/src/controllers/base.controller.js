import express from 'express';
import { paypalService } from '../services/paypal.service.js';

class baseController {
  router;
  parentRouterPath;

  _paypalService;

  constructor(routerPath) {
    this.parentRouterPath = routerPath;
    this.router = express.Router();

    this._paypalService = new paypalService();
  }
}

export default baseController;
