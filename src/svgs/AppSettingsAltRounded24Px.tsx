import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAppSettingsAltRounded24Px = (
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
    <path d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2zm4-6c0-.13-.02-.26-.04-.39l.64-.48c.2-.15.26-.44.13-.66l-.57-.96a.495.495 0 0 0-.62-.2l-.72.3c-.2-.15-.42-.29-.65-.39l-.1-.77a.505.505 0 0 0-.49-.44l-1.12-.02c-.26 0-.47.18-.5.44l-.1.79c-.24.1-.45.23-.65.39l-.72-.3c-.23-.1-.5-.01-.62.2l-.57.96c-.13.22-.08.5.13.66l.64.48c-.05.13-.07.26-.07.39s.02.25.04.37l-.64.49c-.2.15-.26.43-.13.65l.56.97c.13.22.39.31.63.21l.73-.31c.2.16.42.3.67.4l.1.77c.03.25.24.44.5.44h1.12c.25 0 .46-.19.5-.44l.1-.77c.24-.1.46-.24.67-.4l.73.31c.23.1.5.01.63-.21l.56-.97c.13-.22.07-.5-.13-.65l-.64-.49c-.02-.12 0-.24 0-.37m-3 1.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5" />
  </svg>
);
const ForwardRef = forwardRef(SvgAppSettingsAltRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
