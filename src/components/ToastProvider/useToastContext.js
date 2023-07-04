import React from "react";
import { ToastContext } from "./ToastProvider";

export const useToastContext = () => React.useContext(ToastContext);
