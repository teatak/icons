import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBedtimeOffTwoTone24Px = (
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
      d="M7.95 5.13 9.03 6.2c.05-.55.12-1.12.24-1.71-.46.17-.9.39-1.32.64M5.13 7.96A7.84 7.84 0 0 0 4 12c0 4.41 3.59 8 8 8 1.45 0 2.84-.4 4.05-1.12z"
      opacity={0.3}
    />
    <path d="M9.27 4.49c-.13.59-.2 1.15-.24 1.71l2.05 2.05c-.27-2.05.1-4.22 1.26-6.23-.12 0-.23-.01-.35-.01a9.9 9.9 0 0 0-5.5 1.65l1.46 1.46c.42-.24.86-.46 1.32-.63M2.81 2.81 1.39 4.22l2.27 2.27A9.93 9.93 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.92-.63 5.5-1.67l2.28 2.28 1.41-1.41zM12 20c-4.41 0-8-3.59-8-8 0-1.48.42-2.85 1.13-4.04l10.92 10.92C14.84 19.6 13.45 20 12 20" />
  </svg>
);
const ForwardRef = forwardRef(SvgBedtimeOffTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
