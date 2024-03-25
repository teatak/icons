import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFormatColorResetTwoTone24Px = (
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
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" />
    <path
      d="m10.93 7.83 4.77 4.77c-.62-1.81-2.17-4.24-3.71-6.24-.35.47-.71.96-1.06 1.47M12 18c.96 0 1.83-.36 2.53-.92l-5.72-5.72C8.32 12.38 8 13.31 8 14c0 2.21 1.79 4 4 4"
      opacity={0.3}
    />
    <path d="M12 6.36c1.53 2 3.08 4.43 3.71 6.24l2.23 2.23c.03-.27.06-.55.06-.83 0-3.98-6-10.8-6-10.8s-1.18 1.35-2.5 3.19l1.44 1.44c.34-.51.7-1 1.06-1.47M5.41 5.14 4 6.55l3.32 3.32C6.55 11.33 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.95-1.5l2.63 2.63L20 19.72zM12 18c-2.21 0-4-1.79-4-4 0-.69.32-1.62.81-2.64l5.72 5.72c-.7.56-1.57.92-2.53.92" />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatColorResetTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
