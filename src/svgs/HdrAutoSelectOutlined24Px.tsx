import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHdrAutoSelectOutlined24Px = (
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
    <path d="M10 16H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5H8v-3h2zM3.5 18h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zM22 18.5v-2h-1.5v2h-2V20h2v2H22v-2h2v-1.5zM16.5 16H13v6h1.5v-2h1.1l.9 2H18l-.9-2.1c.5-.3.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5m0 2.5h-2v-1h2zM11.97 5.3l-1.02 2.89h2.1L12.03 5.3z" />
    <path d="M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m2.04 9-.63-1.79h-2.83L9.96 11H8.74l2.63-7h1.25l2.63 7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHdrAutoSelectOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
