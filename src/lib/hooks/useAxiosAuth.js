// import { axiosAuth } from "@/config/axios";
// import { useEffect } from "react";

// export default function useAxiosAuth() {
//   //   const { auth } = useSelector((state) => state.auth);

//   const accessToken = sessionStorage.getItem("accessToken");

//   // console.log(accessToken);

//   useEffect(() => {
//     const requestIntercept = axiosAuth.interceptors.request.use(
//       (config) => {
//         if (!config.headers["Authorization"]) {
//           config.headers["Authorization"] = `Bearer ${accessToken}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     return () => {
//       axiosAuth.interceptors.request.eject(requestIntercept);
//     };
//   }, [accessToken]);

//   return axiosAuth;
// }

import { axiosAuth } from "@/config/axios";
import { useEffect, useState } from "react";

export default function useAxiosAuth() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Check if we are running in the browser
    if (typeof window !== "undefined") {
      setAccessToken(sessionStorage.getItem("accessToken"));
    }
  }, []);

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"] && accessToken) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
    };
  }, [accessToken]);

  return axiosAuth;
}
