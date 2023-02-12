import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > img {
    width: 20%;
    height: 20%;
  }
`;

export default function QrCode() {
  const [time, setTime] = useState(0);
  const [qrCodeSrc, setQrCodeSrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const url = "https://qrcode-generator-yoke.herokuapp.com/code";
    const requestQRCode = async () => {
      const response = await fetch(url, { method: "GET" });
      if (!response.ok) {
        setError("Something went wrong!");
      }
      const res = await response.json();
      setQrCodeSrc(res?.data);
      setIsLoading(false);
    };
    requestQRCode();
    const timer = setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <>
      <Div>
        {isLoading && <Loader />}
        {!isLoading && !error && <img src={`${qrCodeSrc}`} alt="qr" />}
        {!isLoading && error && <h1>{error}</h1>}
      </Div>
    </>
  );
}
