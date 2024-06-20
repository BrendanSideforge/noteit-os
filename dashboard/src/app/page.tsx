"use client";

import { useAppSelector } from "@/redux/store";

import Login from "@/components/Login";
import Welcome from "@/components/Welcome";
import LoadingAnimation from "@/components/Loading";

export default function Home() {

  // Redux state
  const OGB_User = useAppSelector((state) => { return state.OGB_User_Reducer.value });
  const Passive_State = useAppSelector((state) => { return state.Passive_State_Reducer.value });

  return (
    <div className="">
      {
        // Loading ternary operator
        Passive_State.loading ? <LoadingAnimation /> :
        (
          OGB_User.user.username !== "Unknown" ? <Welcome /> : <Login /> 
        )
      }
    </div>
  );
}
