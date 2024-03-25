import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAssistantPhotoOutlined24Px = (
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
    <path d="m12.36 6 .08.39.32 1.61H18v6h-3.36l-.08-.39-.32-1.61H7V6zM14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAssistantPhotoOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
