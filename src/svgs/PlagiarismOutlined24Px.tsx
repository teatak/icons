import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlagiarismOutlined24Px = (
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
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z" />
    <path d="M9.03 11.03a3.495 3.495 0 0 0 0 4.95 3.48 3.48 0 0 0 4.13.59l1.88 1.88 1.41-1.41-1.88-1.88c.71-1.33.53-3.01-.59-4.13a3.495 3.495 0 0 0-4.95 0m3.53 3.53c-.59.59-1.54.59-2.12 0a1.49 1.49 0 0 1 0-2.12 1.49 1.49 0 0 1 2.12 0c.59.59.59 1.53 0 2.12" />
  </svg>
);
const ForwardRef = forwardRef(SvgPlagiarismOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
