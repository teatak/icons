import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCameraTwoTone24Px = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="tui-icon"
    ref={ref}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M10.9 19.91c.36.05.72.09 1.1.09a8 8 0 0 0 5.61-2.3L14.89 13zm-1.04-.21 2.71-4.7H4.59a8.03 8.03 0 0 0 5.27 4.7M8.54 12 5.7 7.09A7.96 7.96 0 0 0 4 12c0 .69.1 1.36.26 2h5.43zm9.76 4.91A7.96 7.96 0 0 0 20 12c0-.69-.1-1.36-.26-2h-5.43zM13.73 9h5.68a8.03 8.03 0 0 0-5.28-4.7L11.42 9zm-3.46 0 2.83-4.92C12.74 4.03 12.37 4 12 4c-2.18 0-4.16.88-5.6 2.3L9.12 11z"
      opacity={0.3}
    />
    <path d="M12 22c5.52 0 10-4.48 10-10 0-4.75-3.31-8.72-7.75-9.74l-.08-.04-.01.02C13.46 2.09 12.74 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10m0-2c-.38 0-.74-.04-1.1-.09L14.89 13l2.72 4.7A8 8 0 0 1 12 20m8-8c0 1.85-.64 3.55-1.7 4.91l-4-6.91h5.43c.17.64.27 1.31.27 2m-.59-3h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7M12 4c.37 0 .74.03 1.1.08L10.27 9l-1.15 2L6.4 6.3A7.96 7.96 0 0 1 12 4m-8 8c0-1.85.64-3.55 1.7-4.91L8.54 12l1.15 2H4.26C4.1 13.36 4 12.69 4 12m6.27 3h2.3l-2.71 4.7A8.05 8.05 0 0 1 4.58 15z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCameraTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
