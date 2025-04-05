import { useNavigate, useSearchParams } from "react-router-dom";
import "./Verify.css";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  console.log(url);

  const verifyPayment = async (retry = false) => {
    try {
        console.log(`Calling: ${url}/api/order/verify`);
        const response = await axios.post(
            `${url}/api/order/verify`,
            { success, orderId },
            {
              headers: {
                'Content-Type': 'application/json',
                // Add token if required
                token: localStorage.getItem('token') || ''
              }
            }
          );

          console.log("Verification response:", response.data);

      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Verification error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
      if (!retry) {
        setTimeout(() => verifyPayment(true), 2000); // try once after delay
      } else {
        navigate("/"); // fallback
      }
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
