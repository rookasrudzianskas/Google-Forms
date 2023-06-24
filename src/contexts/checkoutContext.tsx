import {createContext, useContext, useState} from "react";
import {DeliveryInfo, PaymentInfo, PersonalInfo} from "../schema/checkout.schema";

type CheckoutContextData = {
  setPersonal: React.Dispatch<React.SetStateAction<PersonalInfo | null>>;
  setDelivery: React.Dispatch<React.SetStateAction<DeliveryInfo | null>>;
  setPayment: React.Dispatch<React.SetStateAction<PaymentInfo | null>>;
};

const CheckoutContext = createContext<CheckoutContextData>({
  setPersonal: () => {},
  setDelivery: () => {},
  setPayment: () => {},
});

export default function CheckoutContextProvider({children}) {
  const [personal, setPersonal] = useState<PersonalInfo | null>(null);
  const [delivery, setDelivery] = useState<DeliveryInfo | null>(null);
  const [payment, setPayment] = useState<PaymentInfo | null>(null);

  return (
    <CheckoutContext.Provider
      value={{
        personal,
        setPersonal,
        delivery,
        setDelivery,
        payment,
        setPayment
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckoutContext = () => useContext(CheckoutContext);
