import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCamera24Px = (
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
    <path d="m9.4 10.5 4.77-8.26a9.984 9.984 0 0 0-8.49 2.01l3.66 6.35zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9zm.26 1h-7.49l.29.5 4.76 8.25A9.9 9.9 0 0 0 22 12c0-.69-.07-1.35-.2-2M8.54 12l-3.9-6.75A9.96 9.96 0 0 0 2.2 14h7.49zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15zm11.27 0-3.9 6.76a9.984 9.984 0 0 0 8.49-2.01l-3.66-6.35z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCamera24Px);
const Memo = memo(ForwardRef);
export default Memo;
