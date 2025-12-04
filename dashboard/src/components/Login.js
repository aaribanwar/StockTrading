import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;
  

  // subscribe to token cookie (so we get a React update when it appears)
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const cookieSeenRef = useRef(false); // to avoid duplicate navigation
  useEffect(() => {
    console.log("useCookies change:", cookies);
    if (cookies && cookies.token) {
      cookieSeenRef.current = true;
      console.log("cookies.token present via useCookies:", cookies.token);
    }
  }, [cookies]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-left" });

  // helper: poll document.cookie for token presence
  const waitForCookie = async (timeout = 2000, interval = 100) => {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      const dc = document.cookie || "";
      console.log("polling document.cookie:", dc);
      if (dc.includes("token=") || (cookies && cookies.token)) return true;
      // small sleep
      await new Promise((r) => setTimeout(r, interval));
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit login request
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        { ...inputValue },
        { withCredentials: true }
      );

      // debug logs you asked for
      console.log("LOGIN RESPONSE DATA:", res.data);
      console.log("LOGIN RESPONSE HEADERS (may not show set-cookie due to browser):", res.headers);
      console.log("document.cookie IMMEDIATE after login:", document.cookie);
      console.log("useCookies current:", cookies);

      const { success, message, token: bodyToken } = res.data || {};

      if (!success) {
        handleError(message || "Login failed");
        return;
      }

      handleSuccess(message || "Logged in");

      // If React cookie already saw it (useCookies), navigate immediately
      if (cookies && cookies.token) {
        console.log("cookie already available via useCookies -> navigating");
        cookieSeenRef.current = true;
        navigate("/");
        return;
      }

      // If server returned token in body (debug only), set it as cookie (temporary)
      if (!cookies.token && bodyToken) {
        try {
          // TEMPORARY: set cookie from response body if server included it (for debugging)
          document.cookie = `token=${bodyToken}; path=/; max-age=${7 * 24 * 60 * 60}`;
          console.log("Set token from response body into document.cookie for debug.");
        } catch (err) {
          console.warn("Failed to set cookie from response body:", err);
        }
      }

      // Poll for cookie presence for up to 2s.
      const gotCookie = await waitForCookie(2000, 100);
      console.log("waitForCookie result:", gotCookie, "document.cookie:", document.cookie, "useCookies:", cookies);

      if (gotCookie || (cookies && cookies.token)) {
        if (!cookieSeenRef.current) {
          cookieSeenRef.current = true;
          console.log("Cookie detected -> navigating to /");
          navigate("/");
          return;
        }
      }

      // fallback: if nothing detected, still navigate but log that cookie was missing
      console.warn("No cookie detected after login (fallback navigate). Copy the following console logs above and paste here for debugging.");
      navigate("/"); // optional fallback
    } catch (error) {
      console.error("Login request error:", error);
      handleError("Login failed - check console");
    } finally {
      setInputValue({ email: "", password: "" });
    }
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
