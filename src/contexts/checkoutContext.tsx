import {createContext, useContext, useState} from "react";
import {CheckoutData, DeliveryInfo, PaymentInfo, PersonalInfo} from "../schema/checkout.schema";

type CheckoutContextData = {
  setPersonal: React.Dispatch<React.SetStateAction<PersonalInfo | null>>;
  setDelivery: React.Dispatch<React.SetStateAction<DeliveryInfo | null>>;
  setPayment: React.Dispatch<React.SetStateAction<PaymentInfo | null>>;
  onSubmitAll: (paymentInfo: PaymentInfo) => Promise<boolean>
};

const CheckoutContext = createContext<CheckoutContextData>({
  setPersonal: () => {},
  setDelivery: () => {},
  setPayment: () => {},
  onSubmitAll: () => Promise.resolve(false)
});

export default function CheckoutContextProvider({children}) {
  const [personal, setPersonal] = useState<PersonalInfo | null>(null);
  const [delivery, setDelivery] = useState<DeliveryInfo | null>(null);
  const [payment, setPayment] = useState<PaymentInfo | null>(null);

  const onSubmitAll = async (paymentInfo: PaymentInfo) => {
    setPayment(paymentInfo);

    const checkoutData: CheckoutData = {
      ...personal,
      ...delivery,
      ...paymentInfo,
    }
    console.warn('submit all');
    console.log(checkoutData)
    return true;
  }

  return (
    <CheckoutContext.Provider
      value={{
        // @ts-ignore
        personal,
        setPersonal,
        delivery,
        setDelivery,
        payment,
        setPayment,
        onSubmitAll
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckoutContext = () => useContext(CheckoutContext);
