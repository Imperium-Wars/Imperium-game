import React, { FunctionComponent } from "react";

type MapProps = {
  onClick: () => void;
};

const SvgComponent: React.FunctionComponent<MapProps> = ({ onClick }) => (
  <svg
    viewBox="0 0 100 100"
    width={749.819}
    height={519.068}
    style={{
      zIndex: 0,
      overflow: "hidden",
    }}
  >
    <defs>
      <filter id="a" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="b">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="c" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="d">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="e" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="f" x={-0.527} width={2.053} y={-0.019} height={1.037}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="g" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="h">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="i" x={-0.018} width={1.035} y={-0.105} height={1.211}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="j" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="k">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="l" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="m" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="n" x={-0.273} width={1.545} y={-0.034} height={1.069}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="o" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="p" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="q">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="r" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="s" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="t">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="u" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="v" x={-0.033} width={1.067} y={-0.13} height={1.26}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="w" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="x">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="y" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="z" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="A">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="B" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="C">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="D" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="E">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="F" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="G" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="H">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="I" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="J" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="K">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="L" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="M" x={-0.02} width={1.04} y={-0.104} height={1.209}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="N" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="O" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="P" x={-0.386} width={1.771} y={-0.014} height={1.027}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="Q" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="R">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="S" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="T" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="U">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="V" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="W">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="X" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="Y">
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="Z" x={-0.219} width={1.439} y={-0.219} height={1.439}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="aa" x={-0.034} width={1.068} y={-0.658} height={2.316}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="ab" x={-0.015} width={1.029} y={-0.486} height={1.972}>
        <feGaussianBlur stdDeviation={0.274} />
      </filter>
      <filter id="ac">
        <feGaussianBlur stdDeviation={1.167} />
      </filter>
      <filter id="ag">
        <feGaussianBlur stdDeviation={1.783} />
      </filter>
      <filter id="ai">
        <feGaussianBlur stdDeviation={0.79} />
      </filter>
      <filter id="aj">
        <feGaussianBlur stdDeviation={1.171} />
      </filter>
      <filter id="ah">
        <feGaussianBlur stdDeviation={0.524} />
      </filter>
      <filter id="ak">
        <feGaussianBlur stdDeviation={0.852} />
      </filter>
      <filter id="an">
        <feGaussianBlur stdDeviation={0.764} />
      </filter>
      <filter id="ao">
        <feGaussianBlur stdDeviation={0.173} />
      </filter>
      <filter id="am">
        <feGaussianBlur stdDeviation={0.778} />
      </filter>
      <filter id="al">
        <feGaussianBlur stdDeviation={0.669} />
      </filter>
      <filter id="ap" x={-0.035} width={1.069} y={-0.161} height={1.323}>
        <feGaussianBlur stdDeviation={0.326} />
      </filter>
      <filter id="ad">
        <feGaussianBlur stdDeviation={0.447} />
      </filter>
      <filter id="af">
        <feGaussianBlur stdDeviation={0.395} />
      </filter>
      <filter id="ae">
        <feGaussianBlur stdDeviation={0.395} />
      </filter>
      <filter id="ar">
        <feGaussianBlur stdDeviation={1.037} />
      </filter>
      <filter id="aq">
        <feGaussianBlur stdDeviation={0.755} />
      </filter>
      <filter id="as">
        <feGaussianBlur stdDeviation={1.327} />
      </filter>
      <filter id="au">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="av">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aw">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="ax">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="ay">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="az">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aA">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aB">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aC">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aD">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aE">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aF">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aG">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aH">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aI">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aJ">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aK">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aL">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aM">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aN">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aO">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aP">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="at">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aQ">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aR">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aS">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aT">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aU">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aV">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aW">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aX">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aY">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="aZ">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="ba">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="bb">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="bc">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="bd">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="be">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="bf">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="bh">
        <feGaussianBlur stdDeviation={0.581} />
      </filter>
      <filter id="bg">
        <feGaussianBlur stdDeviation={0.219} />
      </filter>
    </defs>
    <g
      style={{
        display: "inline",
      }}
    >
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#a)",
        }}
        d="M486.75 253a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#b)",
        }}
        d="m485.5 253 13-19"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#c)",
        }}
        d="M500 234a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#d)",
        }}
        d="m498.5 234 23.25 13.5"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#e)",
        }}
        d="M523.25 247.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4.8,1.2",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#f)",
        }}
        d="m521.75 247.5-.25 34.25"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#g)",
        }}
        d="M523 281.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#h)",
        }}
        d="M521.5 281.75 485.25 253"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#i)",
        }}
        d="m485.5 253 36.25-5.25"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#j)",
        }}
        d="M491.75 315.125a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#k)",
        }}
        d="m490.25 315.125-7.5-12.5"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#l)",
        }}
        d="M484.375 302.625a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#m)",
        }}
        d="M564.357 371.313a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#n)",
        }}
        d="m562.857 371.313 1.414 18.208"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#o)",
        }}
        d="M565.948 389.521a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#p)",
        }}
        d="M629.057 431.948a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#q)",
        }}
        d="m627.557 431.594-8.131 12.551"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#r)",
        }}
        d="M620.926 444.145a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#s)",
        }}
        d="M793.813 431.77a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#t)",
        }}
        d="m792.49 431.77 7.425 24.926"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#u)",
        }}
        d="M801.415 456.696a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#v)",
        }}
        d="m799.915 457.05 18.738 4.066"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#w)",
        }}
        d="M477.03 430.533a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#x)",
        }}
        d="m475.53 430.533-25.81 7.425"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#y)",
        }}
        d="M451.22 437.958a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#z)",
        }}
        d="M401.75 179.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#A)",
        }}
        d="m400.25 179.75-15.5 37.5"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#B)",
        }}
        d="M386.25 217.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#C)",
        }}
        d="m400.25 179.5-68 50.25"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#D)",
        }}
        d="M333.75 229.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#E)",
        }}
        d="m400.25 179.5-36.75 8.25"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#F)",
        }}
        d="M365 187.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#G)",
        }}
        d="M473.5 214.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#H)",
        }}
        d="m472 214.5-20.5-17.75"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#I)",
        }}
        d="M453 197a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#J)",
        }}
        d="M824.926 275.854a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#K)",
        }}
        d="m823.426 275.854 22.627 18.738"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#L)",
        }}
        d="M847.553 294.592a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#M)",
        }}
        d="m846.053 294.592-32.173 5.303"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#N)",
        }}
        d="M815.38 299.895a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#O)",
        }}
        d="M824.572 462.883a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#P)",
        }}
        d="m823.072 462.883-.707 47.73"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#Q)",
        }}
        d="M823.865 510.613a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#R)",
        }}
        d="m822.365 510.613-11.314-8.485"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#S)",
        }}
        d="M812.5 502.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#T)",
        }}
        d="M838.25 498.625a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#U)",
        }}
        d="M836.75 498.625 823 462.875"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#V)",
        }}
        d="M625.522 498.946a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#W)",
        }}
        d="m624 499 8.25 45.75"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#X)",
        }}
        d="M633.75 544.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#Y)",
        }}
        d="M632.25 544.75 610 560.25"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#Z)",
        }}
        d="M611.5 560.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#aa)",
        }}
        d="M196.222 216.28h-18.385"
        transform="translate(-167.997 -118.555)"
      />
      <path
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#ab)",
        }}
        d="m846.407 218.932 43.84.353"
        transform="translate(-167.997 -118.555)"
      />
    </g>
    <g
      style={{
        opacity: 1,
        display: "inline",
      }}
      transform="translate(-167.997 -118.555)"
    >
      <path
        style={{
          fill: "#7b147d",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="M869.741 495.587s1.591-.177 1.768 2.298c.177 2.475.884 4.596.884 5.657 0 1.06.707 4.95.707 4.95s1.238 1.414 1.945.884c.707-.53 1.767-.707 1.767-1.945 0-1.237.354-2.651.708-1.944.353.707 1.414 1.237 1.414 2.298 0 1.06-.177 2.121 0 3.182.177 1.06 1.237 2.121 1.237 2.121s.354 2.121.354 2.828c0 .708.353 1.238 0 3.006-.354 1.767-.354 1.944-.177 3.535.177 1.591.354 2.298 1.06 2.475.708.177.708.177 1.415.177.707 0 .884-.707 1.414.177.53.883.707 1.414 1.945 1.59 1.237.177 2.298 0 2.298 0s.53.884.53 1.945c0 1.06-.177 1.414.177 2.829.353 1.414.353 1.59 1.237 1.767.884.177 1.414.354 1.414.354s.177.884.177 2.298c0 1.414.354 2.298.354 2.298l1.414 1.06s.354.885 1.06 1.769c.708.883 1.415 1.06 1.415 1.06s.53 1.06.707 1.945c.177.884-.354.353.707 1.59 1.06 1.238 1.237 1.592 1.237 2.652 0 1.061.884 1.768.53 3.182-.353 1.415-.176 1.945-.353 3.713-.177 1.767.177-.354-.177 2.651-.353 3.005-.176 3.89-.353 4.95s-.53.177-.707 2.121c-.177 1.945-.354 3.536-.354 3.536s-1.237 1.768-2.121 1.768c-.884 0-2.475-.707-2.475.176 0 .884-.884 1.591.354 1.945 1.237.354 1.59-.707 1.59.53 0 1.238-.353 1.591-1.414 2.475-1.06.884-1.06.707-2.298 1.414-1.237.707-.53-.353-1.414 1.945-.884 2.298-.707 2.298-1.414 3.182-.707.884-.884.884-1.238 1.944-.353 1.061-.353 1.415-.353 2.652 0 1.238-.354 1.768-.354 1.768s-1.414 1.414-1.414 2.652c0 1.237.884 1.767.177 2.651-.707.884 0 .884-1.591 1.06-1.591.178-2.298.178-2.298.178l-2.475.53s-.354-1.06-1.237-.53c-.884.53-.53.353-1.238 1.237-.707.884-.884.884-1.768 1.414-.884.53 0 .707-.53 1.591s-.707 1.768-1.768 1.238c-1.06-.53-1.414-.354-1.768-1.415-.353-1.06.177-1.237-1.59-1.767-1.768-.53-1.945-.53-1.945-.53s-.53.353-.884 1.237c-.354.884.177 1.237-1.06 1.768-1.238.53-1.238 1.06-2.476.176-1.237-.884-.883-1.237-1.59-1.59-.708-.354-.53 0-1.238-.708-.707-.707-2.652-3.358-2.828-4.42-.177-1.06-.707-1.06-.177-2.474.53-1.414.53-2.475-.354-3.005-.884-.53-1.06-.354-1.06-1.414 0-1.061.707-3.182-.177-3.36-.884-.176-.884-.883-1.591.178-.707 1.06-2.475 3.712-2.652 2.298-.177-1.415-.707-1.238.354-2.475 1.06-1.238 1.06-1.414 1.944-2.298.884-.884 1.591-1.238 1.945-2.475.353-1.238 1.59-3.359.353-3.536-1.237-.176-1.944-1.767-2.298.53-.353 2.299.707 2.83-.884 3.36-1.59.53-1.414-.53-2.474 1.06-1.061 1.591-2.299 3.359-2.299 3.359s-.707 0-2.12-2.475c-1.415-2.475-1.592-2.652-1.592-4.066 0-1.414.53-1.59-.353-2.121-.884-.53-1.591-1.768-2.829-1.945-1.237-.177-1.06-.353-3.005-.353h-3.005c-1.945 0-1.945-.53-3.005.53-1.061 1.06-.884 1.414-2.299 1.591-1.414.177-1.767-.177-2.474.53-.707.707-2.475 1.061-3.182 1.061-.707 0-2.298.354-2.829 1.591-.53 1.237-.53 1.414-.53 2.121 0 .707 1.06 1.945.177 2.298-.884.354-1.945.53-2.652.53-.707 0-1.768 0-2.121-.706-.354-.708.53-.884-1.061-.884h-1.591s-.53-.53-2.475.176c-1.944.708-2.121 1.238-3.359 1.945-1.237.707-.53-.177-1.59.884-1.061 1.06-1.592 1.59-2.299 1.944-.707.354-.353.177-1.59.708-1.238.53-.531.707-2.122 1.59-1.591.884-1.591.884-3.182 1.061-1.591.177-1.414 1.238-3.005.354s-.884-.884-1.945-1.768c-1.06-.884-2.121-1.414-3.005-2.121-.884-.707-1.414-.354-.884-1.768.53-1.414.354-1.414 1.06-2.298.708-.884 1.415 0 1.592-2.122.177-2.12-.177-1.767.177-2.828.353-1.06 1.237-.707.883-2.475-.353-1.768-.353-2.298-1.06-2.828-.707-.53-1.945-1.414-1.945-1.414s-1.06.707-1.237-1.591c-.177-2.299-.177-1.768-.177-3.536s.53-1.945-.353-3.89c-.884-1.944-1.415-1.59-1.945-2.827-.53-1.238-.707-1.768-.884-3.006-.177-1.237-.707-1.06-.177-2.121.53-1.06 1.061-1.237 1.061-1.237v-1.238c0-1.237-.884-1.768.707-1.768s2.121.707 1.768 0c-.354-.707 0-2.828 0-2.828s-1.06.884-1.591-.53c-.53-1.415-1.06-1.768-.53-3.006.53-1.237.883-1.237 1.06-2.651.177-1.414-1.59-1.768.354-3.005 1.944-1.238 1.06-1.238 3.005-1.415 1.944-.176 1.237.53 2.475-.707 1.237-1.237 1.768-1.59 2.828-2.475 1.06-.884.707-1.944 2.298-2.121 1.591-.177.354-.354 2.475-.177 2.122.177 2.652.707 3.713-.353 1.06-1.061 2.828-2.829 3.889-3.536 1.06-.707 1.237.177 2.12-1.59.885-1.769-.176-1.769 1.238-3.006 1.415-1.237 1.591-.177 2.652-1.591 1.06-1.414.177-2.121 1.768-2.121 1.59 0 1.59 1.59 2.121-.177.53-1.768-1.237-1.768.707-2.475 1.945-.707 3.536.354 3.89-.884.353-1.237.883-3.005.883-3.005s2.122-1.238 2.829-1.591c.707-.354 1.414-2.829 2.298-2.298.884.53 2.475 1.59 2.475 1.59l2.12 1.238s.178.53.708-1.59c.53-2.122.177-3.183.884-4.774.707-1.59 1.06-1.414 2.475-2.121 1.414-.707 1.768-1.06 2.121-1.768.354-.707 1.414-.884 2.475-.707 1.06.177 1.591.707 2.475-.53.884-1.238.707-1.591 1.59-1.238.885.354.354.354 1.592.707 1.237.354 2.475.884 4.95.354 2.474-.53 2.651-1.768 2.828-.354.177 1.415.177 1.591 1.06 1.591.885 0 .885.177.354 1.238-.53 1.06-.177.353-1.59 2.298-1.415 1.945-2.122 2.121-2.299 3.535-.177 1.415.177 2.299.177 2.299s-.707 1.944.53 1.944c1.238 0 1.414-.53 3.005-.707 1.591-.177 3.006-.354 3.182 1.237.177 1.591 1.238 4.597 2.299 4.773 1.06.177 1.06.53 2.828.177 1.768-.353 2.475.53 2.652-1.06.176-1.591.176-1.945.176-3.182 0-1.238-1.767.707.53-2.829 2.299-3.535 2.83-1.237 2.299-5.126-.53-3.89-1.591-3.536-.707-6.01.884-2.476.53-2.476 1.06-2.299z"
      />
      <path
        style={{
          fill: "#b5b81d",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="M212.132 178.98s2.828-3.182 4.596-2.828c1.768.353 3.89 0 5.657-1.415 1.768-1.414 4.596-.707 4.596-.707l2.122 1.768s2.828 2.828 4.596 1.768c1.768-1.06 1.768 1.768 4.95 2.121 3.182.354 4.596 1.06 7.778 2.121 3.182 1.061 6.01-1.767 9.192-.353 3.182 1.414 8.132 3.889 9.546 2.828 1.414-1.06 1.06-2.475 4.243-2.121 3.182.354 5.657-.707 5.657-.707s-.354-2.121 1.767-1.768c2.122.354 4.596-.707 4.596-.707l3.182-.707h2.475l.354 2.475s4.596-.707 7.071 1.414c2.475 2.121 7.071 6.01 8.132 3.89 1.06-2.122-1.415 3.888 3.182 4.242 4.596.353 3.535-3.182 5.657-2.475 2.12.707 3.889 1.414 6.01.353 2.121-1.06 4.596-4.242 6.717-2.474 2.122 1.767 10.254 2.828 9.9 1.414-.354-1.414 0-5.304 0-5.304h2.828l.354 3.89s4.243.353 4.95-1.768c.707-2.122-1.415-2.829-1.415-2.829s-1.767-2.475.354-6.717c2.121-4.243 3.536-4.243 3.536-7.425 0-3.182 4.242 0 4.242 0l.707-2.828s3.536-1.06 3.536.353c0 1.415-1.414 1.061-1.768 3.536-.353 2.475-3.182 1.06-3.182 1.06s-4.243 6.718-2.828 7.425c1.414.707 2.121 3.89 1.767 6.01-.353 2.122.708-1.06 1.415 1.061.707 2.122 4.596 0 4.95 1.414.353 1.415-3.536 2.829.353 3.536 3.889.707 3.535-.354 4.95-1.414 1.414-1.06 1.767-4.243 3.182-2.122 1.414 2.122 0 3.182 0 3.182l2.121.708s-1.414 1.06-.707 2.474c.707 1.415 2.828 0 0 2.829-2.829 2.828-5.657 1.768-5.657 1.768s-1.414 3.535-2.828 3.889c-1.415.353-.708 2.475-2.829 2.475-2.121 0-2.828-1.415-2.828-1.415l-2.122-1.767-.707 2.12s3.182 3.183 1.768 4.244c-1.414 1.06-4.596 1.414-4.596 1.414s-9.9 10.253-10.607 12.728c-.707 2.475-1.06 9.192-1.06 9.192l1.767 1.414s1.415 2.475 3.182 4.243c1.768 1.768 2.829 5.303 5.657 4.596 2.829-.707 3.89 2.475 3.89 2.475l2.12-1.414s2.122-1.238 2.476-.53c.353.707 2.474 1.414 2.474 1.414s2.122-1.238 4.066-1.415c1.945-.176.354 1.591.354 1.591l-4.066 1.945s.884 2.652 1.944 2.298c1.061-.353 1.591 4.066.354 4.95-1.237.884.354 2.651.354 2.651l.707 2.475 1.944 1.415.53 2.298s.708-3.713 1.945-4.597c1.238-.883 1.945-5.656 1.414-6.717-.53-1.06-1.414-1.414-.707-3.005s.354-4.243 2.122-3.713c1.767.53 3.535.354 3.889-.883.353-1.238-.177-1.238 0-2.299.176-1.06 1.06-1.414 1.767-1.59.708-.177 1.238.353.708-2.122-.53-2.475 0-1.414-.708-3.182-.707-1.768-.176-.707-.883-2.298-.708-1.59-1.238-4.066.53-4.243 1.768-.176-.177-2.298 1.06-2.828 1.238-.53 3.536.177 3.006-1.945-.53-2.12-3.182-6.363-1.414-6.54 1.767-.177 4.281.725 4.281.725l6.25.375s-.625 2.375 1.25 2.625 2.125 1.375 2.75 1.75 1.625 1.25 1.375 1.75-.25 1-.125 1.875.75 2.125.25 2.375-1 1-.875 2 .5 2.5.5 2.5 1 1.375 2.25.75.875-1.125 2.5-1.875 1.625.875 2.625-.75.875-1.875 1.125-2.5 1.5-2.25 2.5-1.75-.317 4.999.744 6.59c1.06 1.59 2.506-.59 2.631.16s.25 1.625.375 2.25-.75 1.125 0 2.125.875 1.25.75 2 .375 1.375.375 1.375 1.375-1.25 2 .25.125 2.375 1.25 2.375 2.375 1.75 2.375 1.75l.5 2.625 2.875-2 2.75.875s-3.813 1.75-3.063 3.563c.75 1.812 4.625-2.125 4.563.312-.063 2.438-.5 4.938-1.438 5.063-.937.125-2.437.937-2.562 1.5-.125.562-1.875 1.687-3 1.937s.625 1.25-1.75 1.625-3.125.25-3.625.25-.5.5-1.125 1.625-.125 1.5-.75 2 2.25 0-1.625.875-4.5 1.125-4.5 1.125-.25.375-1.5.375-1.75-.625-1.75-.625-.25-.625-2-.625-3.375 1.625-3.375 1.625-.5.625-1.5.75-2.375 1.375-2.375 1.375-1.375.375-1 1.875S385.125 271 386 270s2.25-5 4.125-4.625S394.5 266.5 394 269.25s-.625 2.25-.25 3.625 1.25 2.125 1.125 3.375-1.25.875.125 2 2.875 2.875 3.375 1.25 1.125-2.75 1.75-2.5 2.375-.5 1.125 2-1 2.625-2.125 3.375-1-1.25-3 1.75-1 3.625-3.125 4.5-2.5 3.625-3.25 2.5-1.75-1.125-.875-2.75 1.5-1.375 1.25-2.875.75-1.625-.5-1.75-.625-.125-2.125.375-1.375-1.125-2.625.875-1.625 1.875-2.5 2.375-.5 1.125-1.125 1.875-.875 1.125-1.375 1.75-.625.625-.625 2 1.125 3.625 1.125 3.625-.625 1.75-1.375 2.125-.875-.875-4.125 2.875-2.875 4.125-4.875 5-1.75 1-1.875 1.5-1.5 1.125-.75 2.25 0 1.375 1.125 1.875 2.25-.5 2.125 1.125-1.375 3.25-3.375 4.5-4.625 5.125-7.25 5.75-3.75 1.5-3.625 2.75 0 2.75-1.375 2.75-.5.625-.5 3.625.25 3.875.875 5 .875 1.125.875 2.875 0 3-.125 3.5 1 .375-.875 1.5-3.5 1.75-4.25-.125-2.25-1.375-2.375-2.875.5-5.125.5-5.125-1.875-.5-2.125-1.5-1-3.375-1.5-3.75-1.5-1.25-2.5-.75-2.75 1.5-3.375 1.375S340.5 333 337 332s-5.125-1.5-6.625-1.625-5-.125-5.625 0-6.625 1.5-7.375 1.5-6 1.25-7.375 2.375-1.25 3-2.75 3.625-2 .875-2 .875-1.5 1.75-1.625 2.75-1.375 2.75-2 3.125-.75.25-.375 1.375c-.501 2.793-.886 5.47.25 6.625l.125 2.25 1.5 2.625s2.25 3.25 5.125 2.375 1.5-.25 3.875-1.375 1.625 1.25 2.875-1.25.375-2.75 1.75-3.25.625-1 2.375-.5.125.625 2.375.75 2.5-2.375 2.25.5-.5 3-.75 3.75.375-.125-.5 1.5-1.375 1.75-2 2.125-1 .625-1 1.75.25 2-.875 2.5-2.25-.125-2 1.25-.125 1.75.875 2.375 1.75.75 2.375 1.875.875 2.5.625 3-.125 2.125-.875 2.5-1.75.125-1.75 1.75.75 2.875 0 3.25-2-.5-2.25.375-.375 1.625-.5 2.375-.75.875-.75 1.375v1.625c0 1.375-.875 2.25.375 2.5s1.875.625 2.5.25 1.375-.5 1.875-.875 1.25-1.375 2-1.375 2.25.375 2.25.375.75 1.875.625 2.5.375.5.25 2-.125 2.625-.375 3.125-.625 1-.875 1.5 0 .5-.25 1.25.125 1.875-.5 1.375-.25-.5-.625-1-.625-1.125-1.375-2.375-.625-.5-2.125-1.25-1.375-1.625-2.375-1.125-.625 1.375-1.75.625-1.5-.75-2.125-1.75-.5-.875-.875-1.625-1.375-.25-1.375-1.625.375-1.625 0-2.375-.75-1.125-1-1.75-.375-.125-.375-1.375V382.5c0-.5-.5-2.5-.5-2.5l-.625-1.25s-.125-.125-.625-.875-.5-.375-.875-1.625-1.25-2.75-1.5-3.75-1.625-2.25-5.75-3.75-3.875-1.875-7.375-2.625-4.75-1.375-4.75-2.875 0-2-.875-2.5-1.75-.625-1.375-1.5 1-1 1.625-2.125.75-1.375.75-2.25.375-1-1-1.625-4.125-3-4.125-3 1.625-.375-1.875.125-3.75 2.5-4.75 1.25.75-5.625-.5-6.25-1.125.25-1.875-1.375-.125-3-.5-4.375 0 .75-1-3.875.875-3.375-1.375-6-5-2.375-5.25-4.5.375-4-.125-6.125-.75-1.625-.75-3.5-2.875-5.5-4.25-7.5-1.375-7.375-1.125-8.75-.25-6.375.625-8.5.875-5.125 1.5-8-.125-2.25 1.375-5.875 1.375-1.25 1.625-4.375 1.25-1.25 1.375-3.875.625-3.875-.25-5.125-2.125-.375-2.375-2.75 1-3.5-.375-6.125-1.375-1.5-1.625-3.5-1.375-2.125-2-3-.375-.125-.875-2.375-1.75-2.375-2.375-3.625-.5.125-.875-2-1.125-1.875-1.75-2.5-1.5-.75-1.125-1.875.625-1.125.25-2.25-2-1.75-2.5-2.875-.5-.25-.5-2 .5-2-1-2.5-2.5.75-3.25-.875-.625-.75-2.125-1-2.125-.125-2.625-1.125-.75-1.875-1.75-1.875-2.25-.375-2.5-1-1.625-2.375-2.5-2.375-.625.625-2 1.25 2.5 1.25-.5 2-4.375 1-5 .5-2.875 1.125-2.5-.75.5-1.625 1.125-2.125 2.375-.625 1.625-1.125-.375-1.375-3-.75-3.375.875-4.25 1.5-.875 1.875-1.25 2.625 1.125.5-1.75 1.75-1.375-.625-4.375 2-2 2.875-4.25 3.25-.875 0-2.625 1.875-1.5 2.75-3.25 2.75-1.125 3.125-2.75 1-2.75-1.25-1.5-2.25 1.5-.75 2.5-1 .5.375 1.625-1.25.875-2.25 2.625-2.375 1.5 1.5 2.25-.875 0-2.25 1.375-3.5 2.875-2.5 1.125-2.625-1.875-.5-3.5.25-1.75 1.125-3.25.875-1.875-.375-1.875-1-.625-2.625-.625-2.625 1.25-.625-.875-1.125-2.25 1.125-2.125-.5 1.125-1.375.25-2.125-1.125-1.25-2.25-.75-2.375 1.75-1.625-.125 2.25-2.625 2.75-3.375 1.25-2.875 1.5-4-1-.5.5-1.625.875-1.375 2.75-1.25 1.375 0 2.625.625 1.625 1 2.375.625 1.5-1.25 2-1.875 1.125-1 1.25-1.75.75-1.5-.625-1-.875.5-2.75.875-1.625 1.75-2.375.125-.875-2.375-.875-2.375-.75 0-.625-1.75-1.125-4.625 2.25-5.5 5.5-.125 5.625.375-1 1 .5 1.125 1.625.5 2.5-.75 1.875-1.125.875-1.625-1.875-.375-2.375-1.375 0-1.25-.5-2.625-.5-1.625-1.25-2.625-2.75-2.5-.25-3.125 5.125-1.25 4.632-.895z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#2293ac",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
        }}
        d="M519.9 234.841c-.53-1.06 0-.883-.884-1.767-.884-.884-1.59-1.238-1.06-2.652.53-1.414-.354-2.298 1.06-2.652 1.415-.353 1.238 1.591 1.591-.883.354-2.475-.707-1.768.707-3.36 1.415-1.59 1.591-1.944 1.591-1.944s.884 0 1.238 1.238c.353 1.237.353 2.298 1.06 1.414.708-.884.884-1.945 1.415-2.652.53-.707 1.414-1.59 1.414-1.59s-1.591-2.652.354-2.476c1.944.177 1.944.53 2.474-.176.53-.708.354-.708 1.591-1.061 1.238-.354 1.415-.177 1.591-1.238.177-1.06.707-1.06 1.415-1.767.707-.707.707-1.06.883-2.475.177-1.414-.176-1.238 1.415-3.359 1.59-2.121 1.59-1.944 2.121-3.359.53-1.414.53-1.237 1.06-2.121.531-.884 1.238-.53 1.768-1.237.53-.708.708-1.591.708-1.591l.883-1.591s-1.767-.708-.176-1.415c1.59-.707 1.767-.883 3.005-1.237 1.237-.354 2.121-.354 2.121-.354s1.15 1.68 1.326.442c.177-1.237-.53-1.414.53-2.21 1.061-.795 1.68-.706 2.033-.441.354.265.177.53.973.353.795-.177 1.679.884 1.944-.353.265-1.238-1.149-2.21.53-2.917 1.68-.707 2.564-.089 3.094-.619.53-.53-.265-.795.796-1.326 1.06-.53 1.414-.265 2.474-.618 1.061-.354 1.15-1.503 1.68-1.591.53-.089 1.237 0 1.768.53.53.53-.973.972 1.149.619 2.12-.354 4.95-1.68 5.745-1.061.795.619.088 1.68 1.149 1.68 1.06 0 2.121-.443 2.652-.089.53.354.441.619 1.237.972.795.354.884.265 2.121.354 1.238.088.265-.354.973-.089.707.266.972.796 1.944 1.15.972.353 1.238.088 2.387.176 1.149.089.53.53 1.856.884s1.414.089 3.093.089c1.68 0 3.713-.089 4.685.176.972.265.795.884 2.121.796 1.326-.089 1.15-1.591 4.508.619 3.359 2.21 3.27 2.651 4.066 3.358.795.707 1.149 1.15 1.237 2.298.089 1.15.442 1.326-.088 1.945s-2.033 1.414-3.182 1.68c-1.15.264-3.27.706-4.154.706h-4.155c-2.21 0-5.038-.353-6.363-.53-1.326-.177-2.917.442-3.006.884-.088.442-.442.884-.088 1.237.353.354 1.237 1.238 2.033 1.591a4.122 4.122 0 0 1 1.59 1.238c.266.353 1.503.265 1.945.265.442 0 1.15.619 1.326 1.06.177.443-.088.885.177 1.238.265.354.795 0 .795 1.503v2.121c0 .707-.353 1.237.708 1.15 1.06-.09.795-.178 1.856-.178 1.06 0 .707 1.415 2.121-.088 1.414-1.503 1.591-1.591 1.414-1.945-.177-.353-.353-1.06-.972-2.033-.619-.972-1.68-1.679-.707-2.033.972-.353.265-1.325 1.59-.441 1.327.883.885 1.502 2.034 1.502 1.149 0 1.237.884 2.828-.619 1.591-1.502 1.414-2.032 2.387-2.12.972-.09 1.414.088 2.386-.443.972-.53 1.591-1.944 2.563-1.856.973.088 1.768.972 1.945.177.177-.796.53-1.15-.354-1.768-.883-.619-1.325-.354-1.59-1.149-.266-.796-.089-.884-.089-1.591s.707-1.945.088-2.652c-.618-.707-.795-.618-1.06-1.414-.265-.795-1.06-1.502-.177-1.59.884-.09.796-.266 2.033-.09 1.237.178 2.652-1.325 3.359-.618.707.707.707 1.06 1.326 1.945.618.883 1.06 1.414 1.679 1.679.619.265 1.237-.53.619.884-.62 1.414-.62.795-.62 1.856 0 1.06-.353 1.856 1.327.972 1.68-.884.972-.442 1.856-1.68.884-1.237 3.359-1.944 3.977-2.297.62-.354 3.006-2.652 3.006-2.652s.618-1.502 1.944-1.237c1.326.265 1.15.884 3.005-.884 1.856-1.768 1.856-2.122 3.182-1.238 1.326.884 1.238 1.15 2.298 1.15 1.061 0 2.299-.708 3.27-.354.973.353.885 1.856 2.21 1.237 1.326-.618 1.415.619 2.475-.972 1.061-1.591 1.415-1.856 1.768-2.563.354-.707 1.238-1.856 2.563-1.591 1.326.265 1.591.53 2.652.707 1.06.177 2.033.265 3.005.265.973 0 2.298-.795 3.005.088.708.884.973 1.415 1.68 1.857.707.442 1.414 7.16 1.414 7.16s.177 3.358-.354 4.065c-.53.707-.53 3.889-.53 3.889l-1.237 2.121-1.945 4.773s-1.237 3.89-1.06 4.773c.176.884 1.06 2.829 1.06 2.829s-1.06 1.59-.53 2.475c.53.883 1.237 3.182 1.237 4.419v4.773 4.066s1.768.353 1.768 1.237c0 .884 0 2.298-.707 3.536-.707 1.237-1.591 1.768-1.768 3.359a14.39 14.39 0 0 0 0 3.005l1.414.707 3.182 2.121s1.591 0 1.768 1.238c.177 1.237.884 1.767.177 3.182-.707 1.414-2.475 2.298-2.298 3.182.177.883.53 1.237.707 2.474.177 1.238.707 1.415.707 3.182 0 1.768 1.06 2.829 0 3.36-1.06.53-1.237.883-2.121 1.237-.884.353-4.066.353-4.243 1.59-.177 1.238-.353 1.592-1.06 3.006-.708 1.414-.884 1.768-1.768 1.944-.884.177-1.238 0-2.122-.176-.884-.177-2.475-.884-2.475-.884l-1.414-.177-1.237-1.238s-.707.53-1.414.884c-.708.354-2.299 1.768-2.299 1.768s-2.474.707-3.181.707c-.708 0-.708-.177-1.415 0-.707.177-1.944 0-2.475.707-.53.707.708 1.415-1.944 1.591-2.652.177-2.652.177-3.359.177-.707 0-1.944 3.712-1.944 3.712s1.414 1.238.353 1.591c-1.06.354-1.768 1.415-2.298 2.122-.53.707-.884 1.237-.707 2.121.177.884 0 1.414.353 2.475.354 1.06 1.238 3.182 1.238 3.182s.707.353.53 1.414c-.177 1.06-.707 1.591-.177 2.475.53.884 1.591 1.237 1.591 1.237l1.061 1.415s1.414-.354 1.414.884c0 1.237.177 1.767.354 3.182.177 1.414-.354 2.828-.354 2.828s-.353.707-1.414 1.06c-1.06.354-1.414.177-1.768.884-.353.708-.176.884-.353 1.768s-1.945 3.713-1.945 3.713l1.238-1.061s.707 1.06.53 2.121c-.177 1.06-.53 1.238-.354 1.945.177.707.884 1.06.884 1.06l1.061.354s1.243 1.427.993 2.927c-.25 1.5.375 1.75.5 2.375s-.25.25.5 1.75 1.25 1.5 2.375 1.875 1.625.375 1.625.375 1 1.25.25 1.75-1.375 0-1.5 1-.125 1.125-.125 2.625.25 2.375 0 2.875-.375.75-.375 1.5.875 1.375.875 1.375.625 1 .625 1.625-.25.875-.75 1.375-1.25.375-1.25.375-.875 0-1 .875 1.75.875-.375 1.25c0 0-1.25.125-1.875.25s-1.25-.25-1.875.25-.625.875-1.5 1-.75 0-1.75.125-1.75 1-1.75 1 .25.5-1.375.375-2.25.25-2.25.25 0 1.5-1.375.5-2-1-2-1.5.625-1 1.125-1.5 1-.75 1.375-1.25.625-1.25.625-1.25-.375 2.625-.75-.25 0-2.875-.75-3-.625.125-1.5-.625-1.375-1.375-1.875-1.75-.125-.875-1.25-.875-.5-.75-1.375-1.625-1.625-1.375-1.625-1.375l.625-1.5s-.125-.25-1.25-.125-1.375.125-1.875.375-.375 1.75-1 .625-.375-1.375-1-2-1.75-1.25-1.75-2 .75-1.5.125-1.75-1.125.375-1.375-.625-.625-1.75-.625-1.75l-.875-.5.5-1.25s.625-.75.75-1.625-1-.875.625-1.125 1.75.25 2.625-.625l1.5-1.5s.625-.75.25-1.25-.625-.75-1.25-.375-1 .875-1 .875-.25.25-1.625.25-.875-.25-2.125 0-1.75.375-2.375.625-1.125.25-1.875.5-.625.125-1.5.75-1.75 1.625-1.75 1.625-.5.25.125 1 1.375 1.5 2 1.5 1.125-.625 1.375-.125.75.875.375 1.75-.125.875-.75 1.375-1 .75-1.5 1-.75.25-1.25 1.125.25 2.75-1.25 2-.875-.625-1.875-1.25-1.375-.5-1.75-1.375-.375-1-.5-1.875-.375-1.5-.625-2.5-.125-1.5-.875-1.75-1.25-.75-2-.75-.125-.375-1.75 0-2.125.125-2.5.625-.625 2.875-.625 2.875.25.375-.5 1.125-1.75.875-1.75.875l-1 .75s-1.125.75-.625 1.5 1.125 1.375.875 1.875-.125.5-.75 1-1 .375-1 1.5.875 1.375.25 2.375-.375.875-.875 1.625-.75 1.375-1 2.125.5.875-.375 1.625-1.125.375-1.375 1.25.125.875-.375 1.5-.5 1-1 1.375-.5.25-1.125 1-.125 1.125-.625 1.75-.875.125-1.125 1 0 .5.125 1.375.75.875 0 1.875-1.125 1.625-1.625 2-.5-.125-.875 1 .25 1.5-.5 1.75-1.125.25-1.875.375-1.125-.125-1.625 0-.75 0-1.125.625-.75.5-.25 1.25.375.75.875 1.25l1.375 1.375c.5.5.875.75 1 1.375a6.38 6.38 0 0 1 .125 1.125s.625 1.875.125 2.125-1 .25-1.125 1-.25.5 0 1.375 0 .875.5 1.375.625.5 1.375 1.25 1.625.875 1.125 1.5-1.125.75-1.875.5-1.125.375-1.625-.75-.75-1.375-.75-1.375-.75.125-.75.75 1.875.75-.5.75-2.125.75-2.75 0-.125-1-1-1.25-1 .5-1.375-.25-.5-.75-.5-1.875.625-1.125.25-2.625-.625-1.125-.875-2 0-.875 0-2-.375-1.625-.375-1.625-.375-.25-.625-1.5-.125-1.375-.375-2.5-.125-1.5-.75-1.5-.25.5-1.25-.25-.5-1-1.375-1.375-1 .375-1.25-.875-.25-.625-.25-2.125v-2.625c0-.625.5-.625-.25-1.625s-.625-1.25-1.5-1.375-.625.875-1.375-.375-.875-2-1.875-2.25-.875.375-1.375-.25-.25-.75-.875-1.375.125-.875-1.5-.875-1.625-.875-2.5-.5-1.125 1-1.125 1.625 0 .625.125 1.5-.125 1.375.5 1.5.625-.5.75.625-.125 2.25 1.375 1.625 2.375-1.5 2.5-.75-.125.875.125 1.875 0 1.875.875 2.5 1.25.625 1.625 1.125.25.375.75.625.5 1.375 1.125 2.25 1.375.125 1 1.25-.375 1.625-.875 2-1.625.75-2.375.125-1.375-1.125-1.375-1.125.625-1.25-.875-.875-1.5.5-2.125.5-1-1-.75.375 1.25 1.875 1.25 1.875 1.125 0 1 1.25.375.875-.25 2.125-.5 1-1 2.125 0 1.125-.625 2-.875 1.375-1.75 1.75-.875-.375-1.25 1-.25 1.375-.875 1.625-2 .25-2.5.625.375.875-1 .5-1-.375-1.625-.5-.875-.125-1.375-.75-.125-1.75-.625-1.375-.875 1.75-1.375.375-.375-1.5-.875-1.75-.75 1.25-.875-.375-.375-1.625.375-2.375 1-1 1.625-1 .75.125 1.5.25.625.75 1.25.875 2.5-1 2.75-.25-.25 3 .375 1 .25-2.375 1.125-3.125 1.75-1.5 2.125-2 .75-1.25-.125-2.125-1.125 0-1.125-1.625.25-2-.25-2.875 0-.625-1-1.125-1-.75-1.5-1.375-1.375-1.125-2.25-1.375-.25.375-1.125-1-1.125-1.75-1.875-1.625-.375 1.125-1.125.25-.5-1-1-1.375-.75 0-1.375-.5-.625-.5-.75-1.5.125-1.375-.5-1.875-1.875-.875-1.875-.875.25-.25-1.375 0-1.75.25-2.25.625-.125.375-.625 1-.375.75-1.25 1-.125.75-1 .625-.75.25-1.25-.25-.125-1.125-1-1.125-1.25.125-.875-.625.875-.75-.125-.75-.875.25-2.125 0-1.75-.125-2.25-.125l-1.375 2.5s.125.5 0 1.125-.625 1.125-.625 1.125-.375.375-.375 1.125.25.875-.5 1.625-.75 1-1.25 1.25-.5.125-.875.625-.625.5-.875 1.125-.25.625.125 1.25a8.02 8.02 0 0 1 .625 1.375s.375.125.125 1.25-.375 1.875-.375 1.875 0 .5.125 1.5 1 2.125 1 2.125l.625.875s.375 1.5.5 2.25 1.25.5.125 1.5-2.75 1.625-3.875 3.5-.75 3.375-1.625 4.375-.125 1.125-1.25 1.125-2.125-1.25-2.75 0-1 2.375-1.875 2.5-1-1.375-1 .375-.375 2.875-.375 2.875-.25.875-1.125.75-1-.25-1.75-.375-.75.375-1.375-.375-.75-1.125-1-1.75-.25-.875-1.25-1-1 .25-1.5-.625-.75-1.125-1.5-1-.75.625-1.75-.375-1-1.75-1.5-1.625-1.125 1-1.125 1 .125.5-1.375.375-1.75-.375-2.875-.375-1.25.75-2.25.25-1.125-.625-1.125-1.25.125-1.5-.375-2 .125-1.125-.625-1.5-.375-.25-1.25-.25-.875.125-1.75-.375-1.25.25-.875-1.125.125-1.25.75-2.25.625-1 1-2.125.5-1.375 1.125-3 .875-1.125.875-2.375-.5-1.25.25-2.125.875-.875.75-1.875.25-.75-.25-1.5-1.75-1.875-2.25-2.375-.375.125-.625-1.375-.75-1.25-1-2.125-.25-.875-.25-2-.875-.75-.875-1.375-.375-1.125.5-1.625 1-.125 2.125-1.125 1.125-.75 1.375-1.625 1.125-1.375 1.125-1.375-.125.125.625.875.875.75 1 1.25-.375.625 1.125 1 1.125.5 2.625.5 1.875.125 2.5-.125 1.25-.625 1.25-.625.5-.375 1.375-.375 1-.125 1.75.125.125.375.875.25.875.125 1.5-.25 1 .25 1.375-.875 0-1.5 1-2.25 1.375-1 2.375-1-.625-1.625-1.25-1.75-1 .5-1-.125-.125-.75.25-1.75 1.125-1.625 1.125-1.625-.125-.5-.25-1.375 1.625-1.375.5-2.125-1.625-1.125-2.375-1.125-.625 1.25-1.25-.25-.125-1.75-.75-2.5-.875-.5-1.5-1.375.25-.75-1.125-1.75-2.25-1.25-2.875-1.25-.875.875-.75-.375.125-1.625 1-2.375 3.125-1.375 4-1.5-.5-.5 1.375-.125 1.25.375 2.125.5 2.5.625 2.5.625.25-1.875.75-2.5.625-.625 1-1.625.5-1.125 1.75-1.5 2.125.625 2.125.625-1.625 1.625-.375 1-.375-2.625 2.375-2.25 3.75 2 4.125.125 0-1.875.625-2.875.625-1 1.75-1.625.875-2.5 2.25-2.75.875 0 2.125-.25 1.125 0 1.875-.875 1.375-3.125 2-3.375 1 .375 1.375-1.625-.25-1.625.375-2.125 1.375.125 1.75-1.25.25-1.625.25-2.25-1.75-.625.625-1.125 2.5.25 3-.75.5-.75.75-1.75.75-.75 1.375-1.75.25-1 .625-1.875.375-4.125 1-4.375.625.5 1-.5 0-1.25.75-2.25.875-.875 1.625-1.375.875-.375 1.125-1-.875-.5.875-1.75 1.625-.75 1.875-1.375.5-1 .625-1.625 0-.625.125-1.5 0-.25.125-1.75.375-2.5.5-3.125.25-1-.375-.875-.75 1.125-.875 0-.375-1.5-.625-2.125-.625-1.75-.625-1.75-.5-.5 0-1.25 1.125-1.875 1.125-1.875.375-.375 1-.5.75.125 1.25-.5-.5-.75.75-.875 1.5-.125 1.5-.125l-.75 1.125-.125 1s1.375.75 1.625 2.25.5 1.625.375 2.375-.25 3.75-.25 3.75 0 1 .75 1.625 1.25.875 2 1 2.125.25 2.75 0 1.25-.375 1.875 0 1.375 0 1.875-.25 1.125-.5 1.75-.625 1.125-.125 2.375-.125 1.625.25 2.125-.25.375-.125 1-.625 1.875-1.125 2.5-1.125.625-.125 1.375-.25 1.75-.625 2.75-.25 1.375.5 2.25.625 1.25.375 1.75 0 1-.75 1-1.5.125-1.25-.375-1.75c0 0-.5-.5-.875-1.75s-1.375-1.75-.625-2.625 1.125-.75 1.375-1.875-.5-1.75.375-2.5 1-.875 1.25-2 .25-1.75 1.25-1.375.875-.75 1.5 1-.375 2.5 1.25 2.625 2.75.875 2.75-.125-.75-1.75-.5-2.875S569.5 246 569.5 246s-.625.625-1-.125-.625-.5-.75-1.75-.875-.5-.875-1.625-.5-2.125.25-2.625 1.375-.625 2.5-.375 3.25-.375 4.25-.5.625.125 1.875.25 2 .125 2.875-.125 2.5-1 2-1.375-.875-.625-1.5-.75-1.5-.5-1.875-1.25-1.25-1.625-1.875-1.375-.375.375-1.625.375-1.875-1.75-2.875-1.125-.25 1-1.5 1.25-2.625.375-3.875.375-1-.25-2.375 0-2.375 1-2.875-.25-.625-.875-.625-2.125.75-2.125 1-3.25-.5-2.25.375-3.375 1.5-1.375 1.875-2 .75-1.375.875-2.25.125-.625.125-1.5-.375-1.625-.875-2-.375-.375-1.5-.5-.75-.875-1.875.375-2.125 1.375-2.25 2.375.5 1.375-.125 2.625-.75 1.125-1 1.625.25 1.25-.25 1.75-.875.5-1.75 1-1.5.125-1.625 1.625-.375 1.125 0 2.125.625 1.125.875 1.875.75 1.125.75 2.625.375 2 .375 2 .5 1.75.375 2.625-.5 2.375-.875 3.25-.75 1.375-1.375 2-.375.75-1.125 1.5-1.625 1-2.25 1.375-.75 1.625-.75 1.625v2.375s.625 1.625-.5 2.125-1.375.625-2.125 1.75 0 2-.875 2.75-.625.875-2.125.75-1.75-.125-2.25-.75-1.125-1.75-1.875-1.875-.625.125-1.125-.125-.125-.75-.875-.75-1.125.5-1.125 0v-1.375-4.625l-1.875-2.875.625-1.625-.75-1.25-.875-.5s-1.375.5-1.5 1-.125.875-.375 1.375-1.375 2-2.25 2.125-2 .25-2 .25-.375 1-1.125.625-.5-.25-1.375-1.25-1.125-2.125-1.125-2.625.25-.625-.375-1.125-.625-.5-1.25-1.125-1.5-1.125-1.375-2.25.375-2.25.625-3.375-.375-2.25-.375-2.25l-.475-.909z"
      />
      <path
        style={{
          fill: "#b5b81d",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="M429.125 209.875s.625 3.875-.25 5.5-1 .75-1.5 3.125-.125 3.25-1 4.625-.625-.875-1 2.75-.125 4.5-1 4.875.25 1.75-1.25 1.75-2 1-2.375-.375.25-2-1.25-2.125-2.375 1.625-2.625-.125.375-2.375-.875-2.875 1.25 3.625-2.875-1.25-3.375-8.25-3.375-8.25-1.25-1.375-1.25-2.25.875-3.625-.25-5.125-2.25-4.5-.875-5.375 2.75-.625 3.125-2.625.25-1.75.5-2.75.75-1.375-.25-1.5 0 .375-1.875-.125-1.625-1.25-2.125-1.375.375.75-1.25.125-2.875-1.125-1.125-1.75 2.875-.875 3.625-.625 1.125 1.625.875-.25S404.5 191 404.5 189.75v-2.25c0-1.25-.25-1.875-1.25-2.875s-.75-1-1-2.625-.25-1.5-1.125-2.5-1 .375-1.625-1.375-.625-2.125-1.875-2.125-1.125.75-2.125-.625-.75-1.625-2.375-1.5-2.875.875-3.125 1.375.375 1-1.25 1.125-2 .125-2.875.125-1.75.375-1.75-.125c0 0-1-1.5-2.625-1.125s-2 1.5-2.5.25-1.5-1.125-1.625-1.75-1.625.125-.125-1.5.5-2 2.375-1.875 1.5.25 2.5-.25 2.375-.625 1-.75c0 0 .5-.75-.875-1s-2.875.5-2.875-.5-1.25-2.125.5-2.125 2.75.5 3.625-.375.875-.625 2.125-.5 2.5.75 2.875-.25 2.375-1.125.75-1.625-2.5-.375-2.125-1.125 1.375-.875 1-1.75-2.125-1.625.375-1.75 3.75 1 4.125-.375-1-2.5 1.25-2.5 4.625-1.125 4.75-1.875-.5-1.625 1.625-1.125 1.75 1.625 2.875.25-.125-1.75 2.125-1.25 2.5.75 3.375.125-.75-.875 1.375-.625 1.75 1 2.125-.875-1.375-1.625.75-2.125 2.25 0 3.25-1.375.125-1 2-1.375 2.125 0 1.25-1.375-2.5-2.125 0-2.375 3.875-.5 4.125-1.25c0 0-.125 1 1.375.625s1.25-.875 2.125-2 .625-1.375 1.5-.75-.125 1.125 2.125 0 .5-1.125 2.75-.75 2.125.125 4.75.25 1.25.5 2.75.875 1.125.25 3 .25 1.5-.375 2.625.375.625.875 2.875.875 2.875-.625 3.25.75-.625 1.5 2.125 1.875 3.625-.125 2.125 1-4.625 1.25-3.75 2 .75.5-1.625 1-5.875 1-3 1.375 4.875-.875 5.625.375-1 1.375 2.25 1 1.875-1.125 4.5-.625 2.125 1.25 3-.375-1.5-2.5 1.375-1.875 2.25.625 4-.375 2-3 2.75-.625.625 2.875-1 3.625-1.5-.375-2 1.375-.375 2.25-1.625 3.25-1.875.125-1.625 1.875.25 1.5-.125 3.25-1.25 2.25-.125 3.25 1.125 0 1.875 1.5 1.125 1.5.375 3.25-.875.875-1.125 3-.5 3.375.375 2.75 1-2.375 1.125-.625.625 2.875-.875 3.5-1.375-.25-1.625 1 .625 1.625-.5 2.625-.125 2-1.375.875-2-2.875-3-1.75-2.375.125-1.25 1.5 1.875 1 2.125 1.5.125 1 .5 1.75.125 1.125 1.125 1 1.375.375 1.125 1.25-.375 1.375.375 2.25 1 .875.375 1.25-.75.5-1.625 1-.75 1.25-1.25 1.375-1.5.75-1.625-.5-.25-2.875-1-3.5-1.875-2.25-2.125-.75 0 2-.375 2.75-1.875-.25-.375 1 2.125 1.625 2.125 1.625 1.375.75.75 1.375.125.875-1.75 1.125-1-1.625-2.75.375-3 2.5-3 2.5l-.875-1s-.75-2.125-1-.75 0 1.25-1 3.375-.5 2.625-1.625 2.75-2-.75-2.625.125.25.625-.875 1.5-1.5 1-2.25 1 .375-2.125-1.125.125-.625 2.5-1.875 2.75-1.5.25-2.625.25-1.75.125-2.875.125-2 .125-2.75.5-1.5 1.25-1.5 1.25v.75z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#47c1dc",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#ac)",
        }}
        d="M570.563 189.875c-9.707-.57-14.541 9.639-23.492 10.42-5.856 10.832-12.4 21.751-22.445 28.577-2.916 3.315.327 12.384 2.83 15.15 8.22-10.735 11.7 6.11 14.415 10.41 4.12-3.416 3.856-9.808 9.035-13.01-2.065-7.24-3.47-14.655 2.48-20.394.813-12.03 18.509-7.001 14.047 3.42-5.029 5.45-2.108 8.522 4.157 5.427 9.4-2.447 19.233 13.431 5.235 13.512-8.97-2.383 5.026 10.552-4.293 12.662-5.672-1.451-6.54.71-4.626 5.607-1.256 10.192-14.484 3.171-20.699 8.591-7.29.215-13.24-1.571-16.359 6.423-5.56 7.149-7.886 15.998-14.16 22.861-4.222 6.017-11.176 9.006-14.451 15.276-7.637-2.562-9.062 9.21-15.8 4.63 7.622 5.136 11.36 18.328 2.17 23.747-5.198 3.317-13.77 1.87-18.414 2.032 7.352 6.478 2.426 14.915 2.29 22.196 3.435 5.635 9.905-.008 14.384 5.964 9.44-.319 16.343-11.02 11.506-19.914 2.018-7.95 6.304-20.911 17.111-16.055 7.952-6.321 16.272 8.26 19.193 7.042-3.498-8.449 8.678-13.646 13.326-6.135 7.647 2.498 6.34 15.941 12.541 15.743 8.105-2.338 7.264-11.832 12.981-17.137 2.102-8.421 3.565-19.402 13.712-21.255 7.344 5.231 11.824-5.036 19.884-3.916 9.656-3.074 6.988 10.11 2.964 11.788 1.927 5.052 8.536 3.576 10.055 10.006 7.565-.22 4.599 13.011 12.09 5.433 2.824-6.613-.91-18.479-7.23-20.382-4.135-8.25 11.465-15.326 1.623-22.069-3.286-7.752-1.816-17.782 5.252-22.962 6.37-1.718 13.583-5.438 19.034-5.708 5.527 4.888 4.853-5.714 10.904-4.511-2.918-5.784 2.434-11.904-4.77-14.76-1.122-8.691 1.26-18.117-1.421-27.513-3.064-9.368 6.445-16.974 4.328-26.238-4.729-9.35-11.27 5.018-18.38.762-10.935-1.987-18.28 9.71-27.92 12.563-8.757.617-12.242 14.627-21.73 8.63-.55-7.285-14.177-9.956-7.595-17.866 4.051-4.072 17.205 1.98 17.325-2.258-8.02-3.652-17.414-1.401-25.498-5.317-1.85-.537-3.707-1.06-5.59-1.472zM539.28 349.531c.08.65.256-.303 0 0zm21.625 12.531c.063 6.127 4.074.202 0 0z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 40,
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fill: "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          fontFamily: "Sans",
        }}
        x={739.634}
        y={268.783}
      />
      <path
        style={{
          opacity: 1,
          fill: "#48c74c",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
        }}
        d="M662.952 190.044c.707.442 1.414 7.16 1.414 7.16s.177 3.358-.354 4.065c-.53.707-.53 3.89-.53 3.89l-1.237 2.12-1.945 4.774s-1.237 3.889-1.06 4.773c.176.883 1.06 2.828 1.06 2.828s-1.06 1.59-.53 2.475c.53.884 1.237 3.182 1.237 4.42v4.772 4.066s1.768.354 1.768 1.237c0 .884 0 2.299-.707 3.536s-1.591 1.768-1.768 3.359a14.39 14.39 0 0 0 0 3.005l1.414.707 3.182 2.121s1.591 0 1.768 1.238c.177 1.237.884 1.768.177 3.182-.707 1.414-2.475 2.298-2.298 3.182.177.884.53 1.237.707 2.475.177 1.237.707 1.414.707 3.182 0 1.767 1.06 2.828 0 3.358-1.06.53-1.237.884-2.121 1.238-.884.353-4.066.353-4.243 1.59-.177 1.238-.354 1.592-1.06 3.006-.708 1.414-.885 1.768-1.768 1.945-.884.176-1.238 0-2.122-.177-.884-.177-2.475-.884-2.475-.884l-1.414-.177-1.237-1.237s-.707.53-1.414.884c-.708.353-2.299 1.767-2.299 1.767s-2.474.707-3.182.707c-.707 0-.707-.176-1.414 0-.707.177-1.944 0-2.475.708-.53.707.707 1.414-1.944 1.59-2.652.177-2.652.177-3.359.177-.707 0-1.944 3.713-1.944 3.713s1.414 1.237.353 1.59c-1.06.354-1.768 1.415-2.298 2.122-.53.707-.884 1.237-.707 2.121.177.884 0 1.415.353 2.475.354 1.06 1.238 3.182 1.238 3.182s.707.354.53 1.414c-.177 1.061-.707 1.591-.177 2.475.53.884 1.591 1.238 1.591 1.238l1.061 1.414s1.414-.354 1.414.884c0 1.237.177 1.768.354 3.182 0 0 1.021 1.399 1.728.868.708-.53 1.945-1.414 1.945-2.474 0-1.061-.177-1.415.707-1.591.884-.177 1.414-.177 2.298-.53.884-.354.53-.354 1.591-.354 1.06 0 .884-.53 1.414.53.53 1.06-.176.354.177 1.945.354 1.59.53 1.414.707 2.474.177 1.061 0 .708-.353 2.122-.354 1.414-.354 1.59-1.238 1.944-.884.354-2.651 1.238-2.828 2.652-.177 1.414 0-.354.177 1.944.176 2.299.176 3.006.884 3.36.707.353.883.176.883 1.237 0 1.06-.53 1.414.707 1.59 1.238.177 2.122-.176 2.122-.176s2.298.353 1.768 1.768c-.53 1.414-1.591.53-.884 2.12.707 1.592.884.354 1.06 2.122.177 1.768-.53 2.298.354 2.298s2.475.707 2.475.707l.177 2.299.353 1.414s-2.298-.884-1.944.707c.353 1.59.707 1.59.707 1.59s2.298-.176 2.298 1.415-.354 2.121-.177 3.005c.177.884.984.869.807 2.106-.177 1.238-.277 1.96-.453 3.02-.177 1.061.53 1.592-.884 1.945-1.415.354-2.475 1.415-2.475 1.415s1.59 1.59-1.768.883c-3.359-.707-2.828-1.237-4.243-1.59-1.414-.354-1.237.353-2.298-.354-1.06-.707-1.414-.354-1.767-1.414-.354-1.06-2.975-2.538-2.975-2.538s-.875 0-1 .875 1.75.875-.375 1.25c0 0-1.25.125-1.875.25s-1.25-.25-1.875.25-.625.875-1.5 1-.75 0-1.75.125-1.75 1-1.75 1 .25.5-1.375.375-2.25.25-2.25.25 0 1.5-1.375.5-2-1-2-1.5.625-1 1.125-1.5c0 0-.47-1.486-2.327-1.133-1.856.354-3.005.265-3.447.884-.442.619-.884 1.856-1.591 1.945-.707.088-2.74.265-3.27-.354-.53-.619-1.49-2.592-3.99-3.342s-4.625-1.375-5.5-.75-.125 1.375-1.875.875-3.5-1.25-4-1-2.125 0-2.125.625.75 1.625-.25 1.75-2.25.625-2.875.875-.25.5-2.5.5-4.5.375-5.375-.375-1.25-1.625-1.625-2.125-1.375-1-1.375-1h-1.25s-1.375.375-1.875 1-.5 1-1 1.375-.5.25-1.125 1-.125 1.125-.625 1.75-.875.125-1.125 1 0 .5.125 1.375.75.875 0 1.875c0 0 1.063 2.188 1.5 3.25.438 1.063 1.875 1.625.75 2s-2.5.438-2.25 1.438 2.625 3.375 3.313 4.562c.687 1.188.187 3.875 1.312 4.875s2.875 1.875 3.5 1.875 2.5-1.375 2.75-.125-.25 3.625.5 3.75 2.5 1 2.875.375-1.253-2.394-.016-2.924c1.238-.53 0-3.006 2.652-1.768 2.652 1.237 2.652 2.121 4.243 2.298 1.59.177 2.651-.354 3.712-.177 1.06.177 2.298 1.238 2.652 0 .353-1.237 1.237-1.944 2.121-1.944.884 0 2.828-.53 3.182.53.354 1.06-.53 2.298-.354 3.359.177 1.06 1.238 1.414.884 7.424-.353 6.01 1.061 9.016.177 9.546-.884.53-2.121 2.122-1.768 3.006.354.883 1.768 3.889 1.945 6.01.177 2.121.884 2.652 1.06 3.712.177 1.06-1.237 1.238.177 3.005 1.414 1.768 4.42 2.829 4.243 4.066-.177 1.238 1.944 1.768 2.828 3.006.884 1.237 2.298 4.772 2.652 6.363.354 1.591 1.591-.707 2.298 1.945.707 2.652 2.829 2.298 3.359 4.243.53 1.944 2.453 3.8 3.453 4.3s4.25 1.25 4 3 2.75 3.5 2.75 4.75-.25 3.75-.25 3.75-.5.5.5 1.5 1.75 1.75 2 3.25 1.25 1.25 1.25 1.25 9.75-1 13-2 7.25-2.75 7.25-3.75 0-.75 1.5-1.25 2.5-2.5 2.5-2.5l1.5-1.25s.25-2 1.5-1.75 2.75 1 2.75 0-.75.25 2.25-4.75 3.5-6.75 3.25-7.75-.25-1 .75-1.75 1.5-3.25 1.5-3.25l-.5-2.25 1-2.25s1.433-3.917.196-4.448c-1.237-.53-1.06-.884-1.06-2.298 0-1.414-1.592-2.298-1.592-2.298s0 .53-1.414 0-3.182-2.121-3.182-2.121-1.59.707-1.768-.354c-.176-1.06.354-2.651-.53-2.121-.884.53-1.944.353-2.475 1.06-.53.708.707 1.768-2.475 1.768s-3.889 1.061-4.596-.176c-.707-1.238-.707-1.238-1.06-2.652-.354-1.414.707-.707-.884-1.768-1.591-1.06-1.945-1.06-1.945-1.944 0-.884-.53-1.415-.53-1.415s-1.238.708-1.768-.707c-.53-1.414.707-2.298-.707-3.535-1.414-1.238-1.414-1.414-1.945-2.475-.53-1.06-1.06-1.768-1.06-1.768s-1.238-.707-.708-1.414.177-.884 1.768-1.06c1.591-.178 1.945-.531 2.652-1.061.707-.53.353-.884 1.59-1.061 1.238-.177 1.415-1.238 1.945.177.53 1.414.354 1.944.354 3.889 0 1.944-.177 3.359.354 4.42.53 1.06.883 1.59 1.06 2.297.177.707.354 1.238.354 1.238s.177.177 1.06.177c.884 0 1.061-.708 1.415.176.353.884 0 .53.53 1.238.53.707.354 1.06 1.237.707.884-.354 1.061-1.238 1.945-.884.884.354 1.591.53 1.591.53s1.237.177 1.237-.884c0-1.06-.176-1.59.354-2.298.53-.707.884-2.475 1.944-.176 1.061 2.298.53 2.651 1.061 3.535.53.884.884 1.591 1.945 1.238 1.06-.354 1.59-.354 2.298-1.061a6.104 6.104 0 0 1 1.414-1.06s-.177-1.769.884-2.122c1.06-.354 2.298-1.414 2.298-1.414l1.237-1.415 1.061-1.414h2.652c.707 0 1.414-.884 2.121-1.06.707-.177 3.005-.884 3.359.353.353 1.238.177 3.182.53 3.89.354.706 2.652 1.59 2.652 1.59h1.414c.707 0 1.06-.884 1.237.354.177 1.237-.176 1.768.177 2.475.354.707 2.652.707 2.652.707s2.298 0 1.237 1.06c-1.06 1.061-1.767 1.238-2.121 1.945-.354.707-1.06.884-.177 1.237.884.354.707-.53 1.414.707.708 1.238.53.884 1.061 1.591.53.708-.353.884 1.238 1.061 1.59.177 2.12 0 2.12 0l.708-1.768s.884-1.237 1.59.177c.708 1.414.01 1.384-.167 3.152-.177 1.768-.354 3.514-.354 4.751 0 1.238-.75 1.945-.573 3.182.177 1.238.427 2.018.427 3.432 0 1.414 1.375.863 1.375 2.1 0 1.238-.177 1.591.53 2.298.707.707 1.475 2.247 1.475 2.954 0 .707.686.987.686 2.225 0 1.237-.052 2.37.655 2.724.707.354 1.863.552 1.863 1.966 0 1.415 1.155 2.932 1.155 2.932s.56 1.28.56 1.988c0 .707 1.208 1.121 1.208 1.828 0 .707 1.414 0 2.298 4.773.884 4.773 1.414 1.768 2.828 5.834 1.415 4.066 2.122 5.126 3.005 5.126.884 0 1.945-.353 2.122-1.237.177-.884 0-.884.884-1.237.884-.354.707-.177.884-1.238.176-1.06-.708-1.237-.354-1.944.354-.708-.53-2.122.884-2.122 1.414 0 2.475-1.237 2.475-1.237s-.53-.707-.53-1.591-.708 1.768 0-2.122c.707-3.889 1.06-4.596.883-6.894-.176-2.298-1.06-1.237 0-4.242 1.061-3.006 1.591-1.591 1.591-3.89 0-2.298 1.061-4.773 1.238-6.187.177-1.414.707-.353.707-1.944s-.884-2.475.177-3.536c1.06-1.06 2.475-1.414 2.475-2.651v-2.652c0-.884.353-2.652.353-2.652s2.298-.177 1.768-1.237-.354-2.298 0-3.182c.353-.884 1.398-4.585 2.898-3.585 1.5 1 2 1 2 1s1.375-1.375 1.25-2 .5-1.75.5-1.75.25-1.75.75-1.875 2.875-.25 2.875-.25l.875 2.125s.875 2.75 2.125 3 1.25 2 1.5 3.75 6.75 8.5 7 10 3.5.5 3.5.5 1.25 3 2 2 5.25 1.75 5.25 1.75.25-.25.5 1.75 1.75 2.25 1.5 3.75-.75 3-.25 4.75.5 2.25 1.25 3.25.5 2.75.75 4-1 2.25 0 3 1 1 3.5 4.25 1.5 3.5 3 3.75 3.25 0 3.25 0 1 0 1-1.25-.5-2-.5-2 .25 3-1.5-1.75-1.75-5.5-1.75-7.5.5-1.5-.75-2.75-3-.75-1.75-2 1.75-1.25 2-2.25 0-1.25 1.25-1 1.5.5 1.5.5l2.25 1.75s0 1 1 1 2.25.75 2.25.75l-.25 2.25s.75.5 1.25 1.5 1.75 4.5 1.75 4.5 1.25 1.75 1.5.75 3.5-3.5 3.5-4.5 3.25-4.5 3.5-6.25 1.25-5 .75-7.75-.25-3.75-1.5-5.75-1.5-2-2.25-5.5-2.5-4.75-3.75-4.25-2 .75-2 .75.75-1.75.25-4 0-2.5-2.25-2.25-3.25-.25-3.5-1.25-.5-10.625 3.125-10.125 1.375 2 3.25 2.375 2.625 3.125 3.625 2.5 1.5-1.875 2.125-2.375 1.875-1.125 1.5-2-1.75.125-.5-1.125 2.75-1.625 3.125-2.375 1.25-1.5 1.75-1.375 1.375 1.125 1.625-.125.25-2.375.25-2.375 0-.625 1.375-1.875.875-.5 1.5-2.125.125-.875 1.125-1.875 1.625-1.25 1.5-2.375-.625-1 .5-1.25 2.75-.25 2.75-1.875-.375-2.625.25-3.625.75-.75 1-2.375.625-2 .625-4.125-.875-2-.125-3.625 1-4.875-.125-5-2.625.625-1.625-1.75 1.75-3.25.875-4.75-1.75-1.25-1.5-2.625.75-3-.625-3.375-3.875-.5-2.625-1.25 1.625-.5 1.25-1.25-.375-1-.875-1-1.25 1-1.5-.5.25-1.625-.75-1.875-1.125.5-1.125-.875.375-1.875-.125-2.125-.75-.125-.75-1-.875-.5-.875-1.125-.875-.625.125-1.125.875.5 2.25-1 .5-.25 1.875-2.25 3.625-2.25 1.125-2.5-2.125.5-3-.375-.125-1.125-1.625-1-1.5.375-1.875-.125.75-.875-1.125-.875-1.25.75-2.75-.125-1.625-.5-1.5-1.5.125-1.875 1.125-2.125.75 0 1.375-.5 1-.625 1-1.375 1.375-1.125 1.75-2.125.375-2.5 1.125-2.5.75-.125 1.375 1.625-.875 2.5.875 2.625 2.75.25 3.5.125.25.125 1.125 1.125.75 1.5 1.625 2.125 1 1.75 1 1.75 0 .625 1.125.375 2.875-.25 2.875-.25-.5-.625.125 1.5 1 1.625 1 3.5-.875 2.875 0 3.5a6.25 6.25 0 0 0 1.875.875s2.625-2.5 2.875-3.625 1-1.5.875-2.375-.375-.25.125-1.375.5-3.125.5-3.125-.5-.125-1-.375-.75-.125-1-1.5.25-1.375-.625-1.75-1.25-1-1.5-1.75-.125-1.25-.75-1.375-.5-.25-1.875-1.25-1.125-.5-2.125-1.125-1.25-1-1.25-1.875-.25-1.125.375-1.75 1 .75 1.125-1.5-.625-2.375.5-4.625.875-3.125 1.75-3.875 1-1 2-1.75.75.125 1.625-1.75.625-2.5 1.25-3.125 2-2.875 1.875-4.5-.625-1.5-.25-3 .5-1.5.75-3.5-.25-1.75.375-4.125.75-2.875.375-3.75-.625-1.875-.625-3.375.125-2.75 0-3.25-.25-1-.625-2.375-1.375-2.375-1.375-2.375-.25 1-.75-.625-.375-1.125-.625-2.125-1 .5-.625-2.875.25-4.5.25-4.5-.125-3.375-2.375-3.375-3 .625-3.25-1.25-1.25-2.25-2.75-2.5-1.75 0-2.5-.375-.375-.625-1.625-.625-.5.5-2.25 0-1.75.75-2-.5-.125-2.125 1.625-4.875 1.625-3.375 1.875-4.75-1.25-.75 1-2.75 1.625-2.625 4.25-2.625 3 0 4.875-.875.375-1.875 2.625-.875 2 2 3.25.875 1.625-1.875 2.25-1.875 3 1.375 3 1.375 1 .5 1.875.25 1.625 1.625 2.5-.125.5-2.25-.375-2.75-1.875 1.75-1.375-1.25 1-4.125.625-5.125-3-4.5.125-2.375 2.375 2.5 3.5 3.125.625.625 1 3 4.125 1.875 3.625 4.875-.5 3.875-.75 5.125-1.625.375-1.25 5.5.75 14.25 5.25 18.25 5.625 4.5 6.25 2.75 1.25-2.5.875-4.5-1.375-2.75-.625-4.125 1.375-2.25 1.5-3.375.375-2 .25-3.25 0-2.75-.25-3.75-.5-2.625-.625-3.625-1.125-2.75-1.5-3.625-1.5-2.625-1.75-3.875-.75-1.75.5-3.5-1.125-2.75 1.75-2.375 2.75.75 4.25.5 3 .625 3.5-1.125.125-1.5 1-2.75 1.25-1 2.25-2.5-.5-2 2-4 4-2.75 4.625-3.5 1.875-1.125.875-2.125-1.125-1.875-2.5-2.75-2.125-1.5-2.75-1.625-1.5-.375-.875-.875 1.625-1.375 2.625-1.375 1 1 2.5.25 2.125-1.25 3.125-.5.375.125 1.125 1.625-.75 1 1.25 2.125 3.875 1.375 4.5 1.375.25.75 1.75-.125 1.25-.5 2.25-1.875 1.625-1.625 1.25-3.375-1-2.875-1-3.375l-1.125-1.875s0-.875-1.75-.875-2.75.125-2.75-.5.5-1.75-.625-1.75-1.75-1-2.5-.125-1.25 1.875-2.125 1.375-1.875-1.75-1.875-1.75.25-1.25-.125-1.75-1.5-1.625-1.5-1.625l-1.625-.75s-3.375-3.375-4.625-3.5-2.375.125-2.75-.875 1.75-1-1.375-1.5-3.25 0-4.25-1.375.375-1.75-2.125-1.875-3.625.25-5.75-.625-2.125-1.75-3.125-.75-.5 1.125-1.875 2.25-.625 2.125-2.75 2.125-1.75.25-3-.25-1-.875-2.5-1-1.125 0-2.625.125-.25 1-2.625-.125-2.375-1.375-4.125-2.25-2.25-1.125-3.125-1.125-4.5-.375-5.5.5-2.125 2.875-2.625 1.75.75-1.25-1.125-2.25-2.625-.75-3.75-1.125-.875-.625-.375-2 2.125-1.5-.125-2-2.125-1.375-3.75-1.375-1.25 0-2.125.375-1 .375-1.375.875.375 1.125-.5.875-.375.125-1.25-.875-.625-1.375-1.75-1.25-.25-.125-1.875.25-2.125.375-3.25.5-3 1.625-3 1.625.125.25-1.25.375-.5-.625-2.375.75-1 1.5-2.5 1.375-.75-1-2.375-.25-1.75.375-1.75 1.375-1 1.625-1 1.625 0-.375-.375-1.625-.875-.75-.75-2-5.25-2-6-3.75-.625-1.5-.875-3.125-3.25-2.375-3.75-2.25-1.875 1.625-2.5 2.375-.875 1.375-1.875 2.125-1.125 1.25-2.125 1.625-.875 1-1.75.375-2.375-1.625-3.25-2.375-2.5-1-3.125-1-3.5.625-4.625 1.25-2.375.5-2.375.5-.625-.625-1.625-.375-2.875-.5-4.25 1-3 2.875-3.625 3.25-3 1.625-3.625 2-1.875 1.25-1.875 1.25-.75.125-.5-.75 0-2 .875-2.375 1.375.125 2.25-.875.875-1.25 2-2 1.875 0 1.875-1-.5-.625 0-1.75 1.25-2 2.125-2.75 2.125-2.25 2.125-3-2.75-1.625-3.25-4-3.625 2.125-4.75 1.375-3-2.125-3.125-2.875.25-2.5-.875-2.625-1.875-.875-2.625.25-.25.875-1.875 2.125-3 2.375-3.25 1.875-.5-1.875-.5-2.5-2.5.625-3 .875-2.125 1.375-2.625 1.625-1.875.25-3.375.375-1.5-.75-4.875 1.25-5.5 3.5-5.875 4-2 1-2 1-2.125-1.125-2.25.5-1 3.75-1 3.75h-3.25c-.625 0-2 1.375-2 1.375l-2 2.5s-.875.5-.125 1.5S689 168.5 689 168.5l3 .625s2-.875 2 .125-1 2.375-1.5 2.375-2.75-.25-2.75-.25-1.125-2-1.875-1.75-2 .5-2 .5l-1.5-1.25-.75-.375s-.25-3.375-1.125-.875-.5 3.25-.5 3.25.75 1.375 1.25 1.875 1.25.875 1.5 1.375.375 1.875.375 2.5-.5 1.375-.5 1.875 2 1.5 2 1.5.375.75-1.125.625-.5 1.875-2.5-.375-2.125-2.5-2.125-2.5l-2.25-.75-1.125-.375-1.75-.625-1 1s-.5.5 0 1.25.875-.25 1 1.25 0 2.125-.125 2.625-.625.625-.125 1.625 1.5 1.375 1.5 1.375.5 1.375.5 2.125-.75 1.75 1.125 2.125 1.5.5 2.625.375.625-.375 2.25-.375 1.375-.625 2 .125 1.125.5 1 2 .75 1.375-.375 2.125-1.625 1.75-2.25 0 0-3.25-1-2.875-.75.125-1.5.75-1.75 1.625-1.75 1.625-1.875.375-2.375-.625-1.25-1.625-1.25-1.625-.375 2-1.25.125-.625-1.125-1-2.375-.875-1.875-.875-1.875-.75 1.125-.75-.25 1-1.75 0-2.25-.5.125-1.125-.75-.875-2.375-.875-2.375-2.5-.75-1.5-1.875.875-.75 1.5-1.875 1.25-1.75 1.375-2.5.125-1.875-1-2.125-1.125 1.25-1.875-.25-.5-1.625-1-1.625-1.125.125-1.75 0-1.25-1.125-1.25-1.125l-2.875-1-.875 2.5s0 .125.125 1.125.375 1.75-.125 2-.75.625-.5 1.5 2.375 3 1.75 3-2.125 1.5-2.125 1.5l-.25 3.375 2.5.625.375 2.5 1 .875-.673 2.294z"
      />
      <path
        style={{
          fill: "#785c05",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="M595.375 395.125c-.625 0-6.375-1.25-6.875-1.5s-1.875-1-3.125-1-3.375-.75-4.125-1-2.25-.75-3.625-.25-1.375-3.375-7.375-3-7.5.5-8.375.875-3.125 1.625-4.5 1.625-1.5-.375-3.625-1.125-2.5-1-3.5-2-.75-1.75-2.375-2-2.375.625-3.25-.375-1-1.375-1.375-2.125-.625-2.125-1.875-2.25-1.125 1.125-1.5-.75-.75-3.375-1.25-3.75-1.375-.75-2.5-1.875-1.25-2.25-1.25-2.25L532.75 371s-5.5.25-6.125.25-1.75.125-2.5.625-.375.75-1.75 1.375-3.625 1.75-4.25 2-3.5.375-3.5.375 0 1-1.125 1.75-2.625 1.625-3.875 1.5-1.394-.569-2.375-.375c-1.848.365-3.059 1.582-3.75 1.5-.633-.075-1.75.375-2.875.75s.125.5-2.25.5-3.625 0-4.375-.125-1.375.25-2 .375-1.5.25-1.268.42c-1.414 0-2.121 1.06-2.121 1.06l.353 4.597-3.182 3.535s-.707 2.829-1.414 4.95-1.768 4.242-1.768 4.242l-1.414 3.89s-1.561.806-1.436 1.431.375 1.875-.125 2.25-1.125 0-1.75 1.25-1.125 2.375-1.125 2.875.625 1-.25 2-1.75 1.125-2 3.25-1.25 4-.25 5.25 1.625 2.25 1.625 3.625-.375 1.25-.25 3.25.375 1.875.375 3.25-.125 3.25-.375 4.875-.75 2.125-1.125 4-2.625 2.625-.875 4.25 1.5 3.125 2 4.5 5 1 5 3.875 3.375 3.25 3.625 4.75-.625 3.625 2.375 4.875 2.75 3.125 3.375 3.625 3.375.875 4 1.625 1.5 2 2.125 2.625 1.25 1.625 3.375 1.5 2.375 0 5.75-.375 5.75-.5 6.625-.625 2.75.5 4.125-.125 1.125-1.75 2.875-2.125 2.375 0 3.5-.25 5.5-.25 6.125.25 1.375 0 2.125 1.625-1.5 4.125 3.25 3.875 7.5-1 8.125.125-1.5 2.75-1.125 4.25.875 1.875.375 2.625-1.625 1.125-1.25 2.25 1.375 1.625.875 2.125-1.125 2-1.75 2.875-3.25 2.125-2.25 3.25 7.625 6.375 9 9.5S553 510.25 551.25 513s-4 4.125-3.5 5.5 2.375 3.75 2.5 4.5.375 1.5.25 2.5 1 .625.25 1.75-1.25 1.625-1.5 2.125-1 1.5-1 2.625-.625 1.75-1 2.5-.5.75-.625 1.625 0 .5-.125 2-.5 1.75-.75 2.75-.125 2.25-.125 2.25 1.25 2.75 1.375 3.375.375 1.625.25 2.625-.625 1 .5 2.375 1.75 1.875 1.875 2.625.5 1 .5 1 3.25 3.125 3.25 3.75.75 1.125.625 2-.25.75-.25 1.875.125 1.625.25 2.5 1.625 3.5 1.875 4.125 1 1 1 2v2.375c0 1.25-.625 1.125-.125 2.625s1.125 2 1.375 2.5 1.5-.125 1.5 1-.25 1.625 0 3 1.25 2.25 1.625 3 .375.875.375 2.25.125 1.375.125 2.625v2.75c0 1 .75 3 .75 3.625s-1.125 1-.25 2.125 1 1.25 1.875 1.375 2-.25 2.5.625 1 1.125 1 1.125.5-1 1.125-1.375 1.375-.875 2.375-.875 1.625 0 2.5-.375-.75-.875 4.125-.875 4.75-.375 6.5-1.625-.375-1.75 3.125-2.5 4-.625 4.75-1.25.875-1 1.625-1 2 1 1.625-.25-2-.5-.5-2.375S598 586.25 598 586.25s-1 .125-1.25-.875 2.125-3.75 2.875-4.25 2.125.375 2.375-1.25.25-2.25-.125-2.75-1.625-.375-.25-1.625 2.125-3.75 2.125-4.5-.375-2.75.75-3.25 1.5-.375 1.875-1.375 2.75-4.375 3.125-5.25-1.125-1.75-.375-6.375 2.125-5.875 2.625-6 1.125-1.375 2.25-1.75.625.875 1.75-.875.5-1.125 1.25-2.25.5-1.125 1.625-2.25 1.25-1.875 1.75-2.375 1.25-.5 1.5-1.125 1-2.875.875-3.875-.375-1.625-.25-2.375.625-1.25.5-2.25 0-1.125-.25-2.125-.375-1.75-.375-1.75-1.375-3.625-.875-4.625-2.375-.125-2.375-.125.875-4.5-.5-5.25-1.375-1.125-1.375-1.125.25-2 .25-2.875-.875-3.375-.5-3.875.75-2.125.75-2.875-.25-1.75 1.125-2.75 2-.5 3-1.75 1.5-1.625 2-1.875 1.5-1.25 1.75-1.75 2.625-5.125 6.5-8.875 10.125-8.75 12.375-13.75 7.5-15.375 6-18-4.75-.25-7.25.375-6 .25-6.5.625-.375.625-1.5 1.25-4.125.875-4.125.875-3.375.125-4-.875-1.375-1.125-.75-3.25 1.25-1.875.625-2.875-.75-.5-1.75-2-3.375-2-3.375-3.5-.125-1.875-.75-1.875-.875.25-1.375-.75-.625-1.625-1.125-3 .375-.625-.625-2.25-2-1.125-2-3.125.75-1.875-.25-2.75-1.125-.125-1.625-1.625-.875-3.75-.875-4.375-.25-.125-.5-.875-2.25-2.25-2.25-2.25-.875.125-1.25-1-.25 0-.5-2.25-1.125-2.75-2-4.25 3 1.5-1.375-4.5-6.875-9.375-6.75-9.875c0 0-1.125-3.25 0-2.5s1.875 2.125 2.625 2.625 1.375.75 1.875.625.625-2 .625-2.75 1-3.375 1-3.375l-2.25-4.375-2 1.25s-.25.875-.75.875-1.5-.5-1.5-.5l-1.25-.375-1.625 1.5zM659.75 534c.25 1 1 .75 1 3s.5 5.5-1 3.5-1.5-2.75-1.5-1.5.25 3.5.25 3.5 1.23 1.7-.36 1.7c-1.591 0-1.768-.176-1.768.531 0 .707.177 2.121.177 2.121l-1.061 1.061-.53 2.298s1.767.177.707 1.945c-1.06 1.767-1.414 2.298-1.414 2.298s.176-1.591-.177 1.944c-.354 3.536-.354 4.066-.354 4.066s1.06-.353-.353 1.414c-1.415 1.768-1.945 2.298-2.298 3.182-.354.884.353 1.768-.708 2.652-1.06.884-1.59 1.591-1.59 1.591l-1.061 1.06s-.354 1.415-.354 2.122c0 .707-.53 1.237-.53 1.237s-.53.53-.53 1.238c0 .707.176 1.06-.708 1.768-.883.707-.53.884-1.59 1.767-1.061.884-1.415-.353-1.415 1.591 0 1.945-.53 2.829-1.414 2.829-.884 0-9.37.177-10.783 0-1.415-.177.884-7.248-1.061-8.485-1.945-1.238-3.182-5.48-1.945-6.364 1.238-.884.53 0 1.415-.884.884-.884.884-.884 1.414-1.945.53-1.06 1.414-1.06 1.414-1.06s-1.06-2.299-.353-2.299c.707 0 .353-2.651.353-2.651s.354-1.238.884-2.122c.53-.883-.53-1.767.884-1.944 1.414-.177 2.121.177 2.121-.707 0-.884-.884-1.06-1.59-1.238-.708-.176-1.061 0-1.061-1.237 0-1.238-.53-.707-.884-1.945-.354-1.237-1.415-.53-.177-2.121 1.237-1.591 1.237-.53 1.59-2.121.354-1.591-1.06-2.652.708-2.652s2.298.53 4.066-.177c1.768-.707-.177-.884 2.652-.707 2.828.177 3.005 1.06 4.065 0 1.061-1.06 1.591-.707 1.768-1.944.177-1.238 0-1.591 1.238-2.122 1.237-.53 1.237 0 2.12-.707.885-.707 1.592-1.59 1.415-2.651-.177-1.061-1.06-1.591.53-1.591 1.591 0 1.415.53 2.122-.354.707-.884.53-.884.884-2.475.353-1.59 0-1.944.884-2.475.883-.53 2.474-2.298 2.474-2.298s.53-1.59 1.238.884c.707 2.475 0 2.121.884 2.828.884.708 1.06.177 1.06 1.061 0 .884-.353 2.652-.353 2.652l-1.395.936z"
      />
      <path
        style={{
          fill: "#9c240f",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="M450.5 439.75c-.25 1.25.5 2.75-1 4.25s-1.5 4-3.25 4-4 1-4 1v1.75s1 2.25-.5 3.25-2.5 1.5-2.75 2.5.125 3 .125 3l-.25 1.75s1 2 .25 3-.75 1.125-.75 2.75.75 4.25 0 5-.25 2-1.125 2.375-2 .625-2.375 1.375.25 1.625-.375 2.5-.5 1.625-1.125 1.875-.875-.125-1.125 1 .375 2-.625 2.5-2.25 1.625-2.625 2.125-3.25 1.5-3.75 1.625-11.5 1-13 4.125-1.5 5.875-2.125 6.5-.875-.25-.75 1.125.25 1.875.25 3.25.5.5.375 1.75 0 2.75-1.375 3.25-2.875.625-3 1.875 0 1.625-.25 2.375-.5.875-1 1.375-.875 1.125-1.125 1.875.125.75-.5 1.625-.625.75-.875 1.5.5.875-.875 1.25-4.625 1.875-4 2.75 1.5 1.125 0 1.5-1.25.25-2.75.5-1.25.125-2.875.5-1.875.875-2.875 1-1.5-.125-2.125-.125-1.125 0-1.125.625-.125.75.5 1.25 2.375 1 2.5 1.5.125.875.125 1.75.125 1 .625 1.125.625.25.75.75-1.25 2.25-2 2.75-1.375 1.125-3.125 1.25-1.375-.125-2.5.5-1.125.75-2.375.75-1.625 0-2.875.25-2.125.5-2.125.5.5.75.625 1.5.75.875.25 2-1.375 1.625-1.75 2.125-.375.25-.375 1.25l-2.625.375s-.875-.75-1.125.375 1 2.125 1 2.125-1.75 2.625-1.5 3.25.875 1.625.625 2.125-.125.75-.75 1.25-.125 1-.5 1.5-.75 1.25-1.625 1.625-1.125 1-1.125 1L365.25 560s-.5.625.125 1.375 1.25.25.875 1.625-.25 1.75-.25 1.75 1.25-1.375 1.125 2.375-.75 4.625-.75 4.625-.625-.125-.375 1 .75 2.125.125 2.75-.5-.375-1.5 1.625 0 4.75.625 5.375 1.125.75 1 2-.75 1.375-.25 2.25 2.125 1.5 2.375 2.375-.25 1.5.25 2.125a8.226 8.226 0 0 0 1.125 1.125s-.25 1-.25 2.125-.5 1-.5 2 0 2.25.5 1 .375-1.25.875-1.75 2.125-.5 2.625-.5 1-.75 1.875-.375 1 0 1.5 1.25.25 1.5 1.25 1.75 1.875.125 2.875.125 1.25-.75 1.5.375 1.75 1.5.25 2-1.75 0-3.25.5-1.5.5-2 .625-.5.5-1.375.875-.375.75-2 .375-1 .125-2.125-.625-1.625-1.125-1.625-1.625-.75-1-.75-1l-2.875-2.5h-3.375c-.75 0-1.25-.625-1.25-.625l-1.75.063s-.438-.438-.188-1c.25-.563.25-.563-.062-.625-.313-.063-1.188-.125-1.75-.313-.563-.188 0-1-.125-1.25s-1.313-.25-1.938-.313c-.625-.062-1.5-.375-2-1s-.375-.812-1.437-1.687c-1.063-.875-.75-1-1.688-1.313-.937-.312-1.25-.25-1.437-1-.188-.75-.938-.875-1.25-1.625-.313-.75 0-1.25-.875-1.812-.875-.563-1.063-.125-1.188-1.313-.125-1.187.188-1.75-.125-2.375-.312-.625-.125-.125-.625-.875s-.75-.875-.937-1.75c-.188-.875-.188-1.312-.5-1.875-.313-.562-.875-.812-.938-1.437-.062-.625-.062-.875-.062-1.438 0-.562.188-1-.125-2.25s-.125-1.562-.75-2.312c-.625-.75-.688-.25-1.188-1.875s-1.062-1.875-.75-2.688c.313-.812.5-.937.563-1.562.063-.625.438-.5.5-1.375.063-.875.063-.625.063-1.813 0-1.187-.75.313.125-2.937s.875-3.125.937-3.875c.063-.75 1.25-.875.813-2.188-.438-1.312-.688-1.312-.563-2.187.125-.875.625-1.25.5-1.688-.125-.437.063-.25-.125-.75s.5-.25-.313-.875c-.812-.625-1.062-.5-1.187-1.437-.125-.938-.125-1.688-.063-5.375.063-3.688-.187-3.938.438-5 .625-1.063.938-1.188.938-2.063 0-.875.5-2 .125-3.062-.375-1.063-.688-1.188-.313-1.813.375-.625.688-.625.688-1.375s0 .313.062-1.312c.063-1.625-.438-.438.188-2.563.625-2.125.875-4.25.937-5.312.063-1.063.125-1.375-.188-2-.312-.625-.75-3.625-.75-4.625s.188-.75.438-1.75.313-1.188.25-1.5c-.063-.313 0-.625.188-1.438.187-.812-.188-2.5.5-4.25.687-1.75.875-1.062.687-2.312-.188-1.25-1.625-3.25-1.188-4.625.438-1.375.875-1.125.813-2.938-.063-1.812-.25-4.25.188-5.25.437-1 .687-4.437.5-5.25-.188-.812.562-5.187-1.688-5.937s-2.25-.5-2.875-1.125-1.875-3.375-2.625-3.625-1.875-.5-2.75-1.125-2.125-1.75-2.125-1.75-.875-.125-1.75-.625-2.25-1.5-2.75-2.25-.75 0-1.25-1-2-3.25-1.875-4.25 1.125-2.875-.25-3.375-2.75-2.625-3.375-3.125S319.75 449 319.25 448s-1.375-.25-1.875-2.25-.25-3.625-.25-3.625-2-2.25-2.5-2.75-1.375-3.125-1.375-3.125-.25-4 .125-5.25 1.375-.125.625-2.25-1.75-1.625-1.125-3.625 1.25-2.75 2-4.625.625-4.375 2.5-5.625 1.5-3.75 1.5-4.5v-3.125c0-1-.125-1.75 1-3s1.75-2.375 1.75-2.375l1.25-1.125v-2l.75-2.25s.5-1.125.625-1.625-.25-2.5-.25-2.5l.25-1.625 3.125-.875s.375.375 1.375 0 2-1.25 2-1.25l2.25-1.25s1.5-1 2-1.5 2.25-1.125 2.25-1.125.875-.25 1.5-.25 2.75-.625 2.75-.625.125-.625.875-1.125 1.25-1.125 1.875-1.25 4-.625 4-.625 1.25.875 1.375 2.125-.375 2 .625 1.875 2-.375 2.5-.625.25-1.375 1.5-.5 1.375 1.125 1.875 1.125S358 384.5 358 384.5l5.5 1.875 1.875-.375c.625-.125 3.75-.375 3.75-.375s1.375.375 1.875.875 3.625 2.375 4.625 3.875 2.5 2 2.75 2.625 1.25 1.25 1.75 1.25.5 1 1.125 1.125 2 .125 2 .125.125.5.625 1.125 1.625-.625 1.875.75-.125 2.125.625 2.125 1.5-.5 1.5-.5l1.25-.5s0-1 1 0 1.75.75 2.625 1-.375.875 1.75 1.375 4.125.75 4.625.75.5-2 2.25-.375 3 2.375 3 2.375.25-.25 1 2.375.875 3.375 1.375 4.25 3.125 2.25 1.25 4.5-4.25 1.875-3 2.375 2.75 2 3.625 2 2.75-.375 3.375-.375 2.375.375 3.125.5 1.625-.125 2.375 0 1.625.5 2.375.875 1.625.125 2.375.5.75.5 1.25 1.375 1.5 1.25 2.625 1.25 1.5-.25 2.25.25 1.75 0 2.375 0 1.125-.625 2 .375 1 .875 2.875 1.125 5.25 2.625 6.125 2.875 1.375 1.875 2.25 2.125 2.25 0 3.25 1 2 1.75 2.25 3.5 0 2.25.375 3.375.875 2.375.625 1.875z"
      />
      <path
        style={{
          fill: "#950d98",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="M778.125 511.375C779 512.75 778.5 513 780.5 513s3.25-.375 4.375-.125.625.625 1.875.5 2.375-.875 3.375-1 2.25-.25 3 0 1.875 1.125 3.25 1.25 4.5.125 5 .25 2.125 1.375 2.875.5 1-.625 1.25-2 .25-2.125-.625-2.375-.25-.75-2.375-.875-2.75-.375-3.375-.625-1.625-1.25-2.375-1.5-2.875-1.125-4.25-1.125-4.125-.25-5.5-.25-1.625-.625-3.125.5-2.75 1.625-3.625 2.25-.625.125-1 1.375-.75 1.875-1.125 1.625z"
      />
      <path
        style={{
          fill: "#8a168c",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="M801.5 503.25c.5-1.75.125-1.5.25-3s.5-1.125 1.125-2.125.25-2.625 1.375-.75.75 2.625 2.125 3.75 1.625 2.375 2.75 1.25 3.25-2.25 2-3.625-2 0-2.125-3.25-.25-4.375-1.125-4.25-1.625 1.375-1.75-.375-.625-3.875.75-4 2.75.75 3.625-.875 1.875-2.125.25-2.375-2.875-.5-3.75-.375-1.5.125-1.375-.625-.875-1.5.875-1.5 1.375.375 3 .25 3.25-1 3.75-1.5 1.125-2.75 1.875-3.25 1.25-.875 1.125-1.5-.375-1.125-1.125-1.375-2-.5-2.375 0-1.25 1.875-2.125 2.25-5.125.125-6.125.625-1.875 1.125-2.5 1.5-2 1-1.75 2.5.25 2.75.25 3.375-1.25 2.375-1.5 3 .125 2.5-.25 3.375-.625.375-.625 1.625-.25 1.5.125 2.375 1 .875.625 2.125-1 .5-.5 1.875 1.125.875 1.25 2.125-.25 1.75 0 2.75 2 .125 1.875 0z"
      />
      <path
        style={{
          fill: "#7b147d",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="m767.388 479.854.707-1.768s.177 1.945.353 3.005c.177 1.061-.353 2.475.177 3.182.53.708.177 1.061 0 2.122-.177 1.06.707 2.828.707 2.828l1.293 1.527L772 491s.625.875.875 1.5 1.125 1 1.125 1v2.25c0 .875-1 1.375.125 1.625s2.5.25 3.25.25.5.375 1 1.375 1 1.125 1.125 2.5.125 2.375-.375 3-.125 1.125-.75 1.875-1.625.875-2.375 1-1 .125-1.25 1 1.625 1.75-.75 1.625-2.25.5-2.75-.75.875-1.75-.875-2.375-.25 1.875-2.875-1.625-3.5-1.125-3.875-4.25-1.5-3.875-3-6.25-2.125-4-3.375-4.375-1.75 1.125-2.375-.5-.625-.75-.625-2.625-.125-1.75-1-3.5-1-1.625-1.5-3.5-.25-1-2.5-3.875-2.5-3.125-4.5-4.625-2.5-1.75-2.375-3.75-1.25-4 0-4.375 1.5-.75 2.75 0 1.375 1.625 2.375 1.875 1.625.125 2.375.125.5-1 1.75.5 1.5 1.5 2.125 2.875.625 1.875 1.25 2.625 1.125.75 1.75.375 1.25-1.5 1.625-.75.375 1.125.625 1.625 1-1.125 1 1-.75 3.125.375 2.375l2.25-1.5s-.125-.375.375.875.625 2.375 1.75 2.875 1.5.5 1.5.5l1.138.854zM791 496.875s-.25-1.25 1.875-3.375 2.75-2.25 2.75-4.375-.125-2-1.125-3-2.375-1.625-1.125-3.125 1.125-1.875 2.75-2.25 3.25-2.75 3.375-3.625.25-1.375-.125-2.5-1.375-3.125-1.5-4.5-.25-2.375-.125-3.375 1-1 2.125-2.375 1.375-.75 1.375-2.75-.125-4.5-.75-5-.875-.25-2.25-.75-2-1.75-3.875-2.875-3.125-1.25-3.5-.625.375-1.5-.375 1.625-.625 3.875-1.5 4.5-2.25 1-2.625 2.25 1 2.125-1 4.25-5.625 6.125-8.25 6.625-4.5 1.125-4.5 2 1.125 2 .875 3-2 2-1.75 2.5.875 0 1.375 1.125.5 4.625.5 4.625L776 487.5s-1.75 2.625-.875 3.375 1.25.875 2.25 2 2.25 2.375 3.75 2.5 2.375.875 3.5 1.375 1.5 0 2.875-.125 3.875.375 3.5.25z"
      />
      <path
        style={{
          fill: "#48c74c",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="M829.436 335.25c0-1.237.53-4.419-.177-4.596-.707-.176-.707-.707-1.944-.53-1.238.177-2.652-.53-2.652-.53s-.353-1.238 1.768-2.475c2.121-1.238 3.359-1.945 3.359-1.945l-1.06-.707s-2.299-.177-1.238-.884c1.06-.707 1.237-1.59 2.121-2.651.884-1.06 3.005-6.541 4.243-8.662 1.237-2.122 4.066-1.415 4.066-1.415l1.944-4.95s-1.59-3.712 1.06-4.949c2.652-1.237 2.83.177 3.536-2.828.707-3.006 2.829-2.475 3.182-3.536.354-1.06.707-1.06.177-2.828-.53-1.768-1.945-3.36-1.945-3.36s-.707-2.65-.707-4.065c0-1.414-.353-3.712.884-4.243 1.238-.53-1.06-3.358-1.06-3.358s.707-1.061-.177-1.768c-.884-.707-1.414-1.591-1.414-2.475 0-.884.176-3.182.176-3.182s.884-1.414 1.591-1.591c.707-.177 1.415.177 1.415-1.591s-.884-4.42-.884-4.42-3.713-5.48-4.42-5.833c-.707-.354-.707-.707-.176-1.768.53-1.06 4.065 4.243 6.54 4.596 2.475.354 4.773 0 4.773 0l2.298-1.06 4.597.176s1.944.177 2.298 2.122c.353 1.944 2.828 1.237 1.59 3.005-1.237 1.768-1.06 2.652-2.297 2.475-1.238-.177-1.061-1.06-1.945-.884-.884.177-1.591 0-1.591 1.945 0 1.944 1.414 2.12.177 3.712-1.238 1.59-.707 2.298-2.475 2.298-1.768 0-3.359-.177-5.127.177-1.767.353-2.651-.884-2.651.707 0 1.59 0 1.944.884 2.121.883.177 1.59 0 1.237 1.06-.354 1.061-1.414 1.769-.707 2.122.707.354 1.59-.53 1.59.354l3.006.176.53 1.768s.354 0 1.415.177c1.06.177 1.767-.707 2.121.53.354 1.238.884 1.768.884 1.768s.53 0 .707 1.238c.177 1.237.354 1.59.354 2.474 0 .884-.884 3.713-.884 3.713s-.707.707-.53 2.121c.176 1.414.883 0 1.06 1.768.177 1.768.177 2.298.177 3.535 0 1.238-.177 1.061.884 1.945 1.06.884 1.414 1.768 1.414 1.768s.884.53.884 1.767v2.298s-.53.177-1.238.177c-.707 0-1.59-.177-1.59-.177s-.177.53-.531 1.768c-.354 1.238-1.945 1.945-1.945 1.945s0 1.768-.707 1.944c-.707.177-1.237.177-1.944.354-.707.177-1.238 0-1.591.884-.354.884 0 1.06-.884 1.237-.884.177-1.768-1.414-1.945.884-.176 2.298 1.238 3.182-.53 3.712-1.768.53-2.828.884-2.828.884s.353 1.415-.884 1.061c-1.238-.354-2.652-1.591-2.652-2.475 0-.884-.177-1.414-.177-1.414l-2.475 1.59s.354.885-1.414.885c-1.768 0-2.475-1.945-2.121 0 .353 1.944 1.06 3.358 1.237 4.066.177.707 1.238.176 1.061 1.237-.177 1.06.177 1.06-.53 1.768-.707.707-2.122.884-2.829.884-.707 0-.884-.177-2.298 0-1.414.176-2.127 6.829-2.127 6.829l-1.25 1.125h-.689z"
      />
      <path
        style={{
          fill: "#7b147d",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="M832.75 455.5s.5-2.75 1.5-3.5.25-1 .25-2.25-1-2.5.25-2.75 1.5 0 3.25-.25 3.5-1.25 3.5-1.25l1.5 1.5s.75.75 3 .75 3 1 4 2.75.5 2.5 3.25 4.25 5.5 2.5 7 3 2.75 1.25 2.5 2.75 1.5 2.25-.5 2.75c0 0 5.724 2.462 6.43 4.053.708 1.59 1.945 2.298.531 3.182-1.414.884-3.005.177-2.828 1.237.176 1.06 1.237 1.768 1.59 3.005.354 1.238 1.592 1.945 1.592 3.36 0 1.413-.354 2.297 1.06 3.181 1.414.884 1.591.884 1.591 1.945v2.475s-1.06 1.06-2.828 1.06c-1.768 0-2.652-1.414-3.359-1.414-.707 0-2.475-.353-2.475-.353s-1.237-4.95-4.773-5.834c-3.535-.884-3.535-1.414-3.535-.707s1.237 2.298-.177 2.828c-1.414.53-2.121.53-3.005.53-.884 0 3.005 1.592-1.415 1.415-4.419-.177-4.773-1.768-6.717-.53-1.945 1.237-7.778-3.713-7.778-3.713s-2.652.177-2.652-1.237c0-1.415-.707-1.591.177-2.829.884-1.237.884-1.414.884-2.828s.353-1.768.353-3.182.884-1.945-.353-2.475c-1.238-.53-2.298-.884-2.475-2.121-.177-1.238-.177-1.415-1.06-1.415-.885 0 0 .177-1.415.177-1.414 0-2.475 1.06-3.712-.53-1.238-1.591-1.414-1.591-3.713-1.591-2.298 0-7.247 3.359-3.358 0s4.596-3.536 4.596-3.536-4.066 0-4.243-1.414c-.177-1.414-.53-3.712-1.414-4.066-.884-.353-1.945-.884-1.591-2.121.354-1.237 1.06-5.657 4.596-5.48 3.536.177 4.243 1.59 5.303 2.121 1.061.53 3.006-1.414 3.36.354.353 1.768 0 4.773 0 4.773s1.237.884 1.59 2.651l1.723 1.279z"
      />
      <path
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          fill: "#2293ac",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10.43299961,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          display: "inline",
        }}
        d="M474 212.5s2 1.875 2.5.875-.625-2.25.875-1.125 1.375.75 1.875 1.375 3.5-1.5 2.375.5-1.875 2.75-1.125 2.625-.125-.75.875.5.875 2.25 2.25 1.125l1.25-3.875s3.5.125 3.25 1.375-1.125 1.125.75.125.875-2.75 2.125-1.625 1.875 2.25 2.375 1.125-1.125-2.375.375-2.125 1.625 1.625 2.5 0-.125-2.5 1.25-2.25.75.625 1.75-.25.75-1.75 1.75-.875 1 1.25 1 1.25 2 .25 2.5.5-.25-1 .25 1 .625 2.625 1.25 2.375 1-1.125 1 .5-1.125 2.125.375 1.875 1.875-.375 2 .75.75 2 .75 2 .125.875 0 1.375-.375.75-.125 1.375.5 1.625 0 1.875-1.25.75-2.125.875-1.375.75-1.625 1.375.75.25-.375 1.625-.75 1.625-1.5 1.875-1.625.75-1.625.75l-3.375.5-.75-1.375s-.5-1.125-1-.625.125 1.5-.375 1.625-1.75-2.125-1.75-1.125.625 2.75.625 2.75.125 1.5-.5 1.75-.625 1-2.25 1.125-1.75.875-2.625 1-1.125 1.875-2.75.625-6.125-3.25-7-3-1.25.625-3 .125-2.5.625-2.875-.125-.5.375-.125-1.375 2-2.625 2-2.625.625-.375.5-1 0-.875-.75-1-.5-.5-.875-1.5-.75-.875-1.75-.625-1.25 1.375-2.375.125-1.625-1-1.125-1.75.375-1 1.625-1.25 1.375 1 1.875-.5 1-2.125 1-2.125-.5-.25-1.375-.125-.625 1.125-1.625-.875-2.125-2-2.125-2-.25 0 .375-1 1.25-1 1.875-2-.5-1.875.375-2.75 1.125-.25 1.125-.25l.25.5zM466.514 294.238s-.354.53-1.768.53c-1.414 0-1.591-.176-2.475.354-.884.53-1.944.707-2.828.884-.884.177-1.945 1.238-1.945 1.238s0 .707-1.237 1.06c-1.238.354-1.061.177-2.298.177-1.238 0-.884-1.06-1.061-1.768 0 0-4.152.412-2.902-.338s2.25-.25 1.375-.875-2.25-.75-.75-1 1.875 0 1.875-.5-1 .625 0-1 1.25-1.625 1.875-2.125.25-2 1.125-1.75 1.875.5 1.875.5l.5-1s-3.125-.125-3.375-.625c0 0-1.625-1.125-2.125-1.125s-1.625.125-1.25-.375 1.125-2 1.125-2-1.625-1.25-1-1.75.75-.375.75-1.25-1.125-1 .125-2.25 1.5-1 2.375-1.75.875-.875 1.5-.25.625 1.625 1.75.25 1.25-2.125 1.25-2.125-.5.125 1.375-.875.375-1.875 3.125-1.5 2.25.5 2.875.375 1-1.75 1.375-.375-.5 1.625 1.25 2.125 2.5.25 2 1.125-.625.75-.125 1.5.875 1.125.875 1.75-.375 1.125-1.25 1.5-.75-.125-1.875 1-1.75.875-1.75.875-.25-.625-1-.125-.375 1.25-1.5.5-2.5-.75-2.5-.75-.5 0-.375.75.75 3.25.75 3.25 1.125 2 .75 2.875-2.25 1.375-.625 1.5 1.5-.25 1.5.875 0 1.75 1 1.625 1.75 1 1.639.863z"
      />
      <g
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          fill: "#2293ac",
          fillOpacity: 1,
          stroke: "#000",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10.43299961,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          display: "inline",
        }}
      >
        <path
          style={{
            fill: "#2293ac",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
          d="M478.711 283.278c-.53-.618-.265-.53-.442-1.149-.176-.618.089-.707.089-1.326 0-.618.088-.883.353-1.679.265-.795-1.414-1.503-1.414-2.121 0-.619-1.06-1.414-1.237-1.768-.177-.354-.707-.796-1.326-.707-.619.088-.619.442-1.326.795-.707.354-.707-.176-1.237-.618-.53-.442-.442-.973-.442-1.945 0-.972.088-.53.442-.972.353-.442.442-.354.972-.972.53-.62.265-.442.265-1.061s0-1.15-.265-1.856c-.265-.707-.972-.177-1.238-.884-.265-.707-.353-.53-.795-.796-.442-.265-.619-.088-1.591-.176-.972-.089-.265-.62-.354-.973-.088-.353-.088-.53-.265-1.502-.177-.973-.619-.265-1.149-.177-.53.088-.707.088-.884-.796-.177-.883 0-.53-.088-.972-.089-.442-.177-.442-.796-1.414-.618-.972.089-.442.796-.972.707-.53.619-.796 1.237-1.238.619-.442 0-.618-.176-1.326-.177-.707-.53-.883-.53-.883s-.62.176-1.68.176-.972-.176-1.503-.884c-.53-.707.089-.707.884-1.325.796-.62.53-.973 1.326-1.857.795-.883 1.237-.795 2.21-.972.972-.177.53-.707.972-1.768.442-1.06.619-1.237.884-1.856.265-.618.795-1.414.972-2.563.177-1.15 1.625.759 4.625-.241s3 0 3 0 1.5 2.5-1 3.5-1 5-1 5l.739.05s.884-.708 1.591-.796c.707-.088.619.354 1.503.354.883 0 .707-.53 1.767-1.238 1.061-.707.796.796.796 1.414 0 .619 1.414 2.387 1.414 2.387l-.353.619s-.62.353-.62 1.325c0 .973-.264.707-.441 1.15-.177.441-.53.441-.972.707-.442.265.088.441.265 1.325.177.884-.089.442-.53.53-.442.089-.884.089-1.238.708-.354.618-.088.707-.619 1.414-.53.707-.442.442-1.59.795-1.15.354-.62.354-.354 1.68.265 1.326 1.149-.442 2.74-.619 1.59-.177 1.237 0 2.298 0 1.06 0 .619.089 1.326.619.707.53.176.795.53 1.414.354.619.707.265 1.15.884.441.619 0 1.237 0 2.121v.796s1.06 3.182 2.474 3.977c1.414.796.884.796 1.503 1.326.618.53 1.767 3.447 2.12 3.89.354.441.354.795.531 2.386.177 1.59 0 1.237-.177 1.856-.176.619-.265.53-.53 1.502-.265.973 0 1.15 0 1.503 0 .354.53.619 2.298-.265s1.06-.619 2.21-.972c1.149-.354.884-.442 1.944-.177 1.061.265.884.442 1.857 1.414.972.972.353 1.149.618 1.856.265.707-.088.619-.353 1.326-.265.707-.265.619-.707 1.503-.442.883-.177.707-.53 1.237-.354.53-.62.265-1.68.53-1.06.266-.884.884-1.414 1.415-.53.53-.354.707-.442 1.149-.089.442.442 1.237.442 1.237s.795.354 1.237.796c.442.441.265.795-.265 1.679s-.707.442-1.768.884c-1.06.442-1.414 0-2.475-.089-1.06-.088-.972.354-2.475.884-1.502.53-1.414.089-2.563 0-1.149-.088-1.06-.088-2.21 0-1.149.089-1.06.442-2.386 1.238-1.326.795-.795 0-1.237-.354-.442-.353-.707-.442-1.326-1.06-.619-.62-.619-.354-1.15-.177-.53.177-1.679 2.21-2.474 2.563-.796.354-.884.177-2.033.177-1.15 0-.796 0-1.326.088-.53.089-.884.972-1.59 1.768-.708.795-.531.265-1.857.442s-1.237-.089-1.414-.442c-.177-.354.177-.354.618-.972.442-.62 1.238-1.768 1.768-2.652.53-.884.796-.442 2.122-1.237 1.325-.796.265-.354.883-1.68.62-1.326.708-1.326 2.033-1.768 0 0 .572-1.17-.553-1.795s-1.625-.375-2.75-.875-2-.25-1.75-.938c1.125-1.312 1.375-1.937 1.75-2.562.375-.625.125-1.25.625-1.25s.75.25 1.375-.125.75-.625.75-1.375-.125-1 .125-1.75 1-1.375.375-1.875-.125-.375-.875-.625-1.25-.75-1.25-.75l.25-1 .188-1.75s.187.125 1.437.625 2 2.125 2 2.125c.266.472.651.46.336-.222z"
        />
      </g>
      <path
        d="M500.406 213.094c-.046.04-.066.077-.125.125-.126.102-.294.243-.656.406-.255.115-.627.133-.969.156-.09.26-.108.487-.25.75-.298.554-.542 1.115-1.437 1.656-.387.235-.9.275-1.375.282-.005.012.005.02 0 .031-.263.59-2.494 2.136-3.742 2.431l-4.147-.513c-.147.442-2.186 1.54-2.549 1.832-.466.382-.886.765-1.781.969-.895.204-2.246-.277-2.75-.781-.796-.796-.768-1.03-.906-1.313-.002-.003-.03.003-.031 0-.646-.164-1.698-1.09-1.875-1.938-.178-.846.023-1.257.125-1.53.006-.018.024-.015.03-.032a2.581 2.581 0 0 1-.28-.219c-.18.137-.27.351-.47.438a3.096 3.096 0 0 1-1.656.219c-.518-.071-.75-.253-1.062-.407-.079.216-.055.414-.188.625-.352.564-.698.826-1.03 1.125.255.307.52.668.75 1.063.433-.01.901-.032 1.218.031.48.096.969.313.969.313a2.434 2.434 0 0 1 .812 3.718s-.183.145-.594 1.375c-.035.106-.186.24-.218.344.461.209.973.447 1.25.781.374.452.54.86.687 1.25.069.183.013.122.063.281.036.018.056.012.094.032.462.245.976.765 1.218 1.25.485.969.324 1.214.344 1.312.387 1.936-.797 2.904-1.281 3.25.022.006.04-.006.062 0 1.353.387.371.251 1.688-.125.786-.224 1.155-.122 1.531-.062.376.06.707.143 1.063.25.71.214 1.467.534 2.25.875a22.29 22.29 0 0 1 3.687 2.031c.342-.29.736-.668 1.531-.781-.22.031-.45.17.063-.156.513-.327 1.54-.785 2.719-.875.44-.034.157.035.125.062-.008.007.3-.193.343-.25-.069-.211-.094-.26-.187-.594-.181-.652-.406-1.399-.406-2.406 0-.379-.182-1.026.78-1.969.482-.471 1.337-.749 1.907-.719.348.019.488.108.688.188.672-.388 1.568-.642 2.25-.438.858.258 1.213.671 1.468.97.377.44.424.64.5.812l1.375-.188c.22-.124.575-.269 1.125-.5.176-.32.33-.683.844-1.312.102-.125.044-.033.063-.063.01-.346-.156-.704-.063-.937.458-1.145 1.66-2.608 3.531-2.875.02-.003.13-.086.156-.094-.1-.542-.218-1.128-.125-1.531.133-.576.195-.716.188-.688-.013.052.005-.048 0-.031-.145-.256-.188-.583-.344-1-.291.09-.628.162-1.531-.156-.633-.223-1.563-1.227-1.688-2-.067-.424.02-.512.063-.719a3.122 3.122 0 0 1-1.125-1.344c-.318-.694-.456-1.28-.625-2l-.813-.125a2.434 2.434 0 0 1-1.28-.562zm-17.187 3.844c-.033.192-.153.403-.25.625l.031.03.219-.562s-.007-.052 0-.094z"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          fill: "#47c1dc",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10.43299961,
          strokeDashoffset: 0,
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#ad)",
        }}
      />
      <g
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          fill: "#47c1dc",
          fillOpacity: 1,
          stroke: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10.43299961,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#ae)",
        }}
      >
        <path
          d="M476.563 246.406c-2.194.593-4.35-.267-4.782 2.625-.318 2.567-2.058 3.723-4.156 4.438 2.105 1.073 3.94 5.195.875 6.906 1.237.698 2.398 2.413 2.875 3.781 3.33 1.002 5.73 5.712 2.813 8.438 3.544-.31 5.236 3.77 6.625 6.312-1.55 2.7 1.587 6.283-2.125 7.375-.858 2.227-.494 5.412-3.594 5.969-.97 1.739 4.495 1.367 3.719 4.375.134 2.546-2.907 2.597-2.97 5.188 1.79-.083 3.842-4.946 6.47-2.094 1.515 1.66 3.878-1.382 6.125-.219 2.286.692 4.275-1.807 6.656-.688-2.658-3.175.649-6.766 3.281-7.906 2.274-2.367-.82-4.631-2.938-2.281-3.811 2.875-6.805-2.17-4.437-5.375.379-3.977-2.954-6.624-5.281-9.25-1.931-2.233-.397-7.12-3.906-7.25-2.378 1.65-5.65 1.252-5.813-2.219-.125-2.782 3.39-2.385 3.938-4.906-.019-1.451 3.538-3.516 1.812-5.125-2.596-.67-6.244 2.29-6.906-1.656-.738-2.24-.081-5.392 1.719-6.438z"
          style={{
            fill: "#47c1dc",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
        />
      </g>
      <path
        d="M467.469 272.625c3.176 2.562-2.724 3.457-4.563 2.313-2.7 1.305-3.782 6.57-7.437 4.78-2.207-.501-2.016 3.645-.688 4.188-2.755 4.592 8.519.836 5.366 4.645-.631 3.786-3.117 2.146-4.96 4.23 3.216-5.657 8.383-13.698 12.282-20.156zm-1.344 2.875c-.529-.223-.145-1.993 0 0zm1.719 1.313c.747-2.353.899-2.63 0 0zm2.25-1.313c1.632-.897 1.145 2.8-1 1.719-1.396.266.35-3.332 1-1.719zm.062 3.469c2.183-.579 1.348 2.195.375.812.521 1.193-.774-.631-.312 1.313-.323-2.497-1.165.527-.313-2.031.706-.443 2.384-1.492.25-.094zm-.875 2.469c-1.743-2.043-1.62-2.16 0 0zm-1.844-.657c2.479 1.182-1.201 3.031-.437 1.25-1.075-.515-.165-1.57.438-1.25zm-1.312 1.844c-1.008-.796-1.068 1.995-1.281.563-2.526-.064-.217-3.034.781-1.5-.927-2.723.76.432.5.937zM460 285.656c2.32-.678 2.824-.68 0 0zm.813 2.438c1.46-1.033 2.583-1.106 0 0zm.75.031c1.647.243 1.083 2.885.968 1.844-2.247-.384-.965-1.98-1.656-1.719.926-.278 3.396-1.19.688-.125zm.28 2.375c-2.208-1.908-1.58-2.685 0 0zm-.937 2.031c.025-1.303 1.847-2.727 0 0zM463.75 291c-.506.793.053 2.446 1.625 1.688 3.371 3.061-3.968 3.777-3.219.28-.289-.36-1.201-3.068 1.594-1.968zm-9 2.25-.063.063.063-.063zm7.188 2.063c-1.058-1.831-1.02-.69-.404-.9l.404.9zm-7.407-1.75c.026 1.62-1.16 4.584-3.625 4.53-2.026-1.571-1.204-4.682 2.09-4.13l.969-.253.566-.147zm-4.406 1.312c.123-.21-.402-.133 0 0zm11.094.719c-.908-2.426-.688-2.838 0 0zm-1.094.281c-.892-2.804-.338-2.519 0 0zm-.844.188c-1.054-2.478-.8-2.561 0 0zm-3.062.468c2.051 1.686-.196 1.437-.688.469-.217-.533.442-1.04.688-.469zm-2.313-.062c2.72-.725.91 3.757 1.094 1.031-2.104 1.052-1.537.726-1.625.281.84.007-.144-1.455.531-1.312z"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10.43299961,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          display: "inline",
        }}
      />
      <path
        d="M463.063 275.594c-.388.431-.865.896-1.47 1.219-.434.231-.262.139-.437.25-.271.568-.694 1.262-1.375 2.093-.38.465-.712.877-1.469 1.281-.756.405-2.412.344-3.156-.187-.023-.016-.01-.015-.031-.031-.099.056-.323.22-.375.25-.072.041-.217.175-.281.219.063.282.156.457.156.812 0 .356-.072.89-.25 1.438.455.62.615 1.408.438 2.156l.156.094c.493.296.817.532.906.593.155.034.415.09.719.125.688.08 1.375.094 1.375.094.6.026 1.174.258 1.625.656-.124-.477-.513-1.92-.688-2.969-.155-.934.172-2.357 1.031-3.093.86-.737 1.938-.719 1.938-.719s1.233.133 2.625.656c.604-.37 1.457-.447 2.281-.375a5.726 5.726 0 0 1 1.75-1.187 3.952 3.952 0 0 1-.281-.531c-.082-.174-.067-.551-.125-.844-.485-.14-.913-.28-1.469-.656-.29-.197-.41-.627-.656-1-.326-.003-.652.033-.813 0-.333-.07-.715-.165-2.03-.344-.087-.012-.022.007-.094 0zm-3.688 15.75a2.623 2.623 0 0 1-2.625.812l-.156-.031c-.195.276-.232.523-.594.813-.615.492-.671.686-.875 1V294c0 .226-.041.616-.188 1.031v.031c.173.217.31.46.407.72.082-.134.176-.26.281-.376 0 0 .386-.377.906-.781s1.16-.938 2.406-1.188c.714-.142 1.09-.274 1.47-.406-.295-.173-.589-.439-.907-.969-.126-.209-.063-.465-.125-.718z"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          fill: "#47c1dc",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10.43299961,
          strokeDashoffset: 0,
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#af)",
        }}
      />
      <path
        style={{
          opacity: 1,
          fill: "#89db8c",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#ag)",
        }}
        d="M722.688 151.813c-8.52 1.772-27.938 4.1-27.875 13.125 8.55 5.218-2.406 11.56-5.852 11.747 8.598 9.738-13.486 6.82-7.611 8.401 17.634-.105 5.005 21.387-7.125 10.63-5.333-2.914-9.439-20.117-6.456-4.571 1.34 15.159-6.519 26.99-2.617 41.275 3.305 7.589-3.626 12.698 5.723 17.699-1.542 8.894 1.54 19.418-8.844 23.684-7.446 6.99-28.02.108-28.468 15.161-.178 13.007 19.521-.082 16.055 15.983-1.485 6.012-6.712 9.097 1.53 12.518 2.635 9.57 13.35 28.796-2.829 34.189-12.472-7.404-25.18.82-37.412-1.465-10.32-11.66-21.757 4.367-33.156-3.158-3.402 4.236-1.098 22.399 9.972 17.058 8.242 4.375 23.82-4.75 20.707 12.024-1.598 15.281.883 28.306 11.32 39.98 6.394 8.928 16.419 14.725 17.719 26.22 15.06-.29 27.282-12.785 31.169-25.655 7.219-18.346-18.672-4.673-20.82-19.314-9.045-7.128-10.232-22.921 5.026-21.327 5.781 3.473 1.415 19.195 11.218 9.764 5.677 5.219 8.667.185 12.89-2.723 11.179-4.226 17.68 6.518 23.267 13.66 11.141 4.743-.01 23.214 10.75 31.5 2.228 7.778 10.183 23.445 10.452 6.179.937-12.626 5.722-24.601 9.054-36.208 5.522-11.964 20.429-12.296 22.431 2.28 4.42 10.029 20.947 8.075 19.219 23.062 5.941-12.834 16.41 7.266 18.98 3.748 5.54-9.567-1.204-20.845-8.846-21.215 4.063-6.89-10.25-10.43-3.164-19.862 5.464-7.966 16.992.742 20.999-12.17 9.122-9.373 9.252-22.324 5.71-33.778-9.66-6.583-2.697-20.367-12.982-22.479-4.201-9.516 10.698-21.502 16.581-11.821-3.333-13.504 12.57-22.418 10.586-36.307-.56-10.827-2.128-25.201-12.052-28.99-17.813-.364-3.992-27.058 8.523-25.49 8.707.57 11.652-1.788 10.515-10.657 10.706-7.323 13.902 20.255 19.896 6.033 7.126 3.833 14.697-9.276 13.781-12.372-12.25-8.007 13.461-8.67 3.192-15.296-9.155-6.817-19.481-11.954-29.727-6.218-9.843-1.383-17.915-5.115-26.878-3.417-8.098-11.259-23.463-6.495-34.042 1.776-3.742-5.48-8.83-17.263-16.757-8.239-11.088-6.157-20.719 1.253-31.128 5.473-13.342-6.927 15.635-16.314-1.068-19.379l-1.557-1.059zm-57.594 23.03c-.575 2.671 2.557.95 0 0zm207.281 13.626c4.714 11.298 8.856.006 0 0zM843.25 222.28c-4.875 7.13 1.975 32.792 3.807 13.219.283-4.693-1.737-9.136-3.807-13.219zm-31.531 86c3.457 5.813 4.507.717 0 0z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#85df8e",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#ah)",
        }}
        d="M858.25 260.875c.022.006-.218-.055-.813.188-.255.11-.538.142-.812.093-.936-.19-1.64.04-2.688.625-.928.526-1.822.52-2.656.5-.724-.016-1.353-.069-1.875-.094.024.051.045.103.063.157.558 1.593.79 3.44.343 5.187-.141.554-.519 1.029-.843 1.531.228.025.456.117.687.188 1.515-.226 3.168-.088 4.125-.25.519-.088.646-.233.594-.156-.052.077.116.003-.188-.75l-.03-.031c-.904-2.405.182-4.728 1.812-5.907.722-.522 1.554-.842 2.406-1.031a1.517 1.517 0 0 1-.125-.25zm-9.25 21.25c-.673.983-.68 2.064-.219 3.531.504 1.6 1.54 3.383 2.282 5 .885 1.944.483 3.938-.407 5.375-.792 1.28-1.887 2.203-2.906 2.969-.25 1.57-1.02 2.87-2.063 3.625-.927.672-1.854.997-2.75 1.344.281 3.474-1.061 6.52-2.375 9.469-.293.64-1.009.97-1.687.78-1.082-.296-1.75-.147-2.219.157-.272.177-.515.485-.718.906a4.714 4.714 0 0 1 1.937-.062c.239.037.465.133.656.281.093.074.051.065.125.063.074-.003.26-.047.532-.188.543-.282 1.304-.917 2.062-1.5.379-.292.761-.579 1.219-.813.457-.233 1.053-.468 1.812-.28.76.186 1.339.843 1.594 1.468.248.608.353 1.28.406 2.125.19-.13.377-.317.438-.438.076-.15.107-.07 0-.25a1.432 1.432 0 0 1-.219-.718c-.032-1.06.278-2.015.813-2.719.534-.704 1.196-1.102 1.812-1.406 1.231-.608 2.234-.955 2.656-1.438.28-.327.694-.511 1.125-.5.871.028.775-.026 1.157-.531.297-.393.821-1.13 1.625-1.781.221-1.592 1.27-2.73 2.218-3.438-1.658-2-2.776-4.5-2.343-7.5-.734-1.06-1.095-2.247-1.032-3.344.077-1.328.474-2.536.782-3.625.307-1.088.532-2.04.468-2.687-.06-.616-.23-1.02-1-1.531-1.69-.148-2.98-.864-3.812-1.469-.744-.54-1.258-.82-1.969-.875zm-15.313 38.438c-.041.069-.084.15-.125.218-.673 1.13-.973 2.008-1.062 2.375.08.068.055.072.219.156.369.191.913.37 1.437.47.163.03.251.014.407.03a19.348 19.348 0 0 1-.875-3.25zm-3.656 6.75c-.015-.005-.042.032-.062.03.06.122.067.224.187.344.026.026.066.009.094.032-.002-.052.045-.125.031-.156-.073-.174-.088-.2-.25-.25z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#9d7902",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#ai)",
        }}
        d="M653.969 539.219c-2.257 1.582-4.05 3.092-5.5 5.437-3.122 3.266-8.285.989-11.532 2.875-.424 1.502-1.511 2.118.563 3.063 3.464 1.942 2.088 7.457-1.469 8.468-2.068 4.125 1.357 7.758 3.407 11.063-2.629-1.326-7.188-3.844-8.032.469 2.038 2.328 3.623 5.82 2.688 8.625 3.03.483 4.743-.672 6.125-3.032 4.1-2.239 2.86-8.287 6.812-10.968.918-3.772 4.065-6.724 3.375-10.813.84-4.316.852-9.41 3.5-13.031 1.194-.526.278-1.58.063-2.156z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#9c7805",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#aj)",
        }}
        d="M531.156 374.875c-10.263 1.677-18.746 9-29.31 9.793-13.464-1.382-13.152 15.946-18.883 24.896-8.098 8.174-1.344 17.877-3.303 27.868-6.032 10.523 8.001 13.736 9.056 23.167 7.253 8.176 16.747 10.858 27.423 6.445 7.457-4.257 15.887-.202 21.119 3.928 12.676-2.147 8.474 14.326 5.314 20.444 3.469 7.215 14.866 13.922 12.2 23.342-4.9 5.556 3.898 13.545-3.197 19.646-4.953 9.392 1.944 17.844 6.412 25.46.525 10.668 6.567 18.901 7.776 29.488-3.075 12.02 10.109 5.179 15.936 4.338 5.604-3.725 11.884-4.633 12.734-12.94 4.94-5.935 5.088-14.888 10.88-20.852-2.737-8.585 4.366-14.768 9.56-20.005 8.002-5.98 1.786-13.988.08-19.903-2.124-6.536-4.326-18.27 3.86-22.334 6.363-5.813 10.063-14.028 17.456-18.874 3.735-4.531 11.218-15.648 8.184-18.54-9.478 4.237-23.7 4.876-23.173-8.11-6.574-5.965-8.61-15.226-12.012-23.146-6.125-5.852-5.63-16.236-12.53-21.949-1.887-6.826-4.19-9.782-11.8-10.288-8.554-.935-15.65-7.212-24.255-2.745-10.51 1.807-22.077-6.288-25.945-15.727-1.692-.804-2.251-2.296-3.582-3.402z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#a31aa6",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#ak)",
        }}
        d="M845.375 501.938c-4.387.654-9.464 2.201-8.843 7.79-.593 4.508-5.916 4.616-9.063 2.71-2.399 3.892-5.995 5.903-9.026 8.773-5.225.836-5.75 6.356-9.963 8.587-3.113 2.886-6.38 4.555-10.692 4.11-1.298 4.442-11.01 4.008-6.497 9.103.348 4.054-.613 8.769-3.644 10.888 1.917 4.195 3.838 8.721 3.948 12.894 4.756 3.714 3.84 9.15 2.31 14.1-3.765 4.65 3.902 5.196 6.106 1.86 4.48-3.391 9.605-7.42 15.637-6.14 2.056-1.386 4.895-5.595 8.988-5.397 4.898-1.848 9.605-5.12 15.143-2.996 3.983.212 8.207 3.335 8.034 7.624 2.495-2.167 3.204-7.922 8.226-5.485 5.078 1.748 3.941 7.313 2.658 10.916 2.484 4.004.492 10.428 4.055 13.345 3.42-4.638 8.914 1.907 11.702-2.51 3.35-2.025 7.56.19 7.679-4.933 1.237-3.784 2.444-7.451 4.424-10.952 3.119-2.85 1.006-8.534 6.085-10.207 2.858-4.342 3.407-12.504 1.819-18.152-3.02-4.367-5.95-8.852-8.483-13.203.287-5.687-6.338-4.83-8.757-8.64-2.762-3.852 1.365-9.274-2.002-12.68-2.295 1.306-5.936-3.845-4.718 1.49-.258 4.98-6.282 6.601-10.254 5.072-4.012-1.396-4.468-6.836-9.125-5.508-5.846-1.68-2.554-10.56-2.883-12.192-.96-.043-1.897-.332-2.864-.267z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#a914ac",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#al)",
        }}
        d="M748.594 469.5c.658 1.391 2.328 1.69.732.103l-.226-.105-.506.002zm5.312 6.375c1.72 3.427 4.087 6.761 4.282 10.719 5.453 2.478 7.384 8.638 9.75 13.656 1.832 1.538 5.906 5.477 7.615 2.325-.933-2.556-6.376-.673-5.535-4.887.346-3.101-2.511-4.341-4.107-6.356-1.647-2.76-.894-6.15-1.973-9.082-2.183-1.136-4.356-2.313-6.711-2.548-1.467-1.01-.866-4.315-3.32-3.827z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#a914ac",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#am)",
        }}
        d="M793.844 457.844c-1.75 3.093-3.972 5.916-5.067 9.27-2.78 3.931-6.725 7.232-11.433 8.511-.915 3.543-.251 7.604 2.281 10.344.007 2.84.73 5.803 3.974 6.35 3.051 1.494 7.424-.276 7.901-3.819-3.018-1.503-3.107-5.607-1.273-8.067.993-2.974 6.824-3.111 4.798-6.902-2.204-3.214-2.253-7.756.646-10.58 1.785-1.567 2.322-3.652-.455-4.325-.462-.253-.928-.5-1.372-.782z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#ad12ae",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#an)",
        }}
        d="M820.906 448.313c-1.053 1.91 2.45 3.481 2.187 5.105 1.609.522 3.787.048 2.542-1.972-.616-1.868-3.068-2.544-4.729-3.134zm19.5 2c-2.208-.04-2.184 2.645-2.777 4.163-.85 1.568-1.895 3.104-1.68 5.02.033 2.11 1.01 4.166 2.582 5.567 1.44 3.479-.231 7.135-.562 10.656 2.293 1.487 4.86 3.652 7.788 2.782 2.005-.516 5.05.385 6.024-2.157 1.661-2.399 5.014-2.526 7.483-1.45 2.458 1.005 4.793 2.564 6.33 4.762-.446-3.183-3.613-5.6-3.076-8.978.728-1.287 1.2-2.955-.688-3.444-2.068-.816-4.286-1.262-6.17-2.5-1.408-.93-3.61-1.755-3.78-3.637.785-1.285 3.573-.437 3.968-.537-4.459-1.423-8.03-4.903-10.317-8.904-1.774-.07-3.58-.436-5.125-1.344zm-10.687 7.812c-1.08.612-1.201 1.463.177.85 1.427-.202.698-.299-.177-.85z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#a715a9",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#ao)",
        }}
        d="M812.125 477.438c-2.95 1.69-7.265-.242-9.488 2.844.529 3.572-1.95 6.913-1.918 10.53-1.707 1.663.954 5.984.163 6.38.986-3.566 5.326-3.024 5.695.6-.004 1.473 3.356 3.24 1.28 1.113-1.157-2.202-.333-5.725-3.341-6.314-1.348-2.4-.203-5.843.393-7.644-3.53-2.227.115-7.706 3.59-5.586 1.227.063 3.753-.269 3.626-1.923z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#bb10bf",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#ap)",
        }}
        d="M785.375 507.531c-1.038 1.118-5.15 2.313-3.756 3.352 3.326.106 6.601.433 9.768-.654 3.468.079 6.64 2.568 10.176 1.646 1.606 1.657 2.912-.983.466-.682-4.383-.242-7.841-4.392-12.404-3.443-1.417-.063-2.832-.18-4.25-.219z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#dadd23",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#aq)",
        }}
        d="M432.906 141.063c-2.974 1.518-7.019 3.331-9.344 4.093-.747 4.23-6.421 3.65-8.03 6.906-1.726 5.092-8.35 1.788-11.344 4.625-3.98.095-7.723 1.848-10.045 5.116-1.271 1.01-.327 4.49-2.827 5.299 1.817-2.424-2.044 3.204-4.128 1.742 1.275 2.248-3.804 5.46.633 3.302 3.55-3.524 8.4-1.609 11.741.417 3.073 2.311 5.906 5.633 6.47 9.687 2.456 2.926 1.593 6.795 5.44 8.55.56 3.5 4.438 5.454 3.275 9.353.18 3.074-2.794 5.806-3.528 7.722 2.103 3.955.898 8.257 2.713 12.296.999 3.547 5.348 3.482 6.92 6.382 1.443-.318.768-4.77 2.503-6.243-.196-4.212 3.368-6.421 2.051-10.435-.31-4.397 4.822-6.59 8.58-6.238 4.005 1.257 4.077-4.724 7.983-4.168 2.339-1.904 5.14-2.08 4.946-5.864.975-2.625 4.279-2.543 6.116-2.074-1.33-3.16 1.029-7.765 3.594-9.406-3.66-3.583 1.409-8.056 5.219-7.938 2.123-1.013-.05-6.462 2.344-8.656-4.957-1.8-1.595-6.857-2.242-10.327 1.964-4.365-4.44-2.09-6.915-1.923-2.895-.802-5.125-1.923-8.375-1.844-4.082-.756-3.666-7.156.344-7.656-.821-1.708-6.409-.793-9.063-2.437-1.679-.076-3.37.051-5.03-.281zm34.406 4.25.188.812-.188-.813zm-6.218 33.5-.281.812.28-.813zm-36.313 41.28c-.19-.062-.722.393 0 0zm-7.5 4.688.25.281-.25-.28z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#d9dd23",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#ar)",
        }}
        d="M224.656 178c-5.546 2.204-17.73 4.261-8.422 11.322-1.107 5.925-7.418 6.39-5.397 12.991-1.78 7.887-18.127 2.013-10.087 11.45 2.215 4.463 9.536-.458 11.594 5.674 4.993-10.034 16.477-5.393 23.936-3.595 5.565 5.453 15.756 5.56 17.323 14.784 2.839 8.346 9.247 15.808 12 24.543 3.677 8.722 3.124 17.48-1.221 26.26-2.382 10.613-5.336 22.63 2.277 31.86-.419 10.756 9.903 15.682 9.09 26.776 1.37 9.638 10.938 5.183 17.938 6.06-5.726 2.007-6.025 3.964-3.16 8.316-5.006 10.29 8.518 7.931 13.56 12.65 6.386 1.903 6.95 21.657 11.255 7.936-1.244-2.513-4.837-9.965-.018-12.935-9.447 6.205-21.566-3.82-17.512-14.217-1.21-8.242 7.765-16.244 15.142-19.147 9.242-3 18.695-2.483 27.952-.694 6.51-4.055 10.094 9.718 10.483-1.217 1.496-8.016 17.347-7.766 11.973-17.656 4.433-8.054 13.504-12.566 14.587-22.613 3.39-6.437 19.258-7.465 10.272-13.56-9.874 5.521-11.764-12.545-1.193-13.037 5.808-2.655 12.926 1.671 16.012-5.618 5.683-.458 9.747-3.845 3.522-7.52-1.607-5.658-5.537-.405-6.18-7.772-.707-6.956-5.893-8.701-11.2-4.907-8.508-.748-2.814-19.758-11.5-14.531-.61 5.61-7.473 8.13-2.656 14.379.866 8.618-10.685 9.945-7.971 18-2.615 3.686-4.792 21.467-10.051 11.492-4.552-5.793-3.309-14.283-7.704-19.096-8.372 4.27-17.038-8.03-21.009-15.843-1.958-10.85 6.873-19.57 14.584-25.722-1.84-6.418 4.445-12.994 8.688-5.157 7.539-5.205-3.485-6.658-5.97-10.687-7.386 5.234-16.985 4.536-24.324 3.655-9.254 4.057-19.568 5.208-26.934-3.524-7.15-4.36-13.274-4.787-21.168-1.133-9.707 4.57-18.548-1.7-28.727-.503-6.719-2.179-14.065-3.733-19.784-7.464zm134.75 13.781c-2.335.25.95.63 0 0zm-155.25 2.25c-1.559 2.696 3.93.872 0 0z"
      />
      <path
        style={{
          opacity: 1,
          fill: "#ea4224",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#as)",
        }}
        d="M345.656 385.375c-5.808 5.107-17.985 4.866-18.534 14.228-4.82 7.768-4.57 16.227-9.332 24.056-.34 6.76-1.105 13.714 3.78 19.737 2.864 5.946 9.827 10.154 10.254 17.14 6.176 3.914 12.388 7.599 16.986 13.085 2.426 8.843-1.229 18.344.065 27.067-2.733 7.236.298 14.991-1.7 22.346 1.102 7.22-5.466 15.963.294 21.872-.226 8.388-5.561 17.352-.916 25.267.712 9.374 6.372 17.86 15.307 21.185 6.642 4.966-1.541-5.648-.9-8.546-.645-8.04 2.403-16.284.541-24.539 6.36-4.658 2.268-16.242 9.524-18.411-9.033-7.658 12.982-4.45 13.133-8.492-7.964-6.417 1.96-11.547 8.404-11.058 7.41-3.286 7.944-11.86 13.033-16.719-.817-7.779 2.935-18.753 12.356-19.048 10.09.63 14.528-9.912 16.522-17.354.086-8.184 1.544-16.437 6.376-22.01 10.099-1.463 4.306-13.363-2.731-14.672-8.227-2.64-16.242-5.365-24.391-7.435-7.892 2.077-16.899-5.61-10.627-11.561-1.348-10.47-14.967-4.95-20.814-10.439-6.109-2.894-9.728-11.636-17.08-11.304-5.632-1.903-16.565 1.522-19.55-4.395zm47.938 134.313z"
      />
      <rect
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1.20000005,
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
        }}
        width={749.819}
        height={519.068}
        x={167.063}
        y={117.462}
        transform="translate(.934 1.093)"
        rx={2.32}
        ry={0}
      />
    </g>
    <g
      style={{
        opacity: 0.709434,
        display: "inline",
      }}
    >
      <path
        id="eastern_australia"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#at)",
        }}
        d="M832.088 509.73s.177.53.707-1.592c.53-2.121.177-3.182.884-4.773.707-1.59 1.06-1.414 2.475-2.121 1.414-.707 1.768-1.06 2.121-1.768.354-.707 1.414-.884 2.475-.707 1.06.177 1.591.707 2.475-.53.884-1.238.707-1.591 1.59-1.238.885.354.354.354 1.592.707 1.237.354 2.475.884 4.95.354 2.474-.53 2.651-1.768 2.828-.354.177 1.415.177 1.591 1.06 1.591.885 0 .885.177.354 1.238-.53 1.06-.177.353-1.59 2.298-1.415 1.945-2.122 2.121-2.299 3.535-.177 1.415.177 2.299.177 2.299s-.707 1.944.53 1.944c1.238 0 1.414-.53 3.005-.707 1.591-.177 3.006-.354 3.182 1.237.177 1.591 1.238 4.597 2.299 4.773 1.06.177 1.06.53 2.828.177 1.768-.353 2.475.53 2.652-1.06.176-1.591.176-1.945.176-3.182 0-1.238-1.767.707.53-2.829 2.299-3.535 2.83-1.237 2.299-5.126-.53-3.89-1.591-3.536-.707-6.01.884-2.476.53-2.476 1.06-2.299 0 0 1.591-.177 1.768 2.298.177 2.475.884 4.596.884 5.657 0 1.06.707 4.95.707 4.95s1.238 1.414 1.945.884c.707-.53 1.767-.707 1.767-1.945 0-1.237.354-2.651.708-1.944.353.707 1.414 1.237 1.414 2.298 0 1.06-.177 2.121 0 3.182.177 1.06 1.237 2.121 1.237 2.121s.354 2.121.354 2.828c0 .708.353 1.238 0 3.006-.354 1.767-.354 1.944-.177 3.535.177 1.591.354 2.298 1.06 2.475.708.177.708.177 1.415.177.707 0 .884-.707 1.414.177.53.883.707 1.414 1.945 1.59 1.237.177 2.298 0 2.298 0s.53.884.53 1.945c0 1.06-.177 1.414.177 2.829.353 1.414.353 1.59 1.237 1.767.884.177 1.414.354 1.414.354s.177.884.177 2.298c0 1.414.354 2.298.354 2.298l1.414 1.06s.354.885 1.06 1.769c.708.883 1.415 1.06 1.415 1.06s.53 1.06.707 1.945c.177.884-.354.353.707 1.59 1.06 1.238 1.237 1.592 1.237 2.652 0 1.061.884 1.768.53 3.182-.353 1.415-.176 1.945-.353 3.713-.177 1.767.177-.354-.177 2.651-.353 3.005-.176 3.89-.353 4.95s-.53.177-.707 2.121c-.177 1.945-.354 3.536-.354 3.536s-1.237 1.768-2.121 1.768c-.884 0-2.475-.707-2.475.176 0 .884-.884 1.591.354 1.945 1.237.354 1.59-.707 1.59.53 0 1.238-.353 1.591-1.414 2.475-1.06.884-1.06.707-2.298 1.414-1.237.707-.53-.353-1.414 1.945-.884 2.298-.707 2.298-1.414 3.182-.707.884-.884.884-1.238 1.944-.353 1.061-.353 1.415-.353 2.652 0 1.238-.354 1.768-.354 1.768s-1.414 1.414-1.414 2.652c0 1.237.884 1.767.177 2.651-.707.884 0 .884-1.591 1.06-1.591.178-2.298.178-2.298.178l-2.475.53s-.354-1.06-1.237-.53c-.884.53-.53.353-1.238 1.237-.707.884-.884.884-1.768 1.414-.884.53 0 .707-.53 1.591s-.707 1.768-1.768 1.238c-1.06-.53-1.414-.354-1.768-1.415-.353-1.06.177-1.237-1.59-1.767-1.768-.53-1.945-.53-1.945-.53s-.53.353-.884 1.237c-.354.884.177 1.237-1.06 1.768-1.238.53-1.238 1.06-2.476.176l.236-.27s0-5.656.177-7.07c.176-1.414-.354-1.238-1.061-2.298s.884-42.25.707-43.134c-.177-.884-29.875.354-29.875.354l-.59-37.738z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="indonesia"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#au)",
        }}
        d="M778.125 511.375C779 512.75 778.5 513 780.5 513s3.25-.375 4.375-.125.625.625 1.875.5 2.375-.875 3.375-1 2.25-.25 3 0 1.875 1.125 3.25 1.25 4.5.125 5 .25 2.125 1.375 2.875.5 1-.625 1.25-2 .25-2.125-.625-2.375-.25-.75-2.375-.875-2.75-.375-3.375-.625-1.625-1.25-2.375-1.5-2.875-1.125-4.25-1.125-4.125-.25-5.5-.25-1.625-.625-3.125.5-2.75 1.625-3.625 2.25-.625.125-1 1.375-.75 1.875-1.125 1.625zm23.375-8.125c.5-1.75.125-1.5.25-3s.5-1.125 1.125-2.125.25-2.625 1.375-.75.75 2.625 2.125 3.75 1.625 2.375 2.75 1.25 3.25-2.25 2-3.625-2 0-2.125-3.25-.25-4.375-1.125-4.25-1.625 1.375-1.75-.375-.625-3.875.75-4 2.75.75 3.625-.875 1.875-2.125.25-2.375-2.875-.5-3.75-.375-1.5.125-1.375-.625-.875-1.5.875-1.5 1.375.375 3 .25 3.25-1 3.75-1.5 1.125-2.75 1.875-3.25 1.25-.875 1.125-1.5-.375-1.125-1.125-1.375-2-.5-2.375 0-1.25 1.875-2.125 2.25-5.125.125-6.125.625-1.875 1.125-2.5 1.5-2 1-1.75 2.5.25 2.75.25 3.375-1.25 2.375-1.5 3 .125 2.5-.25 3.375-.625.375-.625 1.625-.25 1.5.125 2.375 1 .875.625 2.125-1 .5-.5 1.875 1.125.875 1.25 2.125-.25 1.75 0 2.75 2 .125 1.875 0zm-10.5-6.375s-.25-1.25 1.875-3.375 2.75-2.25 2.75-4.375-.125-2-1.125-3-2.375-1.625-1.125-3.125 1.125-1.875 2.75-2.25 3.25-2.75 3.375-3.625.25-1.375-.125-2.5-1.375-3.125-1.5-4.5-.25-2.375-.125-3.375 1-1 2.125-2.375 1.375-.75 1.375-2.75-.125-4.5-.75-5-.875-.25-2.25-.75-2-1.75-3.875-2.875-3.125-1.25-3.5-.625.375-1.5-.375 1.625-.625 3.875-1.5 4.5-2.25 1-2.625 2.25 1 2.125-1 4.25-5.625 6.125-8.25 6.625-4.5 1.125-4.5 2 1.125 2 .875 3-2 2-1.75 2.5.875 0 1.375 1.125.5 4.625.5 4.625L776 487.5s-1.75 2.625-.875 3.375 1.25.875 2.25 2 2.25 2.375 3.75 2.5 2.375.875 3.5 1.375 1.5 0 2.875-.125 3.875.375 3.5.25zm-23.612-17.021.707-1.768s.177 1.945.353 3.005c.177 1.061-.353 2.475.177 3.182.53.708.177 1.061 0 2.122-.177 1.06.707 2.828.707 2.828l1.293 1.527L772 491s.625.875.875 1.5 1.125 1 1.125 1v2.25c0 .875-1 1.375.125 1.625s2.5.25 3.25.25.5.375 1 1.375 1 1.125 1.125 2.5.125 2.375-.375 3-.125 1.125-.75 1.875-1.625.875-2.375 1-1 .125-1.25 1 1.625 1.75-.75 1.625-2.25.5-2.75-.75.875-1.75-.875-2.375-.25 1.875-2.875-1.625-3.5-1.125-3.875-4.25-1.5-3.875-3-6.25-2.125-4-3.375-4.375-1.75 1.125-2.375-.5-.625-.75-.625-2.625-.125-1.75-1-3.5-1-1.625-1.5-3.5-.25-1-2.5-3.875-2.5-3.125-4.5-4.625-2.5-1.75-2.375-3.75-1.25-4 0-4.375 1.5-.75 2.75 0 1.375 1.625 2.375 1.875 1.625.125 2.375.125.5-1 1.75.5 1.5 1.5 2.125 2.875.625 1.875 1.25 2.625 1.125.75 1.75.375 1.25-1.5 1.625-.75.375 1.125.625 1.625 1-1.125 1 1-.75 3.125.375 2.375l2.25-1.5s-.125-.375.375.875.625 2.375 1.75 2.875 1.5.5 1.5.5l1.138.854z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="new_guinea"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#av)",
        }}
        d="M832.75 455.5s.5-2.75 1.5-3.5.25-1 .25-2.25-1-2.5.25-2.75 1.5 0 3.25-.25 3.5-1.25 3.5-1.25l1.5 1.5s.75.75 3 .75 3 1 4 2.75.5 2.5 3.25 4.25 5.5 2.5 7 3 2.75 1.25 2.5 2.75 1.5 2.25-.5 2.75c0 0 5.724 2.462 6.43 4.053.708 1.59 1.945 2.298.531 3.182-1.414.884-3.005.177-2.828 1.237.176 1.06 1.237 1.768 1.59 3.005.354 1.238 1.592 1.945 1.592 3.36 0 1.413-.354 2.297 1.06 3.181 1.414.884 1.591.884 1.591 1.945v2.475s-1.06 1.06-2.828 1.06c-1.768 0-2.652-1.414-3.359-1.414-.707 0-2.475-.353-2.475-.353s-1.237-4.95-4.773-5.834c-3.535-.884-3.535-1.414-3.535-.707s1.237 2.298-.177 2.828c-1.414.53-2.121.53-3.005.53-.884 0 3.005 1.592-1.415 1.415-4.419-.177-4.773-1.768-6.717-.53-1.945 1.237-7.778-3.713-7.778-3.713s-2.652.177-2.652-1.237c0-1.415-.707-1.591.177-2.829.884-1.237.884-1.414.884-2.828s.353-1.768.353-3.182.884-1.945-.353-2.475c-1.238-.53-2.298-.884-2.475-2.121-.177-1.238-.177-1.415-1.06-1.415-.885 0 0 .177-1.415.177-1.414 0-2.475 1.06-3.712-.53-1.238-1.591-1.414-1.591-3.713-1.591-2.298 0-7.247 3.359-3.358 0s4.596-3.536 4.596-3.536-4.066 0-4.243-1.414c-.177-1.414-.53-3.712-1.414-4.066-.884-.353-1.945-.884-1.591-2.121.354-1.237 1.06-5.657 4.596-5.48 3.536.177 4.243 1.59 5.303 2.121 1.061.53 3.006-1.414 3.36.354.353 1.768 0 4.773 0 4.773s1.237.884 1.59 2.651l1.723 1.279z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="alaska"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#aw)",
        }}
        d="M254.5 242.25c-.625-1.25-.5.125-.875-2s-1.125-1.875-1.75-2.5-1.5-.75-1.125-1.875.625-1.125.25-2.25-2-1.75-2.5-2.875-.5-.25-.5-2 .5-2-1-2.5-2.5.75-3.25-.875-.625-.75-2.125-1-2.125-.125-2.625-1.125-.75-1.875-1.75-1.875-2.25-.375-2.5-1-1.625-2.375-2.5-2.375-.625.625-2 1.25 2.5 1.25-.5 2-4.375 1-5 .5-2.875 1.125-2.5-.75.5-1.625 1.125-2.125 2.375-.625 1.625-1.125-.375-1.375-3-.75-3.375.875-4.25 1.5-.875 1.875-1.25 2.625 1.125.5-1.75 1.75-1.375-.625-4.375 2-2 2.875-4.25 3.25-.875 0-2.625 1.875-1.5 2.75-3.25 2.75-1.125 3.125-2.75 1-2.75-1.25-1.5-2.25 1.5-.75 2.5-1 .5.375 1.625-1.25.875-2.25 2.625-2.375 1.5 1.5 2.25-.875 0-2.25 1.375-3.5 2.875-2.5 1.125-2.625-1.875-.5-3.5.25-1.75 1.125-3.25.875-1.875-.375-1.875-1-.625-2.625-.625-2.625 1.25-.625-.875-1.125-2.25 1.125-2.125-.5 1.125-1.375.25-2.125-1.125-1.25-2.25-.75-2.375 1.75-1.625-.125 2.25-2.625 2.75-3.375 1.25-2.875 1.5-4-1-.5.5-1.625.875-1.375 2.75-1.25 1.375 0 2.625.625 1.625 1 2.375.625 1.5-1.25 2-1.875 1.125-1 1.25-1.75.75-1.5-.625-1-.875.5-2.75.875-1.625 1.75-2.375.125-.875-2.375-.875-2.375-.75 0-.625-1.75-1.125-4.625 2.25-5.5 5.5-.125 5.625.375-1 1 .5 1.125 1.625.5 2.5-.75 1.875-1.125.875-1.625-1.875-.375-2.375-1.375 0-1.25-.5-2.625-.5-1.625-1.25-2.625-2.75-2.5-.25-3.125 5.125-1.25 4.632-.895c0 0 2.828-3.182 4.596-2.828 1.768.353 3.89 0 5.657-1.415 1.768-1.414 4.596-.707 4.596-.707l2.122 1.768s2.828 2.828 4.596 1.768c1.768-1.06 1.768 1.768 4.95 2.121 3.182.354 4.596 1.06 7.778 2.121 0 0 .884-.353.707.884-.177 1.238-1.945 30.583-1.414 30.936l.152.245 7.5.875s.125.125.625 1.625.875 2.5 2 4.5.125 8 .125 8l2 2.75s1.625.75 2.25.875.375 3.25.25 4.5-1.625.625-2.5.875-1.125 2.375-1.25 3.625-2.372.752-2.372.752z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="ontario"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#ax)",
        }}
        d="M333.047 219.639c-.707 2.475-1.06 9.192-1.06 9.192l1.767 1.414s1.415 2.475 3.182 4.243c1.768 1.768 2.829 5.303 5.657 4.596 2.829-.707 3.89 2.475 3.89 2.475l2.12-1.414s2.122-1.238 2.476-.53c.353.707 2.474 1.414 2.474 1.414s2.122-1.238 4.066-1.415c1.945-.176.354 1.591.354 1.591l-4.066 1.945s.884 2.652 1.944 2.298c1.061-.353 1.591 4.066.354 4.95-1.237.884.354 2.651.354 2.651l.707 2.475 1.944 1.415.53 2.298h-.176c-.707 1.944-1.06 18.915-1.06 18.915s1.06-1.414 1.767-1.591c.707-.177 1.768 1.414 2.475 1.59.707.178.353-1.413 1.06-2.12.708-.708.884 0 1.591.53.708.53.53 0 1.591-.177s1.061 2.828 1.061 3.712c0 .884-1.768 1.415-1.768 1.415s-2.475.883-3.535.707c-1.06-.177-2.298 1.414-3.005 2.298-.708.884-2.122.353-3.006.707-.884.353-.353 1.237-.176 2.475.176 1.237-3.89 4.42-4.773 3.535-.884-.884-2.298-2.298-3.89-3.182-1.59-.884.354-2.651 1.061-3.889.707-1.237.177-4.066-.884-6.894-1.06-2.829-1.237-3.89-1.767-4.596-.53-.707-1.768-2.652-2.299-4.95-.53-2.298-2.828 1.59-5.303.884-2.475-.707-5.833 1.06-5.833 1.06s.353-4.95-.354-5.303c-.707-.353-19.799.354-19.799.354v-2.829c0-2.298 3.89-45.431 3.89-45.431l18.384.53-1.945 2.652z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="northwest_territory"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#ay)",
        }}
        d="M334.836 217.07c.707-2.476 8.818-10.16 8.818-10.16s3.182-.353 4.596-1.413c1.414-1.061-1.768-4.243-1.768-4.243l.707-2.121 2.122 1.767s.707 1.415 2.828 1.415 1.414-2.122 2.829-2.475c1.414-.354 2.828-3.89 2.828-3.89s2.828 1.061 5.657-1.767c2.828-2.829.707-1.414 0-2.829-.707-1.414.707-2.474.707-2.474l-2.121-.708s1.414-1.06 0-3.182c-1.415-2.12-1.768 1.061-3.182 2.122-1.415 1.06-1.061 2.121-4.95 1.414-3.89-.707 0-2.121-.354-3.536-.353-1.414-4.242.708-4.95-1.414-.706-2.121-1.767 1.06-1.414-1.06.354-2.122-.353-5.304-1.767-6.01-1.415-.708 2.828-7.425 2.828-7.425s2.829 1.414 3.182-1.061c.354-2.475 1.768-2.121 1.768-3.536 0-1.414-3.536-.353-3.536-.353l-.707 2.828s-4.242-3.182-4.242 0-1.415 3.182-3.536 7.425-.354 6.717-.354 6.717 2.122.707 1.415 2.829c-.707 2.121-4.95 1.768-4.95 1.768l-.354-3.89h-2.828s-.354 3.89 0 5.304c.354 1.414-7.778.353-9.9-1.414-2.12-1.768-4.596 1.414-6.717 2.474-2.121 1.061-3.89.354-6.01-.353-2.122-.707-1.061 2.828-5.657 2.475-4.597-.354-2.122-6.364-3.182-4.243-1.061 2.121-5.657-1.768-8.132-3.889-2.475-2.121-7.071-1.414-7.071-1.414l-.354-2.475h-2.475l-3.182.707s-2.474 1.06-4.596.707c-2.121-.353-1.767 1.768-1.767 1.768s-2.475 1.06-5.657.707c-3.182-.354-2.829 1.06-4.243 2.121-1.414 1.061-6.364-1.414-9.546-2.828-3.182-1.414-5.26 1.54-8.442.478 0 0-1.677 31.317-1.427 32.067s82.625 3 86.75 2.875 2.336.194 2.336.194z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="venezuela"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#az)",
        }}
        d="M317.375 414.875c1.875-1.25 1.5-3.75 1.5-4.5v-3.125c0-1-.125-1.75 1-3s1.75-2.375 1.75-2.375l1.25-1.125v-2l.75-2.25s.5-1.125.625-1.625-.25-2.5-.25-2.5l.25-1.625 3.125-.875s.375.375 1.375 0 2-1.25 2-1.25l2.25-1.25s1.5-1 2-1.5 2.25-1.125 2.25-1.125.875-.25 1.5-.25 2.75-.625 2.75-.625.125-.625.875-1.125 1.25-1.125 1.875-1.25 4-.625 4-.625 1.25.875 1.375 2.125-.375 2 .625 1.875 2-.375 2.5-.625.25-1.375 1.5-.5 1.375 1.125 1.875 1.125S358 384.5 358 384.5l5.5 1.875 1.875-.375c.625-.125 3.75-.375 3.75-.375s1.375.375 1.875.875 3.625 2.375 4.625 3.875 2.5 2 2.75 2.625 1.25 1.25 1.75 1.25.5 1 1.125 1.125 2 .125 2 .125.125.5.625 1.125 1.625-.625 1.875.75-.125 2.125.625 2.125 1.5-.5 1.5-.5l1.25-.5s0-1 1 0 1.75.75 2.625 1-.375.875 1.75 1.375 4.125.75 4.625.75.5-2 2.25-.375 3 2.375 3 2.375-4.33 3.574-4.86 4.634c-.53 1.061-.884 3.36-2.121 3.536-1.237.177-8.662.53-8.662.53s.354 2.122-.707 2.122c-1.06 0-11.49-.354-11.49-.354l-1.415-4.243s-1.237.884-1.414-.883c-.177-1.768-.177-4.597-.177-4.597s-2.651 1.415-4.242 1.945c-1.591.53-3.006 3.182-4.42 2.652-1.414-.53-2.121-2.299-2.475-.884-.353 1.414.177 5.656-.884 6.01-1.06.354-1.414-.265-2.298.796-.884 1.06-3.27 1.325-3.977.707-.707-.62-1.238-1.326-2.033-1.591-.796-.265-1.238-.707-2.121-.796-.884-.088-1.061-.53-1.768.265-.707.796-2.21 2.122-2.475 2.829-.265.707-1.68 3.27-1.326 4.242.354.973 1.768.708 1.768 2.475 0 1.768-.53 2.652-1.503 2.917-.972.265-5.833 1.856-5.833 1.856s-.796-2.121-1.326-2.651c-.53-.53-1.503-.796-2.21-.973-.707-.176-1.856-1.414-2.74-1.325-.884.088-3.182.088-3.8-.62a4.611 4.611 0 0 0-3.271-1.59c-1.591-.089-2.298 1.06-3.359-.619-1.06-1.68-3.005-3.977-3.535-4.066-.53-.088-3.006-.353-2.326-1.074z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="madagascar"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#aA)",
        }}
        d="M659.75 534c.25 1 1 .75 1 3s.5 5.5-1 3.5-1.5-2.75-1.5-1.5.25 3.5.25 3.5 1.23 1.7-.36 1.7c-1.591 0-1.768-.176-1.768.531 0 .707.177 2.121.177 2.121l-1.061 1.061-.53 2.298s1.767.177.707 1.945c-1.06 1.767-1.414 2.298-1.414 2.298s.176-1.591-.177 1.944c-.354 3.536-.354 4.066-.354 4.066s1.06-.353-.353 1.414c-1.415 1.768-1.945 2.298-2.298 3.182-.354.884.353 1.768-.708 2.652-1.06.884-1.59 1.591-1.59 1.591l-1.061 1.06s-.354 1.415-.354 2.122c0 .707-.53 1.237-.53 1.237s-.53.53-.53 1.238c0 .707.176 1.06-.708 1.768-.883.707-.53.884-1.59 1.767-1.061.884-1.415-.353-1.415 1.591 0 1.945-.53 2.829-1.414 2.829-.884 0-9.37.177-10.783 0-1.415-.177.884-7.248-1.061-8.485-1.945-1.238-3.182-5.48-1.945-6.364 1.238-.884.53 0 1.415-.884.884-.884.884-.884 1.414-1.945.53-1.06 1.414-1.06 1.414-1.06s-1.06-2.299-.353-2.299c.707 0 .353-2.651.353-2.651s.354-1.238.884-2.122c.53-.883-.53-1.767.884-1.944 1.414-.177 2.121.177 2.121-.707 0-.884-.884-1.06-1.59-1.238-.708-.176-1.061 0-1.061-1.237 0-1.238-.53-.707-.884-1.945-.354-1.237-1.415-.53-.177-2.121 1.237-1.591 1.237-.53 1.59-2.121.354-1.591-1.06-2.652.708-2.652s2.298.53 4.066-.177c1.768-.707-.177-.884 2.652-.707 2.828.177 3.005 1.06 4.065 0 1.061-1.06 1.591-.707 1.768-1.944.177-1.238 0-1.591 1.238-2.122 1.237-.53 1.237 0 2.12-.707.885-.707 1.592-1.59 1.415-2.651-.177-1.061-1.06-1.591.53-1.591 1.591 0 1.415.53 2.122-.354.707-.884.53-.884.884-2.475.353-1.59 0-1.944.884-2.475.883-.53 2.474-2.298 2.474-2.298s.53-1.59 1.238.884c.707 2.475 0 2.121.884 2.828.884.708 1.06.177 1.06 1.061 0 .884-.353 2.652-.353 2.652l-1.395.936z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="north_africa"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#aB)",
        }}
        d="M544.625 385.375c-.875-1-1-1.375-1.375-2.125s-.625-2.125-1.875-2.25-1.125 1.125-1.5-.75-.75-3.375-1.25-3.75-1.375-.75-2.5-1.875-1.25-2.25-1.25-2.25L532.75 371s-5.5.25-6.125.25-1.75.125-2.5.625-.375.75-1.75 1.375-3.625 1.75-4.25 2-3.5.375-3.5.375 0 1-1.125 1.75-2.625 1.625-3.875 1.5-1.394-.569-2.375-.375c-1.848.365-3.059 1.582-3.75 1.5-.633-.075-1.75.375-2.875.75s.125.5-2.25.5-3.625 0-4.375-.125-1.375.25-2 .375-1.5.25-1.268.42c-1.414 0-2.121 1.06-2.121 1.06l.353 4.597-3.182 3.535s-.707 2.829-1.414 4.95-1.768 4.242-1.768 4.242l-1.414 3.89s-1.561.806-1.436 1.431.375 1.875-.125 2.25-1.125 0-1.75 1.25-1.125 2.375-1.125 2.875.625 1-.25 2-1.75 1.125-2 3.25-1.25 4-.25 5.25 1.625 2.25 1.625 3.625-.375 1.25-.25 3.25.375 1.875.375 3.25-.125 3.25-.375 4.875-.75 2.125-1.125 4-2.625 2.625-.875 4.25 1.5 3.125 2 4.5 5 1 5 3.875 3.375 3.25 3.625 4.75-.625 3.625 2.375 4.875 2.75 3.125 3.375 3.625 3.375.875 4 1.625 1.5 2 2.125 2.625 1.25 1.625 3.375 1.5 2.375 0 5.75-.375 5.75-.5 6.625-.625 2.75.5 4.125-.125 1.125-1.75 2.875-2.125 2.375 0 3.5-.25 5.5-.25 6.125.25 1.375 0 2.125 1.625-1.5 4.125 3.25 3.875 7.5-1 8.125.125-1.5 2.75-1.125 4.25.875 1.875.375 2.625l.57.307c.53 1.061.53 1.591 1.238 1.945.707.354 2.652-1.237 2.652-1.237s1.59 0 3.182.353c1.59.354 1.767-.353 3.358-.707 1.591-.354 1.945 1.237 1.945 1.237s1.237.884 2.652 0c1.414-.883 1.06-1.237.53-2.651-.53-1.414.353-1.768.707-5.657.354-3.89-1.237-1.945-1.237-1.945s-.53-1.237-.354-3.712c.177-2.475.884-.707 1.414-1.768.53-1.06 1.238-1.06 2.122-1.767.883-.708 2.12-.708 3.005-1.238.884-.53 1.414-1.59 2.828-2.121 1.414-.53 2.829-1.238 5.127-2.298 2.298-1.061 1.767-2.122 1.767-3.006 0-.883 2.299-3.358 2.299-3.358s-.53-2.122-1.415-3.36c-.884-1.236-.353-2.65-.353-3.535 0-.883.353-1.414.884-2.12.53-.708.176-1.062.176-1.062l.884-1.767s.53-1.415.53-2.652-.706-.707-1.414-.884c-.707-.177-.176-.353.884-.884 1.061-.53.707-1.768.884-2.828.177-1.06-.353-5.48-.53-6.364-.177-.884-3.89.177-4.773-.177-.884-.353-1.414-1.06-1.414-1.06s-.707-2.122-.884-3.183c-.177-1.06-2.652.177-3.536 0-.884-.176-.176-1.414-.53-2.651-.354-1.238-1.768-.707-2.652-.707-.884 0-2.298-.707-3.535-1.591-1.238-.884-1.591.353-3.005.53-1.415.177-1.415-.177-1.945-1.06-.53-.885-2.298.53-3.889.353-1.591-.177-1.237-.884-2.121-2.298-.884-1.414-1.768-.354-3.713-.884-1.944-.53-1.237-.707-1.414-2.121-.177-1.415-1.414-1.238-1.414-1.238s-.177-1.59-.354-2.828c-.176-1.238.177-3.182.177-3.89 0-.706-.353-3.358-1.59-3.888-1.238-.53-.354-1.768-.354-1.768s-.53-1.768-.354-2.652c.177-.884 1.414-1.944 2.298-1.944.884 0 1.414-1.061 1.414-1.061s-1.414-2.121-2.121-3.359c-.707-1.237 1.237-1.06 1.237-1.06l.884-1.061s.354-.53 1.945-1.414c1.59-.884.683-2.909.683-2.909z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="greenland"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          markerStart: "none",
          markerMid: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#aC)",
        }}
        d="M429.125 209.875s.625 3.875-.25 5.5-1 .75-1.5 3.125-.125 3.25-1 4.625-.625-.875-1 2.75-.125 4.5-1 4.875.25 1.75-1.25 1.75-2 1-2.375-.375.25-2-1.25-2.125-2.375 1.625-2.625-.125.375-2.375-.875-2.875 1.25 3.625-2.875-1.25-3.375-8.25-3.375-8.25-1.25-1.375-1.25-2.25.875-3.625-.25-5.125-2.25-4.5-.875-5.375 2.75-.625 3.125-2.625.25-1.75.5-2.75.75-1.375-.25-1.5 0 .375-1.875-.125-1.625-1.25-2.125-1.375.375.75-1.25.125-2.875-1.125-1.125-1.75 2.875-.875 3.625-.625 1.125 1.625.875-.25S404.5 191 404.5 189.75v-2.25c0-1.25-.25-1.875-1.25-2.875s-.75-1-1-2.625-.25-1.5-1.125-2.5-1 .375-1.625-1.375-.625-2.125-1.875-2.125-1.125.75-2.125-.625-.75-1.625-2.375-1.5-2.875.875-3.125 1.375.375 1-1.25 1.125-2 .125-2.875.125-1.75.375-1.75-.125c0 0-1-1.5-2.625-1.125s-2 1.5-2.5.25-1.5-1.125-1.625-1.75-1.625.125-.125-1.5.5-2 2.375-1.875 1.5.25 2.5-.25 2.375-.625 1-.75c0 0 .5-.75-.875-1s-2.875.5-2.875-.5-1.25-2.125.5-2.125 2.75.5 3.625-.375.875-.625 2.125-.5 2.5.75 2.875-.25 2.375-1.125.75-1.625-2.5-.375-2.125-1.125 1.375-.875 1-1.75-2.125-1.625.375-1.75 3.75 1 4.125-.375-1-2.5 1.25-2.5 4.625-1.125 4.75-1.875-.5-1.625 1.625-1.125 1.75 1.625 2.875.25-.125-1.75 2.125-1.25 2.5.75 3.375.125-.75-.875 1.375-.625 1.75 1 2.125-.875-1.375-1.625.75-2.125 2.25 0 3.25-1.375.125-1 2-1.375 2.125 0 1.25-1.375-2.5-2.125 0-2.375 3.875-.5 4.125-1.25c0 0-.125 1 1.375.625s1.25-.875 2.125-2 .625-1.375 1.5-.75-.125 1.125 2.125 0 .5-1.125 2.75-.75 2.125.125 4.75.25 1.25.5 2.75.875 1.125.25 3 .25 1.5-.375 2.625.375.625.875 2.875.875 2.875-.625 3.25.75-.625 1.5 2.125 1.875 3.625-.125 2.125 1-4.625 1.25-3.75 2 .75.5-1.625 1-5.875 1-3 1.375 4.875-.875 5.625.375-1 1.375 2.25 1 1.875-1.125 4.5-.625 2.125 1.25 3-.375-1.5-2.5 1.375-1.875 2.25.625 4-.375 2-3 2.75-.625.625 2.875-1 3.625-1.5-.375-2 1.375-.375 2.25-1.625 3.25-1.875.125-1.625 1.875.25 1.5-.125 3.25-1.25 2.25-.125 3.25 1.125 0 1.875 1.5 1.125 1.5.375 3.25-.875.875-1.125 3-.5 3.375.375 2.75 1-2.375 1.125-.625.625 2.875-.875 3.5-1.375-.25-1.625 1 .625 1.625-.5 2.625-.125 2-1.375.875-2-2.875-3-1.75-2.375.125-1.25 1.5 1.875 1 2.125 1.5.125 1 .5 1.75.125 1.125 1.125 1 1.375.375 1.125 1.25-.375 1.375.375 2.25 1 .875.375 1.25-.75.5-1.625 1-.75 1.25-1.25 1.375-1.5.75-1.625-.5-.25-2.875-1-3.5-1.875-2.25-2.125-.75 0 2-.375 2.75-1.875-.25-.375 1 2.125 1.625 2.125 1.625 1.375.75.75 1.375.125.875-1.75 1.125-1-1.625-2.75.375-3 2.5-3 2.5l-.875-1s-.75-2.125-1-.75 0 1.25-1 3.375-.5 2.625-1.625 2.75-2-.75-2.625.125.25.625-.875 1.5-1.5 1-2.25 1 .375-2.125-1.125.125-.625 2.5-1.875 2.75-1.5.25-2.625.25-1.75.125-2.875.125-2 .125-2.75.5-1.5 1.25-1.5 1.25v.75z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="iceland"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          markerStart: "none",
          markerMid: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#aD)",
        }}
        d="M474 212.5s2 1.875 2.5.875-.625-2.25.875-1.125 1.375.75 1.875 1.375 3.5-1.5 2.375.5-1.875 2.75-1.125 2.625-.125-.75.875.5.875 2.25 2.25 1.125l1.25-3.875s3.5.125 3.25 1.375-1.125 1.125.75.125.875-2.75 2.125-1.625 1.875 2.25 2.375 1.125-1.125-2.375.375-2.125 1.625 1.625 2.5 0-.125-2.5 1.25-2.25.75.625 1.75-.25.75-1.75 1.75-.875 1 1.25 1 1.25 2 .25 2.5.5-.25-1 .25 1 .625 2.625 1.25 2.375 1-1.125 1 .5-1.125 2.125.375 1.875 1.875-.375 2 .75.75 2 .75 2 .125.875 0 1.375-.375.75-.125 1.375.5 1.625 0 1.875-1.25.75-2.125.875-1.375.75-1.625 1.375.75.25-.375 1.625-.75 1.625-1.5 1.875-1.625.75-1.625.75l-3.375.5-.75-1.375s-.5-1.125-1-.625.125 1.5-.375 1.625-1.75-2.125-1.75-1.125.625 2.75.625 2.75.125 1.5-.5 1.75-.625 1-2.25 1.125-1.75.875-2.625 1-1.125 1.875-2.75.625-6.125-3.25-7-3-1.25.625-3 .125-2.5.625-2.875-.125-.5.375-.125-1.375 2-2.625 2-2.625.625-.375.5-1 0-.875-.75-1-.5-.5-.875-1.5-.75-.875-1.75-.625-1.25 1.375-2.375.125-1.625-1-1.125-1.75.375-1 1.625-1.25 1.375 1 1.875-.5 1-2.125 1-2.125-.5-.25-1.375-.125-.625 1.125-1.625-.875-2.125-2-2.125-2-.25 0 .375-1 1.25-1 1.875-2-.5-1.875.375-2.75 1.125-.25 1.125-.25l.25.5z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="great_britain"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          markerStart: "none",
          markerMid: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#aE)",
        }}
        d="M466.514 294.238s-.354.53-1.768.53c-1.414 0-1.591-.176-2.475.354-.884.53-1.944.707-2.828.884-.884.177-1.945 1.238-1.945 1.238s0 .707-1.237 1.06c-1.238.354-1.061.177-2.298.177-1.238 0-.884-1.06-1.061-1.768 0 0-4.152.412-2.902-.338s2.25-.25 1.375-.875-2.25-.75-.75-1 1.875 0 1.875-.5-1 .625 0-1 1.25-1.625 1.875-2.125.25-2 1.125-1.75 1.875.5 1.875.5l.5-1s-3.125-.125-3.375-.625c0 0-1.625-1.125-2.125-1.125s-1.625.125-1.25-.375 1.125-2 1.125-2-1.625-1.25-1-1.75.75-.375.75-1.25-1.125-1 .125-2.25 1.5-1 2.375-1.75.875-.875 1.5-.25.625 1.625 1.75.25 1.25-2.125 1.25-2.125-.5.125 1.375-.875.375-1.875 3.125-1.5 2.25.5 2.875.375 1-1.75 1.375-.375-.5 1.625 1.25 2.125 2.5.25 2 1.125-.625.75-.125 1.5.875 1.125.875 1.75-.375 1.125-1.25 1.5-.75-.125-1.875 1-1.75.875-1.75.875-.25-.625-1-.125-.375 1.25-1.5.5-2.5-.75-2.5-.75-.5 0-.375.75.75 3.25.75 3.25 1.125 2 .75 2.875-2.25 1.375-.625 1.5 1.5-.25 1.5.875 0 1.75 1 1.625 1.75 1 1.639.863zm12.197-10.96c-.53-.618-.265-.53-.442-1.149-.176-.618.089-.707.089-1.326 0-.618.088-.883.353-1.679.265-.795-1.414-1.503-1.414-2.121 0-.619-1.06-1.414-1.237-1.768-.177-.354-.707-.796-1.326-.707-.619.088-.619.442-1.326.795-.707.354-.707-.176-1.237-.618-.53-.442-.442-.973-.442-1.945 0-.972.088-.53.442-.972.353-.442.442-.354.972-.972.53-.62.265-.442.265-1.061s0-1.15-.265-1.856c-.265-.707-.972-.177-1.238-.884-.265-.707-.353-.53-.795-.796-.442-.265-.619-.088-1.591-.176-.972-.089-.265-.62-.354-.973-.088-.353-.088-.53-.265-1.502-.177-.973-.619-.265-1.149-.177-.53.088-.707.088-.884-.796-.177-.883 0-.53-.088-.972-.089-.442-.177-.442-.796-1.414-.618-.972.089-.442.796-.972.707-.53.619-.796 1.237-1.238.619-.442 0-.618-.176-1.326-.177-.707-.53-.883-.53-.883s-.62.176-1.68.176-.972-.176-1.503-.884c-.53-.707.089-.707.884-1.325.796-.62.53-.973 1.326-1.857.795-.883 1.237-.795 2.21-.972.972-.177.53-.707.972-1.768.442-1.06.619-1.237.884-1.856.265-.618.795-1.414.972-2.563.177-1.15 1.625.759 4.625-.241s3 0 3 0 1.5 2.5-1 3.5-1 5-1 5l.739.05s.884-.708 1.591-.796c.707-.088.619.354 1.503.354.883 0 .707-.53 1.767-1.238 1.061-.707.796.796.796 1.414 0 .619 1.414 2.387 1.414 2.387l-.353.619s-.62.353-.62 1.325c0 .973-.264.707-.441 1.15-.177.441-.53.441-.972.707-.442.265.088.441.265 1.325.177.884-.089.442-.53.53-.442.089-.884.089-1.238.708-.354.618-.088.707-.619 1.414-.53.707-.442.442-1.59.795-1.15.354-.62.354-.354 1.68.265 1.326 1.149-.442 2.74-.619 1.59-.177 1.237 0 2.298 0 1.06 0 .619.089 1.326.619.707.53.176.795.53 1.414.354.619.707.265 1.15.884.441.619 0 1.237 0 2.121v.796s1.06 3.182 2.474 3.977c1.414.796.884.796 1.503 1.326.618.53 1.767 3.447 2.12 3.89.354.441.354.795.531 2.386.177 1.59 0 1.237-.177 1.856-.176.619-.265.53-.53 1.502-.265.973 0 1.15 0 1.503 0 .354.53.619 2.298-.265s1.06-.619 2.21-.972c1.149-.354.884-.442 1.944-.177 1.061.265.884.442 1.857 1.414.972.972.353 1.149.618 1.856.265.707-.088.619-.353 1.326-.265.707-.265.619-.707 1.503-.442.883-.177.707-.53 1.237-.354.53-.62.265-1.68.53-1.06.266-.884.884-1.414 1.415-.53.53-.354.707-.442 1.149-.089.442.442 1.237.442 1.237s.795.354 1.237.796c.442.441.265.795-.265 1.679s-.707.442-1.768.884c-1.06.442-1.414 0-2.475-.089-1.06-.088-.972.354-2.475.884-1.502.53-1.414.089-2.563 0-1.149-.088-1.06-.088-2.21 0-1.149.089-1.06.442-2.386 1.238-1.326.795-.795 0-1.237-.354-.442-.353-.707-.442-1.326-1.06-.619-.62-.619-.354-1.15-.177-.53.177-1.679 2.21-2.474 2.563-.796.354-.884.177-2.033.177-1.15 0-.796 0-1.326.088-.53.089-.884.972-1.59 1.768-.708.795-.531.265-1.857.442s-1.237-.089-1.414-.442c-.177-.354.177-.354.618-.972.442-.62 1.238-1.768 1.768-2.652.53-.884.796-.442 2.122-1.237 1.325-.796.265-.354.883-1.68.62-1.326.708-1.326 2.033-1.768 0 0 .572-1.17-.553-1.795s-1.625-.375-2.75-.875-2-.25-1.75-.938c1.125-1.312 1.375-1.937 1.75-2.562.375-.625.125-1.25.625-1.25s.75.25 1.375-.125.75-.625.75-1.375-.125-1 .125-1.75 1-1.375.375-1.875-.125-.375-.875-.625-1.25-.75-1.25-.75l.25-1 .188-1.75s.187.125 1.437.625 2 2.125 2 2.125c.266.472.651.46.336-.222z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="scandinavia"
        onClick={onClick}
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aF)",
        }}
        d="M579.125 237c-.625-.125-1.5-.5-1.875-1.25s-1.25-1.625-1.875-1.375-.375.375-1.625.375-1.875-1.75-2.875-1.125-.25 1-1.5 1.25-2.625.375-3.875.375-1-.25-2.375 0-2.375 1-2.875-.25-.625-.875-.625-2.125.75-2.125 1-3.25-.5-2.25.375-3.375 1.5-1.375 1.875-2 .75-1.375.875-2.25.125-.625.125-1.5-.375-1.625-.875-2-.375-.375-1.5-.5-.75-.875-1.875.375-2.125 1.375-2.25 2.375.5 1.375-.125 2.625-.75 1.125-1 1.625.25 1.25-.25 1.75-.875.5-1.75 1-1.5.125-1.625 1.625-.375 1.125 0 2.125.625 1.125.875 1.875.75 1.125.75 2.625.375 2 .375 2 .5 1.75.375 2.625-.5 2.375-.875 3.25-.75 1.375-1.375 2-.375.75-1.125 1.5-1.625 1-2.25 1.375-.75 1.625-.75 1.625v2.375s.625 1.625-.5 2.125-1.375.625-2.125 1.75 0 2-.875 2.75-.625.875-2.125.75-1.75-.125-2.25-.75-1.125-1.75-1.875-1.875-.625.125-1.125-.125-.125-.75-.875-.75-1.125.5-1.125 0v-1.375-4.625l-1.875-2.875.625-1.625-.75-1.25-.875-.5s-1.375.5-1.5 1-.125.875-.375 1.375-1.375 2-2.25 2.125-2 .25-2 .25-.375 1-1.125.625-.5-.25-1.375-1.25-1.125-2.125-1.125-2.625.25-.625-.375-1.125-.625-.5-1.25-1.125-1.5-1.125-1.375-2.25.375-2.25.625-3.375-.375-2.25-.375-2.25l-.475-.909c-.53-1.06 0-.883-.884-1.767-.884-.884-1.59-1.238-1.06-2.652.53-1.414-.354-2.298 1.06-2.652 1.415-.353 1.238 1.591 1.591-.883.354-2.475-.707-1.768.707-3.36 1.415-1.59 1.591-1.944 1.591-1.944s.884 0 1.238 1.238c.353 1.237.353 2.298 1.06 1.414.708-.884.884-1.945 1.415-2.652.53-.707 1.414-1.59 1.414-1.59s-1.591-2.652.354-2.476c1.944.177 1.944.53 2.474-.176.53-.708.354-.708 1.591-1.061 1.238-.354 1.415-.177 1.591-1.238.177-1.06.707-1.06 1.415-1.767.707-.707.707-1.06.883-2.475.177-1.414-.176-1.238 1.415-3.359 1.59-2.121 1.59-1.944 2.121-3.359.53-1.414.53-1.237 1.06-2.121.531-.884 1.238-.53 1.768-1.237.53-.708.708-1.591.708-1.591l.883-1.591s-1.767-.708-.176-1.415c1.59-.707 1.767-.883 3.005-1.237 1.237-.354 2.121-.354 2.121-.354s1.15 1.68 1.326.442c.177-1.237-.53-1.414.53-2.21 1.061-.795 1.68-.706 2.033-.441.354.265.177.53.973.353.795-.177 1.679.884 1.944-.353.265-1.238-1.149-2.21.53-2.917 1.68-.707 2.564-.089 3.094-.619.53-.53-.265-.795.796-1.326 1.06-.53 1.414-.265 2.474-.618 1.061-.354 1.15-1.503 1.68-1.591.53-.089 1.237 0 1.768.53.53.53-.973.972 1.149.619 2.12-.354 4.95-1.68 5.745-1.061.795.619.088 1.68 1.149 1.68 1.06 0 2.121-.443 2.652-.089.53.354.441.619 1.237.972 0 0 .925 3.968.3 4.468s.75 3.625 0 4.125-1.125 6.25-1.125 8.875 1.375 6.75 1 8.875.625 5.125.625 5.125.625.625.625 2.25.875 2.5.875 2.5.438.125.5.688c.063.562.063 1.437-.188 1.687-.25.25-.812.688-.812 1.625 0 .938.25 1.313-.063 1.75-.312.438-.562.563-.687 1.625-.125 1.063-.313 2.5-.063 3.063.25.562.688 2.687-.187 2.437z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="japan"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          markerStart: "none",
          markerMid: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#aG)",
        }}
        d="M829.436 335.25c0-1.237.53-4.419-.177-4.596-.707-.176-.707-.707-1.944-.53-1.238.177-2.652-.53-2.652-.53s-.353-1.238 1.768-2.475c2.121-1.238 3.359-1.945 3.359-1.945l-1.06-.707s-2.299-.177-1.238-.884c1.06-.707 1.237-1.59 2.121-2.651.884-1.06 3.005-6.541 4.243-8.662 1.237-2.122 4.066-1.415 4.066-1.415l1.944-4.95s-1.59-3.712 1.06-4.949c2.652-1.237 2.83.177 3.536-2.828.707-3.006 2.829-2.475 3.182-3.536.354-1.06.707-1.06.177-2.828-.53-1.768-1.945-3.36-1.945-3.36s-.707-2.65-.707-4.065c0-1.414-.353-3.712.884-4.243 1.238-.53-1.06-3.358-1.06-3.358s.707-1.061-.177-1.768c-.884-.707-1.414-1.591-1.414-2.475 0-.884.176-3.182.176-3.182s.884-1.414 1.591-1.591c.707-.177 1.415.177 1.415-1.591s-.884-4.42-.884-4.42-3.713-5.48-4.42-5.833c-.707-.354-.707-.707-.176-1.768.53-1.06 4.065 4.243 6.54 4.596 2.475.354 4.773 0 4.773 0l2.298-1.06 4.597.176s1.944.177 2.298 2.122c.353 1.944 2.828 1.237 1.59 3.005-1.237 1.768-1.06 2.652-2.297 2.475-1.238-.177-1.061-1.06-1.945-.884-.884.177-1.591 0-1.591 1.945 0 1.944 1.414 2.12.177 3.712-1.238 1.59-.707 2.298-2.475 2.298-1.768 0-3.359-.177-5.127.177-1.767.353-2.651-.884-2.651.707 0 1.59 0 1.944.884 2.121.883.177 1.59 0 1.237 1.06-.354 1.061-1.414 1.769-.707 2.122.707.354 1.59-.53 1.59.354l3.006.176.53 1.768s.354 0 1.415.177c1.06.177 1.767-.707 2.121.53.354 1.238.884 1.768.884 1.768s.53 0 .707 1.238c.177 1.237.354 1.59.354 2.474 0 .884-.884 3.713-.884 3.713s-.707.707-.53 2.121c.176 1.414.883 0 1.06 1.768.177 1.768.177 2.298.177 3.535 0 1.238-.177 1.061.884 1.945 1.06.884 1.414 1.768 1.414 1.768s.884.53.884 1.767v2.298s-.53.177-1.238.177c-.707 0-1.59-.177-1.59-.177s-.177.53-.531 1.768c-.354 1.238-1.945 1.945-1.945 1.945s0 1.768-.707 1.944c-.707.177-1.237.177-1.944.354-.707.177-1.238 0-1.591.884-.354.884 0 1.06-.884 1.237-.884.177-1.768-1.414-1.945.884-.176 2.298 1.238 3.182-.53 3.712-1.768.53-2.828.884-2.828.884s.353 1.415-.884 1.061c-1.238-.354-2.652-1.591-2.652-2.475 0-.884-.177-1.414-.177-1.414l-2.475 1.59s.354.885-1.414.885c-1.768 0-2.475-1.945-2.121 0 .353 1.944 1.06 3.358 1.237 4.066.177.707 1.238.176 1.061 1.237-.177 1.06.177 1.06-.53 1.768-.707.707-2.122.884-2.829.884-.707 0-.884-.177-2.298 0-1.414.176-2.127 6.829-2.127 6.829l-1.25 1.125h-.689z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="yakursk"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aH)",
        }}
        d="M810.125 170.375c-.5-1.125.75-1.25-1.125-2.25s-2.625-.75-3.75-1.125-.875-.625-.375-2 2.125-1.5-.125-2-2.125-1.375-3.75-1.375-1.25 0-2.125.375-1 .375-1.375.875.375 1.125-.5.875-.375.125-1.25-.875-.625-1.375-1.75-1.25-.25-.125-1.875.25-2.125.375-3.25.5-3 1.625-3 1.625.125.25-1.25.375-.5-.625-2.375.75-1 1.5-2.5 1.375-.75-1-2.375-.25-1.75.375-1.75 1.375-1 1.625-1 1.625 0-.375-.375-1.625-.875-.75-.75-2-5.25-2-6-3.75-.625-1.5-.875-3.125-3.25-2.375-3.75-2.25-1.875 1.625-2.5 2.375-.875 1.375-1.875 2.125c-.863.85-1.67 1.374-2.438 1.938l.313 2.562c0 .5-.125 2 1 3.125s1.5.625 2 1.125-.125 3.75-.25 4.5-.625.75-1.125 1.625-.125 1.375-.5 2.875-.875.875-1.25 2.375 0 1.375.5 2.375.5 1.875.5 3.375-.25.625-.875.75-1.25.625-2.5.75-2.625.625-3.25-.125-1.25-.875-3.5-.625-.625 1-.875 2-1 .875-2.5 1.125-1 .375-1.125 2 1.75 2.625 2.75 3 1.25.625 1.625 1.25 1.5.375 3 1.75.25 1.625-.75 2.625.625 4.5 1.375 5 1.125 1.25 1.5 4.25 1.5 3.25 1.5 3.25.875.5 1 3.625.875 5.75.875 5.75 4.875-1.5 6.125-2.25 1.125-.875 1.5-2.625.5-4.625 1.875-4.875 1.125 1.75 1.125 1.75c.125.75 1.5.5 3 .75 1.058.176.624-.767.407-1.689-.09-.385-.143-.766-.032-1.061.375-1 12.295.113 12.295.113.442-1.06 1.237-1.768 2.563-3.005 1.326-1.238.265-3.447.354-3.89.088-.441 1.768-1.855 2.563-4.86.796-3.006 1.768-.796 1.768-.796s2.033-1.768 2.74-3.005c.707-1.238 4.596-1.06 5.038-.884.442.177.177 1.944.795 3.182.62 1.237.266.53 1.326.442 1.06-.089 1.768-.442 2.74-.442.973 0 .53 1.414.973 1.59.442.178 2.033 0 2.474-.088.442-.088 1.415-.795 2.033-1.325.62-.53.177-2.298.266-3.094.088-.795.972-1.06 1.237-1.68.265-.618 0-2.297-.088-3.093-.089-.795-.707-1.768-1.326-1.944-.619-.177-3.094-.354-4.066-.442-.972-.089-.972-4.773-.53-7.779.442-3.005.176-2.298.618-2.828.442-.53 1.945-.796 2.475-.796s1.238-1.149 1.326-2.032c.088-.884.796-.708 1.149-1.591.354-.884 1.503-.442 2.74-.62 1.238-.176.442-1.502.442-2.916l-1.28-1.092z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="kamchatka"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aI)",
        }}
        d="M818.375 289.5c1-.75.75.125 1.625-1.75s.625-2.5 1.25-3.125 2-2.875 1.875-4.5-.625-1.5-.25-3 .5-1.5.75-3.5-.25-1.75.375-4.125.75-2.875.375-3.75-.625-1.875-.625-3.375.125-2.75 0-3.25-.25-1-.625-2.375-1.375-2.375-1.375-2.375-.25 1-.75-.625-.375-1.125-.625-2.125-1 .5-.625-2.875.25-4.5.25-4.5-.125-3.375-2.375-3.375-3 .625-3.25-1.25-1.25-2.25-2.75-2.5-1.75 0-2.5-.375-.375-.625-1.625-.625-.5.5-2.25 0-1.75.75-2-.5-.125-2.125 1.625-4.875 1.625-3.375 1.875-4.75-1.25-.75 1-2.75 1.625-2.625 4.25-2.625 3 0 4.875-.875.375-1.875 2.625-.875 2 2 3.25.875 1.625-1.875 2.25-1.875 3 1.375 3 1.375 1 .5 1.875.25 1.625 1.625 2.5-.125.5-2.25-.375-2.75-1.875 1.75-1.375-1.25 1-4.125.625-5.125-3-4.5.125-2.375 2.375 2.5 3.5 3.125.625.625 1 3 4.125 1.875 3.625 4.875-.5 3.875-.75 5.125-1.625.375-1.25 5.5.75 14.25 5.25 18.25 5.625 4.5 6.25 2.75 1.25-2.5.875-4.5-1.375-2.75-.625-4.125 1.375-2.25 1.5-3.375.375-2 .25-3.25 0-2.75-.25-3.75-.5-2.625-.625-3.625-1.125-2.75-1.5-3.625-1.5-2.625-1.75-3.875-.75-1.75.5-3.5-1.125-2.75 1.75-2.375 2.75.75 4.25.5 3 .625 3.5-1.125.125-1.5 1-2.75 1.25-1 2.25-2.5-.5-2 2-4 4-2.75 4.625-3.5 1.875-1.125.875-2.125-1.125-1.875-2.5-2.75-2.125-1.5-2.75-1.625-1.5-.375-.875-.875 1.625-1.375 2.625-1.375 1 1 2.5.25 2.125-1.25 3.125-.5.375.125 1.125 1.625-.75 1 1.25 2.125 3.875 1.375 4.5 1.375.25.75 1.75-.125 1.25-.5 2.25-1.875 1.625-1.625 1.25-3.375-1-2.875-1-3.375l-1.125-1.875s0-.875-1.75-.875-2.75.125-2.75-.5.5-1.75-.625-1.75-1.75-1-2.5-.125-1.25 1.875-2.125 1.375-1.875-1.75-1.875-1.75.25-1.25-.125-1.75-1.5-1.625-1.5-1.625l-1.625-.75s-3.375-3.375-4.625-3.5-2.375.125-2.75-.875 1.75-1-1.375-1.5-3.25 0-4.25-1.375.375-1.75-2.125-1.875-3.625.25-5.75-.625-2.125-1.75-3.125-.75-.5 1.125-1.875 2.25-.625 2.125-2.75 2.125-1.75.25-3-.25-1-.875-2.5-1-1.125 0-2.625.125-.25 1-2.625-.125-2.375-1.375-4.125-2.25-2.25-1.125-3.125-1.125-4.5-.375-5.5.5c0 0-1.345 1.428-1.345 2.842 0 1.414.796 2.74-.442 2.917-.582.083-1.144.03-1.613.041-.53.013-.94.11-1.127.578-.353.883-1.06.707-1.149 1.59-.088.884-.795 2.034-1.326 2.034-.53 0-2.033.265-2.475.795-.442.53-.176-.177-.618 2.828-.442 3.006-.442 7.69.53 7.779.972.088 3.447.265 4.066.442.619.176 1.237 1.149 1.326 1.944.088.796.353 2.475.088 3.094-.265.618-1.15.884-1.237 1.68-.089.795.353 2.562-.266 3.093-.618.53-1.59 1.237-2.033 1.325-.441.089-2.032.266-2.474.089-.442-.177 0-1.591-.973-1.591-.972 0-1.68.353-2.74.442-1.06.088-.707.795-1.326-.442-.618-1.238-.353-3.005-.795-3.182-.442-.177-4.331-.354-5.038.884-.707 1.237-2.74 3.005-2.74 3.005s-.972-2.21-1.768.795c-.795 3.006-2.475 4.42-2.563 4.862-.089.442.972 2.651-.354 3.889-1.326 1.237-2.121 1.944-2.563 3.005-.442 1.06-.354 2.475-.088 2.917.265.442 1.414 2.917 1.06 4.95-.353 2.033-.884 8.131-.619 9.28.266 1.15.354 3.978 1.15 4.773.795.796 1.149 1.415 1.502 2.122.354.707 3.978 1.856 4.596 3.359.62 1.502.266 1.856 1.326 2.474 1.06.62 2.033 1.945 2.121 3.182.089 1.238.089 3.094.973 2.829.884-.265 1.856-1.503 2.21-1.856.353-.354 1.679-.796 2.828-.354 1.149.442 1.414.442 2.563.265 1.15-.177 2.21.177 2.21.177s.884 1.326.972 2.033c.089.707-.442 1.237 1.15 1.149 1.59-.088 1.944-.177 2.12 1.591.177 1.768 1.15 2.74 1.15 2.74s.265 1.856.176 2.298c-.088.442-.707 1.503-.442 2.652.266 1.149.884 2.298.354 3.093-.53.796-1.414 2.564-1.414 3.27 0 .708-.177 2.564 0 3.183.177.618-.53.176-.265 2.121s.442 2.298.442 3.005c0 .707-3.89.53-2.122 2.652 1.768 2.121 2.121 4.684 4.066 4.596 1.945-.088 2.828 2.74 3.094 3.712.265.973 1.06 1.68 2.298 1.768 1.237.089 1.414 1.945 2.386 2.121.972.177.972.089.783.035z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="siberia"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aJ)",
        }}
        d="M683.875 193.625c.625 1.75 1.125.75 2.25 0s.25-.625.375-2.125-.375-1.25-1-2-.375-.125-2-.125-1.125.25-2.25.375-.75 0-2.625-.375S677.5 188 677.5 187.25s-.5-2.125-.5-2.125-1-.375-1.5-1.375 0-1.125.125-1.625.25-1.125.125-2.625-.5-.5-1-1.25 0-1.25 0-1.25l1-1 1.75.625 1.125.375 2.25.75s.125.25 2.125 2.5 1 .25 2.5.375 1.125-.625 1.125-.625-2-1-2-1.5.5-1.25.5-1.875-.125-2-.375-2.5-1-.875-1.5-1.375-1.25-1.875-1.25-1.875-.375-.75.5-3.25 1.125.875 1.125.875l.75.375 1.5 1.25s1.25-.25 2-.5 1.875 1.75 1.875 1.75 2.25.25 2.75.25 1.5-1.375 1.5-2.375-2-.125-2-.125l-3-.625s-3.875-1.125-4.625-2.125.125-1.5.125-1.5l2-2.5s1.375-1.375 2-1.375h3.25s.875-2.125 1-3.75 2.25-.5 2.25-.5 1.625-.5 2-1 2.5-2 5.875-4 3.375-1.125 4.875-1.25 2.875-.125 3.375-.375 2.125-1.375 2.625-1.625 3-1.5 3-.875.25 2 .5 2.5 1.625-.625 3.25-1.875 1.125-1 1.875-2.125 1.5-.375 2.625-.25.75 1.875.875 2.625 2 2.125 3.125 2.875 4.25-3.75 4.75-1.375 3.25 3.25 3.25 4-1.25 2.25-2.125 3-1.625 1.625-2.125 2.75 0 .75 0 1.75-.75.25-1.875 1-1.125 1-2 2-1.375.5-2.25.875-.625 1.5-.875 2.375.5.75.5.75 1.25-.875 1.875-1.25 3-1.625 3.625-2 2.25-1.75 3.625-3.25 3.25-.75 4.25-1 1.625.375 1.625.375 1.25.125 2.375-.5 4-1.25 4.625-1.25 2.25.25 3.125 1 2.375 1.75 3.25 2.375l1.438-.063.312 2.563c0 .5-.125 2 1 3.125s1.5.625 2 1.125-.125 3.75-.25 4.5-.625.75-1.125 1.625-.125 1.375-.5 2.875-.875.875-1.25 2.375 0 1.375.5 2.375.5 1.875.5 3.375-.25.625-.875.75-1.25.625-2.5.75-2.625.625-3.25-.125-1.25-.875-3.5-.625-.625 1-.875 2-1 .875-2.5 1.125-1 .375-1.125 2 1.75 2.625 2.75 3 1.25.625 1.625 1.25 1.5.375 3 1.75.25 1.625-.75 2.625.625 4.5 1.375 5 1.125 1.25 1.5 4.25 1.5 3.25 1.5 3.25.875.5 1 3.625.875 5.75.875 5.75-4.122 7.656-2.892 11.038c1.23 3.382 2.767 9.53.922 11.683-1.845 2.152-2.767 2.152-3.382.922-.615-1.23.308-1.537-1.845-1.845-2.152-.307-1.844.615-3.381.923-1.538.307-2.152 1.844-3.382.615-1.23-1.23 0-1.538-1.845-.923-1.844.615-.922 2.767-3.228 3.228-2.306.462-1.998-.307-2.92 1.23-.923 1.537-1.384 1.998-1.691 2.767-.308.769-.923.615-.308 1.998.615 1.384 2.152-.614 1.998 2.152-.153 2.767-.46 4.458-.46 4.458s-1.077-.768-1.077 1.076c0 1.845.769 1.691.461 3.228-.307 1.538-1.076.615-.614 2.46.46 1.845 1.69 1.845 1.69 1.845s.308-1.845.923-.308-.154 2.46.922 2.92c1.076.462 0 .308 1.691.923 0 0 .692 0 1 .922.307.923 1.152 2.383.307 3.536-.846 1.153-1.538 3.305-.615 5.38.922 2.075 2.536 2.306 2.382 3.536-.153 1.23-.384.922-.538 2.613-.153 1.69.154 2.767-.23 3.459-.385.691-.615 1.844-1.153 2.075-.538.23-1.384-.308-1.922-.615-.538-.308-.153-1.998-1.076-1.307-.922.692-1.076 1.614-1.844 1.153-.769-.461-.692-1.23-1.384-1.383-.692-.154-2.075.307-1.383-1 .692-1.306 1.537-1.537 1.614-2.382.077-.846.461-1.614 0-2.536-.461-.923-.769-1.922-1.537-2.076-.769-.153-.769-.615-1.691-1.46-.923-.845-1-1.921-1.691-1.69-.692.23-1.845 2.074-3.459 1.767-1.614-.308-2.229.384-2.767-.692-.538-1.076-.768-1.46-1.383-1.614-.615-.154-.923-.23-.769-.922.154-.692.23-.385.23-1.614 0-1.23.078-3.92-.845-5.227-.922-1.306-.922-1.383-.922-1.844 0-.462.461-.692-.307-1-.77-.307-1.922-2.382-2.153-3.15-.23-.77-1.383-.77-1.767-.77-.385 0-1.307-2.536-1.307-2.536s-3.92.077-3.843-.845c.077-.922.538-1.845.615-2.23.077-.383.692-2.766.077-3.611-.615-.846-1.691-1.615-2.306-1.691-.615-.077-1.69-.385-2.306.538-.615.922-1.153 1.537-1.46 1.383-.308-.154-.769-.077-.922-.922-.154-.846-.538-2.998.615-4.612 1.152-1.614.768.538 1.46-.23.692-.769 1.076-2.23 1.076-2.998 0-.768-.461-1.537.538-2.536.999-1 1.768-.692 2.229-1.614.461-.923 1.23-1.076.692-1.922-.538-.845-1.384-1.614-1.46-2.69-.078-1.076.307-.999-.385-1.69-.692-.693-1.23-1-1.307-1.769-.077-.768 1.384-.46-.077-1.306-1.46-.846-1.921-.23-1.69-1.614.23-1.384 0-2.537.46-3.305.462-.769-.307-3.228-.614-3.613-.308-.384-1.076-.999-1.46-1.537-.385-.538-.308-1.844-.615-2.075-.308-.23-1.46-1.153-1.768-1.614-.308-.461-.308-.692-.615-1.46-.307-.769-1.537-1.307-1.845-1.691-.307-.385-2.69-1-2.843-1.384-.154-.384-.231-1.306-.077-2.075.153-.769.384-1.921.153-2.844-.23-.922-.307-1.844-.384-3.15-.077-1.308-.615-1.922-1.614-1.922-1 0-1.46.46-1.537 0-.077-.462-.615-2.076-.615-2.46 0-.384-1.383-3.997-1.69-4.227-.308-.23-.308-.308-1.154-1.076-.845-.769-1.46-1.384-2.075-1.46-.615-.077-1-.77-1.076-1.538-.077-.768-.307-2.69-.174-2.848z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="ural"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aK)",
        }}
        d="M665.794 265.915c1.06-.53.163-1.537.163-3.304 0-1.768-.53-1.945-.707-3.182-.177-1.238-.53-1.591-.707-2.475-.177-.884 1.59-1.768 2.298-3.182.707-1.414 0-1.945-.177-3.182-.177-1.238-1.768-1.238-1.768-1.238l-3.182-2.12-1.414-.708s-.177-1.414 0-3.005 1.06-2.122 1.768-3.359c.707-1.237.707-2.652.707-3.536 0-.883-1.768-1.237-1.768-1.237v-4.066-4.773c0-1.237-.707-3.535-1.237-4.42-.53-.883.53-2.474.53-2.474s-.884-1.945-1.06-2.828c-.177-.884 1.06-4.773 1.06-4.773l1.945-4.773 1.237-2.122s0-3.182.53-3.889c.53-.707.354-4.066.354-4.066s-.707-6.717-1.414-7.16l.673-2.293-1-.875-.375-2.5-2.5-.625.25-3.375s1.5-1.5 2.125-1.5-1.5-2.125-1.75-3 0-1.25.5-1.5.25-1 .125-2-.125-1.125-.125-1.125l.875-2.5 2.875 1s.625 1 1.25 1.125 1.25 0 1.75 0 .25.125 1 1.625.75 0 1.875.25 1.125 1.375 1 2.125-.75 1.375-1.375 2.5-.5.75-1.5 1.875 1.5 1.875 1.5 1.875.25 1.5.875 2.375.125.25 1.125.75 0 .875 0 2.25.75.25.75.25.5.625.875 1.875.125.5 1 2.375 1.25-.125 1.25-.125.75.625 1.25 1.625 2.375.625 2.375.625 1-1 1.75-1.625.5-.375 1.5-.75.049.147.674 1.897.423 3.058.5 3.826c.077.769.461 1.46 1.076 1.537.615.077 1.23.692 2.075 1.46.846.77.846.846 1.153 1.077.308.23 1.691 3.843 1.691 4.227 0 .384.538 1.998.615 2.46.077.46.538 0 1.537 0 1 0 1.537.614 1.614 1.921.077 1.307.154 2.229.384 3.151.231.923 0 2.075-.153 2.844-.154.769-.077 1.691.077 2.075.153.385 2.536 1 2.843 1.384.308.384 1.538.922 1.845 1.69.307.77.307 1 .615 1.461.307.461 1.46 1.383 1.768 1.614.307.23.23 1.537.614 2.075.385.538 1.153 1.153 1.46 1.537.308.385 1.077 2.844.616 3.613-.461.768-.23 1.921-.461 3.305-.231 1.383.23.768 1.69 1.614 1.46.845 0 .538.077 1.306.077.769.615 1.076 1.307 1.768s.307.615.384 1.691c.077 1.076.923 1.845 1.46 2.69.539.846-.23 1-.691 1.922-.461.922-1.23.615-2.23 1.614-.998.999-.537 1.768-.537 2.536 0 .769-.384 2.229-1.076 2.998-.692.768-.308-1.384-1.46.23-1.153 1.614-.77 3.766-.615 4.612.153.845.615.768.922.922.307.154.845-.461 1.46-1.383.615-.923 1.691-.615 2.306-.538.615.076 1.691.845 2.306 1.69.615.846 0 3.229-.077 3.613-.077.384-.538 1.307-.615 2.229-.077.922 3.843.845 3.843.845s.922 2.537 1.307 2.537c.384 0 1.537 0 1.767.768.231.769 1.384 2.844 2.153 3.151.768.308.307.538.307 1 0 .46 0 .538.922 1.844.923 1.307.846 3.997.846 5.227 0 1.23-.077.922-.23 1.614l-2.531.205s.652 4.239 0 4.565c-.652.326-3.804.76-3.804.76s-.109 3.262-.218 3.805c-.108.544-1.63 1.522-1.956 2.065-.326.544-.652.544-.326 1.196.326.652.543 1.522.434 1.957-.108.434.544 1.304-.652 1.521-1.195.218-1.739.652-2.391.109-.652-.544-.87-1.74-1.74-2.174-.869-.435-1.195-.435-1.303-1.304-.11-.87-.435-2.174-.435-2.174s-1.087-1.63-1.63-1.63c-.544 0-2.718.543-3.153.217-.435-.326-2.5-.109-3.26-.761-.762-.652-.87-1.196-1.849-.761-.978.435-2.717.543-2.717.543l-1.63-1.086s-.87-.327-1.74-.87c-.87-.544-.978-1.848-1.304-2.391-.326-.544-.978-1.413-1.413-1.74-.435-.326-.87-.978-1.413-1.521-.543-.544-1.196-.87-1.956-1.087-.761-.218-1.414-.326-1.63-.978-.218-.653 0-1.196-.436-1.305-.434-.108-1.521-.543-1.521-.543s-.11-1.522-.653-1.848c-.543-.326-1.63-1.196-2.282-1.522-.652-.326-1.413-.435-1.63-1.304-.218-.87-.544-1.196-.544-1.196s-1.304-.87-1.522-1.413c-.217-.543-.87-1.63-.87-1.63l-1.412-1.522-1.63-.544-2.033-.128z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="afghanistan"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aL)",
        }}
        d="m707.609 296.804-.109-.217c-.652-.544-.87-1.74-1.74-2.174-.869-.435-1.195-.435-1.303-1.304-.11-.87-.435-2.174-.435-2.174s-1.087-1.63-1.63-1.63c-.544 0-2.718.543-3.153.217-.435-.326-2.5-.109-3.26-.761-.762-.652-.87-1.196-1.849-.761-.978.435-2.717.543-2.717.543l-1.63-1.086s-.87-.327-1.74-.87c-.87-.544-.978-1.848-1.304-2.391-.326-.544-.978-1.413-1.413-1.74-.435-.326-.87-.978-1.413-1.521-.543-.544-1.196-.87-1.956-1.087-.761-.218-1.414-.326-1.63-.978-.218-.653 0-1.196-.436-1.305-.434-.108-1.521-.543-1.521-.543s-.11-1.522-.653-1.848c-.543-.326-1.63-1.196-2.282-1.522-.652-.326-1.413-.435-1.63-1.304-.218-.87-.544-1.196-.544-1.196s-1.304-.87-1.522-1.413c-.217-.543-.87-1.63-.87-1.63l-1.412-1.522-1.63-.544-2.033-.128-.547.477c-1.061.53-.527.461-1.411.815-.884.353-4.066.353-4.243 1.59-.177 1.238-.354 1.592-1.06 3.006-.708 1.414-.885 1.768-1.768 1.945-.884.176-1.238 0-2.122-.177-.884-.177-2.475-.884-2.475-.884l-1.414-.177-1.237-1.237s-.707.53-1.414.884c-.708.353-2.299 1.767-2.299 1.767s-2.474.707-3.182.707c-.707 0-.707-.176-1.414 0-.707.177-1.944 0-2.475.708-.53.707.707 1.414-1.944 1.59-2.652.177-2.652.177-3.359.177-.707 0-1.944 3.713-1.944 3.713s1.414 1.237.353 1.59c-1.06.354-1.768 1.415-2.298 2.122-.53.707-.884 1.237-.707 2.121.177.884 0 1.415.353 2.475.354 1.06 1.238 3.182 1.238 3.182s.707.354.53 1.414c-.177 1.061-.707 1.591-.177 2.475.53.884 1.591 1.238 1.591 1.238l1.061 1.414s1.414-.354 1.414.884c0 1.237.177 1.768.354 3.182 0 0 1.021 1.399 1.728.868.708-.53 1.945-1.414 1.945-2.474 0-1.061-.177-1.415.707-1.591.884-.177 1.414-.177 2.298-.53.884-.354.53-.354 1.591-.354 1.06 0 .884-.53 1.414.53.53 1.06-.176.354.177 1.945.354 1.59.53 1.414.707 2.474.177 1.061 0 .708-.353 2.122-.354 1.414-.354 1.59-1.238 1.944-.884.354-2.651 1.238-2.828 2.652-.177 1.414 0-.354.177 1.944.176 2.299.176 3.006.884 3.36.707.353.883.176.883 1.237 0 1.06-.53 1.414.707 1.59 1.238.177 2.122-.176 2.122-.176s2.298.353 1.768 1.768c-.53 1.414-1.591.53-.884 2.12.707 1.592.884.354 1.06 2.122.177 1.768-.53 2.298.354 2.298s2.475.707 2.475.707l.177 2.299.353 1.414s-2.298-.884-1.944.707c.353 1.59.707 1.59.707 1.59s2.298-.176 2.298 1.415-.354 2.121-.177 3.005c.177.884 1.06.177.884 1.415 0 0-.147 1.944.777 2.487.924.544 1.848.598 2.283.435.435-.163 1.25-1.576 2.12-1.522.87.055 1.413-.38 2.01.163.598.544 1.196.435 1.74.544.543.109.923.272 1.684 1.033.761.76 1.087 1.25 1.25 1.521.163.272.163 1.033.544 1.576.38.544 1.25.707 1.522.761.271.055 1.902-.163 2.39.218.49.38 1.686 2.01 1.794 2.445.109.435 1.305.87 1.305.87s2.717-.326 3.152-1.522c.435-1.196 2.717-2.717 2.717-3.478 0-.761 0-1.957.544-2.065.543-.11 2.826-.87 3.587-.761.76.108 2.282.435 2.717-.544.435-.978.326-3.804 1.848-3.913 1.522-.108 2.391-.978 3.37 0 .978.978 3.695 2.5 3.695 2.5s3.696.544 4.891-.76c1.196-1.305 2.283-2.935 2.283-3.805 0-.87.326-1.196.326-2.174s-.87-3.696-.87-3.696-.76-1.195-1.412-1.413c-.653-.217-1.63-1.304-1.63-1.304s-.762-2.065-.762-2.935c0-.87.435-4.456.978-4.565.544-.109 2.066-1.087 2.935-1.087.87 0 2.283.109 2.718-.217.434-.326 1.195-4.457 1.63-5.544.435-1.087.652-1.956 1.413-1.848.761.11 2.174 0 2.065-1.847-.108-1.848-.326-5.435-1.087-6.63-.76-1.197-1.304-1.414-.87-2.5.436-1.088.98-1.414.98-1.414l-.218-1.522z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="middle_east"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aM)",
        }}
        d="M652.66 343.029c-.177 1.06.53 1.59-.884 1.944-1.415.354-2.475 1.415-2.475 1.415s1.59 1.59-1.768.883c-3.359-.707-2.828-1.237-4.243-1.59-1.414-.354-1.237.353-2.298-.354-1.06-.707-1.414-.354-1.767-1.414-.354-1.06-2.975-2.538-2.975-2.538s-.875 0-1 .875 1.75.875-.375 1.25c0 0-1.25.125-1.875.25s-1.25-.25-1.875.25-.625.875-1.5 1-.75 0-1.75.125-1.75 1-1.75 1 .25.5-1.375.375-2.25.25-2.25.25 0 1.5-1.375.5-2-1-2-1.5.625-1 1.125-1.5c0 0-.47-1.486-2.327-1.133-1.856.354-3.005.265-3.447.884-.442.619-.884 1.856-1.591 1.945-.707.088-2.74.265-3.27-.354-.53-.619-1.49-2.592-3.99-3.342s-4.625-1.375-5.5-.75-.125 1.375-1.875.875-3.5-1.25-4-1-2.125 0-2.125.625.75 1.625-.25 1.75-2.25.625-2.875.875-.25.5-2.5.5-4.5.375-5.375-.375-1.25-1.625-1.625-2.125-1.375-1-1.375-1h-1.25s-1.375.375-1.875 1-.5 1-1 1.375-.5.25-1.125 1-.125 1.125-.625 1.75-.875.125-1.125 1 0 .5.125 1.375.75.875 0 1.875c0 0 1.063 2.188 1.5 3.25.438 1.063 1.875 1.625.75 2s-2.5.438-2.25 1.438 2.625 3.375 3.313 4.562c.687 1.188.187 3.875 1.312 4.875s2.875 1.875 3.5 1.875 2.5-1.375 2.75-.125-.25 3.625.5 3.75 2.5 1 2.875.375-1.253-2.394-.016-2.924c1.238-.53 0-3.006 2.652-1.768 2.652 1.237 2.652 2.121 4.243 2.298 1.59.177 2.651-.354 3.712-.177 1.06.177 2.298 1.238 2.652 0 .353-1.237 1.237-1.944 2.121-1.944.884 0 2.828-.53 3.182.53.354 1.06-.53 2.298-.354 3.359.177 1.06 1.238 1.414.884 7.424-.353 6.01 1.061 9.016.177 9.546-.884.53-2.121 2.122-1.768 3.006.354.883 1.768 3.889 1.945 6.01.177 2.121.884 2.652 1.06 3.712.177 1.06-1.237 1.238.177 3.005 1.414 1.768 4.42 2.829 4.243 4.066-.177 1.238 1.944 1.768 2.828 3.006.884 1.237 2.298 4.772 2.652 6.363.354 1.591 1.591-.707 2.298 1.945.707 2.652 2.829 2.298 3.359 4.243.53 1.944 2.453 3.8 3.453 4.3s4.25 1.25 4 3 2.75 3.5 2.75 4.75-.25 3.75-.25 3.75-.5.5.5 1.5 1.75 1.75 2 3.25 1.25 1.25 1.25 1.25 9.75-1 13-2 7.25-2.75 7.25-3.75 0-.75 1.5-1.25 2.5-2.5 2.5-2.5l1.5-1.25s.25-2 1.5-1.75 2.75 1 2.75 0-.75.25 2.25-4.75 3.5-6.75 3.25-7.75-.25-1 .75-1.75 1.5-3.25 1.5-3.25l-.5-2.25 1-2.25s1.433-3.917.196-4.448c-1.237-.53-1.06-.884-1.06-2.298 0-1.414-1.592-2.298-1.592-2.298s0 .53-1.414 0-3.182-2.121-3.182-2.121-1.59.707-1.768-.354c-.176-1.06.354-2.651-.53-2.121-.884.53-1.944.353-2.475 1.06-.53.708.707 1.768-2.475 1.768s-3.889 1.061-4.596-.176c-.707-1.238-.707-1.238-1.06-2.652-.354-1.414.707-.707-.884-1.768-1.591-1.06-1.945-1.06-1.945-1.944 0-.884-.53-1.415-.53-1.415s-1.238.708-1.768-.707c-.53-1.414.707-2.298-.707-3.535-1.414-1.238-1.414-1.414-1.945-2.475-.53-1.06-1.06-1.768-1.06-1.768s-1.238-.707-.708-1.414.177-.884 1.768-1.06c1.591-.178 1.945-.531 2.652-1.061.707-.53.353-.884 1.59-1.061 1.238-.177 1.415-1.238 1.945.177.53 1.414.354 1.944.354 3.889 0 1.944-.177 3.359.354 4.42.53 1.06.883 1.59 1.06 2.297.177.707.354 1.238.354 1.238s.177.177 1.06.177c.884 0 1.061-.708 1.415.176.353.884 0 .53.53 1.238.53.707.354 1.06 1.237.707.884-.354 1.061-1.238 1.945-.884.884.354 1.591.53 1.591.53s1.237.177 1.237-.884c0-1.06-.176-1.59.354-2.298.53-.707.884-2.475 1.944-.176 1.061 2.298.53 2.651 1.061 3.535.53.884.884 1.591 1.945 1.238 1.06-.354 1.59-.354 2.298-1.061a6.104 6.104 0 0 1 1.414-1.06s-.177-1.769.884-2.122c1.06-.354 2.298-1.414 2.298-1.414l1.237-1.415 1.061-1.414h2.652s-1.107-4.112-1.26-5.649c-.154-1.537-2-1.69-1.384-2.92.615-1.23 1.23-2.768.307-3.69-.922-.922-2.46-1.844-2.46-3.074 0-1.23.462-1.23-.307-2.46-.768-1.23-1.23-2.613-1.23-3.382 0-.768.035-1.56-.46-2.766-.646-1.57-2.373-.027-1.999-2.767.894-6.559.864-8.243.845-8.224-.018.018.32-2.266.32-2.266s-1.196-.435-1.305-.87c-.108-.435-1.304-2.065-1.793-2.445-.49-.38-2.12-.163-2.391-.218-.272-.054-1.142-.217-1.522-.76-.38-.544-.38-1.305-.544-1.577-.163-.271-.489-.76-1.25-1.521-.76-.761-1.141-.924-1.684-1.033-.544-.109-1.142 0-1.74-.544-.597-.543-1.14-.108-2.01-.163-.87-.054-1.685 1.36-2.12 1.522-.435.163-1.359.109-2.283-.435-.38-.108-1.032-.163-1.032-.163l-.275 1.388z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="india"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aN)",
        }}
        d="M701.413 335.5c0 .87-1.087 2.5-2.283 3.804-1.195 1.305-4.89.761-4.89.761s-2.718-1.522-3.697-2.5c-.978-.978-1.847-.108-3.37 0-1.52.109-1.412 2.935-1.847 3.913-.435.979-1.956.652-2.717.544-.761-.109-3.044.652-3.587.76-.544.11-.544 1.305-.544 2.066 0 .76-2.282 2.282-2.717 3.478-.435 1.196-3.207 1.685-3.098 1.522.109-.163-.392 2.284-.374 2.266.019-.018.05 1.665-.845 8.224-.374 2.74 1.353 1.197 1.998 2.767.496 1.206.462 1.998.462 2.766 0 .769.46 2.153 1.23 3.382.768 1.23.307 1.23.307 2.46s1.537 2.152 2.46 3.074c.922.922.307 2.46-.308 3.69s1.23 1.383 1.383 2.92c.154 1.537 1.152 5.486 1.234 5.622.788.136 1.44-.857 2.148-1.033.707-.177 3.005-.884 3.359.353.353 1.238.177 3.182.53 3.89.354.706 2.652 1.59 2.652 1.59h1.414c.707 0 1.06-.884 1.237.354.177 1.237-.176 1.768.177 2.475.354.707 2.652.707 2.652.707s2.298 0 1.237 1.06c-1.06 1.061-1.767 1.238-2.121 1.945-.354.707-1.06.884-.177 1.237.884.354.707-.53 1.414.707.708 1.238.53.884 1.061 1.591.53.708-.353.884 1.238 1.061 1.59.177 2.12 0 2.12 0l.708-1.768s.884-1.237 1.59.177c.708 1.414.01 1.384-.167 3.152-.177 1.768-.354 3.514-.354 4.751 0 1.238-.75 1.945-.573 3.182.177 1.238.427 2.018.427 3.432 0 1.414 1.375.863 1.375 2.1 0 1.238-.177 1.591.53 2.298.707.707 1.475 2.247 1.475 2.954 0 .707.686.987.686 2.225 0 1.237-.052 2.37.655 2.724.707.354 1.863.552 1.863 1.966 0 1.415 1.155 2.932 1.155 2.932s.56 1.28.56 1.988c0 .707 1.208 1.121 1.208 1.828 0 .707 1.414 0 2.298 4.773.884 4.773 1.414 1.768 2.828 5.834 1.415 4.066 2.122 5.126 3.005 5.126.884 0 1.945-.353 2.122-1.237.177-.884 0-.884.884-1.237.884-.354.707-.177.884-1.238.176-1.06-.708-1.237-.354-1.944.354-.708-.53-2.122.884-2.122 1.414 0 2.475-1.237 2.475-1.237s-.53-.707-.53-1.591-.708 1.768 0-2.122c.707-3.889 1.06-4.596.883-6.894-.176-2.298-1.06-1.237 0-4.242 1.061-3.006 1.591-1.591 1.591-3.89 0-2.298 1.061-4.773 1.238-6.187.177-1.414.707-.353.707-1.944s-.884-2.475.177-3.536c1.06-1.06 2.475-1.414 2.475-2.651v-2.652c0-.884.353-2.652.353-2.652s2.298-.177 1.768-1.237-.354-2.298 0-3.182c.353-.884 1.398-4.585 2.898-3.585 1.5 1 2 1 2 1s1.375-1.375 1.25-2 .5-1.75.5-1.75.25-1.75.75-1.875 2.875-.25 2.875-.25-.404-3.83.518-3.907c.922-.077 1.383.077 1.614-.922.23-1 1-1.999 1.537-2.23.538-.23.692-2.612.692-2.612l1.768-.615s.46-3.92 1.153-4.612c.691-.692 1.69-2.536 1.69-2.536s-2.536-6.994-2.92-7.379c-.385-.384-9.761-.538-9.838-.23-.077.307-1.153 1.768-1.614 1.768-.461 0-1.691-1.307-1.691-1.307s.384-3.612.077-3.997c-.308-.384-2.921-1.383-3.228-1.23-.308.154-.923 2.153-1.384 2.153-.461 0-3.69-1.768-3.997-2.998-.307-1.23.615-1.23-.768-1.307-1.384-.076-.308 1.384-2.383.923-2.075-.461-2.306-.769-2.613-1.076-.307-.308-1.23-1.46-2.306-1.46s-3.228-1.154-3.382-1.538c-.153-.384-.538-.845-.845-1.23-.308-.384-.308-1.69-.769-2.075-.46-.384-2.075.923-2.46 1-.383.076-1.69-.462-1.46-1.23.231-.769.615-1.768 1.077-1.999.46-.23 1.383-.999 1.46-1.537.077-.538.384-.768.538-1.998.154-1.23-.538-4.074-.692-4.996-.154-.922-.154-3.766-.154-3.766s.077-1.076.077-1.384c0-.307.23-.999.23-.999s-1.383.384-1.69.461c-.308.077-3.382.077-3.69.077-.307 0-1.998-.922-2.075-1.23-.076-.307-.23-2.075-.384-2.382-.154-.308-.23-1.384-.538-1.076l-1.383 1.998.077.154c-1.922.999-2.998.615-3.081.449z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="siam"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aO)",
        }}
        d="M788.375 388c-1.875-.375.375-1.875-3.25-2.375S781.75 394.75 782 395.75s1.25 1.5 3.5 1.25 1.75 0 2.25 2.25-.25 4-.25 4 .75-.25 2-.75 3 .75 3.75 4.25 1 3.5 2.25 5.5 1 3 1.5 5.75-.5 6-.75 7.75-3.5 5.25-3.5 6.25-3.25 3.5-3.5 4.5-1.5-.75-1.5-.75-1.25-3.5-1.75-4.5-1.25-1.5-1.25-1.5l.25-2.25s-1.25-.75-2.25-.75-1-1-1-1L779.5 424s-.25-.25-1.5-.5-1 0-1.25 1-.75 1-2 2.25.5.75 1.75 2 .75.75.75 2.75 0 2.75 1.75 7.5 1.5 1.75 1.5 1.75.5.75.5 2-1 1.25-1 1.25-1.75.25-3.25 0-.5-.5-3-3.75-2.5-3.5-3.5-4.25.25-1.75 0-3 0-3-.75-4-.75-1.5-1.25-3.25 0-3.25.25-4.75-1.25-1.75-1.5-3.75-.5-1.75-.5-1.75-4.5-2.75-5.25-1.75-2-2-2-2-3.25 1-3.5-.5-6.75-8.25-7-10-.25-3.5-1.5-3.75-2.125-3-2.125-3l-.875-2.125c-.273-3.373.214-3.616.518-3.907.922-.077 1.383.077 1.614-.922.23-1 1-1.999 1.537-2.23.538-.23.692-2.612.692-2.612l1.768-.615s.46-3.92 1.153-4.612c.691-.692 1.69-2.536 1.69-2.536.692-.922 1.076-.384 1.076-.384l1.23-.923s.692-1.153 1-1.69c.307-.539.46-.616.999-.462.538.154.845 1.076 1.614 1.46.768.385 1.153.539 1.537.846.384.307.538 1.768.845 2.69.308.922.538.692 1.46 1.23.923.538.385.692.308.999-.077.307 1.383 2.306 2.152 2.229.769-.077 2.229 1.998 2.767 2.613.538.615 2.306.846 3.305.692 1-.154.692-1.46.692-1.922 0-.46.691-1.921 1.076-1.998.384-.077 2.306 0 3.151-.154.845-.153.461-.691.461-.691s1.076-.923 1.153-1.384c.077-.461.769-1 1.076-1.23.308-.23 1.076-.077 1.46 0 .385.077 1 1.23 1 1.23s1.46.154 1.844.154c.384 0 .692.768.692 1.537v1.46c0 .538.845.615.845.615s.538.077.692.538c.154.461.154.615.615.615.461 0 .461.846.461.846s1.537 1.383.922 1.69c-.614.308.72 2.453.72 2.453z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="china"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aP)",
        }}
        d="M802.125 324c-1 .5-.125.5-.125 1.125s.875.25.875 1.125.25.75.75 1 .125.75.125 2.125.125.625 1.125.875.5.375.75 1.875 1 .5 1.5.5.5.25.875 1 0 .5-1.25 1.25 1.25.875 2.625 1.25.875 2 .625 3.375.625 1.125 1.5 2.625.125 2.375-.875 4.75.5 1.625 1.625 1.75.875 3.375.125 5 .125 1.5.125 3.625-.375 2.5-.625 4.125-.375 1.375-1 2.375-.25 2-.25 3.625-1.625 1.625-2.75 1.875-.625.125-.5 1.25-.5 1.375-1.5 2.375-.5.25-1.125 1.875-.125.875-1.5 2.125-1.375 1.875-1.375 1.875 0 1.125-.25 2.375-1.125.25-1.625.125-1.375.625-1.75 1.375-1.875 1.125-3.125 2.375.125.25.5 1.125-.875 1.5-1.5 2S793 389.875 792 390.5s-1.794-2.08-3.404-2.522c.265-.066-1.555-2.123-.94-2.43.614-.308-.923-1.691-.923-1.691s0-.846-.461-.846-.461-.154-.615-.615c-.154-.46-.692-.538-.692-.538s-.845-.077-.845-.615v-1.46c0-.769-.308-1.537-.692-1.537-.384 0-1.844-.154-1.844-.154s-.615-1.153-1-1.23c-.384-.077-1.152-.23-1.46 0-.307.23-1 .769-1.076 1.23-.077.461-1.153 1.384-1.153 1.384s.384.538-.461.691c-.845.154-2.767.077-3.151.154-.385.077-1.076 1.537-1.076 1.998 0 .462.307 1.768-.692 1.922-1 .154-2.767-.077-3.305-.692-.538-.615-1.998-2.69-2.767-2.613-.769.077-2.229-1.922-2.152-2.229.077-.307.615-.461-.307-1-.923-.537-1.153-.307-1.46-1.229-.308-.922-.462-2.383-.846-2.69-.384-.307-.769-.461-1.537-.845-.769-.385-1.076-1.307-1.614-1.46-.538-.155-.692-.078-1 .46-.307.538-.999 1.691-.999 1.691l-1.23.923s-.384-.538-1.076.384c0 0-2.536-6.994-2.92-7.379-.385-.384-9.761-.538-9.838-.23-.077.307-1.153 1.768-1.614 1.768-.461 0-1.691-1.307-1.691-1.307s.384-3.612.077-3.997c-.308-.384-2.921-1.383-3.228-1.23-.308.154-.923 2.153-1.384 2.153-.461 0-3.69-1.768-3.997-2.998-.307-1.23.615-1.23-.768-1.307-1.384-.076-.308 1.384-2.383.923-2.075-.461-2.306-.769-2.613-1.076-.307-.308-1.23-1.46-2.306-1.46s-3.228-1.154-3.382-1.538c-.153-.384-.538-.845-.845-1.23-.308-.384-.308-1.69-.769-2.075-.46-.384-2.075.923-2.46 1-.383.076-1.69-.462-1.46-1.23.231-.769.615-1.768 1.077-1.999.46-.23 1.383-.999 1.46-1.537.077-.538.384-.768.538-1.998.154-1.23-.538-4.074-.692-4.996-.154-.922-.154-3.766-.154-3.766s.077-1.076.077-1.384c0-.307.23-.999.23-.999s-1.383.384-1.69.461c-.308.077-3.382.077-3.69.077-.307 0-1.998-.922-2.075-1.23-.076-.307-.23-2.075-.384-2.382-.154-.308-.23-1.384-.538-1.076l-1.383 1.998.077.154c-1.922.999-2.998.615-3.081.449 0-.87.326-1.196.326-2.174s-.87-3.696-.87-3.696-.76-1.195-1.412-1.413c-.653-.217-1.63-1.304-1.63-1.304s-.762-2.065-.762-2.935c0-.87.435-4.456.978-4.565.544-.109 2.066-1.087 2.935-1.087.87 0 2.283.109 2.718-.217.434-.326 1.195-4.457 1.63-5.544.435-1.087.652-1.956 1.413-1.848.761.11 2.174 0 2.065-1.847-.108-1.848-.326-5.435-1.087-6.63-.76-1.197-1.304-1.414-.87-2.5.436-1.088.98-1.414.98-1.414-.09-.177-.218-1.522-.273-1.63.598.434 1.142 0 2.337-.218 1.196-.217.544-1.087.652-1.521.11-.435-.108-1.305-.434-1.957-.326-.652 0-.652.326-1.196.326-.543 1.848-1.521 1.956-2.065.109-.543.218-3.804.218-3.804s3.152-.435 3.804-.761c.652-.326 0-4.565 0-4.565l2.53-.205c-.154.691.154.768.769.922.615.154.845.538 1.383 1.614s1.153.384 2.767.692c1.614.307 2.767-1.537 3.459-1.768.692-.23.768.846 1.69 1.691.923.845.923 1.307 1.692 1.46.768.154 1.076 1.153 1.537 2.076.461.922.077 1.69 0 2.536-.077.845-.923 1.076-1.614 2.383-.692 1.306.692.845 1.383.999.692.153.615.922 1.384 1.383.768.461.922-.461 1.844-1.153.923-.691.538 1 1.076 1.307.538.307 1.384.845 1.922.615 0 0 1.134 1.906 1.752 2.083.619.176 1.15 6.452 1.15 6.452s.972-.619 1.237.177c.265.795.618 2.121.618 2.121s1.326.796 1.326 1.238c0 .441-.088 1.502.265 1.679.354.177 1.768.795 1.768.795l.354 1.326s.177 1.15.707 1.238c.53.088.795-.089 1.502.265.708.353.884.442 1.503.442.619 0 .884-.089.884.442 0 .53-.088 1.414.265 1.502.354.089 1.238.177 1.238.177s.265.53.618.884c.354.354 1.414.442 1.591.795.177.354.265.973.354 1.326.088.354-.265 1.15 1.06 1.238 1.326.088 9.016-1.06 9.016-1.06l.53.883s.53.53 1.15.707c.618.177 1.767-.265 2.74.177.972.442 1.767.707 2.21.707h1.325s.265 1.237.707 1.326c.442.088 2.21-.619 2.21-.619s.353-.53.884-.442c.53.089.618-1.149 1.59-1.237.973-.089 1.503-.089 1.857-.089.353 0 2.475-1.06 2.563-.176.089.883.177 1.414.619 1.944s1.68.884 2.121.884c.442 0 1.414-.619 2.033-.972.619-.354.884-.707 1.68-.53.795.176 1.59.706 1.944.883.354.177.53.177 1.591.53 1.06.354 2.475.266 2.475.266s2.563.265 3.535.53c1.68 1.237 2.387 1.15 2.918.947z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="mongolia"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#at)",
        }}
        d="M737.082 273.64s.692 0 1 .922c.307.923 1.152 2.383.307 3.536-.846 1.153-1.538 3.305-.615 5.38.922 2.075 2.536 2.306 2.382 3.536-.153 1.23-.384.922-.538 2.613-.153 1.69.154 2.767-.237 3.478-.193.957-1.146 2.056-1.146 2.056s1.134 1.906 1.752 2.083c.619.176 1.15 6.452 1.15 6.452s.972-.619 1.237.177c.265.795.618 2.121.618 2.121s1.326.796 1.326 1.238c0 .441-.088 1.502.265 1.679.354.177 1.768.795 1.768.795l.354 1.326s.177 1.15.707 1.238c.53.088.795-.089 1.502.265.708.353.884.442 1.503.442.619 0 .884-.089.884.442 0 .53-.088 1.414.265 1.502.354.089 1.238.177 1.238.177s.265.53.618.884c.354.354 1.414.442 1.591.795.177.354.265.973.354 1.326.088.354-.265 1.15 1.06 1.238 1.326.088 9.016-1.06 9.016-1.06l.53.883s.53.53 1.15.707c.618.177 1.767-.265 2.74.177.972.442 1.767.707 2.21.707h1.325s.265 1.237.707 1.326c.442.088 2.21-.619 2.21-.619s.353-.53.884-.442c.53.089.618-1.149 1.59-1.237.973-.089 1.503-.089 1.857-.089.353 0 2.475-1.06 2.563-.176.089.883.177 1.414.619 1.944s1.68.884 2.121.884c.442 0 1.414-.619 2.033-.972.619-.354.884-.707 1.68-.53.795.176 1.59.706 1.944.883.354.177.53.177 1.591.53 1.06.354 2.475.266 2.475.266s2.563.265 3.463.597c.428.255 2.303.942 2.99.88 1-.5.875.5 2.25-1s.5-.25 1.875-2.25 3.625-2.25 1.125-2.5-2.125.5-3-.375-.125-1.125-1.625-1-1.5.375-1.875-.125.75-.875-1.125-.875-1.25.75-2.75-.125-1.625-.5-1.5-1.5.125-1.875 1.125-2.125.75 0 1.375-.5 1-.625 1-1.375 1.375-1.125 1.75-2.125.375-2.5 1.125-2.5.75-.125 1.375 1.625-.875 2.5.875 2.625 2.75.25 3.5.125.25.125 1.125 1.125.75 1.5 1.625 2.125 1 1.75 1 1.75 0 .625 1.125.375 2.875-.25 2.875-.25-.5-.625.125 1.5 1 1.625 1 3.5-.875 2.875 0 3.5a6.25 6.25 0 0 0 1.875.875s2.625-2.5 2.875-3.625 1-1.5.875-2.375-.375-.25.125-1.375.5-3.125.5-3.125-.5-.125-1-.375-.75-.125-1-1.5.25-1.375-.625-1.75-1.25-1-1.5-1.75-.125-1.25-.75-1.375-.5-.25-1.875-1.25-1.125-.5-2.125-1.125-1.25-1-1.25-1.875-.25-1.125.375-1.75 1 .75 1.125-1.5-.625-2.375.5-4.625.875-3.125 1.75-3.875c.563-.438.438 0 2.094-1.75.095.054.095.142-.877-.035-.972-.176-1.149-2.032-2.386-2.12-1.238-.09-2.033-.796-2.298-1.769-.266-.972-1.15-3.8-3.094-3.712-1.944.088-2.298-2.475-4.066-4.596-1.768-2.121 2.121-1.945 2.121-2.652 0-.707-.265-.088-.53-2.033 0 0-.902.917-2.027.604-1.125-.312-1.875-.687-2-1.562s-1.25-1.313-1.25-1.313-1.562-.062-1.625-.562c-.062-.5-.312-.875-.5-2.438-.187-1.562-.062-1.937-.687-1.937s-1.375.125-1.625-.125-.563-.438-.625-1.25c-.063-.813-.125-1.625-.5-1.75s-1-.438-1.375-.438-1.625.25-1.75-.25-.25-1.187-.125-1.687.313-.813.313-1.25c0-.438-.25-1.438-.25-1.438s-.438 0-.875-.375c-.438-.375-.438-.937-1.063-1.062s-1-.313-1.563.313c-.562.625-.937 1.187-1.25 1.312-.312.125-2.187.313-2.812.313s-1.563-.375-1.563-.375l-.437-.5s-.875-.313-.875.062.313.75 0 1.25-.125.5-.813 1.063c-.687.562-1.125.687-1.187 1.125-.063.437-.063.625.313 1.062.375.438.562.313.75.875.187.563.25.688.25 1.313s.062 1.5-.375 1.875c-.438.375-.563.312-.875 1.125-.313.812-.563.937-.75 1.312-.188.375-.438.563-.063 1.313s.75 1.25 1 1.562c.25.313.563.813.313 1.625-.25.813-.313 1.25-.813 1.75-.5.5-.938 1.563-1.313 2-.375.438-.25.938-.875.625-.625-.313-1.062-.875-1.125-1.125l-.312-1.25c-.188-.75-.438-1.688-.563-1.938-.125-.25-1.713-1.091-2.11-.296-.399.796-.266 1.547-.885 1.812-.618.265-.751.265-1.016.663s-1.017 1.503-1.591 1.37c-.575-.132-.707-.265-1.635-.397-.928-.133-1.68-.442-2.078.132-.397.575-1.414 1.414-2.12 1.15-.708-.266-1.636-.796-1.857-1.017-.221-.221-1.591-.84-2.298-.752-.707.089-.707.266-2.077.177-1.37-.088-2.696-.619-3.58-.619-.884 0-3.182-1.149-3.889-1.016-.707.133-.575.133-1.326.442-.751.31-1.282-.177-1.59.353-.31.53-.31 1.282-1.238 1.15-.928-.133-1.415-.133-1.768-.487-.354-.353-.619-.884-.619-.884s-.574-.22-.928-.132c-.353.088-1.281 0-1.281 0s-.796-.796-.973-.84c-.177-.044-.928-.486-1.237-.442-.31.044-1.635.265-1.635.265s-1.945.133-1.624.571z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="irkutsk"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aQ)",
        }}
        d="M807.428 271.611c.265 1.945-.089.972-.089.972s-.902.917-2.027.604c-1.125-.312-1.875-.687-2-1.562s-1.25-1.313-1.25-1.313-1.562-.062-1.625-.562c-.062-.5-.312-.875-.5-2.438-.187-1.562-.062-1.937-.687-1.937s-1.375.125-1.625-.125-.563-.438-.625-1.25c-.063-.813-.125-1.625-.5-1.75s-1-.438-1.375-.438-1.625.25-1.75-.25-.25-1.187-.125-1.687.313-.813.313-1.25c0-.438-.25-1.438-.25-1.438s-.438 0-.875-.375c-.438-.375-.438-.937-1.063-1.062s-1-.313-1.563.313c-.562.625-.937 1.187-1.25 1.312-.312.125-2.187.313-2.812.313s-1.563-.375-1.563-.375l-.437-.5s-.875-.313-.875.062.313.75 0 1.25-.125.5-.813 1.063c-.687.562-1.125.687-1.187 1.125-.063.437-.063.625.313 1.062.375.438.562.313.75.875.187.563.25.688.25 1.313s.062 1.5-.375 1.875c-.438.375-.563.312-.875 1.125-.313.812-.563.937-.75 1.312-.188.375-.438.563-.063 1.313s.75 1.25 1 1.562c.25.313.563.813.313 1.625-.25.813-.313 1.25-.813 1.75-.5.5-.938 1.563-1.313 2-.375.438-.25.938-.875.625-.625-.313-1.062-.875-1.125-1.125l-.312-1.25c-.188-.75-.438-1.688-.563-1.938-.125-.25-1.713-1.091-2.11-.296-.399.796-.266 1.547-.885 1.812-.618.265-.751.265-1.016.663s-1.017 1.503-1.591 1.37c-.575-.132-.707-.265-1.635-.397-.928-.133-1.68-.442-2.078.132-.397.575-1.414 1.414-2.12 1.15-.708-.266-1.636-.796-1.857-1.017-.221-.221-1.591-.84-2.298-.752-.707.089-.707.266-2.077.177-1.37-.088-2.696-.619-3.58-.619-.884 0-3.182-1.149-3.889-1.016-.707.133-.575.133-1.326.442-.751.31-1.282-.177-1.59.353-.31.53-.31 1.282-1.238 1.15-.928-.133-1.415-.133-1.768-.487-.354-.353-.619-.884-.619-.884s-.574-.22-.928-.132c-.353.088-1.281 0-1.281 0s-.796-.796-.973-.84c-.177-.044-.928-.486-1.237-.442-.31.044-1.635.265-1.635.265s-1.945.133-1.624.571c-1.691-.615-.615-.461-1.691-.922s-.307-1.384-.922-2.92c-.615-1.538-.923.307-.923.307s-1.23 0-1.69-1.845c-.462-1.845.307-.922.614-2.46.308-1.537-.46-1.383-.46-3.228 0-1.844 1.075-1.076 1.075-1.076s.308-1.69.461-4.458c.154-2.766-1.383-.768-1.998-2.152-.615-1.383 0-1.23.308-1.998.307-.769.768-1.23 1.69-2.767.923-1.537.615-.768 2.921-1.23 2.306-.46 1.384-2.613 3.228-3.228 1.845-.615.615-.307 1.845.923s1.844-.308 3.382-.615c1.537-.308 1.23-1.23 3.381-.923 2.153.308 1.23.615 1.845 1.845s1.537 1.23 3.382-.922c1.845-2.152.307-8.301-.922-11.683-1.23-3.382 2.892-11.038 2.892-11.038s4.875-1.5 6.125-2.25 1.125-.875 1.5-2.625.5-4.625 1.875-4.875 1.125 1.75 1.125 1.75c.125.75 1.5.5 3 .75 1.058.176.624-.767.407-1.689-.09-.385-.143-.766-.032-1.061.375-1 12.295.113 12.295.113-.442 1.06-.354 2.475-.088 2.917.265.442 1.414 2.917 1.06 4.95-.353 2.033-.884 8.131-.619 9.28.266 1.15.354 3.978 1.15 4.773.795.796 1.149 1.415 1.502 2.122.354.707 3.978 1.856 4.596 3.359.62 1.502.266 1.856 1.326 2.474 1.06.62 2.033 1.945 2.121 3.182.089 1.238.089 3.094.973 2.829.884-.265 1.856-1.503 2.21-1.856.353-.354 1.679-.796 2.828-.354 1.149.442 1.414.442 2.563.265 1.15-.177 2.21.177 2.21.177s.884 1.326.972 2.033c.089.707-.442 1.237 1.15 1.149 1.59-.088 1.944-.177 2.12 1.591.177 1.768 1.15 2.74 1.15 2.74s.265 1.856.176 2.298c-.088.442-.707 1.503-.442 2.652.266 1.149.884 2.298.354 3.093-.53.796-1.414 2.564-1.414 3.27 0 .708-.177 2.564 0 3.183.177.618-.53.176-.265 2.121z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="ukraine"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aR)",
        }}
        d="M580.446 188.26c-1.237-.088-2.121-.353-2.121-.353s.925 3.968.3 4.468.75 3.625 0 4.125-1.125 6.25-1.125 8.875 1.375 6.75 1 8.875.625 5.125.625 5.125.625.625.625 2.25.875 2.5.875 2.5.438.125.5.688c.063.562.063 1.437-.188 1.687-.25.25-.812.688-.812 1.625 0 .938.25 1.313-.063 1.75-.312.438-.562.563-.687 1.625-.125 1.063-.313 2.5-.063 3.063.25.562.688 2.687-.187 2.437s1 .375 1.5.75-1.125 1.125-2 1.375-1.625.25-2.875.125-.875-.375-1.875-.25-3.125.75-4.25.5-1.75-.125-2.5.375-.25 1.5-.25 2.625.75.375.875 1.625.375 1 .75 1.75 1 .125 1 .125 2.125 1.75 1.875 2.875.5 1.875.5 2.875-1.125.25-2.75.125-.625-.875-1.25-2.625-.5-.625-1.5-1-1 .25-1.25 1.375-.375 1.25-1.25 2-.125 1.375-.375 2.5-.625 1-1.375 1.875.25 1.375.625 2.625.875 1.75.875 1.75c.5.5.375 1 .375 1.75s-.5 1.125-1 1.5l1.25.125s1.063.938 1.125 1.25c.063.313 1.188 1.25 1.188 1.25s2.5 1.375 3.375 1.375 1.875-.563 2.375-.625c.5-.063-.063.875-.063 1.188 0 .312.688 3.25 1 3.875.313.625.375 8.062.438 9.437.062 1.375 1.375 2.75 1.75 3.063.375.312.625 1.062.625 1.375 0 .312-.813 1.375-.875 1.812-.063.438.125 1.188.062 1.75-.063.563-.5.813-1 1.25-.5.438-.375 1.438-.688 2.063-.312.625-.812.625-1.437.875s-2.313 3.625-2.5 4c-.188.375-1.938 1-2.5 1-.563 0-2.063.437-2.25.937-.188.5-.188 1.5-.188 1.5l2.313 2.188c.25-.063.5-.813.75-1.188s1.188-.438 1.188-.438 1.625-.062 2.312.375c.688.438.25.75.313 2.063.062 1.313.062 1.063.25 1.688.187.625.5.375 1.625.687 1.125.313.75.188 1.625.313s.687.75 1.125 1.687c.437.938.5 1.625.937 2.438.438.812.438 1.312.438 1.562s-.313 1.5-.375 2.188c-.063.687-.375.812-.5 1.125-.125.312-.063 1.187-.063 1.5 0 .312.438.75.813 1.187.375.438.375.813.375 1.5 0 .688-.563 1.75-.563 2.375s.938 1.063.813 1.625c-.125.563 2.187 2.25 2.187 2.25l1-.75s1-.125 1.75-.875.5-1.125.5-1.125.25-2.375.625-2.875.875-.25 2.5-.625 1 0 1.75 0 1.25.5 2 .75.625.75.875 1.75.5 1.625.625 2.5.125 1 .5 1.875.75.75 1.75 1.375.375.5 1.875 1.25.75-1.125 1.25-2 .75-.875 1.25-1.125.875-.5 1.5-1 .375-.5.75-1.375-.125-1.25-.375-1.75-.75.125-1.375.125-1.375-.75-2-1.5-.125-1-.125-1 .875-1 1.75-1.625.75-.5 1.5-.75 1.25-.25 1.875-.5 1.125-.375 2.375-.625.75 0 2.125 0 1.625-.25 1.625-.25.375-.5 1-.875.875-.125 1.25.375-.25 1.25-.25 1.25l-1.5 1.5c-.875.875-1 .375-2.625.625s-.5.25-.625 1.125-.75 1.625-.75 1.625l-.5 1.25.875.5s.375.75.625 1.75.75.375 1.375.625-.125 1-.125 1.75 1.125 1.375 1.75 2 .375.875 1 2 .5-.375 1-.625.75-.25 1.875-.375 1.25.125 1.25.125l-.625 1.5s.75.5 1.625 1.375.25 1.625 1.375 1.625.75.5 1.25.875 1 1 1.875 1.75.75.5 1.5.625.375.125.75 3 .75.25.75.25-.25.75-.625 1.25-.875.75-1.375 1.25-1.125 1-1.125 1.5.625.5 2 1.5 1.375-.5 1.375-.5.625-.375 2.25-.25 1.375-.375 1.375-.375.75-.875 1.75-1 .875 0 1.75-.125.875-.5 1.5-1 1.25-.125 1.875-.25 1.875-.25 1.875-.25c2.125-.375.25-.375.375-1.25s1-.875 1-.875.75.125 1.25-.375.75-.75.75-1.375-.625-1.625-.625-1.625-.875-.625-.875-1.375.125-1 .375-1.5 0-1.375 0-2.875 0-1.625.125-2.625.75-.5 1.5-1-.25-1.75-.25-1.75-.5 0-1.625-.375-1.625-.375-2.375-1.875-.375-1.125-.5-1.75-.75-.875-.5-2.375-.993-2.927-.993-2.927l-1.06-.354s-.708-.353-.885-1.06c-.176-.707.177-.884.354-1.945.177-1.06-.53-2.121-.53-2.121l-1.238 1.06s1.768-2.828 1.945-3.712c.177-.884 0-1.06.353-1.768.354-.707.707-.53 1.768-.883 1.06-.354 1.414-1.061 1.414-1.061s.53-1.414.354-2.828c-.177-1.415-.354-1.945-.354-3.182 0-1.238-1.414-.884-1.414-.884l-1.06-1.415s-1.061-.353-1.592-1.237c-.53-.884 0-1.414.177-2.475.177-1.06-.53-1.414-.53-1.414s-.884-2.121-1.238-3.182c-.353-1.06-.176-1.591-.353-2.475-.177-.884.177-1.414.707-2.121.53-.707 1.237-1.768 2.298-2.122 1.06-.353-.353-1.59-.353-1.59s1.237-3.713 1.944-3.713c.707 0 .707 0 3.359-.177 2.652-.176 1.414-.884 1.944-1.59.53-.708 1.768-.531 2.475-.708.707-.177.707 0 1.415 0 .707 0 3.181-.707 3.181-.707s1.591-1.414 2.299-1.768a10.837 10.837 0 0 0 1.414-.884l1.237 1.238 1.414.177s1.591.707 2.475.884c.884.176 1.238.353 2.122.176.884-.176 1.06-.53 1.767-1.944.708-1.414.884-1.768 1.061-3.005.177-1.238 3.359-1.238 4.243-1.591.884-.354 1.06-.707 2.121-1.238 1.06-.53 0-1.59 0-3.359 0-1.767-.53-1.944-.707-3.182-.177-1.237-.53-1.59-.707-2.474-.177-.884 1.59-1.768 2.298-3.182.707-1.415 0-1.945-.177-3.182-.177-1.238-1.768-1.238-1.768-1.238l-3.182-2.121-1.414-.707s-.177-1.414 0-3.005 1.06-2.122 1.768-3.36c.707-1.237.707-2.65.707-3.535 0-.884-1.768-1.237-1.768-1.237v-4.066-4.773c0-1.237-.707-3.536-1.237-4.42-.53-.883.53-2.474.53-2.474s-.884-1.945-1.06-2.829c-.177-.884 1.06-4.773 1.06-4.773l1.945-4.773 1.237-2.121s0-3.182.53-3.89c.53-.706.354-4.065.354-4.065s-.707-6.717-1.414-7.16c-.707-.441-.972-.972-1.68-1.856-.707-.883-2.032-.088-3.005-.088-.972 0-1.944-.088-3.005-.265-1.06-.177-1.326-.442-2.652-.707-1.325-.265-2.21.884-2.563 1.59-.353.708-.707.973-1.768 2.564-1.06 1.591-1.149.354-2.475.972-1.325.619-1.237-.884-2.21-1.237-.971-.354-2.209.353-3.27.353-1.06 0-.972-.265-2.298-1.149s-1.326-.53-3.182 1.238c-1.856 1.768-1.679 1.149-3.005.884-1.326-.265-1.944 1.237-1.944 1.237s-2.387 2.298-3.006 2.652c-.618.353-3.093 1.06-3.977 2.298-.884 1.237-.177.795-1.856 1.68-1.68.883-1.326.088-1.326-.973 0-1.06 0-.442.619-1.856.618-1.414 0-.619-.62-.884-.618-.265-1.06-.796-1.678-1.68-.62-.883-.62-1.237-1.326-1.944-.707-.707-2.122.796-3.359.619-1.237-.177-1.15 0-2.033.088-.884.089-.088.796.177 1.591.265.796.442.707 1.06 1.414.62.707-.088 1.945-.088 2.652 0 .707-.177.795.088 1.591.266.795.708.53 1.591 1.149.884.619.53.972.354 1.768-.177.795-.972-.089-1.945-.177-.972-.088-1.59 1.326-2.563 1.856-.972.53-1.414.354-2.386.442-.973.089-.796.619-2.387 2.121-1.59 1.503-1.68.62-2.828.62-1.15 0-.707-.62-2.033-1.503-1.326-.884-.619.088-1.591.441-.972.354.088 1.061.707 2.033.619.973.795 1.68.972 2.033.177.354 0 .442-1.414 1.945-1.414 1.502-1.06.088-2.121.088-1.06 0-.796.089-1.856.177-1.061.088-.708-.442-.708-1.149v-2.121c0-1.503-.53-1.15-.795-1.503s0-.795-.177-1.237c-.177-.442-.884-1.061-1.326-1.061-.442 0-1.679.088-1.944-.265a4.122 4.122 0 0 0-1.591-1.238c-.796-.353-1.68-1.237-2.033-1.59-.354-.354 0-.796.088-1.238.089-.442 1.68-1.06 3.005-.884 1.326.177 4.155.53 6.364.53h4.155c.884 0 3.005-.442 4.154-.707 1.149-.265 2.652-1.06 3.182-1.68.53-.618.177-.795.088-1.944-.088-1.149-.442-1.59-1.237-2.298-.796-.707-.707-1.149-4.066-3.358-3.359-2.21-3.182-.708-4.508-.62-1.326.09-1.149-.53-2.121-.795s-3.005-.176-4.685-.176c-1.679 0-1.767.265-3.093-.089-1.326-.353-.707-.795-1.856-.884-1.15-.088-1.415.177-2.387-.177-.972-.353-1.237-.883-1.944-1.149-.708-.265.265.177-.973.089z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="southern_europe"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aS)",
        }}
        d="M567 303.313c.25-.063.5-.813.75-1.188s1.188-.438 1.188-.438 1.625-.062 2.312.375c.688.438.25.75.313 2.063.062 1.313.062 1.063.25 1.688.187.625.5.375 1.625.687 1.125.313.75.188 1.625.313s.687.75 1.125 1.687c.437.938.5 1.625.937 2.438.438.812.438 1.312.438 1.562s-.313 1.5-.375 2.188c-.063.687-.375.812-.5 1.125-.125.312-.063 1.187-.063 1.5 0 .312.438.75.813 1.187.375.438.375.813.375 1.5 0 .688-.563 1.75-.563 2.375s.938 1.063.813 1.625c-.125.563 2.187 2.25 2.187 2.25s-1.125.75-.625 1.5 1.125 1.375.875 1.875-.125.5-.75 1-1 .375-1 1.5.875 1.375.25 2.375-.375.875-.875 1.625-.75 1.375-1 2.125.5.875-.375 1.625-1.125.375-1.375 1.25.125.875-.375 1.5-.5 1-1 1.375-.5.25-1.125 1-.125 1.125-.625 1.75-.875.125-1.125 1 0 .5.125 1.375.75.875 0 1.875-1.125 1.625-1.625 2-.5-.125-.875 1 .25 1.5-.5 1.75-1.125.25-1.875.375-1.125-.125-1.625 0-.75 0-1.125.625-.75.5-.25 1.25.375.75.875 1.25l1.375 1.375c.5.5.875.75 1 1.375a6.38 6.38 0 0 1 .125 1.125s.625 1.875.125 2.125-1 .25-1.125 1-.25.5 0 1.375 0 .875.5 1.375.625.5 1.375 1.25 1.625.875 1.125 1.5-1.125.75-1.875.5-1.125.375-1.625-.75-.75-1.375-.75-1.375-.75.125-.75.75 1.875.75-.5.75-2.125.75-2.75 0-.125-1-1-1.25-1 .5-1.375-.25-.5-.75-.5-1.875.625-1.125.25-2.625-.625-1.125-.875-2 0-.875 0-2-.375-1.625-.375-1.625-.375-.25-.625-1.5-.125-1.375-.375-2.5-.125-1.5-.75-1.5-.25.5-1.25-.25-.5-1-1.375-1.375-1 .375-1.25-.875-.25-.625-.25-2.125v-2.625c0-.625.5-.625-.25-1.625s-.625-1.25-1.5-1.375-.625.875-1.375-.375-.875-2-1.875-2.25-.875.375-1.375-.25-.25-.75-.875-1.375.125-.875-1.5-.875-1.625-.875-2.5-.5-1.125 1-1.125 1.625 0 .625.125 1.5-.125 1.375.5 1.5.625-.5.75.625-.125 2.25 1.375 1.625 2.375-1.5 2.5-.75-.125.875.125 1.875 0 1.875.875 2.5 1.25.625 1.625 1.125.25.375.75.625.5 1.375 1.125 2.25 1.375.125 1 1.25-.375 1.625-.875 2-1.625.75-2.375.125-1.375-1.125-1.375-1.125.625-1.25-.875-.875-1.5.5-2.125.5-1-1-.75.375 1.25 1.875 1.25 1.875 1.125 0 1 1.25.375.875-.25 2.125-.5 1-1 2.125 0 1.125-.625 2-.875 1.375-1.75 1.75-.875-.375-1.25 1-.25 1.375-.875 1.625-2 .25-2.5.625.375.875-1 .5-1-.375-1.625-.5-.875-.125-1.375-.75-.125-1.75-.625-1.375-.875 1.75-1.375.375-.375-1.5-.875-1.75-.75 1.25-.875-.375-.375-1.625.375-2.375 1-1 1.625-1 .75.125 1.5.25.625.75 1.25.875 2.5-1 2.75-.25-.25 3 .375 1 .25-2.375 1.125-3.125 1.75-1.5 2.125-2 .75-1.25-.125-2.125-1.125 0-1.125-1.625.25-2-.25-2.875 0-.625-1-1.125-1-.75-1.5-1.375-1.375-1.125-2.25-1.375-.25.375-1.125-1-1.125-1.75-1.875-1.625-.375 1.125-1.125.25-.5-1-1-1.375-.75 0-1.375-.5-.625-.5-.75-1.5.125-1.375-.5-1.875-1.875-.875-1.875-.875.25-.25-1.375 0-1.75.25-2.25.625c0 0 2.424-.851.833-2.266-1.59-1.414-2.298-3.182-1.59-3.358.706-.177 1.59-.884 1.767-1.591.177-.707.442-2.122.088-2.564-.353-.442-2.21-1.679-2.21-1.679s-1.06-.884-.883-1.237c.177-.354 1.06-1.326 1.06-1.326s1.061.177 1.061-1.326c0-1.503 0-2.298-.353-3.182-.354-.884-.442-1.591.176-2.21.62-.618 1.326-1.59 1.503-1.944.177-.354.177-.973 1.326-.796 1.149.177 1.414-.088 2.21-.442.795-.353 1.59-1.326 1.59-1.326s1.326-.176 1.326.266.884 3.005 1.768 2.651c.884-.353 2.563-.795 3.359-1.237.795-.442.707-.884 1.768-.796 1.06.089 1.237.265 2.386-.088 1.15-.354 1.768-.442 2.298-1.15.53-.706 2.387-2.297 2.387-3.181v-2.033s3.8-.53 4.684-.619c.884-.088 1.768-.088 2.298-.442.53-.353.53-1.06.973-1.149.442-.088 1.856.177 1.856.177s0 .265.442.354c.442.088 1.326 1.06 1.149 1.856-.177.795-.707 1.68-.884 2.033-.177.353-.619 1.502-.53 1.856.088.353 1.06 1.768 1.06 1.768v3.889h9.193s.707-1.503.618-2.21c-.088-.707-.883-1.768-.883-2.121 0-.354.176-3.182.176-3.182s.53-2.917 1.856-3.801c1.326-.884 2.122-1.237 2.21-1.68.089-.441.265-1.325.707-1.502.442-.177 1.15-.884 1.15-.884s-.266 0 .43-1.09z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="western_europe"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aT)",
        }}
        d="M521.403 317.396c-1.15-.177-1.15.442-1.326.796-.177.353-.884 1.326-1.503 1.944-.618.619-.53 1.326-.176 2.21.353.884.353 1.68.353 3.182 0 1.503-1.06 1.326-1.06 1.326s-.884.972-1.061 1.326c-.177.353.884 1.237.884 1.237s1.856 1.237 2.21 1.68c.353.441.088 1.856-.089 2.563-.177.707-1.06 1.414-1.768 1.59-.707.177 0 1.945 1.591 3.36 1.591 1.414.581 1.735.581 1.735s-.914.155-1.414.53c-.5.375-.125.375-.625 1s-.375.75-1.25 1-.125.75-1 .625-.75.25-1.25-.25-.125-1.125-1-1.125-1.25.125-.875-.625.875-.75-.125-.75-.875.25-2.125 0-1.75-.125-2.25-.125l-1.375 2.5s.125.5 0 1.125-.625 1.125-.625 1.125-.375.375-.375 1.125.25.875-.5 1.625-.75 1-1.25 1.25-.5.125-.875.625-.625.5-.875 1.125-.25.625.125 1.25a8.02 8.02 0 0 1 .625 1.375s.375.125.125 1.25-.375 1.875-.375 1.875 0 .5.125 1.5 1 2.125 1 2.125l.625.875s.375 1.5.5 2.25 1.25.5.125 1.5-2.75 1.625-3.875 3.5-.75 3.375-1.625 4.375-.125 1.125-1.25 1.125-2.125-1.25-2.75 0-1 2.375-1.875 2.5-1-1.375-1 .375-.375 2.875-.375 2.875-.25.875-1.125.75-1-.25-1.75-.375-.75.375-1.375-.375-.75-1.125-1-1.75-.25-.875-1.25-1-1 .25-1.5-.625-.75-1.125-1.5-1-.75.625-1.75-.375-1-1.75-1.5-1.625-1.125 1-1.125 1 .125.5-1.375.375-1.75-.375-2.875-.375-1.25.75-2.25.25-1.125-.625-1.125-1.25.125-1.5-.375-2 .125-1.125-.625-1.5-.375-.25-1.25-.25-.875.125-1.75-.375-1.25.25-.875-1.125.125-1.25.75-2.25.625-1 1-2.125.5-1.375 1.125-3 .875-1.125.875-2.375-.5-1.25.25-2.125.875-.875.75-1.875.25-.75-.25-1.5-1.75-1.875-2.25-2.375-.375.125-.625-1.375-.75-1.25-1-2.125-.25-.875-.25-2-.875-.75-.875-1.375-.375-1.125.5-1.625 1-.125 2.125-1.125 1.125-.75 1.375-1.625 1.125-1.375 1.125-1.375-.125.125.625.875.875.75 1 1.25-.375.625 1.125 1 1.125.5 2.625.5 1.875.125 2.5-.125 1.25-.625 1.25-.625.5-.375 1.375-.375 1-.125 1.75.125.125.375.875.25.875.125 1.5-.25 1 .25 1.375-.875 0-1.5 1-2.25 1.375-1 2.375-1-.625-1.625-1.25-1.75-1 .5-1-.125-.125-.75.25-1.75 1.125-1.625 1.125-1.625-.125-.5-.25-1.375 1.625-1.375.5-2.125-1.625-1.125-2.375-1.125-.625 1.25-1.25-.25-.125-1.75-.75-2.5-.875-.5-1.5-1.375.25-.75-1.125-1.75-2.25-1.25-2.875-1.25-.875.875-.75-.375.125-1.625 1-2.375 3.125-1.375 4-1.5-.5-.5 1.375-.125 1.25.375 2.125.5 2.5.625 2.5.625.25-1.875.75-2.5.625-.625 1-1.625.5-1.125 1.75-1.5 2.125.625 2.125.625-1.625 1.625-.375 1-.375-2.625 2.375-2.25 3.75 2 4.125.125 0-1.875.625-2.875.625-1 1.75-1.625.875-2.5 2.25-2.75.875 0 2.125-.25 1.125 0 1.875-.875c0 0 1.188.313 1.125.75-.063.438 1 3.188 1 3.188s1.313.812 2.188 2.062c.875 1.25 1.312 2.375 1.75 2.5.437.125.687.125.812.938.125.812.188.937.563 1.437.375.5.937.438 1.062 1.188s.313 1.562.625 1.937c.313.375 1.25 1.063 1.25 1.063s.813.75.903.583z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="northern_europe"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#aU)",
        }}
        d="m563 263.625 1.25.125c.847.794 1.452 1.717 2.313 2.5 0 0 2.5 1.375 3.375 1.375s1.875-.563 2.375-.625c.5-.063-.063.875-.063 1.188 0 .312.688 3.25 1 3.875.313.625.375 8.062.438 9.437.062 1.375 1.375 2.75 1.75 3.063.375.312.625 1.062.625 1.375 0 .312-.813 1.375-.875 1.812-.063.438.125 1.188.062 1.75-.063.563-.5.813-1 1.25-.5.438-.375 1.438-.688 2.063-.312.625-.812.625-1.437.875-1.685 2.299-2.098 4.337-5 5-.563 0-2.063.437-2.25.937-.188.5-.188 1.5-.188 1.5l2.313 2.188c-.696 1.09-.43 1.09-.43 1.09s-.708.707-1.15.884c-.442.177-.618 1.06-.707 1.503-.088.442-.884.795-2.21 1.679-1.325.884-1.856 3.8-1.856 3.8s-.176 2.83-.176 3.183c0 .353.795 1.414.883 2.121.089.707-.618 2.21-.618 2.21h-9.193v-3.89s-.972-1.414-1.06-1.767c-.089-.354.353-1.503.53-1.856.177-.354.707-1.238.884-2.033.177-.796-.707-1.768-1.15-1.856-.441-.089-.441-.354-.441-.354s-1.414-.265-1.856-.177c-.442.089-.442.796-.973 1.15-.53.353-1.414.353-2.298.441-.884.089-4.684.619-4.684.619v2.033c0 .884-1.856 2.475-2.387 3.182-.53.707-1.149.795-2.298 1.149-1.149.353-1.326.177-2.386.088-1.061-.088-.973.354-1.768.796-.796.442-2.475.884-3.359 1.237-.884.354-1.768-2.21-1.768-2.651 0-.442-1.325-.266-1.325-.266s-.796.973-1.591 1.326c-.796.354-1.061.619-2.21.442-1.15-.177-.903-.584-.903-.584s-.938-.687-1.25-1.062c-.313-.375-.5-1.188-.625-1.938s-.688-.687-1.063-1.187-.437-.625-.562-1.438c-.125-.812-.375-.812-.813-.937-.437-.125-.875-1.25-1.75-2.5s-2.187-2.063-2.187-2.063-1.063-2.75-1-3.187c.063-.438-1.125-.75-1.125-.75.75-.875 1.375-3.125 2-3.375s1 .375 1.375-1.625-.25-1.625.375-2.125 1.375.125 1.75-1.25.25-1.625.25-2.25-1.75-.625.625-1.125 2.5.25 3-.75.5-.75.75-1.75.75-.75 1.375-1.75.25-1 .625-1.875.375-4.125 1-4.375.625.5 1-.5 0-1.25.75-2.25.875-.875 1.625-1.375.875-.375 1.125-1-.875-.5.875-1.75 1.625-.75 1.875-1.375.5-1 .625-1.625 0-.625.125-1.5 0-.25.125-1.75.375-2.5.5-3.125.25-1-.375-.875-.75 1.125-.875 0-.375-1.5-.625-2.125-.625-1.75-.625-1.75-.5-.5 0-1.25 1.125-1.875 1.125-1.875.375-.375 1-.5.75.125 1.25-.5-.5-.75.75-.875 1.5-.125 1.5-.125l-.75 1.125-.125 1s1.375.75 1.625 2.25.5 1.625.375 2.375-.25 3.75-.25 3.75 0 1 .75 1.625 1.25.875 2 1 2.125.25 2.75 0 1.25-.375 1.875 0 1.375 0 1.875-.25 1.125-.5 1.75-.625 1.125-.125 2.375-.125 1.625.25 2.125-.25.375-.125 1-.625 1.875-1.125 2.5-1.125.625-.125 1.375-.25 1.75-.625 2.75-.25 1.375.5 2.25.625 1.25.375 1.75 0z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="egypt"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#aV)",
        }}
        d="M575.585 429.296c-.177-.884-3.89.177-4.773-.177-.884-.353-1.414-1.06-1.414-1.06s-.707-2.122-.884-3.183c-.177-1.06-2.652.177-3.536 0-.884-.176-.176-1.414-.53-2.651-.354-1.238-1.768-.707-2.652-.707-.884 0-2.298-.707-3.535-1.591-1.238-.884-1.591.353-3.005.53-1.415.177-1.415-.177-1.945-1.06-.53-.885-2.298.53-3.889.353-1.591-.177-1.237-.884-2.121-2.298-.884-1.414-1.768-.354-3.713-.884-1.944-.53-1.237-.707-1.414-2.121-.177-1.415-1.414-1.238-1.414-1.238s-.177-1.59-.354-2.828c-.176-1.238.177-3.182.177-3.89 0-.706-.353-3.358-1.59-3.888-1.238-.53-.354-1.768-.354-1.768s-.53-1.768-.354-2.652c.177-.884 1.414-1.944 2.298-1.944.884 0 1.414-1.061 1.414-1.061s-1.414-2.121-2.121-3.359c-.707-1.237 1.237-1.06 1.237-1.06l.884-1.061s.354-.53 1.945-1.414c1.59-.884.683-2.909.683-2.909s1.625.125 3.25.375 1.375 1 2.375 2 1.375 1.25 3.5 2 2.25 1.125 3.625 1.125 3.625-1.25 4.5-1.625 2.375-.5 8.375-.875 6 3.5 7.375 3 2.875 0 3.625.25 2.875 1 4.125 1 2.625.75 3.125 1 6.25 1.5 6.875 1.5l1.625-1.5 1.25.375s1 .5 1.5.5.75-.875.75-.875l2-1.25 2.25 4.375s-1 2.625-1 3.375-.125 2.625-.625 2.75-1.125-.125-1.875-.625-1.5-1.875-2.625-2.625 0 2.5 0 2.5c-.125.5 2.375 3.875 6.75 9.875s.5 3 1.375 4.5 1.75 2 2 4.25.125 1.125.5 2.25l-.25-.25c.125 1.625-27.25 0-28.875.5s-1.25 5.25-1.875 5-2.665 1.046-2.665 1.046z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="east_africa"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#aW)",
        }}
        d="M575.055 454.752s-.53-2.122-1.415-3.36c-.884-1.236-.353-2.65-.353-3.535 0-.883.353-1.414.884-2.12.53-.708.176-1.062.176-1.062l.884-1.767s.53-1.415.53-2.652-.706-.707-1.414-.884c-.707-.177-.176-.353.884-.884 1.061-.53.707-1.768.884-2.828.177-1.06-.353-5.48-.53-6.364 0 0 2.04-1.296 2.665-1.046s.25-4.5 1.875-5 29 1.125 28.875-.5l.25.25c.375 1.125 1.25 1 1.25 1s2 1.5 2.25 2.25.5.25.5.875.375 2.875.875 4.375.625.75 1.625 1.625.25.75.25 2.75 1 1.5 2 3.125.125.875.625 2.25.625 2 1.125 3 .75.75 1.375.75.75.375.75 1.875 2.375 2 3.375 3.5 1.125 1 1.75 2 0 .75-.625 2.875.125 2.25.75 3.25 4 .875 4 .875 3-.25 4.125-.875 1-.875 1.5-1.25 4 0 6.5-.625 5.75-3 7.25-.375-3.75 13-6 18-8.5 10-12.375 13.75-6.25 8.375-6.5 8.875-1.25 1.5-1.75 1.75-1 .625-2 1.875-1.625.75-3 1.75-1.125 2-1.125 2.75-.375 2.375-.75 2.875.5 3 .5 3.875-.25 2.875-.25 2.875 0 .375 1.375 1.125.5 5.25.5 5.25l.25.5s-1.625 1.625-2.75 1.625S614 524.5 614 524.5s-.625.125-1.875.5-2.25.25-3.375 1.75-.5 1.375.375 4.25-.375 1.125-.75 2.125 0 3.125 0 4.375-.875 1.75-1.5 2.25-2.625-1.5-3.375-2.75 0-3.25.5-4.75-1.125-3.625-1.5-4.875-.25-1.375.375-2.5.125-.875-.25-2.625-1.375-1.625-1.75-2.375-1.5-2.25-2.5-2.25-.5-1.625-.75-2.5-2-.5-2.625-.25-.75-.625-1.125-3.375-1.125-9.75-1-10.875 2.875 1 3.375.25.625-6.375.375-7.875 2.125-.875 3.625-1 1.75-2 2.375-3.25 1.25-1.125 1.875-1.375.5-1.5 1.25-2.5 1.75-2.75 1.75-4.125-1.875-2.75-4.125-2.875-1.75 1-4.875.25-3.75-.625-4.75-.875-.875-1.875-2-2.25-2.5 2.125-2.5 2.125-1.25-.375-2.5-3.375-3-3.875-3.5-4-.625-3.625-.625-4.25-2.25-1.375-2.75-2.125-.875-1.875-1.75-2.125-1.5-.25-1.875-2.375-1.195-4.123-1.195-4.123z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="congo"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#aX)",
        }}
        d="M595 514.875c-.625.25-.75-.625-1.125-3.375s-1.125-9.75-1-10.875 2.875 1 3.375.25.625-6.375.375-7.875 2.125-.875 3.625-1 1.75-2 2.375-3.25 1.25-1.125 1.875-1.375.5-1.5 1.25-2.5 1.75-2.75 1.75-4.125-1.875-2.75-4.125-2.875-1.75 1-4.875.25-3.75-.625-4.75-.875-.875-1.875-2-2.25-2.5 2.125-2.5 2.125-1.25-.375-2.5-3.375-3-3.875-3.5-4-.625-3.625-.625-4.25-2.25-1.375-2.75-2.125-.875-1.875-1.75-2.125-1.5-.25-1.875-2.375c0 0-.5-3.625-1.16-4-.035-.123-2.334 2.352-2.334 3.235 0 .884.53 1.945-1.767 3.006-2.298 1.06-3.713 1.767-5.127 2.298-1.414.53-1.944 1.59-2.828 2.121-.884.53-2.122.53-3.005 1.238-.884.707-1.591.707-2.122 1.767-.53 1.06-1.237-.707-1.414 1.768-.177 2.475.354 3.712.354 3.712s1.59-1.944 1.237 1.945c-.354 3.889-1.237 4.243-.707 5.657.53 1.414.884 1.768-.53 2.651-1.415.884-2.652 0-2.652 0s-.354-1.59-1.945-1.237c-1.59.354-1.767 1.06-3.358.707-1.591-.353-3.182-.353-3.182-.353s-1.945 1.59-2.652 1.237c-.707-.354-.707-.884-1.237-1.945l-.634-.182c-1.062-.375-1.187 2.125-1.187 2.125.375 1.125 1.375 1.625.875 2.125s-1.125 2-1.75 2.875-3.25 2.125-2.25 3.25 7.625 6.375 9 9.5l1.25 1.75c.625.875 2.875-1 3.625-.375s2.75 2 3.5 2.375 4.875-.25 5.875.5 1.75.375 1.75.375-.625 4.25 0 4.875 2.125 1.375 3 .125 7.375-2 7.75-1-.625 3 .625 4 2.125 1.75 2 2.75-1.375 2-.875 3.375 1.875 1.875 3.375 1.75 1.375 1 2.625 1.25 6.125.25 6.625.625 1.75 1.25 2.125 1.875 1.75 2.875 2.625 2 1.875-5.5.5-6-2.25-.5-2.25-2 .75-4.125 1.25-4.125 1.125-.625 1.125-.625 3.875 0 2.625-1z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="south_africa"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#aY)",
        }}
        d="M547.125 504.125c.625.875 2.875-1 3.625-.375s2.75 2 3.5 2.375 4.875-.25 5.875.5 1.75.375 1.75.375-.625 4.25 0 4.875 2.125 1.375 3 .125 7.375-2 7.75-1-.625 3 .625 4 2.125 1.75 2 2.75-1.375 2-.875 3.375 1.875 1.875 3.375 1.75 1.375 1 2.625 1.25 6.125.25 6.625.625 1.75 1.25 2.125 1.875 1.75 2.875 2.625 2 1.875-5.5.5-6-2.25-.5-2.25-2 .75-4.125 1.25-4.125 1.125-.625 1.125-.625 3.875 0 2.625-1c.625-.25 2.375-.625 2.625.25s-.25 2.5.75 2.5 2.125 1.5 2.5 2.25 1.375.625 1.75 2.375.875 1.5.25 2.625-.75 1.25-.375 2.5 2 3.375 1.5 4.875-1.25 3.5-.5 4.75 2.75 3.25 3.375 2.75 1.5-1 1.5-2.25-.375-3.375 0-4.375 1.625.75.75-2.125-1.5-2.75-.375-4.25 2.125-1.375 3.375-1.75 1.875-.5 1.875-.5 1.5-1.375 2.625-1.375 2.75-1.625 2.75-1.625l-.25-.5s2.875-.875 2.375.125.875 4.625.875 4.625.125.75.375 1.75.125 1.125.25 2.125-.375 1.5-.5 2.25.125 1.375.25 2.375-.625 3.25-.875 3.875-1 .625-1.5 1.125-.625 1.25-1.75 2.375-.875 1.125-1.625 2.25-.125.5-1.25 2.25-.625.5-1.75.875-1.75 1.625-2.25 1.75-1.875 1.375-2.625 6 .75 5.5.375 6.375-2.75 4.25-3.125 5.25-.75.875-1.875 1.375-.75 2.5-.75 3.25-.75 3.25-2.125 4.5-.125 1.125.25 1.625.375 1.125.125 2.75-1.625.75-2.375 1.25-3.125 3.25-2.875 4.25 1.25.875 1.25.875-1.625 1.75-3.125 3.625.125 1.125.5 2.375-.875.25-1.625.25-.875.375-1.625 1-1.25.5-4.75 1.25-1.375 1.25-3.125 2.5-1.625 1.625-6.5 1.625-3.25.5-4.125.875-1.5.375-2.5.375-1.75.5-2.375.875-1.125 1.375-1.125 1.375-.5-.25-1-1.125-1.625-.5-2.5-.625-1-.25-1.875-1.375.25-1.5.25-2.125-.75-2.625-.75-3.625v-2.75c0-1.25-.125-1.25-.125-2.625s0-1.5-.375-2.25-1.375-1.625-1.625-3 0-1.875 0-3-1.25-.5-1.5-1-.875-1-1.375-2.5.125-1.375.125-2.625v-2.375c0-1-.75-1.375-1-2s-1.75-3.25-1.875-4.125-.25-1.375-.25-2.5.125-1 .25-1.875-.625-1.375-.625-2-3.25-3.75-3.25-3.75-.375-.25-.5-1-.75-1.25-1.875-2.625-.625-1.375-.5-2.375-.125-2-.25-2.625-1.375-3.375-1.375-3.375-.125-1.25.125-2.25.625-1.25.75-2.75 0-1.125.125-2 .25-.875.625-1.625 1-1.375 1-2.5.75-2.125 1-2.625.75-1 1.5-2.125-.375-.75-.25-1.75-.125-1.75-.25-2.5-2-3.125-2.5-4.5 1.75-2.75 3.5-5.5h.063c2-2.938-4.188-7.688-4.188-8.875z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="brazil"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#aZ)",
        }}
        d="M404.375 403.625s-4.33 3.574-4.86 4.634c-.53 1.061-.884 3.36-2.121 3.536-1.237.177-8.662.53-8.662.53s.354 2.122-.707 2.122c-1.06 0-11.49-.354-11.49-.354l-1.415-4.243s-1.237.884-1.414-.883c-.177-1.768-.177-4.597-.177-4.597s-2.651 1.415-4.242 1.945c-1.591.53-3.006 3.182-4.42 2.652-1.414-.53-2.121-2.299-2.475-.884-.353 1.414.177 5.656-.884 6.01-1.06.354-1.414-.265-2.298.796-.884 1.06-3.27 1.325-3.977.707-.707-.62-1.238-1.326-2.033-1.591-.796-.265-1.238-.707-2.121-.796-.884-.088-1.061-.53-1.768.265-.707.796-2.21 2.122-2.475 2.829-.265.707-1.68 3.27-1.326 4.242.354.973 1.768.708 1.768 2.475 0 1.768-.53 2.652-1.503 2.917-.972.265-5.833 1.856-5.833 1.856s-4.067-.043-4.192.582.125 4.5-.875 5.25S331.125 434 331 435s-2.125 1.625-1.375 3 2.125 2.625 3.125 2.625 2.25.125 2.375 1.125 3.625 1.125 5 1.875 4.875-1.125 4.625 1-3.875 2.5-4.125 3.875-.375 4.375 2.375 4.25 5.25-2 7.125-2.375 3.75-.375 4.25-.875.875-1.75 1.875-1.875 3.375 1 4.125 2.25.875 2.375 2.375 2.5 1 1 2.125 1.5 2.125 0 3.125.625 1 2.75 2.625 2.75 3.875-1.125 4.5.125 1.25 3 2 3.75.25 1.75.5 2.5 1.75.875 2.875 1.75 1.25 1.375 1.625 3.125 1.25 1.75 2 3.25 2 4.75 1.75 5.875-1 2.5.5 3.375 2.125 1.375 3 2.75 1.5.875 2.125 1.375 1 2.375 1.375 5 3.25 3.625 3.375 5.375.25 3-.375 3.125-1.875 1.25-2 3-3.375 2.625-3.375 2.625-2.125 1.5-1.875 2.5 5 .25 5 .875-.75 5.125-.25 5.25 3.75-1 4.25-.375-.625 4.5-.375 4.875 3.125 2.5 3.813 1.938c1.312-.438.562-.563.812-1.313s.25-.625.875-1.5.25-.875.5-1.625.625-1.375 1.125-1.875.75-.625 1-1.375.125-1.125.25-2.375 1.625-1.375 3-1.875 1.25-2 1.375-3.25-.375-.375-.375-1.75-.125-1.875-.25-3.25.125-.5.75-1.125.625-3.375 2.125-6.5 12.5-4 13-4.125 3.375-1.125 3.75-1.625 1.625-1.625 2.625-2.125.375-1.375.625-2.5.5-.75 1.125-1 .5-1 1.125-1.875 0-1.75.375-2.5 1.5-1 2.375-1.375.375-1.625 1.125-2.375 0-3.375 0-5 0-1.75.75-2.75-.25-3-.25-3l.25-1.75s-.375-2-.125-3 1.25-1.5 2.75-2.5.5-3.25.5-3.25V449s2.25-1 4-1 1.75-2.5 3.25-4 .75-3 1-4.25c.25.5-.25-.75-.625-1.875s-.125-1.625-.375-3.375-1.25-2.5-2.25-3.5-2.375-.75-3.25-1-1.375-1.875-2.25-2.125-4.25-2.625-6.125-2.875-2-.125-2.875-1.125-1.375-.375-2-.375-1.625.5-2.375 0-1.125-.25-2.25-.25-2.125-.375-2.625-1.25-.5-1-1.25-1.375-1.625-.125-2.375-.5-1.625-.75-2.375-.875-1.625.125-2.375 0-2.5-.5-3.125-.5-2.5.375-3.375.375-2.375-1.5-3.625-2 1.125-.125 3-2.375-.75-3.625-1.25-4.5-.625-1.625-1.375-4.25-1-2.375-1-2.375z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="argentina"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#ba)",
        }}
        d="M396.25 495.5c.125 1.75.25 3-.375 3.125s-1.875 1.25-2 3-3.375 2.625-3.375 2.625-2.125 1.5-1.875 2.5 5 .25 5 .875-.75 5.125-.25 5.25 3.75-1 4.25-.375-.625 4.5-.375 4.875 3.125 2.5 3.781 1.906c-1.406.344-4.656 1.844-4.031 2.719.625.875 1.5 1.125 0 1.5s-1.25.25-2.75.5-1.25.125-2.875.5-1.875.875-2.875 1-1.5-.125-2.125-.125-1.125 0-1.125.625-.125.75.5 1.25 2.375 1 2.5 1.5.125.875.125 1.75.125 1 .625 1.125.625.25.75.75-1.25 2.25-2 2.75-1.375 1.125-3.125 1.25-1.375-.125-2.5.5-1.125.75-2.375.75-1.625 0-2.875.25-2.125.5-2.125.5.5.75.625 1.5.75.875.25 2-1.375 1.625-1.75 2.125-.375.25-.375 1.25l-2.625.375s-.875-.75-1.125.375 1 2.125 1 2.125-1.75 2.625-1.5 3.25.875 1.625.625 2.125-.125.75-.75 1.25-.125 1-.5 1.5-.75 1.25-1.625 1.625-1.125 1-1.125 1L365.25 560s-.5.625.125 1.375 1.25.25.875 1.625-.25 1.75-.25 1.75 1.25-1.375 1.125 2.375-.75 4.625-.75 4.625-.625-.125-.375 1 .75 2.125.125 2.75-.5-.375-1.5 1.625 0 4.75.625 5.375 1.125.75 1 2-.75 1.375-.25 2.25 2.125 1.5 2.375 2.375-.25 1.5.25 2.125a8.226 8.226 0 0 0 1.125 1.125s-.25 1-.25 2.125-.5 1-.5 2 0 2.25.5 1 .375-1.25.875-1.75 2.125-.5 2.625-.5 1-.75 1.875-.375 1 0 1.5 1.25.25 1.5 1.25 1.75 1.875.125 2.875.125 1.25-.75 1.5.375 1.75 1.5.25 2-1.75 0-3.25.5-1.5.5-2 .625-.5.5-1.375.875-.375.75-2 .375-1 .125-2.125-.625-1.625-1.125-1.625-1.625-.75-1-.75-1l-2.875-2.5h-3.375c-.75 0-1.25-.625-1.25-.625l-1.75.063s-.438-.438-.188-1c.25-.563.25-.563-.062-.625-.313-.063-1.188-.125-1.75-.313-.563-.188 0-1-.125-1.25s-1.313-.25-1.938-.313c-.625-.062-1.5-.375-2-1s-.375-.812-1.437-1.687c-1.063-.875-.75-1-1.688-1.313-.937-.312-1.25-.25-1.437-1-.188-.75-.938-.875-1.25-1.625-.313-.75 0-1.25-.875-1.812-.875-.563-1.063-.125-1.188-1.313-.125-1.187.188-1.75-.125-2.375-.312-.625-.125-.125-.625-.875s-.75-.875-.937-1.75c-.188-.875-.188-1.312-.5-1.875-.313-.562-.875-.812-.938-1.437-.062-.625-.062-.875-.062-1.438 0-.562.188-1-.125-2.25s-.125-1.562-.75-2.312c-.625-.75-.688-.25-1.188-1.875s-1.062-1.875-.75-2.688c.313-.812.5-.937.563-1.562.063-.625.438-.5.5-1.375.063-.875.063-.625.063-1.813 0-1.187-.75.313.125-2.937s.875-3.125.937-3.875c.063-.75 1.25-.875.813-2.188-.438-1.312-.688-1.312-.563-2.187.125-.875.625-1.25.5-1.688-.125-.437.063-.25-.125-.75s.5-.25-.313-.875c-.812-.625-1.062-.5-1.187-1.437-.125-.938-.125-1.688-.063-5.375.063-3.688-.187-3.938.438-5 .625-1.063.938-1.188.938-2.063 0-.875.5-2 .125-3.062-.375-1.063-.688-1.188-.313-1.813.375-.625.688-.625.688-1.375s0 .313.062-1.312c.063-1.625-.438-.438.188-2.563.625-2.125.875-4.25.937-5.312.063-1.063.125-1.375-.188-2-.312-.625-.75-3.625-.75-4.625s.188-.75.438-1.75.313-1.188.25-1.5c-.063-.313 0-.625.188-1.438.187-.812-.188-2.5.5-4.25.687-1.75.875-1.062.687-2.312-.188-1.25-1.625-3.25-1.188-4.625.438-1.375.875-1.125.813-2.938-.063-1.812-.25-4.25.188-5.25.437-1 .687-4.437.5-5.25l.187-.062c.375-2.875-1.125-5.375-1.125-5.375s1.5-1.625 2.375-1.875 1 1.625.75 2.625.125 2 1.25 3.125 2.375 2.375 2.875 3.25 1.75 1.625 2 2.625.625 2 1.875 3 2-.125 2.25-.875-.125-2.5.125-4.25 2.5.25 2.5.25.875 1.875 1.25 2.5 2 .375 2.75-.375 1.25-.625 1.75-.625 1.5 1 3.25.75 1.875-.375 3.375 1 .25 2.125 1.625 3 1.375 0 2.25.375.375 1.5 1.75 2.375 5 .125 6.25.625 0 1.625 0 2.5 0 3.25-.625 3.5-1.5 2-1.375 3.375 3.375 0 4.75-.625 2-.5 3.375-1.75 5.125-3.375 5.125-3.375z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="eastern_united_states"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#bb)",
        }}
        d="m326.241 264.275 6.276.088c.707.354.354 5.303.354 5.303s3.358-1.767 5.833-1.06c2.475.707 4.773-3.182 5.303-.884.53 2.298 1.768 4.243 2.299 4.95.53.707.707 1.767 1.767 4.596 1.061 2.828 1.591 5.657.884 6.894-.707 1.238-2.651 3.005-1.06 3.89 1.59.883 3.005 2.297 3.889 3.181.884.884 4.95-2.298 4.773-3.535-.177-1.238-.708-2.122.176-2.475.884-.354 2.298.177 3.006-.707.707-.884 1.944-2.475 3.005-2.298 1.06.176 3.535-.707 3.535-.707s1.768-.53 1.768-1.415c0 0 10.253-.265 11.844-1.237 1.591-.972 1.768-.796 1.768-.796s-.707-3.889-.354-4.154c.354-.265 1.15-.53 1.856-1.237.708-.707 1.783-.753 2.756-.576.972.177 4.492 2.255 4.05 4.2-.442 1.944-1.944 5.568-.353 5.656 1.59.089 2.828-.088 3.093.973.266 1.06.53 1.856 1.061 2.033.53.176 2.387-.53 2.355-.833-.032-.302-.75 1.063-1.438 2.313-.687 1.25-1.687 2.187-1.687 2.187-2.125.875-2.5 3.625-3.25 2.5s-1.75-1.125-.875-2.75 1.5-1.375 1.25-2.875.75-1.625-.5-1.75-.625-.125-2.125.375-1.375-1.125-2.625.875-1.625 1.875-2.5 2.375-.5 1.125-1.125 1.875-.875 1.125-1.375 1.75-.625.625-.625 2 1.125 3.625 1.125 3.625-.625 1.75-1.375 2.125-.875-.875-4.125 2.875-2.875 4.125-4.875 5-1.75 1-1.875 1.5-1.5 1.125-.75 2.25 0 1.375 1.125 1.875 2.25-.5 2.125 1.125-1.375 3.25-3.375 4.5-4.625 5.125-7.25 5.75-3.75 1.5-3.625 2.75 0 2.75-1.375 2.75-.5.625-.5 3.625.25 3.875.875 5 .875 1.125.875 2.875 0 3-.125 3.5 1 .375-.875 1.5-3.5 1.75-4.25-.125-2.25-1.375-2.375-2.875.5-5.125.5-5.125-1.875-.5-2.125-1.5-1-3.375-1.5-3.75-1.5-1.25-2.5-.75-2.75 1.5-3.375 1.375S340.5 333 337 332s-5.125-1.5-6.625-1.625-5-.125-5.625 0-6.625 1.5-7.375 1.5-6 1.25-7.375 2.375-1.25 3-2.75 3.625-2 .875-2 .875-1.5 1.75-1.625 2.75-1.375 2.75-2 3.125-.75.25-.375 1.375c0 0-2-1.25-2-2.125s1.5-2 1.875-3.625 1.125-3.125 1.125-4-.125-3.5-.125-3.5-1.25-4.625-.875-5.375-1.375-1-1.375-1-.625-1.875-.125-2.5 2.375-.625 2.875-.875 2.25-.75 2.25-.75 1-5.5 1-6.125.75-4 .75-4.625 3.375-1.875 3.875-2.125 2.25 1.125 2.375-.25 0-4.5.125-5.375.5-1.5 1-1.75 11.375-.125 11.875-.625-.5-36.625.366-37.1z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="western_united_states"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#bc)",
        }}
        d="M326.241 264.275c-.866.475.134 36.6-.366 37.1S314.5 301.75 314 302s-.875.875-1 1.75 0 4-.125 5.375-1.875 0-2.375.25-3.875 1.5-3.875 2.125-.75 4-.75 4.625-1 6.125-1 6.125-1.75.5-2.25.75-2.375.25-2.875.875.125 2.5.125 2.5 1.75.25 1.375 1 .875 5.375.75 5.125-3.375 0-4.375.125-2.25-.875-2.625-1.375-.75-1.125-1.875-1.125-3.375-2.75-4-3.25-8.375 0-9.375 0-2.375-2.375-2.375-2.375l-3.875-2.125s-6.625 0-7.75.125-1.75-3.375-1.75-3.375c-.5-2.125-.75-1.625-.75-3.5s-2.875-5.5-4.25-7.5-1.375-7.375-1.125-8.75-.25-6.375.625-8.5.875-5.125 1.5-8-.125-2.25 1.375-5.875 1.375-1.25 1.625-4.375 1.25-1.25 1.375-3.875.625-3.875-.25-5.125c0 0-.25.75.75 1s57.5.625 61.366-.35z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="quebec"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#bd)",
        }}
        d="M359.74 259.237s.708-3.713 1.945-4.597c1.238-.883 1.945-5.656 1.414-6.717-.53-1.06-1.414-1.414-.707-3.005s.354-4.243 2.122-3.713c1.767.53 3.535.354 3.889-.883.353-1.238-.177-1.238 0-2.299.176-1.06 1.06-1.414 1.767-1.59.708-.177 1.238.353.708-2.122-.53-2.475 0-1.414-.708-3.182-.707-1.768-.176-.707-.883-2.298-.708-1.59-1.238-4.066.53-4.243 1.768-.176-.177-2.298 1.06-2.828 1.238-.53 3.536.177 3.006-1.945-.53-2.12-3.182-6.363-1.414-6.54 1.767-.177 4.281.725 4.281.725l6.25.375s-.625 2.375 1.25 2.625 2.125 1.375 2.75 1.75 1.625 1.25 1.375 1.75-.25 1-.125 1.875.75 2.125.25 2.375-1 1-.875 2 .5 2.5.5 2.5 1 1.375 2.25.75.875-1.125 2.5-1.875 1.625.875 2.625-.75.875-1.875 1.125-2.5 1.5-2.25 2.5-1.75-.317 4.999.744 6.59c1.06 1.59 2.506-.59 2.631.16s.25 1.625.375 2.25-.75 1.125 0 2.125.875 1.25.75 2 .375 1.375.375 1.375 1.375-1.25 2 .25.125 2.375 1.25 2.375 2.375 1.75 2.375 1.75l.5 2.625 2.875-2 2.75.875s-3.813 1.75-3.063 3.563c.75 1.812 4.625-2.125 4.563.312-.063 2.438-.5 4.938-1.438 5.063-.937.125-2.437.937-2.562 1.5-.125.562-1.875 1.687-3 1.937s.625 1.25-1.75 1.625-3.125.25-3.625.25-.5.5-1.125 1.625-.125 1.5-.75 2 2.25 0-1.625.875-4.5 1.125-4.5 1.125-.25.375-1.5.375-1.75-.625-1.75-.625-.25-.625-2-.625-3.375 1.625-3.375 1.625-.5.625-1.5.75-2.375 1.375-2.375 1.375-1.375.375-1 1.875S385.125 271 386 270s2.25-5 4.125-4.625S394.5 266.5 394 269.25s-.625 2.25-.25 3.625 1.25 2.125 1.125 3.375-1.25.875.125 2 2.875 2.875 3.375 1.25 1.125-2.75 1.75-2.5 2.375-.5 1.125 2-1 2.625-2.125 3.375-1-1.25-3 1.75c.032.302-1.825 1.01-2.355.833-.53-.177-.795-.973-1.06-2.033-.266-1.06-1.503-.884-3.094-.973-1.591-.088-.089-3.712.353-5.656.442-1.945-3.078-4.023-4.05-4.2-.973-.177-2.048-.131-2.756.576-.707.707-1.502.972-1.856 1.237-.353.265.354 4.154.354 4.154s-.177-.176-1.768.796c-1.59.972-11.844 1.237-11.844 1.237 0-.884 0-3.889-1.06-3.712-1.061.177-.884.707-1.592.177-.707-.53-.883-1.238-1.59-.53-.708.707-.354 2.298-1.061 2.12-.707-.176-1.768-1.767-2.475-1.59-.707.177-1.768 1.59-1.768 1.59s.354-16.97 1.06-18.914h.178z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="central_america"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#be)",
        }}
        d="M264 319.125s.625 3.5 1.75 3.375 7.75-.125 7.75-.125l3.875 2.125s1.375 2.375 2.375 2.375 8.75-.5 9.375 0 2.875 3.25 4 3.25 1.5.625 1.875 1.125 1.625 1.5 2.625 1.375 4.25-.375 4.438 0c.062.125.187 2.75.187 3.625s-.75 2.375-1.125 4-1.875 2.75-1.875 3.625 2 2.125 2 2.125c-.501 2.793-.886 5.47.25 6.625l.125 2.25 1.5 2.625s2.25 3.25 5.125 2.375 1.5-.25 3.875-1.375 1.625 1.25 2.875-1.25.375-2.75 1.75-3.25.625-1 2.375-.5.125.625 2.375.75 2.5-2.375 2.25.5-.5 3-.75 3.75.375-.125-.5 1.5-1.375 1.75-2 2.125-1 .625-1 1.75.25 2-.875 2.5-2.25-.125-2 1.25-.125 1.75.875 2.375 1.75.75 2.375 1.875.875 2.5.625 3-.125 2.125-.875 2.5-1.75.125-1.75 1.75.75 2.875 0 3.25-2-.5-2.25.375-.375 1.625-.5 2.375-.75.875-.75 1.375v1.625c0 1.375-.875 2.25.375 2.5s1.875.625 2.5.25 1.375-.5 1.875-.875 1.25-1.375 2-1.375 2.25.375 2.25.375.75 1.875.625 2.5.375.5.25 2-.125 2.625-.375 3.125-.625 1-.875 1.5 0 .5-.25 1.25.125 1.875-.5 1.375-.25-.5-.625-1-.625-1.125-1.375-2.375-.625-.5-2.125-1.25-1.375-1.625-2.375-1.125-.625 1.375-1.75.625-1.5-.75-2.125-1.75-.5-.875-.875-1.625-1.375-.25-1.375-1.625.375-1.625 0-2.375-.75-1.125-1-1.75-.375-.125-.375-1.375V382.5c0-.5-.5-2.5-.5-2.5l-.625-1.25s-.125-.125-.625-.875-.5-.375-.875-1.625-1.25-2.75-1.5-3.75-1.625-2.25-5.75-3.75-3.875-1.875-7.375-2.625-4.75-1.375-4.75-2.875 0-2-.875-2.5-1.75-.625-1.375-1.5 1-1 1.625-2.125.75-1.375.75-2.25.375-1-1-1.625-4.125-3-4.125-3 1.625-.375-1.875.125-3.75 2.5-4.75 1.25.75-5.625-.5-6.25-1.125.25-1.875-1.375-.125-3-.5-4.375 0 .75-1-3.875.875-3.375-1.375-6-5-2.375-5.25-4.5c0 0 .063-5.625-.125-6.125z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="peru"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#bf)",
        }}
        d="M347.125 472.5c.875-.25 1 1.625.75 2.625s.125 2 1.25 3.125 2.375 2.375 2.875 3.25 1.75 1.625 2 2.625.625 2 1.875 3 2-.125 2.25-.875-.125-2.5.125-4.25 2.5.25 2.5.25.875 1.875 1.25 2.5 2 .375 2.75-.375 1.25-.625 1.75-.625 1.5 1 3.25.75 1.875-.375 3.375 1 .25 2.125 1.625 3 1.375 0 2.25.375.375 1.5 1.75 2.375 5 .125 6.25.625 0 1.625 0 2.5 0 3.25-.625 3.5-1.5 2-1.375 3.375 3.375 0 4.75-.625 2-.5 3.375-1.75 5.125-3.375 5.125-3.375c-.125-1.75-3-2.75-3.375-5.375s-.75-4.5-1.375-5-1.25 0-2.125-1.375-1.5-1.875-3-2.75-.75-2.25-.5-3.375-1-4.375-1.75-5.875-1.625-1.5-2-3.25-.5-2.25-1.625-3.125-2.625-1-2.875-1.75.25-1.75-.5-2.5-1.375-2.5-2-3.75-2.875-.125-4.5-.125S369 455.125 368 454.5s-2-.125-3.125-.625-.625-1.375-2.125-1.5-1.625-1.25-2.375-2.5-3.125-2.375-4.125-2.25-1.375 1.375-1.875 1.875-2.375.5-4.25.875-4.375 2.25-7.125 2.375-2.625-2.875-2.375-4.25 3.875-1.75 4.125-3.875-3.25-.25-4.625-1-4.875-.875-5-1.875-1.375-1.125-2.375-1.125-2.375-1.25-3.125-2.625 1.25-2 1.375-3 2.875-.625 3.875-1.375.75-4.625.875-5.25 4.192-.582 4.192-.582-.796-2.121-1.326-2.651c-.53-.53-1.503-.796-2.21-.973-.707-.176-1.856-1.414-2.74-1.325-.884.088-3.182.088-3.8-.62a4.611 4.611 0 0 0-3.271-1.59c-1.591-.089-2.298 1.06-3.359-.619-1.06-1.68-3.005-3.977-3.535-4.066-.53-.088-3.006-.353-2.326-1.074-1.875 1.25-1.75 3.75-2.5 5.625s-1.375 2.625-2 4.625.375 1.5 1.125 3.625-.25 1-.625 2.25-.125 5.25-.125 5.25.875 2.625 1.375 3.125 2.5 2.75 2.5 2.75-.25 1.625.25 3.625 1.375 1.25 1.875 2.25 2.5 3.125 3.125 3.625 2 2.625 3.375 3.125.375 2.375.25 3.375 1.375 3.25 1.875 4.25.75.25 1.25 1 1.875 1.75 2.75 2.25 1.75.625 1.75.625 1.25 1.125 2.125 1.75 2 .875 2.75 1.125 2 3 2.625 3.625c0 0 2.75 1.125 3.375 1.25s1.75-1.375 2.625-1.5z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="western_australia"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#bg)",
        }}
        d="m862.494 599.885.235-.27s0-5.656.177-7.07c.176-1.414-.354-1.238-1.061-2.298s.884-42.25.707-43.134c-.177-.884-29.875.354-29.875.354l-.59-37.738-2.12-1.237s-1.591-1.06-2.475-1.591c-.884-.53-1.591 1.944-2.298 2.298-.707.353-2.829 1.59-2.829 1.59s-.53 1.769-.884 3.006c-.353 1.238-1.944.177-3.889.884-1.944.707-.177.707-.707 2.475-.53 1.768-.53.177-2.121.177s-.707.707-1.768 2.121c-1.06 1.414-1.237.354-2.652 1.591-1.414 1.237-.353 1.237-1.237 3.005-.884 1.768-1.06.884-2.121 1.591s-2.829 2.475-3.89 3.536c-1.06 1.06-1.59.53-3.712.353-2.121-.177-.884 0-2.475.177-1.59.177-1.237 1.237-2.298 2.121-1.06.884-1.59 1.238-2.828 2.475-1.238 1.238-.53.53-2.475.707-1.945.177-1.06.177-3.005 1.415-1.945 1.237-.177 1.59-.354 3.005-.177 1.414-.53 1.414-1.06 2.651-.53 1.238 0 1.591.53 3.006.53 1.414 1.59.53 1.59.53s-.353 2.121 0 2.828c.354.707-.176 0-1.767 0-1.59 0-.707.53-.707 1.768v1.238s-.53.176-1.06 1.237c-.531 1.06 0 .884.176 2.121.177 1.238.354 1.768.884 3.006.53 1.237 1.06.883 1.945 2.828.883 1.944.353 2.121.353 3.889 0 1.768 0 1.237.177 3.536.177 2.298 1.237 1.59 1.237 1.59s1.238.884 1.945 1.415c.707.53.707 1.06 1.06 2.828.354 1.768-.53 1.414-.883 2.475-.354 1.06 0 .707-.177 2.828-.177 2.122-.884 1.238-1.591 2.122-.707.884-.53.884-1.06 2.298-.531 1.414 0 1.06.883 1.768.884.707 1.945 1.237 3.005 2.121 2.441 2.673 5.064 1.99 8.132.354 1.591-.884.884-1.061 2.121-1.591 1.238-.53.884-.354 1.591-.708.707-.353 1.238-.883 2.298-1.944 1.061-1.06.354-.177 1.591-.884 1.238-.707 1.415-1.237 3.36-1.945 1.944-.707 2.474-.176 2.474-.176h1.591c1.591 0 .707.176 1.06.884.354.707 1.415.707 2.122.707.707 0 1.768-.177 2.652-.53.884-.354-.177-1.592-.177-2.299 0-.707 0-.884.53-2.121s2.122-1.591 2.829-1.591c.707 0 2.475-.354 3.182-1.06.707-.708 1.06-.354 2.474-.531 1.415-.177 1.238-.53 2.299-1.591 1.06-1.06 1.06-.53 3.005-.53h3.005c1.945 0 1.768.176 3.005.353 1.238.177 1.945 1.414 2.829 1.945.883.53.353.707.353 2.121 0 1.414.177 1.591 1.591 4.066 1.414 2.475 2.121 2.475 2.121 2.475s1.238-1.768 2.299-3.359c1.06-1.591.883-.53 2.474-1.06 1.591-.53.53-1.061.884-3.36.354-2.297 1.061-.706 2.298-.53 1.238.177 0 2.298-.353 3.536-.354 1.237-1.06 1.59-1.945 2.475-.884.884-.884 1.06-1.944 2.298-1.06 1.237-.53 1.06-.354 2.475.177 1.414 1.945-1.238 2.652-2.298.707-1.061.707-.354 1.59-.177.885.177.178 2.298.178 3.359 0 1.06.176.883 1.06 1.414.884.53.884 1.59.354 3.005-.53 1.414 0 1.414.177 2.475.176 1.06 2.121 3.712 2.828 4.42.707.706.53.353 1.238.706.707.354.353.707 1.59 1.591z"
        transform="translate(-167.997 -118.555)"
      />
      <path
        id="alberta"
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#ay)",
        }}
        d="M253.372 214.748s.125.125.625 1.625.875 2.5 2 4.5.125 8 .125 8l2 2.75s1.625.75 2.25.875.375 3.25.25 4.5-1.625.625-2.5.875-1.125 2.375-1.25 3.625-2.372.752-2.372.752c.625 1.25 1.875 1.375 2.375 3.625s.25 1.5.875 2.375 1.75 1 2 3 .25.875 1.625 3.5.125 3.75.375 6.125 1.5 1.5 2.375 2.75l.372 1.373 48-.125 4-48.375s-62.875-1.75-63.125-1.75z"
        transform="translate(-167.997 -118.555)"
      />
    </g>
    <path
      style={{
        fill: "red",
      }}
      d="M141.94 8.56c-7.53,-1.06 -5.22,-1.38 -12.36,-0.5 -2.92,0.35 -5.65,0.54 -8.19,-0.49 -1.9,-0.77 -2.03,5.8 -3.13,1.85 -0.01,-0.03 -5.47,-2.42 -7.66,-1.26 -1.02,0.54 -9.54,-0.32 -13.21,0.42 -3.35,0.67 -8.79,-1.09 -10.51,2.35 -0.72,1.43 -8.29,5.67 -9.7,5.09 -1.84,-0.75 -5.8,2.89 -9.93,2.89 1.17,0.1 6.4,-4.36 8.7,-4.64 2.39,-0.29 6.33,-5.01 7.66,-5.01 -0.07,-0.35 -10.55,-1.11 -12.7,-0.22 -2.5,1.02 -9.96,-1.4 -13.41,-0.98 -1.84,0.23 -1.67,0.41 -3.1,0.71 -0.53,2.27 -0.98,0.31 -5.78,0.31 -3.74,0 -2.51,0.45 -6.27,-0.02 -1.4,-0.17 -4.73,0.48 -4.52,-2.05 -1.7,0 -9.87,3.41 -10.59,1.15 -0.35,-1.1 4.16,-1.52 -0.2,-1.16 -4.58,0.36 -1.34,-0.99 -5.23,0.93 -1.11,0.55 -8.27,-0.6 -9.1,-1.21 -2.81,-2.09 -4.12,0.35 -0.59,3.34 0.73,0.6 2.5,5.18 0.77,7.6 -2.94,4.11 -0.52,1.45 -2.33,-0.71 -0.43,-0.49 -2.17,3.62 -0.98,5.28 0.47,0.66 -0.92,3.58 0.52,5.7 1.25,1.83 -1.49,3.04 1.61,3.92 1.35,0.38 -0.98,1.58 -0.87,4.66 0.11,2.68 -3.96,4.57 -1.78,7.63 1.04,1.46 -1.96,2.1 1.07,1.49 3.34,-0.67 -1.48,3.42 0.32,5.92 0.81,1.14 -2.99,5.89 2.07,10.89 3.58,3.51 -2.33,-1.39 -2.2,1.48 0.29,6.74 -0.37,3.5 -0.89,7.6 -0.23,1.94 1.09,9.16 2.1,9.33 3.71,0.62 2.07,-0.72 1.92,2.91 -0.14,3.59 1.44,4.82 -0.98,2.02 -0.41,-0.47 -1.63,-2.61 -2.33,-1.12 -0.83,-0.86 -1.43,-1.32 -1.43,-0.63 -0.01,4.04 1.2,3.81 -0.41,8.11 -0.46,1.22 0.88,6.89 1.93,6.89 1.19,0 -0.16,2.77 -0.16,4.66 0,1.14 -0.45,1.93 -0.45,4.65 0,4.44 0.84,-0.08 2.27,-0.3 -1.05,4.11 -0.13,1.83 -0.74,5.41 -0.27,1.6 -1.08,0.14 -1.08,4.2 0,3.1 0.3,1.29 -0.15,4.95 -0.75,6.01 -0.4,2.45 -2.38,7.2 -0.16,0.39 1.14,7.03 1.35,7.93 1.44,0.5 1.94,-3.67 1.48,0.03 -0.26,2.02 0.6,1.98 -0.94,5.05 -1.15,2.3 -0.67,1.81 0.89,1.98 0.06,0.98 0.46,2.12 -0.28,3.28 -0.99,1.54 -0.38,12.37 -0.1,14.59 0.34,2.74 2.7,-2.35 1.35,3.02 -0.21,0.81 -0.7,-0.4 -0.6,2.09 0.06,1.44 -2.52,0.81 -1.11,4.2 0.35,0.83 -0.77,2.66 0.31,5.26 0.17,0.4 -0.13,2.35 1.45,3.69 0.85,0.72 -0.72,1.33 1.31,1.26 3.91,-0.16 0.64,5.2 4.25,6.63 1.64,0.63 0.03,3.86 -3.9,-1.57 -0.74,-1.01 -0.25,0.25 -3.38,-0.12 -1.82,-0.22 0.84,9.47 1.12,9.9 1.42,2.17 -4.68,7.2 -1.61,11.46 0.33,0.46 -0.65,1.06 0.3,2.4 0.53,0.73 -0.53,0.72 1.06,1.5 0.52,0.26 1.51,3.3 0.2,4.35 -0.92,0.73 0.86,5.15 -0.72,7.35 -0.44,0.61 0.81,6.83 -1.31,8.62 -0.57,0.48 1.22,1.29 1.12,3.8 -0.06,1.36 1.48,2.14 3.57,2.55 0.08,0.79 -0.16,1.67 0.93,3.19 0.82,1.14 -1.74,0.21 2.12,3.75 0.2,0.19 2.81,4.25 1.82,5.63 -0.35,0.49 -0.52,1.35 -1.93,1.24 -1.09,-0.09 0.73,1.54 -2.43,0.92 -1.26,-0.25 -0.76,2.3 -2.93,4.13 -1.92,1.63 1.25,5.08 -0.9,6.9 -1.48,1.24 1.02,6.7 -0.52,10.41 -0.61,1.48 2.63,0.82 1.97,2.4 -0.49,1.18 1.12,0.86 -0.75,3.49 -0.02,0.03 -1.24,7.6 0.6,6.46 3.41,-2.16 3.8,-4.92 2.98,-0.96 -0.31,1.45 0.39,2.71 -2.42,4.97 -2.87,2.35 -2.69,2.29 -2.87,6.74 -0.03,0.63 3.38,5.36 0.03,6.04 -0.35,1.62 -1.52,0.49 -0.38,2.42 0.7,1.16 -2.5,5.89 1.31,1.95 0.02,-0.02 1.93,3.68 -0.09,6.82 -0.11,0.17 -0.43,6.19 1.83,6.96 0.37,1.61 -2.62,4.47 -2.4,10.03 0.07,1.83 -1.43,4.8 0.68,7.11 0.14,1.25 0.37,2.98 0.65,5.36 0.17,1.43 -2.68,9.18 1.58,6.11 3.31,-2.4 0.51,6.61 0.67,7.02 1.01,2.65 -4.54,13.74 -4.22,18.39 0.62,8.81 -6.13,-1.41 0.74,13.52 1.51,3.28 0.75,10.5 2.09,12.28 0.13,0.18 1.83,5.82 0.51,8.01 -1.55,2.53 -0.62,10.19 -4.18,15.36 -0.37,0.54 1.95,4.64 -3.7,8.95 -1.57,1.19 0.42,5.9 0.94,8.07 0.73,3.08 -2.69,6.65 0.79,7.59 2.97,0.81 -3.98,16.69 -0.11,19.87 2.61,2.15 1.3,8.49 3.91,11.98 0.1,0.13 0.02,6.18 2.53,8.25 2.49,2.04 0.76,8.15 0.49,12.43 -0.13,0.53 -0.17,1.08 -0.13,1.66 0.24,2.97 -4.45,0.89 -1.29,8.46 2.57,6.17 -4.49,13.42 -0.61,18.8 1.18,1.65 -7.49,8.21 -4.57,12.69 1.41,2.17 -5.36,9.71 1.37,5.44 0.04,-0.02 6.01,2.72 2.57,9.14 -2.97,5.49 3.95,11.79 -3.79,22.58 -0.93,1.31 2.45,5.05 0,8.45 -0.25,0.36 0.81,6.4 3.58,7.18 2.17,0.62 -2.6,13.46 -3.63,5.14 -0.48,-3.85 -5.96,6.14 0.2,15.79 3.14,4.92 2.21,9.87 1.02,15.65 -0.75,3.65 -3.09,12.5 1.22,14.67 0.52,0.26 0.91,0.56 1.22,0.88 -0.11,0.53 -0.1,0.98 0.05,1.34 1.01,2.42 -4.19,14.09 -2.54,22.08 0.86,4.18 5.1,-6.52 2.79,6.95 -0.99,5.81 -4.52,6.91 -3.98,13.27 0.07,1 -2.86,7.93 0.83,13.06 1.21,1.69 -2.57,3.21 1.63,3.83 1.12,0.17 1.57,10.3 -2.77,7.82 -3.31,1.35 4.32,19.92 3.13,21.58 -1.16,1.61 2.33,7.23 1.11,13.19 -0.99,4.84 1.61,-1.03 3.99,5.77 0.02,0.06 8.25,9.3 3.96,8.78 -3.67,-0.45 -1.5,-6.61 -8.81,-4.83 -0.93,0.23 -4.34,-4.5 -2.49,6.34 0.95,5.58 -0.75,4.13 0.05,10.54 0.47,3.78 -3.86,5.05 0.2,14.81 1.75,4.21 -3.48,3.62 2.82,3.62 0.32,0 0.69,11.03 -1.83,14.21 -0.62,0.78 -2.22,7.82 -0.1,12.76 0.18,3.52 1.08,7.86 -1.03,11.17 -2.18,3.41 4.17,11.5 0.6,19.26 -0.39,0.84 1.62,2.22 -1.71,5.03 -0.03,0.03 -1.85,6.09 1.84,1.82 0.61,-0.71 3.22,2.58 1.09,8.26 -0.04,0.09 1.23,13.01 1.14,15.1 -0.31,7.19 4.94,-0.28 4.58,4.23 -2.37,0.36 -2.16,12.54 -6.02,17.9 -0.57,0.79 0.79,11.06 -0.62,14.42 -1.02,2.48 4.78,11.39 4.22,15.74 -0.07,0.52 -4.86,-3.97 -2.74,6.29 0.35,1.69 2.74,21.97 2.69,22.38 -0.73,5.89 5.47,8.81 -1.14,10.32 -1.82,8.74 -7.97,-5.08 -2.19,11.44 1.46,4.13 1.75,11.49 -0.35,15.1 1.8,3.07 0.36,5.65 1.09,7.45 -0.78,1.07 -0.96,2.15 -0.2,3.19 1.94,2.71 -3.85,4.96 -0.92,12.01 0.98,2.35 -1.41,21.37 6.99,12.58 2.08,-2.18 7.21,-0.12 1.6,3.36 -2.95,1.83 3.63,2.25 -6.4,4.27 -6.36,1.29 0.7,17.71 -1.42,20.65 -0.19,0.26 -1.6,10.69 2.44,7.52 0.68,-0.53 3.83,0.39 -2.32,5.59 -0.04,0.04 -1.47,12.35 0.41,12.19 1.22,5.27 8.72,-7.1 8.23,5.13 -0.04,0.99 2.65,4.22 2.44,9.68 -0.17,4.4 0.65,2.51 -0.64,8.73 -1.2,5.82 0.28,5.06 -1.14,0.02 -0.74,-2.63 0.1,-14.89 -6.43,-13.57 -3.21,0.66 -6.77,-6.89 -5.18,0.85 0.98,4.74 3.9,9.34 3.97,9.68 0.01,0.05 -2.47,9.49 -2.47,11.81 0,9.05 -2.46,0.93 1.14,10.57 2.98,7.96 -10.27,14.27 -0.53,13.89 1.92,-0.07 1.18,24.47 -4.6,27.39 -2.73,1.37 2.8,13.78 2.13,16.89 1.52,-0.63 1.45,-10.39 4.6,-1.38 1.97,5.63 0.03,9.18 2.44,10.32 -1,2.53 -2.44,4.47 0.23,8.18 0.21,0.29 2.64,12.13 -1.2,6.95 -3.14,-4.23 -3.89,10.11 -5.05,12.92 -0.64,1.55 1.98,15.36 2.08,15.37 8.48,1.43 -2.29,12.33 -0.91,19.04 1.54,7.48 -2.94,3.92 0.69,11.5 1.09,2.29 -1.57,7.85 2.34,8.13 3.51,0.25 -4.33,15.3 -3.97,6.37 0.11,-2.77 -4.27,-2.07 -0.39,7.26 1.69,4.03 -0.6,14.42 2.63,19.3 2.78,4.21 -3.42,15.18 -0.79,18.83 1.52,2.13 -1.88,1.76 1.63,2.62 3.79,0.91 -3.62,11.28 -1.63,16.04 0.58,1.4 0.47,13.67 -2.31,14.24 -0.86,4.14 -6.4,4.68 -0.03,5.97 3.13,0.63 2.2,3.8 6.46,1.31 0.03,-0.01 7.08,2.1 0.22,3.85 -0.28,0.07 -6.35,5.07 -0.94,6.83 0.05,1.99 -0.45,4.91 -2.95,9.26 -3.17,5.55 3.29,10.45 0,18.34 -0.02,0.06 -1.12,15.17 -0.99,15.16 8,-0.52 1.77,-3.04 5.41,5.69 2,4.78 -3.62,6.42 -3.27,14.5 0.15,3.49 -4.34,1.62 -1.5,15.38 1.67,8.07 4.95,1.02 3.92,9.39 -1.02,8.14 7.8,8.79 1.55,9.34 -3.19,0.28 -0.18,3.57 -3.44,-2.91 -0.72,-1.43 -2.04,1.1 -2.05,-4.32 0,-0.67 -1.42,3.8 -1.65,6.98 -0.07,0.92 1.07,1.4 1.66,2.52 1.06,2.08 1.81,4.82 0.73,5.66 -3.32,2.54 -1.51,9.02 -1.14,10.16 1.02,3.05 0.61,-3.49 -1.81,11.54 -0.35,2.12 4.55,3.69 2.58,6.43 -1.96,2.73 5.14,1.69 -1.63,9.28 -0.17,0.2 -5.4,15.1 -0.37,9.26 1.06,-1.24 3.11,3.85 2.21,8.24 -0.97,4.66 1.82,5.44 0.61,15.12 -0.13,1 0,1.9 0.31,2.73 -0.61,1.88 -1.32,4.1 -1.38,4.69 -0.89,10.29 2.53,7.57 2.74,9.16 0.71,5.52 -2.84,1.5 -0.22,10.96 0.59,2.1 -0.83,10.04 2.39,6.19 1.39,0 -1,5.8 -2.07,7.12 -1.74,2.12 1.76,4.28 -3.08,0.28 -2.09,0.47 2.09,16.64 -0.87,20.75 -1.25,1.75 2.55,6.29 -0.37,9.94 -0.31,0.4 0.45,6.46 1.72,6.67 0.97,0.17 -0.09,1.36 2.52,2.13 3.35,1.01 -0.15,2.94 4.32,5.71 1.93,1.19 -2.79,6.98 1.39,13.95 1.51,2.53 -1.87,5.08 -2.98,-0.24 -0.87,-0.3 -4.46,5.03 -3.72,6.82 0.73,1.75 0.04,6.6 -0.18,8.46 -0.45,3.61 1.56,2.51 -1.77,7.14 -0.12,0.17 1.53,3.79 0.46,6.34 -0.43,1.03 -0.88,5.44 2.71,3.39 1.43,0.59 -0.83,9.5 -1.14,11.26 -0.26,1.58 -0.86,3.44 -0.68,5.09l-0.64 0.15c0,1.86 4.7,6.02 -1.46,15.31 -0.43,0.65 0.42,4.02 -1.25,8.02 -0.02,0.04 -0.15,7.83 0.92,7.15 0.89,-0.55 4.8,0.48 4.79,2.68 0,1.16 3.96,3.49 0.99,7.61 -2.24,3.12 1.84,11.62 -2.45,7.34 -0.32,-0.31 -3.14,-8.89 -3.39,-0.82 -0.05,1.62 2.82,1.38 0.53,9.36 -1.19,4.14 1.69,5.1 -0.7,10.83 -0.24,0.59 1.08,5.72 -0.34,9.14 -0.02,0.03 -0.51,6.55 2.98,2.9 1.95,-2.03 0.68,1.89 0.77,4.82 0.01,0.47 -2.01,4.49 -1.85,8.3 0.13,3.02 -2.02,3.63 -1.13,10.75 0.21,1.67 -1,6.3 -3.77,4.62 -3.44,-2.06 -0.42,3.24 -4.51,8.93 -0.02,0.03 0.02,7.49 0.87,7.49 7.04,0 2.56,9.69 4,11.87 2.2,3.33 -1.35,2.11 4.25,6.27 0.03,0.02 3.08,7.85 2.08,9.24 -0.22,0.29 -0.34,0.56 -0.41,0.81 -1.71,0.82 -3.58,1.97 -3.28,2.68 1.22,2.95 -0.59,12.25 3.47,13.08 0.57,2.7 -0.76,4.92 1.14,7.56 3.74,5.21 -1.53,10.61 -0.84,16.19 0.76,6.12 -3.22,-3.87 -1.89,6.85 0.71,5.67 -0.98,1.86 1.57,8.01 1.39,3.32 -1.37,1 2.45,5.2 3.53,3.87 -7.03,5.72 -3.48,14.24 0.87,2.09 -1.92,6.66 3.4,3.62 0.25,0.09 -0.84,2.62 0.06,3.87 2.44,3.4 -1.07,7.29 2.66,13.15 3.14,4.94 -2.9,1.73 -4.39,-3.01 -1.56,0.33 -1.99,19.05 -1.25,20.57 4.57,9.28 -1.75,15.39 -2.78,13.39 -0.93,-0.21 0.38,13.91 2.24,15.13 4.58,3.02 0.79,6.08 3.64,8.52 -0.06,0.92 0.09,1.85 0.79,2.83 0.05,0.08 2.18,6.82 2.07,6.97 -1.75,2.75 -4.99,-5.87 -4.57,-0.16 0.09,1.2 1.63,0.31 0.43,3.65 -0.95,2.62 2.01,5.05 -2.51,7.7 -3.68,2.16 0.47,10.83 -2.58,18.15 -2.63,6.34 4.16,3.97 3.24,6.17 -1.3,3.11 2.33,4.88 -1.27,13.5 -0.48,1.15 1.36,4.96 0,8.24 -1.31,3.13 0.91,9.69 -4.97,5.54 -3.11,-2.2 4.22,19.73 4.22,20.3 0,6.77 1.96,1.76 0.91,10.29 -0.19,1.52 3.94,6.99 0.53,11.73 -0.67,0.94 2.71,3.13 -1.15,8.86 -1.39,2.04 1.7,1.27 -2.6,2.74 -3.38,1.15 -2.2,2.27 -0.5,3.29 -1.46,2.13 -2.21,4.24 -1.34,5.69 2.46,4.13 -3.49,7.82 -3.47,7.75 4.23,-1.46 8.91,-0.05 12.94,0.76 8.36,1.68 11.59,-5.99 14.55,-3.9 8.36,5.87 9.77,0.89 12.02,0.98 5.82,0.25 1.89,-6.08 12.75,-4.76 4.96,0.61 9.79,-1.61 10.82,-0.96 4.52,2.89 4.35,-3.06 6.49,0.18 -0.74,1.86 -1.42,3.04 1.55,2.91 13.06,-0.56 2.87,2.11 12.21,2.11 4.03,0 14.22,-3.1 14.87,-2.83 3.91,1.6 7.97,-1.95 6.57,-0.09 -4.82,6.38 3.57,-0.77 13.34,3.84 -0.23,-0.11 7.3,0.41 7.37,0.46 3.02,2.13 10.39,-1.63 12.75,-3.29 2.95,-2.1 8.72,1.2 6.37,2.65 -7.84,4.86 3.8,2.94 4.76,1.34 2.32,-3.91 6.95,-1.94 7.72,-1.03 2.06,2.42 9.65,-0.63 9.72,-0.7 4.22,-4.63 5.08,-1.36 8.94,-3.55 5.05,2.87 12.06,-0.07 14.6,0.04 13.96,0.59 7.76,-2.9 13.28,-2.9 3.5,0 10.04,-5.95 7.1,-1.57 -4.34,6.43 6.55,0.73 7.97,5.26 0.87,2.79 4.97,-1.61 5.91,-2.67 2.21,-0.29 4.96,0.04 8.05,1.53 1.52,0.74 20.42,0.32 20.75,-1.23 -1.73,-0.54 -3.26,-1.67 -4.28,-2.74 0.33,-0.44 0.66,-1.12 1.13,-1.68l0.11 0.07c5.92,3.7 9.86,0.21 13.28,2.63 1.26,0.89 3.81,-0.19 3.9,0.06 -3.06,5.27 1.56,2.51 3.66,3.37 8.6,3.52 10.46,-6.94 14.37,-3.45 4.24,3.79 1.91,1.06 5.25,2.43 6.21,2.53 2.37,0.86 8.08,1.55 10.82,1.32 0.75,-2.62 6.93,-1.87 5.62,0.69 11.07,-4.54 16.33,-0.83 2.67,1.89 4.92,0.57 7.64,1.13 0.85,4.03 10.22,2.23 13.2,3.44 0.71,0.29 1.87,-1.56 2.71,-3.25 0.25,-0.07 0.52,-0.19 0.81,-0.41 1.41,-0.99 9.3,2.04 9.33,2.07 4.21,5.54 2.98,2.02 6.33,4.2 2.2,1.43 11.99,-3.01 11.99,3.96 0,0.84 7.52,0.89 7.55,0.86 5.74,-4.05 11.09,-1.05 9.01,-4.46 -1.68,-2.75 2.98,-3.94 4.68,-3.73 7.18,0.88 7.79,-1.26 10.85,-1.13 3.83,0.17 7.9,-1.84 8.36,-1.83 2.96,0.09 6.92,-1.16 4.87,0.77 -3.67,3.46 2.89,2.97 2.92,2.95 3.46,-1.41 8.64,-0.1 9.24,-0.34 5.78,-2.37 6.75,0.49 10.93,-0.69 8.05,-2.27 7.8,0.57 9.44,0.52 8.16,-0.24 -0.51,-3.04 -0.83,-3.35 -4.3,-4.25 4.26,-0.21 7.41,-2.43 4.18,-2.94 6.52,0.98 7.68,0.98 2.23,-0.01 3.27,3.86 2.71,4.74 -0.69,1.07 7.17,0.93 7.21,0.91 4.05,-1.65 7.46,-0.81 8.11,-1.23 9.38,-6.1 13.57,-1.45 15.44,-1.45l0.16 -0.63c1.67,0.17 3.55,-0.41 5.13,-0.68 1.78,-0.3 10.78,-2.54 11.37,-1.12 -2.06,3.55 2.38,3.11 3.43,2.68 2.57,-1.05 6.23,0.57 6.39,0.46 4.67,-3.3 3.57,-1.32 7.22,-1.75 1.87,-0.23 6.77,-0.92 8.53,-0.19 1.82,0.73 7.19,-2.82 6.88,-3.68 -5.37,-1.1 -2.78,-4.45 -0.24,-2.95 7.04,4.14 12.89,-0.54 14.1,1.37 2.78,4.43 4.74,0.97 5.74,4.28 0.78,2.58 1.99,1.54 2.16,2.5 0.21,1.26 6.32,2.01 6.73,1.7 3.68,-2.89 8.27,0.88 10.03,-0.36 4.15,-2.94 20.48,1.21 20.94,-0.87 -4.02,-4.79 -1.85,-1.33 0.29,-3.05 1.34,-1.06 7.2,-3.43 7.2,-2.05 -3.9,3.19 4.11,1.78 6.25,2.37 9.54,2.6 5.48,-0.92 11.06,-0.22 1.6,0.21 -1.15,3.6 9.24,2.71 0.59,-0.06 2.84,-0.75 4.74,-1.36 0.83,0.3 1.73,0.43 2.74,0.31 9.78,-1.2 10.57,1.56 15.28,0.6 4.42,-0.89 9.55,1.14 8.31,2.19 -5.89,4.99 9.14,-0.2 9.34,-0.37 7.66,-6.7 6.62,0.33 9.38,-1.61 2.76,-1.95 4.34,2.9 6.48,2.57 15.18,-2.42 8.58,-2.82 11.65,-1.81 1.14,0.37 7.7,2.16 10.27,-1.13 0.84,-1.07 3.6,-0.33 5.69,0.73 1.14,0.57 1.62,1.71 2.55,1.64 3.21,-0.23 7.72,-1.63 7.04,-1.63 -5.46,-0.01 -2.91,-1.32 -4.34,-2.04 -6.56,-3.23 -3.23,-0.24 -2.95,-3.39 0.55,-6.2 1.21,2.53 9.42,1.53 8.46,-1.03 1.34,2.23 9.48,3.88 13.9,2.81 12.01,-1.64 15.54,-1.49 8.14,0.34 9.8,-5.22 14.63,-3.25 8.8,3.61 6.27,-2.56 5.73,5.36 0,0.14 15.25,-0.95 15.31,-0.97 7.97,-3.26 12.92,3.14 18.52,0 4.4,-2.48 7.33,-2.98 9.34,-2.92 1.78,5.36 6.82,-0.65 6.9,-0.94 1.76,-6.8 3.9,0.2 3.88,0.23 -2.51,4.21 0.69,3.29 1.33,6.39 1.3,6.31 1.85,0.83 6.02,-0.03 0.57,-2.75 12.96,-2.86 14.39,-2.28 4.79,1.96 15.25,-5.37 16.18,-1.62 0.86,3.48 0.5,0.11 2.64,1.62 3.69,2.6 14.76,-3.54 19.01,-0.79 4.93,3.2 15.42,0.93 19.49,2.61 9.4,3.84 10.12,-0.49 7.32,-0.39 -9.01,0.36 6.17,-7.41 6.43,-3.93 0.28,3.89 5.89,1.23 8.2,2.32 7.66,3.59 4.06,-0.85 11.62,0.68 6.77,1.37 17.77,-9.31 19.21,-0.9 0.02,0.09 13.96,2.7 15.52,2.06 2.83,-1.16 17.31,-1.9 13.04,-5.01 -5.23,-3.79 6.72,-1.39 7.01,-1.18 3.74,2.64 5.7,1.21 8.26,0.22 1.15,2.39 4.75,0.47 10.42,2.42 9.1,3.12 -0.76,3.05 -1.4,4.56 3.14,-0.67 15.67,4.81 17.05,2.11 2.94,-5.72 27.73,-6.46 27.65,-4.56 -0.39,9.65 5.99,-3.47 14.03,-0.53 9.71,3.57 1.52,1.14 10.67,1.14 2.34,0 11.87,-2.46 11.92,-2.45 0.34,0.07 4.99,2.97 9.75,3.93 7.82,1.58 0.21,-1.95 0.86,-5.13 1.34,-6.47 -11.03,-5.64 -13.69,-6.37 -5.09,-1.41 -5.86,0.06 0.03,-1.13 6.28,-1.28 4.37,-0.46 8.82,-0.63 5.5,-0.21 8.75,2.46 9.75,2.42 12.34,-0.49 -0.13,6.94 5.18,8.15 -0.15,1.86 12.27,0.45 12.31,0.41 5.24,-6.1 6.18,-2.98 5.64,-2.3 -3.2,4 7.34,2.6 7.59,2.41 2.97,-2.09 19.55,4.89 20.84,-1.4 2.04,-9.94 2.48,-3.42 4.33,-6.34 3.49,-5.56 5.58,-0.48 3.37,1.58 -8.85,8.32 10.33,5.96 12.7,6.93 7.12,2.9 9.4,-2.84 12.13,-0.91 1.05,0.75 2.15,0.56 3.22,-0.2 1.82,0.72 4.42,-0.7 7.53,1.08 3.63,-2.09 11.06,-1.79 15.24,-0.36 16.66,5.74 2.72,-0.36 11.54,-2.16 1.52,-6.55 4.47,-0.41 10.41,-1.13 0.42,-0.05 20.88,2.32 22.59,2.67 10.36,2.09 5.83,-2.65 6.35,-2.72 4.4,-0.56 13.39,5.19 15.89,4.18 3.4,-1.39 13.76,-0.05 14.56,-0.61 5.41,-3.83 17.7,-3.62 18.07,-5.97 4.54,-0.35 -2.98,4.84 4.27,4.54 2.11,-0.09 15.14,1.17 15.24,1.13 5.74,-2.11 9.06,0.48 8.34,1.08 -4.31,3.65 1.8,1.85 1.83,1.82 2.84,-3.3 4.23,-1.31 5.08,-1.69 7.84,-3.54 16,2.75 19.44,0.61 3.34,-2.11 7.72,-1.22 11.27,-1.04 4.99,2.1 12.1,0.52 12.9,-0.1 3.2,-2.49 14.33,-2.12 14.33,-1.81 0,6.24 -0.6,1.06 3.66,2.8 9.85,4.02 11.13,-0.28 14.94,0.19 6.47,0.8 5.01,-0.89 10.64,0.05 10.95,1.83 6.18,-1.54 6.41,-2.46 1.79,-7.25 -4.43,-5.1 -4.88,-8.74 -0.53,-4.24 8.8,3.91 8.87,3.93 6.86,2.35 0.93,4.94 5.81,3.95 6.03,-1.21 11.69,2.25 13.32,1.1 1.67,-1.18 20.41,6.38 21.77,3.1 -2.49,-4.3 7.75,-3.85 7.91,-2.74 0.63,4.16 2.16,0.41 3.86,1.62 5.19,3.65 12.17,0.74 13.19,0.82 6.42,0.53 7.53,-2.96 13.39,-3.95 13.59,-2.29 2.79,1.92 7.01,2.77 8.08,1.63 19.85,-3.51 22.29,-2.52 0.36,0.15 0.83,0.16 1.35,0.05 0.33,0.31 0.62,0.7 0.89,1.21 2.19,4.27 11.12,1.95 14.81,1.21 5.84,-1.19 10.83,-2.11 15.81,1.01 9.72,6.1 19.81,0.67 15.93,0.2 -8.41,-1.03 4.57,-5.75 5.18,-3.6 0.8,2.74 6.89,3.8 7.25,3.54 3.43,-2.42 7.2,0.93 8.54,0 10.88,-7.66 17.24,-0.81 22.79,-3.74 6.48,-3.42 9.24,2.5 9.22,2.54 -4.32,6.66 3.29,-0.04 5.49,1.36 4.52,2.88 11.14,-5.7 12.8,-4.53 5.44,3.84 12.77,-3.15 18.99,-0.61 7.64,3.13 5.54,-1.51 8.53,-1.28 0.59,0.04 1.16,0 1.69,-0.13 4.31,-0.26 10.48,-1.97 12.55,0.49 2.07,2.49 8.19,2.41 8.32,2.51 3.52,2.58 9.91,1.29 12.09,3.87 3.21,3.84 19.23,-3.05 20.05,-0.11 0.95,3.45 4.55,0.06 7.66,0.79 2.2,0.51 6.94,2.48 8.16,0.93 4.35,-5.6 8.48,-3.3 9.03,-3.67 5.22,-3.52 12.95,-2.6 15.51,-4.14 2.2,-1.31 7.89,0.37 8.08,0.51 1.8,1.32 9.08,0.57 12.4,2.06 15.06,6.81 4.75,0.13 13.65,0.74 4.68,0.32 15.87,-5.18 18.55,-4.18 0.42,0.16 9.51,-2.62 7.09,0.66 -3.1,4.22 4.72,1.4 6.16,1.57 2.41,0.27 4.16,0.5 5.41,0.65 2.33,2.08 5.33,0.59 7.18,0.66 5.61,0.22 8.5,-2.74 10.12,-2.37 0.78,2.23 6.86,1.92 7.03,1.81 3.17,-2 6.9,-0.1 6.88,-0.09 -3.98,3.78 0.81,0.6 1.99,1.3 1.93,1.13 0.79,-0.03 2.43,-0.38 0.7,-3.31 5.46,0.06 6.09,0.03 4.49,-0.17 4.44,0 6.8,-2.84 2.3,-2.78 3.56,-2.1 5.03,-2.4 3.99,-0.81 1.2,-0.43 -0.96,2.95 -1.17,1.82 6.48,0.62 6.5,0.6 2.66,-1.86 2.34,-0.26 3.53,-0.74 1.59,-0.66 0.93,2.55 2.43,1.94 3.73,-1.52 9.24,0.95 10.49,-0.5 1.84,-2.14 5.33,1 6.98,-0.9 1.84,-2.15 4.41,-1.66 4.16,-2.9 -0.56,-2.77 0.67,-1.67 0.9,-2.14 0.03,6.96 15.22,6.31 15.62,6 6.7,-4.95 1.63,1.8 13.39,1.3 5.38,-0.22 6.56,6.06 8.46,-3.23 0.21,-1.01 12.18,-5.66 12.18,-0.78 0,1.7 7.03,4.46 11.02,2.12 1.84,-1.08 7.77,5.1 19.69,-2.65 0.04,-0.02 11.54,-0.62 11.66,-0.56 7.74,3.8 3.35,10.64 15.18,3.21 0.09,-0.06 27.35,-5.5 23.63,-1.41 -0.47,0.51 4.3,5.42 9,2.37 0.13,-0.08 8.21,-0.63 12.89,-4.82 2.44,-2.17 0.66,2.24 6.2,0.08 9.5,6.13 10.93,-4.93 10.48,6.08 -0.21,5.61 7.13,-4.15 10.53,-4.01 1.96,0.08 9,-5.08 8.06,-1.24 -1.1,4.41 10.85,-1.95 12.63,3.17 11.84,2.44 11.77,-4.07 20.54,-2.3 7.58,1.53 19.85,6.81 21.56,5.92 6.89,2.07 7.2,-1.42 4.69,-1.32 -9.01,0.35 6.17,-7.41 6.42,-3.93 0.3,3.87 5.91,1.23 8.21,2.32 7.66,3.59 4.07,-0.85 11.62,0.67 6.76,1.37 17.76,-9.3 19.2,-0.9 0.02,0.1 13.97,2.7 15.54,2.07 2.82,-1.16 17.3,-1.91 13.03,-5.01 -5.23,-3.81 6.71,-1.39 7.01,-1.19 3.74,2.64 5.7,1.22 8.25,0.23 1.16,2.38 4.75,0.47 10.43,2.42 9.09,3.12 -0.76,3.04 -1.39,4.55 3.14,-0.67 15.66,4.81 17.05,2.12 2.94,-5.72 27.71,-6.46 27.64,-4.56 -0.39,9.64 5.99,-3.47 14.03,-0.53 9.71,3.57 1.52,1.13 10.67,1.13 2.34,0 11.87,-2.45 11.92,-2.44 0.33,0.07 4.98,2.96 9.75,3.93 7.82,1.58 0.21,-1.96 0.86,-5.13 1.33,-6.47 -11.03,-5.64 -13.69,-6.38 -5.09,-1.4 -5.86,0.07 0.03,-1.13 6.28,-1.27 4.37,-0.46 8.81,-0.63 5.51,-0.21 8.76,2.46 9.76,2.42 12.34,-0.49 -0.13,6.95 5.18,8.15 -0.16,1.87 12.27,0.45 12.3,0.41 5.26,-6.09 6.19,-2.97 5.64,-2.3 -3.2,4 7.35,2.6 7.61,2.42 2.97,-2.1 19.54,4.88 20.83,-1.41 2.05,-9.94 2.48,-3.41 4.32,-6.34 3.51,-5.55 5.59,-0.49 3.38,1.59 -8.86,8.32 10.33,5.95 12.71,6.92 7.11,2.91 9.39,-2.83 12.11,-0.91 1.06,0.75 2.15,0.57 3.23,-0.19 1.82,0.71 4.42,-0.71 7.52,1.07 3.64,-2.08 11.06,-1.79 15.25,-0.35 16.67,5.72 2.72,-0.37 11.53,-2.17 1.52,-6.55 4.48,-0.4 10.42,-1.13 0.41,-0.04 20.88,2.32 22.6,2.67 10.35,2.09 5.82,-2.66 6.35,-2.71 4.38,-0.56 13.38,5.19 15.88,4.17 3.4,-1.4 13.76,-0.05 14.56,-0.6 5.41,-3.83 17.69,-3.62 18.07,-5.97 4.54,-0.35 -2.98,4.84 4.26,4.53 2.12,-0.09 15.15,1.17 15.25,1.13 5.73,-2.1 9.06,0.48 8.34,1.09 -4.31,3.65 1.81,1.84 1.83,1.82 2.84,-3.31 4.22,-1.31 5.08,-1.69 7.83,-3.56 16,2.74 19.43,0.59 3.35,-2.09 7.74,-1.21 11.29,-1.03 4.98,2.11 12.09,0.52 12.89,-0.09 3.19,-2.5 14.32,-2.13 14.32,-1.82 0,6.25 -0.59,1.06 3.67,2.8 9.85,4.02 11.13,-0.27 14.93,0.2 6.48,0.79 5.02,-0.9 10.65,0.05 10.95,1.83 6.18,-1.55 6.41,-2.47 1.78,-7.24 -4.43,-5.09 -4.88,-8.73 -0.53,-4.25 8.81,3.9 8.87,3.92 6.86,2.36 0.93,4.94 5.82,3.95 6.01,-1.21 11.69,2.25 13.31,1.11 1.68,-1.18 20.42,6.38 21.78,3.1 -2.5,-4.3 7.73,-3.85 7.9,-2.75 0.62,4.17 2.15,0.42 3.86,1.62 5.19,3.65 12.17,0.74 13.19,0.83 6.42,0.53 7.53,-2.97 13.39,-3.96 13.59,-2.28 2.8,1.92 7.01,2.77 8.08,1.63 19.86,-3.52 22.29,-2.51 0.37,0.15 0.83,0.16 1.36,0.05 0.31,0.3 0.62,0.69 0.88,1.2 2.19,4.28 11.12,1.96 14.81,1.21 5.83,-1.18 10.84,-2.1 15.81,1.01 9.72,6.1 19.8,0.68 15.93,0.2 -8.4,-1.03 4.56,-5.74 5.19,-3.6 0.79,2.75 6.88,3.79 7.23,3.55 3.45,-2.43 7.22,0.93 8.54,0 10.88,-7.66 17.24,-0.81 22.8,-3.75 6.48,-3.41 9.24,2.51 9.21,2.55 -4.3,6.66 3.3,-0.04 5.5,1.35 4.52,2.89 11.14,-5.7 12.8,-4.52 5.44,3.83 12.77,-3.16 18.99,-0.61 7.64,3.13 5.55,-1.53 8.54,-1.29 0.58,0.05 1.14,0 1.68,-0.12 4.31,-0.26 10.48,-1.99 12.55,0.49 2.07,2.48 8.19,2.41 8.32,2.5 3.51,2.59 9.92,1.3 12.08,3.88 3.22,3.82 19.25,-3.05 20.06,-0.11 0.96,3.44 4.55,0.06 7.66,0.77 2.2,0.51 6.94,2.5 8.16,0.94 4.35,-5.59 8.49,-3.3 9.03,-3.67 5.21,-3.52 12.95,-2.6 15.51,-4.13 2.2,-1.31 7.9,0.37 8.08,0.5 1.8,1.32 9.08,0.57 12.4,2.07 15.06,6.81 4.75,0.13 13.65,0.73 4.68,0.32 15.88,-5.17 18.55,-4.18 0.42,0.16 9.51,-2.62 7.09,0.67 -3.1,4.22 4.72,1.4 6.17,1.56 2.41,0.28 4.14,0.5 5.41,0.65 2.32,2.08 5.32,0.6 7.17,0.67 1.65,0.06 3.07,-0.15 4.28,-0.47 8.3,10.68 20.01,-0.95 26.93,0.45 7.68,1.55 16.7,-6.2 16.56,-2.37 -0.27,6.47 14.44,4.41 14.56,4.34 6.91,3.95 -2.24,3.51 10.92,4.07 12.59,0.54 8.04,-2.16 11.34,-2.43 11.69,-0.96 8.94,-3.14 12.49,-4.01 0.14,-0.03 12.85,-0.01 12.99,-0.07 6.81,-2.78 -0.06,5.42 3.94,7.82 0.05,0.03 12.44,0.26 13.05,-1.67 0.56,-1.76 14.42,-2.77 14.47,-2.74 6.19,4.37 7.68,-0.32 11.84,1.11 2.21,0.75 20.66,-3.87 20.73,-3.92 4.85,-3.41 22.61,1.19 22.96,1.14 4.72,-0.58 0.03,-1.26 7.28,-1.23 8.17,0.03 5.8,-7.72 11.37,-5.55 4.39,-2.84 8.23,3.35 10.11,2.07 4.78,-3.23 2.77,0.3 4.12,2.16 3.5,4.87 -1.83,4.17 -0.45,6.16 1.31,1.89 8.51,-0.55 13.36,0 0.07,0.01 14.91,-6.03 18.43,-3.54 7.02,4.95 5.04,0.91 11.41,1.93 2.06,0.34 14.06,5.66 14.23,5.62 5.36,-1.3 3.45,0.84 6.43,1.2 10.2,1.24 -2.4,-2.16 -2.02,-6.44 3.04,-0.79 5.2,-2.51 7.29,-2.85 5.9,-0.98 23.19,-3.36 28.42,0.33 15.8,11.15 7.83,-7.56 29.02,-0.29 4.86,1.66 -3.98,6.99 11.74,1.9 3.48,-1.13 15.54,-2.44 18.61,-2.3 7.84,0.33 3.77,-0.79 6.04,-1.25 10.74,-2.16 5.52,2.83 8.12,3.75 14.88,5.25 11.78,0.31 21.04,0.71 1.55,0.05 11.6,-1.28 11.77,-1.25 14.66,2.97 12.83,-1.52 24.65,-5.57 3.8,-1.3 3.27,0.77 6.87,-0.7 2.93,-1.2 9.08,3.21 9.38,4.64 3.04,0.62 2.23,4.01 2.46,4.37 1.85,2.87 25.81,-6.5 25.9,-6.57 9.28,-7.27 10.21,6.47 14.86,4.57 2.92,-1.2 22.71,0.57 23.5,1.2 1.74,1.37 10.72,-0.35 10.79,-0.4 3.99,-2.81 28.07,-0.83 16.39,-11.26 -3.53,-3.15 16.48,2.38 16.92,4.51 1.38,6.74 3.16,2.5 4.82,7.26 0.94,2.69 20.37,-7.25 19.87,-4.79 -1.73,8.42 15.64,0.54 20.09,3.68 8.18,5.79 15.33,-3.42 16.69,-2.81 5.43,2.47 1.87,-2.21 1.52,-2.43 -9.03,-5.59 -4.62,-10.99 -6.34,-19.35 -1.79,-8.69 4.78,-8.61 2.32,-20.34 -5.18,-1.77 1.24,-13.6 -3.2,-12.53 -3.88,0.95 1.33,-6.03 1.24,-7.98 -0.14,-3.36 9.72,-10.64 4.05,-10.42 -11.11,0.43 0.06,-0.97 -6.13,-10.38 2.18,-5.49 -2.27,-3.74 -0.08,-6.16 4.23,-4.63 4.78,-12.62 4.86,-12.75 3.08,-4.66 -1.88,-9.39 -2.39,-8.92 -4.13,3.68 1.36,-23.32 1.42,-23.41 7.5,-11.73 0.6,-7.38 -3.24,-15.04 -0.06,-0.12 0.54,-11.52 0.56,-11.56 7.83,-11.81 1.59,-17.68 2.68,-19.5 2.37,-3.96 -0.42,-10.92 -2.13,-10.92 -4.94,0 -0.24,-11.85 0.78,-12.06 9.38,-1.9 3.04,-3.05 3.27,-8.38 0.5,-11.65 -6.31,-6.64 -1.32,-13.27 0.31,-0.41 0.97,-15.44 -6.06,-15.47 0.47,-0.23 -0.63,-1.45 2.16,-0.9 1.26,0.25 0.76,-2.29 2.93,-4.12 1.92,-1.63 -1.25,-5.09 0.9,-6.9 1.48,-1.25 -1.02,-6.7 0.52,-10.41 0.61,-1.48 -2.63,-0.82 -1.97,-2.4 0.49,-1.18 -1.12,-0.86 0.75,-3.49 0.02,-0.03 1.24,-7.6 -0.6,-6.46 -3.42,2.15 -3.8,4.92 -2.98,0.96 0.3,-1.46 -0.39,-2.71 2.42,-4.98 2.87,-2.34 2.69,-2.29 2.87,-6.75 0.03,-0.61 -3.38,-5.34 -0.03,-6.02 0.35,-1.63 1.52,-0.49 0.38,-2.41 -0.7,-1.16 2.5,-5.91 -1.31,-1.97 -0.02,0.02 -1.93,-3.67 0.09,-6.81 0.11,-0.17 0.43,-6.19 -1.83,-6.97 -0.37,-1.6 2.62,-4.47 2.39,-10.02 -0.06,-1.83 1.44,-4.81 -0.67,-7.11 -0.14,-1.26 -0.37,-2.98 -0.65,-5.37 -0.17,-1.42 2.68,-9.17 -1.58,-6.1 -3.32,2.4 -0.51,-6.61 -0.67,-7.02 -1.01,-2.65 4.54,-13.75 4.22,-18.39 -0.62,-8.81 6.13,1.41 -0.74,-13.52 -1.51,-3.29 -0.75,-10.51 -2.09,-12.28 -0.14,-0.18 -1.83,-5.83 -0.51,-8.01 1.55,-2.53 0.62,-10.2 4.18,-15.36 0.37,-0.54 -1.95,-4.64 3.7,-8.95 1.57,-1.2 -0.43,-5.89 -0.94,-8.07 -0.73,-3.08 2.69,-6.65 -0.79,-7.6 -2.97,-0.81 3.98,-16.68 0.11,-19.87 -2.61,-2.14 -1.3,-8.48 -3.91,-11.97 -0.1,-0.13 -0.02,-6.19 -2.53,-8.25 -2.49,-2.04 -0.76,-8.15 -0.49,-12.43 0.13,-0.53 0.17,-1.08 0.13,-1.66 -0.24,-2.97 4.45,-0.89 1.29,-8.47 -2.57,-6.16 4.49,-13.42 0.61,-18.8 -1.18,-1.64 7.49,-8.2 4.57,-12.68 -1.41,-2.17 5.35,-9.72 -1.37,-5.44 -0.04,0.02 -6.01,-2.71 -2.57,-9.14 2.97,-5.5 -3.95,-11.79 3.79,-22.58 0.93,-1.31 -2.45,-5.05 0,-8.46 0.25,-0.35 -0.81,-6.38 -3.58,-7.17 -2.17,-0.62 2.6,-13.46 3.63,-5.14 0.48,3.84 5.96,-6.14 -0.2,-15.79 -3.14,-4.92 -2.22,-9.87 -1.02,-15.65 0.75,-3.66 3.09,-12.5 -1.22,-14.67 -0.52,-0.26 -0.91,-0.56 -1.22,-0.88 0.11,-0.52 0.1,-0.98 -0.05,-1.34 -1.01,-2.42 4.19,-14.09 2.54,-22.08 -0.86,-4.18 -5.11,6.52 -2.8,-6.95 1,-5.81 4.53,-6.91 3.99,-13.27 -0.07,-1 2.86,-7.93 -0.84,-13.07 -1.2,-1.68 2.58,-3.2 -1.62,-3.82 -1.12,-0.16 -1.57,-10.3 2.77,-7.83 3.31,-1.35 -4.32,-19.91 -3.13,-21.57 1.16,-1.61 -2.33,-7.23 -1.12,-13.19 1,-4.84 -1.61,1.03 -3.98,-5.76 -0.02,-0.07 -8.25,-9.31 -3.96,-8.79 3.67,0.44 1.5,6.61 8.81,4.83 0.93,-0.23 4.34,4.5 2.49,-6.34 -0.95,-5.58 0.75,-4.13 -0.05,-10.55 -0.47,-3.77 3.86,-5.04 -0.21,-14.81 -1.74,-4.21 3.49,-3.62 -2.81,-3.62 -0.32,0 -0.69,-11.02 1.83,-14.2 0.62,-0.78 2.22,-7.82 0.1,-12.76 -0.18,-3.52 -1.08,-7.86 1.03,-11.17 2.18,-3.41 -4.17,-11.5 -0.6,-19.26 0.39,-0.85 -1.62,-2.22 1.71,-5.03 0.03,-0.03 1.85,-6.1 -1.84,-1.82 -0.61,0.71 -3.22,-2.58 -1.09,-8.26 0.04,-0.1 -1.23,-13.01 -1.14,-15.1 0.31,-7.19 -4.94,0.27 -4.58,-4.24 2.37,-0.36 2.16,-12.54 6.02,-17.9 0.56,-0.78 -0.79,-11.05 0.61,-14.41 1.03,-2.48 -4.77,-11.39 -4.21,-15.74 0.07,-0.52 4.86,3.97 2.74,-6.29 -0.35,-1.7 -2.74,-21.97 -2.69,-22.38 0.73,-5.89 -5.47,-8.82 1.14,-10.32 1.82,-8.74 7.97,5.07 2.18,-11.44 -1.45,-4.14 -1.74,-11.49 0.36,-15.1 -1.8,-3.07 -0.36,-5.65 -1.09,-7.45 0.77,-1.07 0.96,-2.15 0.2,-3.2 -1.94,-2.7 3.85,-4.95 0.92,-12.01 -0.98,-2.34 1.41,-21.36 -6.99,-12.57 -2.08,2.18 -7.21,0.11 -1.6,-3.36 2.95,-1.83 -3.63,-2.25 6.4,-4.27 6.36,-1.3 -0.7,-17.71 1.42,-20.65 0.19,-0.26 1.6,-10.69 -2.44,-7.54 -0.68,0.54 -3.83,-0.38 2.32,-5.57 0.04,-0.04 1.47,-12.35 -0.41,-12.19 -1.22,-5.27 -8.72,7.09 -8.23,-5.13 0.04,-0.99 -2.65,-4.22 -2.44,-9.68 0.17,-4.4 -0.65,-2.51 0.64,-8.73 1.2,-5.82 -0.28,-5.06 1.14,-0.02 0.74,2.63 -0.1,14.89 6.43,13.57 3.21,-0.66 6.77,6.89 5.18,-0.86 -0.98,-4.73 -3.9,-9.33 -3.97,-9.67 -0.01,-0.05 2.47,-9.49 2.47,-11.81 0,-9.05 2.46,-0.94 -1.14,-10.57 -2.98,-7.96 10.26,-14.27 0.53,-13.89 -1.92,0.07 -1.18,-24.47 4.6,-27.39 2.73,-1.38 -2.8,-13.78 -2.13,-16.89 -1.52,0.62 -1.45,10.39 -4.6,1.38 -1.97,-5.63 -0.03,-9.18 -2.44,-10.32 0.99,-2.54 2.44,-4.47 -0.23,-8.18 -0.21,-0.29 -2.64,-12.13 1.2,-6.96 3.14,4.24 3.89,-10.1 5.05,-12.91 0.64,-1.55 -1.98,-15.35 -2.08,-15.37 -8.48,-1.43 2.29,-12.33 0.91,-19.04 -1.55,-7.48 2.94,-3.92 -0.69,-11.5 -1.09,-2.29 1.57,-7.85 -2.34,-8.13 -3.51,-0.25 4.33,-15.3 3.97,-6.37 -0.11,2.77 4.27,2.07 0.39,-7.26 -1.69,-4.03 0.6,-14.42 -2.63,-19.3 -2.78,-4.21 3.42,-15.19 0.79,-18.84 -1.52,-2.12 1.88,-1.76 -1.63,-2.61 -3.79,-0.92 3.62,-11.29 1.63,-16.04 -0.58,-1.4 -0.47,-13.67 2.31,-14.24 0.86,-4.14 6.4,-4.68 0.03,-5.97 -3.13,-0.63 -2.2,-3.8 -6.46,-1.31 -0.03,0.01 -7.09,-2.1 -0.22,-3.85 0.28,-0.07 6.35,-5.07 0.94,-6.83 -0.05,-2 0.45,-4.91 2.95,-9.25 3.17,-5.56 -3.29,-10.46 0,-18.35 0.02,-0.06 1.12,-15.18 0.98,-15.17 -7.99,0.53 -1.76,3.04 -5.41,-5.68 -1.99,-4.78 3.63,-6.43 3.28,-14.5 -0.15,-3.49 4.34,-1.62 1.5,-15.38 -1.67,-8.07 -4.95,-1.02 -3.92,-9.39 1.02,-8.15 -7.8,-8.8 -1.55,-9.34 3.19,-0.28 0.18,-3.57 3.44,2.91 0.72,1.43 2.04,-1.1 2.05,4.31 0,0.68 1.42,-3.8 1.65,-6.97 0.07,-0.92 -1.07,-1.4 -1.66,-2.53 -1.06,-2.08 -1.81,-4.82 -0.73,-5.65 3.32,-2.54 1.51,-9.03 1.14,-10.16 -1.02,-3.05 -0.61,3.49 1.81,-11.54 0.35,-2.13 -4.55,-3.69 -2.58,-6.42 1.96,-2.74 -5.14,-1.7 1.63,-9.29 0.16,-0.2 5.4,-15.11 0.37,-9.27 -1.07,1.25 -3.11,-3.84 -2.21,-8.22 0.97,-4.67 -1.82,-5.45 -0.61,-15.13 0.13,-1 0,-1.9 -0.31,-2.73 0.61,-1.88 1.31,-4.1 1.38,-4.69 0.89,-10.29 -2.53,-7.57 -2.74,-9.16 -0.71,-5.52 2.84,-1.5 0.22,-10.96 -0.6,-2.1 0.83,-10.05 -2.39,-6.19 -1.39,0 0.99,-5.8 2.07,-7.12 1.74,-2.12 -1.76,-4.28 3.08,-0.29 2.09,-0.47 -2.09,-16.64 0.87,-20.74 1.25,-1.75 -2.55,-6.29 0.37,-9.94 0.31,-0.4 -0.45,-6.46 -1.72,-6.67 -0.97,-0.17 0.09,-1.36 -2.52,-2.13 -3.35,-1.01 0.15,-2.94 -4.33,-5.71 -1.92,-1.19 2.8,-6.98 -1.38,-13.96 -1.51,-2.52 1.87,-5.07 2.98,0.25 0.87,0.3 4.46,-5.03 3.72,-6.82 -0.73,-1.75 -0.04,-6.6 0.18,-8.46 0.45,-3.61 -1.56,-2.51 1.77,-7.14 0.12,-0.17 -1.53,-3.79 -0.46,-6.34 0.43,-1.04 0.88,-5.44 -2.71,-3.39 -1.43,-0.59 0.83,-9.5 1.14,-11.26 0.26,-1.58 0.86,-3.44 0.68,-5.09l0.64 -0.16c0,-1.85 -4.7,-6.01 1.46,-15.3 0.43,-0.65 -0.42,-4.02 1.25,-8.02 0.02,-0.04 0.15,-7.83 -0.92,-7.15 -0.89,0.55 -4.8,-0.48 -4.79,-2.7 0,-1.14 -3.96,-3.47 -0.99,-7.6 2.24,-3.12 -1.85,-11.61 2.45,-7.33 0.32,0.31 3.14,8.89 3.39,0.82 0.05,-1.62 -2.82,-1.38 -0.53,-9.36 1.19,-4.14 -1.69,-5.1 0.7,-10.83 0.24,-0.59 -1.08,-5.72 0.34,-9.15 0.02,-0.03 0.51,-6.54 -2.98,-2.89 -1.95,2.03 -0.68,-1.89 -0.77,-4.82 -0.01,-0.47 2.01,-4.49 1.85,-8.3 -0.13,-3.02 2.02,-3.63 1.13,-10.75 -0.21,-1.67 1,-6.3 3.77,-4.63 3.44,2.07 0.42,-3.23 4.51,-8.92 0.02,-0.04 -0.02,-7.49 -0.87,-7.49 -7.04,0 -2.56,-9.69 -4,-11.87 -2.2,-3.32 1.35,-2.11 -4.25,-6.27 -0.03,-0.02 -3.08,-7.85 -2.08,-9.24 0.22,-0.29 0.34,-0.57 0.41,-0.81 1.71,-0.82 3.58,-1.98 3.28,-2.68 -1.22,-2.95 0.59,-12.25 -3.47,-13.08 -0.57,-2.7 0.76,-4.92 -1.14,-7.56 -3.74,-5.21 1.53,-10.61 0.84,-16.19 -0.76,-6.12 3.22,3.87 1.89,-6.86 -0.71,-5.66 0.98,-1.85 -1.58,-8 -1.38,-3.32 1.38,-1 -2.44,-5.2 -3.53,-3.87 7.03,-5.72 3.48,-14.24 -0.87,-2.09 1.92,-6.66 -3.4,-3.62 -0.25,-0.09 0.84,-2.62 -0.06,-3.87 -2.44,-3.4 1.07,-7.29 -2.66,-13.15 -3.14,-4.94 2.9,-1.73 4.39,3.01 1.56,-0.33 1.99,-19.05 1.25,-20.57 -4.57,-9.28 1.75,-15.39 2.78,-13.39 0.93,0.2 -0.38,-13.91 -2.24,-15.13 -4.58,-3.03 -0.79,-6.08 -3.64,-8.52 0.06,-0.92 -0.09,-1.85 -0.79,-2.83 -0.05,-0.08 -2.18,-6.82 -2.08,-6.97 1.76,-2.75 5,5.87 4.58,0.16 -0.09,-1.2 -1.63,-0.31 -0.43,-3.66 0.95,-2.61 -2.01,-5.04 2.51,-7.7 3.68,-2.16 -0.48,-10.82 2.58,-18.14 2.63,-6.34 -4.16,-3.97 -3.24,-6.17 1.09,-2.62 -1.31,-4.3 0.07,-9.91 0.64,-0.7 1.34,-1.47 0.84,-2.35 -0.9,-1.55 -4.25,-3.99 -3.2,-6.1 0.9,-1.78 3.31,-3.93 3.31,-4.4 0,-1.91 2.31,-4.44 -2.15,-2.69 -0.04,-0.03 -0.25,-3.71 -0.48,-4.25 -0.97,-2.33 -2.5,-0.62 -1.3,-4.04 1.47,-0.29 0.39,-0.85 1.62,-1.1 0.4,-0.94 -1.34,0.38 -0.16,-2.54 0.01,-0.02 0.14,-5.24 -1.34,-5.12 -1.63,0.13 0.9,-0.88 0.76,-3.93 -0.05,-1.3 1.31,0.08 0.18,-2.1 -0.59,-1.16 2.22,-5.57 -1.7,-5.43 -2.39,0.1 1.49,-2.97 0.67,-3.67 -1.04,-0.86 0.92,-0.68 -0.57,-2.94 -0.76,-1.15 2.67,-0.68 1.24,-4.69 -0.04,-0.09 -3.41,0.22 -0.67,-2.21 0.06,-0.06 0.69,-5.66 0.57,-5.79 -2.97,-2.93 1.69,-3.27 -1.84,-6.42 -2.26,-2.01 -2.11,0.68 -1.98,-2.6 0.05,-1.21 -3.36,-0.96 1.18,-3.2 2.45,-1.22 -0.28,-5.2 2.47,-5.09 0.3,0.02 1.33,-1.92 2.93,-2.95 0.87,-0.57 2.11,-2.84 0.61,-2.88 -6.16,-0.13 -5.83,-0.2 -11.3,2.02 -2.61,1.07 -0.99,-0.27 -4.68,1.92 -0.02,0.01 -3.32,-0.43 -1.24,-1.67 1.51,-0.9 -3.71,-0.4 -4.14,0.83 -0.66,0.23 -6.78,0.9 -6.67,-0.43 0.05,-0.55 -4.91,-2.08 -5.17,-1.36 -0.37,1.05 -0.93,-0.68 -2.98,1.71 -1.9,2.19 -1.99,-2.46 -5.57,0.06 -0.46,0.31 -1.54,-0.43 -2.59,0.3 -2.66,1.87 -5.18,-1.19 -7.72,-0.14 -1.29,0.53 -4.29,0.33 -4.92,-0.71 -1.36,-2.3 -1.41,0.09 0.61,-2.13 -3.61,0.75 -1.8,-1.91 -5.22,1.12 -0.69,0.61 -9.52,0.8 -11.28,1.95 -0.71,0.46 -5.46,1.07 -6.6,-1.21 -0.66,-1.32 -8.94,-0.72 -8.97,-0.65 -0.33,0.79 2.9,1.56 -1.08,3.14 -0.13,0.05 -5.78,-1.78 -7.43,-0.61 -0.56,0.38 -2.4,-0.85 -4.83,-0.55 -4.01,0.49 -3.91,0.92 -8.22,0.73 -0.95,-0.04 -4.16,0.48 -4.1,1.06 0.23,1.81 -2.71,2.44 -0.45,3.72 0.22,0.11 1.11,2.8 -0.01,2.21 -1.62,-0.85 -2.25,0.13 -2.42,-2.16 -0.06,-0.75 -3.05,-0.37 -1.27,-3.36 0.76,-1.26 -1,0.47 0.31,-2.06 0.15,-0.29 -5.33,-2.73 -6.05,-2.13 -1.69,1.42 -3.55,-1.44 -7.49,1.33 -0.16,0.11 -11.87,1.12 -10.36,-0.75 1.56,-1.93 -4.37,-0.59 -5.38,-1.2 -0.77,-0.47 -5.67,-0.34 -5.67,-0.27 0,2.6 -0.49,-0.08 0.02,2.4 0.58,2.84 -7.09,-2.63 -8.08,-2.29 -2.3,0.81 -4.86,-0.48 -8.21,1.3 -0.81,0.43 -2.98,-0.17 -4.6,0.96 -0.56,0.4 -2.93,-0.78 -4.26,0.16 -2.22,1.56 0.91,-4.15 -6.49,-1.51 -2.37,0.84 -0.85,-1.07 -4.58,0.45 -0.02,0.01 -3.68,0.19 -4.5,-1.06 -0.37,-0.55 -8.7,0.78 -5.48,-2.78 1.26,-1.38 -7.14,-0.66 -7.99,1.74 -1.2,0.41 -2.5,-0.63 -4.38,0.14 -1.95,0.81 -0.33,-1.46 -3.91,1.75 -0.9,0.79 -8.6,3.87 -7.37,0.8 0.14,-0.35 -1,0.15 -1.91,-1.17 -0.31,-0.45 -2.97,-1.39 -4.6,-0.53l-0.07 0.03 -0.01 -0.5c-0.03,-1.49 -2.33,-0.25 -2.89,0.61l-0.13 0.18c-4.09,0.13 -10.47,0.06 -9.33,1.85 0.86,1.37 0.64,2.01 1.36,3.26l-0.03 0.06c-2.26,4.49 -2.01,1.12 -3.23,1.17 -3.32,0.13 -0.59,0.27 -2.63,-1.96 -3.18,-3.5 -3.52,1.12 -6.48,-1.83 -0.13,-0.12 -5.79,0.51 -5.85,0.57 -2.45,2.71 -2.13,-0.63 -2.23,-0.67 -4.05,-1.41 -3.56,1.98 -4.73,1.23 -2.28,-1.48 -2.09,0.47 -2.97,-0.56 -0.7,-0.82 -3.8,3.03 -3.7,0.66 0.15,-3.89 -4.31,-1.1 -5.48,-1.69 -2.21,-1.11 -0.81,0.24 -2.13,0.18 -3.06,-0.13 -4.08,2.37 -3.96,0.75 0.13,-1.47 -5.14,-1.33 -5.16,-1.32 -2.94,1.17 -1.61,-0.56 -2.57,-0.15 -0.24,1.22 -0.81,0.14 -1.11,1.6 -3.46,1.19 -1.73,-0.33 -4.08,-1.29 -0.53,-0.23 -4.26,-0.43 -4.29,-0.48 1.77,-4.41 -0.78,-2.12 -2.7,-2.12 -0.49,0 -2.65,2.38 -4.45,3.27 -2.14,1.04 -4.6,-2.28 -6.17,-3.17 -0.88,-0.49 -1.65,0.2 -2.36,0.84 -5.67,1.36 -7.35,-1.02 -10,0.06 -2.23,0.91 0.16,-5.82 -6.24,-3.21 -7.37,3.03 -16.13,-1.09 -18.31,2.57 -2.68,4.47 -5.13,1.53 -7.77,2.47 -3.37,1.2 -2.48,-0.33 -3.7,-0.42 -5.75,-0.42 2.96,2.79 0.17,4.54 -0.16,0.1 -6.96,-2 -7.04,-2.06 -0.99,-0.7 -1.92,-0.84 -2.85,-0.79 -2.46,-2.82 -5.55,0.93 -8.6,-3.6 -1.24,-1.84 -15.47,-3.15 -15.28,-2.23 2.02,1.03 -4.14,7.29 -13.51,2.76 -1.53,-0.73 -20.43,-0.31 -20.76,1.24 4.78,1.47 8.02,7.46 3.03,4.35 -5.91,-3.7 -9.84,-0.21 -13.27,-2.63 -1.26,-0.88 -3.81,0.18 -3.91,-0.06 3.07,-5.27 -1.55,-2.52 -3.65,-3.37 -8.6,-3.51 -10.47,6.94 -14.38,3.45 -4.23,-3.79 -1.89,-1.06 -5.24,-2.42 -6.2,-2.54 -2.37,-0.87 -8.08,-1.57 -10.82,-1.32 -0.75,2.63 -6.93,1.87 -5.62,-0.68 -11.07,4.55 -16.33,0.83 -2.67,-1.87 -4.91,-0.55 -7.64,-1.11 -0.84,-4.04 -10.22,-2.24 -13.2,-3.45 -0.7,-0.3 -1.88,1.55 -2.71,3.24 -0.24,0.07 -0.51,0.2 -0.81,0.42 -1.4,0.98 -9.31,-2.03 -9.33,-2.07 -4.2,-5.55 -2.97,-2.02 -6.33,-4.21 -2.2,-1.42 -11.98,3.02 -11.98,-3.96 0,-0.84 -7.53,-0.88 -7.57,-0.86 -5.72,4.05 -11.07,1.06 -8.99,4.46 1.68,2.75 -2.99,3.94 -4.68,3.74 -7.18,-0.88 -7.79,1.25 -10.85,1.12 -3.84,-0.16 -7.9,1.84 -8.38,1.83 -2.95,-0.08 -6.92,1.17 -4.86,-0.76 3.68,-3.46 -2.9,-2.97 -2.93,-2.95 -3.45,1.41 -8.63,0.09 -9.23,0.34 -5.78,2.37 -6.75,-0.49 -10.93,0.68 -8.06,2.28 -7.8,-0.55 -9.45,-0.51 -8.14,0.24 0.52,3.04 0.84,3.35 4.31,4.26 -4.26,0.21 -7.41,2.43 -4.17,2.94 -6.51,-0.98 -7.67,-0.97 -2.24,0 -3.27,-3.88 -2.72,-4.75 0.69,-1.07 -7.18,-0.94 -7.22,-0.92 -4.04,1.66 -7.44,0.82 -8.09,1.24 -9.38,6.1 -13.57,1.45 -15.46,1.45l-0.14 0.63c-1.68,-0.18 -3.56,0.41 -5.15,0.68 -1.78,0.3 -10.77,2.54 -11.36,1.12 2.07,-3.55 -2.37,-3.11 -3.42,-2.68 -2.58,1.06 -6.23,-0.58 -6.41,-0.46 -4.66,3.3 -3.55,1.31 -7.21,1.75 -1.87,0.23 -6.77,0.91 -8.54,0.19 -1.8,-0.74 -7.17,2.81 -6.88,3.67 5.38,1.11 2.8,4.46 0.26,2.96 -7.05,-4.14 -12.9,0.54 -14.1,-1.37 -2.79,-4.43 -4.74,-0.97 -5.75,-4.28 -0.79,-2.59 -1.99,-1.54 -2.16,-2.5 -0.22,-1.26 -6.33,-2.01 -6.72,-1.7 -3.7,2.88 -8.28,-0.87 -10.05,0.37 -4.14,2.92 -20.46,-1.22 -20.93,0.85 4.02,4.79 1.86,1.34 -0.29,3.05 -1.34,1.07 -7.19,3.44 -7.19,2.06 3.89,-3.19 -4.13,-1.78 -6.25,-2.36 -9.55,-2.61 -5.48,0.91 -11.06,0.21 -1.61,-0.21 1.14,-3.6 -9.25,-2.7 -0.58,0.04 -2.84,0.74 -4.73,1.36 -0.84,-0.32 -1.75,-0.45 -2.75,-0.32 -9.78,1.2 -10.56,-1.55 -15.27,-0.6 -4.43,0.89 -9.57,-1.14 -8.31,-2.19 5.89,-4.98 -9.15,0.2 -9.36,0.38 -7.66,6.69 -6.6,-0.34 -9.36,1.61 -2.77,1.94 -4.35,-2.91 -6.49,-2.57 -15.18,2.4 -8.57,2.81 -11.65,1.8 -1.15,-0.37 -7.69,-2.15 -10.26,1.12 -0.84,1.08 -3.61,0.34 -5.7,-0.72 -1.14,-0.58 -1.63,-1.71 -2.55,-1.64 -3.21,0.23 -7.72,1.63 -7.04,1.63 5.46,0.02 2.91,1.33 4.35,2.03 6.55,3.23 3.22,0.25 2.94,3.41 -0.54,6.19 -1.2,-2.55 -9.43,-1.54 -8.44,1.03 -1.33,-2.23 -9.48,-3.88 -13.89,-2.81 -12,1.63 -15.52,1.49 -8.15,-0.35 -9.81,5.22 -14.63,3.24 -8.81,-3.6 -6.27,2.57 -5.75,-5.36 0.01,-0.12 -15.24,0.96 -15.29,0.99 -7.97,3.25 -12.93,-3.15 -18.53,0 -4.39,2.47 -7.33,2.97 -9.34,2.91 -1.77,-5.35 -6.83,0.65 -6.9,0.93 -1.77,6.8 -3.9,-0.19 -3.89,-0.22 2.52,-4.22 -0.68,-3.3 -1.32,-6.4 -1.29,-6.3 -1.85,-0.82 -6.01,0.03 -0.58,2.76 -12.98,2.87 -14.39,2.29 -4.8,-1.97 -15.26,5.37 -16.19,1.61 -0.86,-3.47 -0.5,-0.09 -2.64,-1.61 -3.68,-2.6 -14.76,3.55 -19.01,0.78 -4.92,-3.2 -15.42,-0.93 -19.49,-2.59 -9.41,-3.85 -10.12,0.49 -7.31,0.37 9,-0.35 -6.17,7.42 -6.44,3.93 -0.29,-3.87 -5.9,-1.23 -8.21,-2.3 -7.65,-3.6 -4.05,0.84 -11.61,-0.69 -6.76,-1.37 -17.76,9.3 -19.21,0.9 -0.01,-0.1 -13.95,-2.7 -15.52,-2.06 -2.83,1.15 -17.31,1.9 -13.04,5.01 5.24,3.8 -6.72,1.38 -7.01,1.18 -3.75,-2.63 -5.7,-1.21 -8.25,-0.23 -1.17,-2.37 -4.75,-0.47 -10.43,-2.41 -9.09,-3.12 0.76,-3.04 1.4,-4.56 -3.14,0.67 -15.66,-4.8 -17.06,-2.11 -2.94,5.72 -27.71,6.45 -27.63,4.56 0.37,-9.65 -6,3.47 -14.03,0.52 -9.72,-3.57 -1.52,-1.13 -10.68,-1.13 -2.34,0 -11.87,2.45 -11.91,2.44 -0.35,-0.06 -4.99,-2.96 -9.76,-3.93 -7.83,-1.57 -0.21,1.96 -0.87,5.14 -1.33,6.46 11.04,5.63 13.7,6.38 5.08,1.4 5.86,-0.06 -0.02,1.12 -6.28,1.27 -4.38,0.46 -8.82,0.64 -5.51,0.2 -8.77,-2.47 -9.76,-2.43 -12.35,0.49 0.13,-6.94 -5.18,-8.15 0.16,-1.87 -12.27,-0.45 -12.3,-0.41 -5.25,6.1 -6.18,2.98 -5.64,2.3 3.19,-4 -7.35,-2.59 -7.6,-2.42 -2.98,2.11 -19.54,-4.88 -20.84,1.41 -2.05,9.94 -2.47,3.42 -4.32,6.34 -3.51,5.56 -5.59,0.49 -3.38,-1.58 8.86,-8.33 -10.33,-5.96 -12.71,-6.93 -7.1,-2.9 -9.38,2.84 -12.11,0.91 -1.06,-0.74 -2.15,-0.57 -3.23,0.2 -1.82,-0.72 -4.42,0.7 -7.52,-1.08 -3.64,2.08 -11.07,1.79 -15.25,0.35 -16.66,-5.72 -2.72,0.37 -11.53,2.17 -1.52,6.55 -4.48,0.41 -10.43,1.13 -0.4,0.05 -20.88,-2.32 -22.59,-2.67 -10.34,-2.08 -5.81,2.66 -6.35,2.72 -4.39,0.56 -13.39,-5.2 -15.88,-4.18 -3.4,1.4 -13.77,0.05 -14.56,0.61 -5.41,3.82 -17.69,3.62 -18.07,5.97 -4.54,0.35 2.99,-4.85 -4.26,-4.53 -2.12,0.08 -15.15,-1.18 -15.26,-1.14 -5.72,2.1 -9.05,-0.48 -8.33,-1.08 4.31,-3.65 -1.81,-1.84 -1.83,-1.82 -2.84,3.3 -4.23,1.31 -5.08,1.69 -7.84,3.55 -16.01,-2.75 -19.43,-0.6 -3.35,2.1 -7.73,1.21 -11.29,1.04 -4.98,-2.11 -12.09,-0.53 -12.88,0.09 -3.2,2.49 -14.34,2.12 -14.34,1.82 0,-6.25 0.6,-1.07 -3.65,-2.8 -9.86,-4.02 -11.14,0.26 -14.94,-0.21 -6.48,-0.79 -5.03,0.9 -10.66,-0.05 -10.94,-1.83 -6.17,1.55 -6.39,2.47 -1.79,7.25 4.42,5.1 4.87,8.73 0.54,4.25 -8.8,-3.9 -8.86,-3.92 -6.87,-2.36 -0.94,-4.94 -5.83,-3.95 -6.01,1.21 -11.69,-2.25 -13.31,-1.11 -1.68,1.19 -20.42,-6.37 -21.78,-3.1 2.5,4.31 -7.73,3.86 -7.9,2.75 -0.62,-4.16 -2.15,-0.42 -3.86,-1.61 -5.18,-3.66 -12.16,-0.75 -13.19,-0.83 -6.42,-0.52 -7.52,2.96 -13.39,3.95 -13.59,2.29 -2.79,-1.92 -7.01,-2.77 -8.08,-1.62 -19.86,3.52 -22.29,2.51 -0.37,-0.14 -0.82,-0.15 -1.36,-0.04 -0.31,-0.31 -0.62,-0.7 -0.88,-1.21 -2.19,-4.27 -11.12,-1.95 -14.81,-1.21 -5.83,1.18 -10.84,2.1 -15.8,-1.01 -9.74,-6.09 -19.81,-0.67 -15.94,-0.19 8.4,1.02 -4.56,5.74 -5.18,3.6 -0.79,-2.75 -6.89,-3.8 -7.24,-3.55 -3.45,2.42 -7.22,-0.93 -8.54,0 -10.88,7.65 -17.24,0.81 -22.8,3.74 -6.48,3.42 -9.24,-2.5 -9.22,-2.54 4.31,-6.66 -3.29,0.04 -5.48,-1.36 -4.52,-2.89 -11.15,5.7 -12.82,4.53 -5.43,-3.84 -12.76,3.16 -18.98,0.6 -7.64,-3.13 -5.55,1.53 -8.54,1.3 -0.59,-0.05 -1.14,0 -1.68,0.11 -4.32,0.27 -10.48,1.99 -12.54,-0.49 -2.09,-2.48 -8.2,-2.4 -8.33,-2.5 -3.51,-2.58 -9.92,-1.29 -12.08,-3.87 -3.22,-3.83 -19.25,3.05 -20.06,0.1 -0.95,-3.44 -4.55,-0.05 -7.67,-0.77 -2.19,-0.51 -6.93,-2.49 -8.14,-0.94 -4.36,5.6 -8.5,3.31 -9.04,3.67 -5.21,3.52 -12.94,2.6 -15.51,4.14 -2.2,1.31 -7.9,-0.37 -8.08,-0.51 -1.79,-1.32 -9.08,-0.57 -12.4,-2.06 -15.06,-6.81 -4.75,-0.13 -13.64,-0.74 -4.68,-0.32 -15.89,5.18 -18.56,4.18 -0.42,-0.16 -9.5,2.62 -7.08,-0.67 3.1,-4.21 -4.74,-1.4 -6.18,-1.56 -2.41,-0.27 -4.14,-0.5 -5.41,-0.65 -2.32,-2.08 -5.32,-0.59 -7.16,-0.66 -5.61,-0.23 -8.52,2.74 -10.14,2.37 -0.78,-2.23 -6.86,-1.92 -7.03,-1.81 -3.17,2 -6.9,0.1 -6.87,0.08 3.97,-3.77 -0.81,-0.59 -1.98,-1.28 -1.94,-1.14 -0.8,0.02 -2.44,0.36 -0.69,3.32 -5.45,-0.04 -6.08,-0.02 -4.5,0.17 -4.45,0 -6.81,2.85 -2.3,2.77 -3.56,2.09 -5.02,2.39 -4.01,0.81 -1.21,0.43 0.96,-2.96 1.16,-1.81 -6.49,-0.61 -6.52,-0.59 -2.65,1.86 -2.33,0.26 -3.52,0.74 -1.59,0.66 -0.93,-2.55 -2.42,-1.94 -3.75,1.52 -9.26,-0.95 -10.51,0.5 -1.84,2.14 -5.32,-1 -6.97,0.9 -1.85,2.16 -4.41,1.66 -4.16,2.9 0.55,2.78 -0.67,1.68 -0.91,2.14 -0.03,-6.96 -15.2,-6.31 -15.62,-6.01 -6.68,4.95 -1.62,-1.79 -13.39,-1.3 -5.38,0.23 -6.54,-6.04 -8.46,3.24 -0.21,1.02 -12.16,5.66 -12.16,0.77 0,-1.69 -7.03,-4.46 -11.03,-2.11 -1.84,1.08 -7.76,-5.09 -19.69,2.65 -0.04,0.02 -11.53,0.63 -11.66,0.56 -7.74,-3.81 -3.35,-10.63 -15.18,-3.21 -0.08,0.06 -27.35,5.5 -23.63,1.41 0.47,-0.51 -4.3,-5.42 -9.01,-2.37 -0.12,0.08 -8.19,0.63 -12.87,4.82 -2.44,2.17 -0.67,-2.24 -6.21,-0.07 -9.49,-6.14 -10.92,4.92 -10.49,-6.09 0.23,-5.6 -7.12,4.16 -10.52,4.01 -1.96,-0.08 -9.01,5.09 -8.05,1.24 1.08,-4.41 -10.85,1.95 -12.65,-3.17 -11.84,-2.43 -11.76,4.07 -20.53,2.3 -7.58,-1.53 -19.85,-6.8 -21.55,-5.91 -6.89,-2.08 -7.21,1.42 -4.7,1.32 9.01,-0.35 -6.17,7.41 -6.43,3.92 -0.29,-3.87 -5.89,-1.23 -8.21,-2.31 -7.65,-3.6 -4.05,0.84 -11.61,-0.68 -6.77,-1.37 -17.77,9.3 -19.21,0.9 -0.01,-0.1 -13.95,-2.7 -15.52,-2.06 -2.84,1.16 -17.31,1.9 -13.04,5 5.23,3.81 -6.72,1.39 -7.02,1.19 -3.74,-2.64 -5.69,-1.22 -8.25,-0.23 -1.16,-2.38 -4.74,-0.47 -10.42,-2.42 -9.09,-3.12 0.76,-3.04 1.4,-4.55 -3.14,0.67 -15.66,-4.81 -17.06,-2.12 -2.94,5.74 -27.71,6.46 -27.64,4.56 0.38,-9.64 -5.99,3.47 -14.02,0.53 -9.73,-3.57 -1.52,-1.13 -10.68,-1.13 -2.34,0 -11.86,2.45 -11.91,2.44 -0.35,-0.07 -4.99,-2.96 -9.77,-3.92 -7.82,-1.59 -0.2,1.94 -0.86,5.13 -1.33,6.47 11.04,5.63 13.7,6.37 5.08,1.41 5.85,-0.06 -0.02,1.13 -6.28,1.27 -4.38,0.46 -8.82,0.63 -5.51,0.22 -8.77,-2.45 -9.76,-2.41 -12.35,0.48 0.13,-6.96 -5.19,-8.16 0.17,-1.87 -12.26,-0.45 -12.3,-0.41 -5.24,6.09 -6.17,2.97 -5.64,2.3 3.2,-4 -7.34,-2.6 -7.59,-2.42 -2.97,2.1 -19.54,-4.88 -20.84,1.41 -2.05,9.94 -2.47,3.41 -4.32,6.34 -3.5,5.55 -5.59,0.49 -3.39,-1.59 8.87,-8.32 -10.32,-5.94 -12.69,-6.92 -7.12,-2.9 -9.39,2.83 -12.13,0.91 -1.05,-0.75 -2.14,-0.57 -3.22,0.19 -1.81,-0.71 -4.42,0.71 -7.52,-1.07 -3.64,2.08 -11.07,1.79 -15.25,0.35 -16.66,-5.72 -2.72,0.37 -11.54,2.17 -1.52,6.55 -4.47,0.4 -10.42,1.13 -0.41,0.04 -20.88,-2.32 -22.59,-2.66 -10.35,-2.1 -5.82,2.65 -6.35,2.71 -4.39,0.56 -13.38,-5.2 -15.88,-4.18 -3.4,1.4 -13.77,0.05 -14.56,0.6 -5.41,3.83 -17.7,3.63 -18.07,5.97 -4.55,0.35 2.99,-4.84 -4.27,-4.53 -2.11,0.09 -15.15,-1.16 -15.25,-1.13 -5.72,2.1 -9.05,-0.48 -8.33,-1.09 4.32,-3.65 -1.81,-1.84 -1.83,-1.81 -2.84,3.3 -4.23,1.3 -5.08,1.69 -7.84,3.55 -16.01,-2.75 -19.44,-0.6 -3.35,2.09 -7.72,1.21 -11.28,1.03 -4.98,-2.11 -12.09,-0.52 -12.88,0.1 -3.21,2.49 -14.34,2.12 -14.34,1.81 0,-6.24 0.59,-1.06 -3.65,-2.8 -9.86,-4.02 -11.14,0.27 -14.95,-0.19 -6.48,-0.79 -5.02,0.89 -10.64,-0.06 -10.94,-1.83 -6.18,1.56 -6.4,2.48 -1.8,7.24 4.42,5.09 4.87,8.73 0.53,4.24 -8.8,-3.91 -8.86,-3.93 -6.86,-2.35 -0.94,-4.94 -5.83,-3.95 -6.01,1.21 -11.69,-2.25 -13.31,-1.11 -1.68,1.18 -20.42,-6.37 -21.78,-3.1 2.5,4.3 -7.73,3.86 -7.9,2.75 -0.62,-4.16 -2.16,-0.41 -3.86,-1.62 -5.18,-3.64 -12.17,-0.74 -13.19,-0.83 -6.42,-0.52 -7.52,2.97 -13.39,3.96 -13.59,2.28 -2.79,-1.92 -7.02,-2.77 -8.07,-1.63 -19.84,3.52 -22.28,2.52 -0.37,-0.16 -0.82,-0.17 -1.36,-0.05 -0.32,-0.31 -0.62,-0.7 -0.88,-1.21 -2.2,-4.28 -11.12,-1.96 -14.81,-1.21 -5.84,1.18 -10.84,2.1 -15.8,-1.01 -9.74,-6.1 -19.82,-0.68 -15.94,-0.2 8.4,1.03 -4.56,5.74 -5.18,3.6 -0.79,-2.75 -6.89,-3.79 -7.24,-3.55 -3.45,2.43 -7.22,-0.93 -8.54,0 -10.89,7.67 -17.25,0.82 -22.8,3.75 -6.48,3.42 -9.24,-2.51 -9.22,-2.54 4.31,-6.66 -3.3,0.03 -5.49,-1.36 -4.52,-2.88 -11.15,5.7 -12.81,4.53 -5.43,-3.84 -12.75,3.15 -18.97,0.6 -7.65,-3.13 -5.55,1.53 -8.54,1.29 -0.6,-0.05 -1.15,0 -1.68,0.12 -4.33,0.26 -10.49,1.99 -12.55,-0.48 -2.09,-2.49 -8.2,-2.41 -8.33,-2.5 -3.52,-2.59 -9.92,-1.3 -12.09,-3.89 -3.21,-3.82 -19.24,3.06 -20.05,0.11 -0.95,-3.44 -4.56,-0.05 -7.67,-0.77 -2.19,-0.51 -6.94,-2.5 -8.14,-0.94 -4.36,5.59 -8.49,3.31 -9.04,3.67 -5.21,3.52 -12.95,2.61 -15.51,4.14 -2.2,1.32 -7.9,-0.37 -8.07,-0.5 -1.8,-1.32 -9.09,-0.58 -12.41,-2.08 -15.06,-6.81 -4.75,-0.12 -13.64,-0.73 -4.69,-0.32 -15.89,5.17 -18.56,4.18 -0.42,-0.16 -9.51,2.63 -7.09,-0.67 3.1,-4.21 -4.72,-1.4 -6.16,-1.56 -2.41,-0.28 -4.15,-0.49 -5.42,-0.65 -2.33,-2.08 -5.33,-0.6 -7.17,-0.66 -5.61,-0.22 -8.51,2.74 -10.12,2.37 -0.78,-2.24 -6.87,-1.92 -7.03,-1.82 -3.17,2.01 -6.91,0.12 -6.89,0.1 3.98,-3.77 -0.8,-0.61 -1.97,-1.29 -1.95,-1.13 -0.8,0.03 -2.44,0.36 -0.69,3.32 -5.46,-0.05 -6.08,-0.03 -4.5,0.18 -4.44,0 -6.81,2.86 -2.3,2.77 -3.56,2.09 -5.03,2.39 -4,0.81 -1.19,0.43 0.97,-2.96 1.15,-1.81 -6.49,-0.61 -6.52,-0.6 -2.65,1.86 -2.33,0.27 -3.52,0.76 -1.58,0.64 -0.93,-2.56 -2.42,-1.96 -3.75,1.54 -9.25,-0.95 -10.51,0.51 -1.84,2.13 -5.32,-1.01 -6.97,0.9 -1.85,2.15 -4.41,1.65 -4.17,2.9 0.64,3.13 -1.01,1.33 -0.92,2.41 0.1,1.4 -0.76,1.57 -1.26,1.91 -1.39,0.99 -5.49,-1.6 -5.68,-1.8 -3.57,-3.82 -2.63,-1.29 -3.79,-2.1 -1.53,-1.08 -2.42,-0.85 -3.22,-0.92 -0.41,-2.08 -1.19,-3.6 -2.56,-3.54 -2.54,0.09 -3.36,-1.67 -3.84,-1.11 -1.81,2.09 -8.09,0.86 -8.7,1.29 -2.22,1.58 -6.69,-0.18 -7.43,0.72 -1.05,1.3 -4.13,0.33 -4.38,-0.19 -0.79,-1.58 -0.78,-0.54 -1.52,-1.06 -1.36,-0.94 -1.96,0.03 -2.42,-0.29 -4.31,-3.05 -9.38,3 -11.57,1.58 -0.43,-0.27 -10.21,-2.9 -9.99,-1.09 0.37,3.09 -0.9,2.61 0.12,3.33 5.48,3.9 2.22,5.49 1.58,3.87 -1.44,-3.57 -6.85,-0.33 -6.69,-4.21 0.08,-2.01 -0.54,-0.45 -1.27,-1.29 -1.35,-1.57 -3.32,-1.28 -3.73,-1.45 -2.62,-1.06 -4.47,0.05 -5.3,-0.29 -3.43,-1.4 -2.79,1.14 -4.25,1.08 -2.5,-0.09 -1.29,0.41 -2.1,0.6 -5.42,1.34 -0.29,-1 -3.05,-1.33 -2.24,-0.27 -13.17,-0.88 -14.73,0.1 -1.17,0.72 -2.32,0.34 -3.31,0.28 -0.17,-1.54 0.33,-2.02 -1.98,-0.89 -3.11,1.53 -3.08,0.69 -5.12,0.93 -3.73,0.45 0.47,-0.04 -0.03,-1.46 -0.91,-0.21 -7.61,-1.5 -8,-1.34 -4.79,1.96 -1.2,1.61 -7.27,2.35 -3.7,0.45 -1.87,0.17 -5,0.17 -4.1,0 -2.62,0.79 -4.23,1.06 -3.62,0.6 -1.32,-0.31 -5.47,0.74 0.23,-1.43 4.78,-2.25 0.31,-2.25 -2.74,0 -3.54,0.45 -4.7,0.45 -1.9,0 -4.7,1.32 -4.7,0.15 0,-1.04 -5.73,-2.37 -6.96,-1.92 -4.33,1.59 -4.11,0.4 -8.18,0.42 -0.7,0 -0.23,0.6 0.64,1.42 -1.51,0.68 0.65,1.89 1.12,2.3 2.83,2.4 1.59,0.83 -2.03,0.97 -3.66,0.14 -2.31,1.77 -2.94,-1.91 -0.17,-1 -7.46,-2.31 -9.42,-2.07 -4.14,0.5 -0.86,1.17 -7.67,0.87 -2.9,-0.11 2.06,5.73 -1.5,2.19 -5.04,-5.02 -9.84,-1.25 -10.99,-2.06 -2.52,-1.78 -6.65,3 -5.97,-0.31 0.61,-3.01 -0.03,-0.02 -1.51,-1.07 -3.08,-2.15 -5,1.88 -7.7,1.77 -3.11,-0.12 -4.32,2.2 -4.7,0.86 -0.89,-3.06 -2.11,-0.36 -3.96,-1.59 -2.14,-1.43 -5.09,-0.05 -5.75,-0.52 -1.67,-1.18 -5.83,0.56 -5.33,0.97 2.18,1.8 4.86,-0.6 0.71,2.31 -1.17,0.83 -2.86,0.85 -4.36,0.56 -0.77,-2.16 -3.36,-4.45 -4.57,-5.09l0 -0.01z"
    />
  </svg>
);

export default SvgComponent;
