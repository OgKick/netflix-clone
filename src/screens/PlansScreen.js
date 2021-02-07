import React, { useEffect, useState } from "react";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import db from "../firebase";
import "./PlansScreen.css";
import { loadStripe } from '@stripe/stripe-js';
function PlansScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.snapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        // Show error to your customers
        // Check cloud function in the firebase console
        alert(`An error occured, ${error.message}`);
      }
      if (sessionId) {
        // we have a session, let redirect to checkout
        // Init Stripe
        const stripe = await loadStripe(
          "pk_test_51IHj9qB06TjmJxpgxpWe0aSfU1HgZrKt0WICR5UPEJITHgdTg52VtoT4Qd5SlkRDts6hG0i1tOTFMAtiFfpEFLPk00qKeM1OIf"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
  return (
    <div className="plansScreen">
      {Object.entries(products).map(([productId, productData]) => {
        // Todos Add some logic to check if the user's subscription is active
        return (
          <div className="plansScreen__plans">
            <div className="plansScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button
              onClick={() => loadCheckout(productData.prices.priceId)}
            >
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;