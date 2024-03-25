import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpellcheckOutlined24Px = (
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
    <path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64zm-6.02-5L8.5 5.48 10.57 11zm15.16.59-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSpellcheckOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
