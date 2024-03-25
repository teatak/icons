import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWebAssetOffSharp24Px = (
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
    <path d="M6.83 4H22v15.17l-2-2V8h-9.17zm13.66 19.31L17.17 20H2V4.83L.69 3.51 2.1 2.1l19.8 19.8zM15.17 18l-10-10H4v10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWebAssetOffSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
