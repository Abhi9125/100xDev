import { createContext } from "react";

// You can set a default value or leave it undefined
export const userContext = createContext<string | null>(null);
