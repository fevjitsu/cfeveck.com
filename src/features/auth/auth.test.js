import React from "react";
import { shallow } from "enzyme";
import LoginLanding from "./LoginLanding";
import LogOutButton from "./LogOutButton";
import {
  loggedIn,
  loggedOut,
  selectLogged,
  selectUserId,
  setUser,
  setUserAsync,
} from "./authSlice";

test("should show if logged in", () => {});
