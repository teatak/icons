import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEditLocationAltRounded24Px = (
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
    <path d="M13.54 13H10c-.55 0-1-.45-1-1V8.46c0-.26.11-.52.29-.7l5.32-5.32A8.2 8.2 0 0 0 12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.44 6.92 7.33 11.22.38.33.96.33 1.34 0C17.56 17.12 20 13.37 20 10.2c0-1.01-.16-1.94-.45-2.8l-5.31 5.31c-.18.18-.44.29-.7.29" />
    <path d="M11 11h2.12l6.16-6.16-2.12-2.12L11 8.88zM20.71 2 20 1.29a.996.996 0 0 0-1.41 0l-.72.72 2.12 2.12.72-.72a.996.996 0 0 0 0-1.41" />
  </svg>
);
const ForwardRef = forwardRef(SvgEditLocationAltRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
