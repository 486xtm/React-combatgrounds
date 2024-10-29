import React, { useEffect } from "react";
import { Header, Layout, Menu } from "../../../common/components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

export const OnlinePlayers = () => {
  const user = useSelector(({ user }) => user.user);
  const round = useSelector(({ round }) => round.info);

  const dispatch = useDispatch();


  return (
    <Layout currentActiveTab={"headquarters"}>
     <div>adfadfadfadf</div>
    </Layout>
  );
};
