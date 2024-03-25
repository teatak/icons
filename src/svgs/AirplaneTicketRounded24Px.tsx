import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAirplaneTicketRounded24Px = (
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
    <path d="M20.19 4H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.81-2-1.81-2m-2.46 9.3-8.49 2.26a.5.5 0 0 1-.56-.23l-1.12-1.95c-.18-.3-.01-.69.32-.78.16-.04.34-.01.47.1l1.05.82 2.39-.64L9.9 9.6a.788.788 0 0 1 .47-1.15.8.8 0 0 1 .74.18l3.69 3.44 2.44-.65a.967.967 0 0 1 1.18.68.994.994 0 0 1-.69 1.2" />
  </svg>
);
const ForwardRef = forwardRef(SvgAirplaneTicketRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
