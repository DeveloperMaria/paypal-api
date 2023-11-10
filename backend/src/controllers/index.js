import paypalController from './paypal.controller.js';

export const controllers = function name() {
  return [new paypalController()];
};
