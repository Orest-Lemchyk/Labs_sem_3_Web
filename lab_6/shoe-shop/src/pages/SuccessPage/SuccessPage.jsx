import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./SuccessPage.css";

function SuccessPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="success-page">
      <h2>Thank you for your order!</h2>
      <p>Your order has been successfully placed.</p>
      <Link to="/catalog" className="back-btn">
        Back to Catalog
      </Link>
    </div>
  );
}

export default SuccessPage;
