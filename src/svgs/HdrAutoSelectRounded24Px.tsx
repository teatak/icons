import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHdrAutoSelectRounded24Px = (
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
    <path d="M10 16H7.25c-.41 0-.75.34-.75.75v4.5c0 .41.34.75.75.75H10c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5m0 4.5H8v-3h2zM4.25 16c-.41 0-.75.34-.75.75V18h-2v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V19.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75M23.25 18.5H22v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.25h-1.25c-.41 0-.75.34-.75.75s.34.75.75.75h1.25v1.25c0 .41.34.75.75.75s.75-.34.75-.75V20h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M16.5 16h-2.75c-.41 0-.75.34-.75.75v4.56c0 .38.31.69.69.69h.11c.38 0 .69-.31.69-.69V20h1.1l.72 1.59c.11.25.36.41.63.41.5 0 .83-.51.64-.97l-.48-1.13c.5-.3.9-.8.9-1.4v-1c0-.83-.67-1.5-1.5-1.5m0 2.5h-2v-1h2zM11.97 5.3l-1.02 2.89h2.1L12.03 5.3z" />
    <path d="M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m2.44 9c-.24 0-.45-.15-.53-.38l-.49-1.41h-2.83l-.5 1.41a.564.564 0 1 1-1.06-.38l2.12-5.65a.906.906 0 0 1 1.7 0l2.12 5.65a.56.56 0 0 1-.53.76" />
  </svg>
);
const ForwardRef = forwardRef(SvgHdrAutoSelectRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
