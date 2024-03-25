import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgQuestionAnswerSharp24Px = (
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
    <path d="M22 6h-3v9H6v3h12l4 4zm-5 7V2H2v15l4-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgQuestionAnswerSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
