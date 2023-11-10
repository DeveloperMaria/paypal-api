import baseController from './base.controller';

class paypalController extends baseController {
  constructor() {
    super('/api');
    this.initializeRouter();
  }

  initializeRouter() {
    this.router.post(`${this.parentRouterPath}/orders`, this.createOrder);
    this.router.post(
      `${this.parentRouterPath}/orders/:orderID/capture`,
      this.captureOrder
    );
  }

  createOrder = async (req, res) => {
    try {
      const { cart } = req.body;
      const { jsonResponse, httpStatusCode } =
        await this._paypalService.createOrder(cart);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error('Failed to create order:', error);
      res.status(500).json({ error: 'Failed to create order.' });
    }
  };

  captureOrder = async (req, res) => {
    try {
      const { orderID } = req.params;
      const { jsonResponse, httpStatusCode } =
        await this._paypalService.captureOrder(orderID);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error('Failed to create order:', error);
      res.status(500).json({ error: 'Failed to capture order.' });
    }
  };
}

export default paypalController;
