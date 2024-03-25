import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgIcecreamTwoTone24Px = (
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
    <path
      d="m9.32 13.42 2.73 5.21 2.67-5.23a6.47 6.47 0 0 1-5.4.02M17.31 8.02l-.77-.12-.06-.78C16.29 4.8 14.34 3 12 3S7.71 4.8 7.51 7.12l-.06.78-.77.13A1.999 1.999 0 0 0 7 12c.52 0 1.01-.21 1.39-.56l.56-.54.66.41a4.52 4.52 0 0 0 4.78.01l.66-.42.56.54c.38.36.87.56 1.39.56 1.1 0 2-.9 2-2 0-.99-.72-1.82-1.69-1.98"
      opacity={0.3}
    />
    <path d="M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24A4.01 4.01 0 0 0 3 10c0 2.21 1.79 4 4 4 .12 0 .23-.02.34-.02L12.07 23l4.61-9.03c.11.01.21.03.32.03 2.21 0 4-1.79 4-4 0-1.71-1.08-3.19-2.62-3.76m-6.33 12.39-2.73-5.21a6.468 6.468 0 0 0 5.4-.02zM17 12c-.52 0-1.01-.2-1.39-.56l-.56-.54-.66.42a4.52 4.52 0 0 1-4.78-.01l-.66-.41-.56.54c-.38.35-.87.56-1.39.56a1.999 1.999 0 0 1-.32-3.97l.77-.13.06-.78C7.71 4.8 9.66 3 12 3s4.29 1.8 4.48 4.12l.06.78.77.12c.97.16 1.69.99 1.69 1.98 0 1.1-.9 2-2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgIcecreamTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
