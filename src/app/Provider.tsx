"use client"
import { YoungProvider } from "@youngagency/ui"

export const Provider = ({ children }:{children: React.ReactNode}) => {
    return (
        <YoungProvider>
            {children}
        </YoungProvider>
    )
}