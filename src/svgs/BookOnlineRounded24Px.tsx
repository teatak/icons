import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookOnlineRounded24Px = (
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
    <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7 6h10v12H7zm9 5V9.14C16 8.51 15.55 8 15 8H9c-.55 0-1 .51-1 1.14v1.96c.55 0 1 .45 1 1s-.45 1-1 1v1.76c0 .63.45 1.14 1 1.14h6c.55 0 1-.51 1-1.14V13c-.55 0-1-.45-1-1s.45-1 1-1m-4 3.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5m0-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5m0-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5" />
  </svg>
);
const ForwardRef = forwardRef(SvgBookOnlineRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
