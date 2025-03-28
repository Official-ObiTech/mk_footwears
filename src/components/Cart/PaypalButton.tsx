import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

interface PaypalButtonProps {
  amount: string;
  onSuccess: (details: any) => void;
  onError: (error: any) => void;
}

const PaypalButton = ({ amount, onSuccess, onError }: PaypalButtonProps) => {
  return (
    <PayPalScriptProvider options={{ clientId: "" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(_, actions) => {
          return actions.order.create({
            purchase_units: [
              { amount: { currency_code: "USD", value: amount } },
            ],
            intent: "CAPTURE",
          });
        }}
        onApprove={(_, actions) => {
          if (actions.order) {
            return actions.order.capture().then(onSuccess);
          }
          return Promise.reject(new Error("Order is undefined"));
        }}
        onError={onError}
      ></PayPalButtons>
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
