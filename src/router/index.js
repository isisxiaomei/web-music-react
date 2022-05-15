import HYDiscover from "@/pages/discover";
import HYFriend from "@/pages/friend";
import HYMine from "@/pages/mine";
import { Redirect } from "react-router-dom";

import React from "react";

const routes = [
  // 输入域名重定向到HYDiscover，exact: true必须严格匹配
  {
    path: "/",
    exact: true,
    render: () => (<Redirect to="/discover" />)
  },
  {
    path: "/discover",
    component: HYDiscover,
  },
  {
    path: "/friend",
    component: HYFriend,
  },
  {
    path: "/mine",
    component: HYMine,
  },
];

export default routes;
