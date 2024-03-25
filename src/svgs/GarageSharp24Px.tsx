import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGarageSharp24Px = (
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
    <circle cx={15} cy={13} r={1} />
    <circle cx={9} cy={13} r={1} />
    <path d="m8.33 7.5-.66 2h8.66l-.66-2z" />
    <path d="M22 2H2v20h20zm-3 16.5h-2v-2H7v2H5v-7.31L6.89 5.5H17.1l1.9 5.69z" />
  </svg>
);
const ForwardRef = forwardRef(SvgGarageSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
