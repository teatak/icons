import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNoPhotographyOutlined24Px = (
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
    <path d="M8.9 6.07 7.48 4.66 9 3h6l1.83 2H20c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16L20 17.17V7h-4.05l-1.83-2H9.88zm11.59 17.24L18.17 21H4c-1.1 0-2-.9-2-2V7c0-.59.27-1.12.68-1.49l-2-2L2.1 2.1l19.8 19.8zM9.19 12.02c-.11.31-.19.63-.19.98 0 1.66 1.34 3 3 3 .35 0 .67-.08.98-.19zM16.17 19l-1.68-1.68c-.73.43-1.58.68-2.49.68-2.76 0-5-2.24-5-5 0-.91.25-1.76.68-2.49L4.17 7H4v12zm-1.36-7.02 2.07 2.07Q17 13.54 17 13c0-2.76-2.24-5-5-5-.36 0-.71.04-1.06.12l2.07 2.07c.84.3 1.5.96 1.8 1.79" />
  </svg>
);
const ForwardRef = forwardRef(SvgNoPhotographyOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
