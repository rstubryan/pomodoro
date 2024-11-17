import * as React from "react";
import { cn } from "@/lib/utils.js";

const PomoHeading = React.forwardRef(
    ({ className, children, ...props }, ref) => {
        return (
            <h1
                ref={ref}
                className={cn(
                    "scroll-m-20 text-8xl font-extrabold tracking-tight",
                    className,
                )}
                {...props}
            >
                {children}
            </h1>
        );
    },
);
PomoHeading.displayName = "PomoHeading";

const Heading = React.forwardRef(
    ({ className, children, variant = "base", ...props }, ref) => {
        return (
            <h1
                ref={ref}
                className={cn(
                    `scroll-m-20 font-extrabold tracking-tight ${variant === "base" ? "lg:text-4xl text-2xl" : variant === "title" ? "lg:text-5xl text-3xl" : ""}`,
                    className,
                )}
                {...props}
            >
                {children}
            </h1>
        );
    },
);
Heading.displayName = "Heading";

const SubHeading = React.forwardRef(
    ({ className, children, ...props }, ref) => {
        return (
            <h2
                ref={ref}
                className={cn(
                    "scroll-m-20 lg:text-2xl text-2xl font-semibold tracking-tight",
                    className,
                )}
                {...props}
            >
                {children}
            </h2>
        );
    },
);
SubHeading.displayName = "SubHeading";

const Paragraph = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <p
            ref={ref}
            className={cn(
                "lg:text-base text-sm leading-7 [&:not(:first-child)]:mt-6",
                className,
            )}
            {...props}
        >
            {children}
        </p>
    );
});
Paragraph.displayName = "Paragraph";

export { PomoHeading, Heading, SubHeading, Paragraph };
