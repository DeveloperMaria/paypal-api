import generateAccessToken from '../utils/generateAccessToken';
import { handleResponse } from '../utils/handleResponse';

const base = 'https://api-m.sandbox.paypal.com';

export class paypalService {
  async createOrder(cart) {
    // use the cart information passed from the front-end to calculate the purchase unit details
    console.log(
      'shopping cart information passed from the frontend createOrder() callback:',
      cart
    );

    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;
    const payload = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '100.00',
          },
        },
      ],
    };

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      method: 'POST',
      body: JSON.stringify(payload),
    });

    return handleResponse(response);
  }

  async captureOrder(orderID) {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderID}/capture`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return handleResponse(response);
  }
}
