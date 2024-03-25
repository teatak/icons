import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRsvpOutlined24Px = (
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
    <path d="M16 9h1.5l-1.75 6h-1.5L12.5 9H14l1 3.43zM5.1 12.9 6 15H4.5l-.85-2H2.5v2H1V9h3.5c.85 0 1.5.65 1.5 1.5v1c0 .6-.4 1.15-.9 1.4m-.6-2.4h-2v1h2zm17 2.5h-2v2H18V9h3.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5m0-2.5h-2v1h2zM11.5 9v1.5h-3v.75h2c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7v-1.5h3v-.75H7.75c-.41 0-.75-.34-.75-.75v-2c0-.55.45-1 1-1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRsvpOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
