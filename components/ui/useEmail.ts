"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/lib/site";

const subscribe = () => () => {};
const getClient = () => `${site.emailUser}@${site.emailDomain}`;
const getServer = () => "";

/** Returns the contact email on the client only ("" during server render). */
export function useEmail() {
  return useSyncExternalStore(subscribe, getClient, getServer);
}
