import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAddBusiness24Px = (
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
    <path d="M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zM2 4h15v2H2z" />
    <path d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddBusiness24Px);
const Memo = memo(ForwardRef);
export default Memo;
