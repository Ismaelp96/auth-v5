"use server";
import { db } from "@/lib/db";

import { signOut } from "@/auth";

export const logout = async () => {
  // some server stuff
  await signOut();
};
