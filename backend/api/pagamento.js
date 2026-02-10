import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: process.env.MP_TOKEN
});

export default async function handler(req, res) {
  const preference = {
    items: req.body.items,
    payment_methods: {
      excluded_payment_types: [],
    }
  };

  const response = await mercadopago.preferences.create(preference);
  res.json({ id: response.body.id });
}
