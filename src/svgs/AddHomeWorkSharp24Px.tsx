import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAddHomeWorkSharp24Px = (
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
    <path d="M15 11.68V11L8 6l-7 5v10h5v-6h4v6h1.68c-.43-.91-.68-1.92-.68-3 0-2.79 1.64-5.19 4-6.32M23 13.11V3H10v1.97l7 5v1.11c.33-.05.66-.08 1-.08 1.96 0 3.73.81 5 2.11M17 7h2v2h-2z" />
    <path d="M23 18c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5m-5.5 3v-2.5H15v-1h2.5V15h1v2.5H21v1h-2.5V21z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddHomeWorkSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
