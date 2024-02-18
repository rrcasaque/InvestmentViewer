import * as React from "react";

import { cn } from "@/lib/utils";
import { OpenEyeIcon } from "@/assets/icons/OpenEyeIcon";
import { CloseEyeIcon } from "@/assets/icons/CloseEyeIcon";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showpassword, setShowPassword] = React.useState(false);

    return type === "password" ? (
      <div className="flex">
        <input
          type={showpassword ? "text" : type}
          className={cn(
            "flex h-10 w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <div
          onClick={() => {
            setShowPassword(!showpassword);
          }}
          className="cursor-pointer"
        >
          {showpassword ? (
            <span className="h-10 w-10 flex items-center justify-center bg-slate-400 rounded-r-md">
              <CloseEyeIcon width="20" fill="black" />
            </span>
          ) : (
            <span className="h-10 w-10 flex items-center justify-center bg-slate-400 rounded-r-md">
              <OpenEyeIcon width="20" fill="black" />
            </span>
          )}
        </div>
      </div>
    ) : (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
