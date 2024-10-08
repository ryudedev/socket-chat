"use client"

import React from "react";

import { SessionProvider } from "next-auth/react";

type AuthProviderProps = {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>
}
