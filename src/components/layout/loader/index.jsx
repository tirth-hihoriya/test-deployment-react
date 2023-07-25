import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/greenHydroImages/logo_white_text.svg";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={loading ? "loader-wrap" : "loader-wrap hide"}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Loader;
