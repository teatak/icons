import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSmartScreenOutlined24Px = (
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
    <path d="M12.5 11.25H14v1.5h-1.5zM15 11.25h1.5v1.5H15zM10 11.25h1.5v1.5H10zM7.5 11.25H9v1.5H7.5z" />
    <path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2M4 17H3V7h1zm14 0H6V7h12zm3 0h-1V7h1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSmartScreenOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
