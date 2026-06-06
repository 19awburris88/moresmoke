import useInView from "../hooks/useInView";

export default function AnimateIn({
  children,
  delay = 0,
  from = "bottom",
  className = "",
}) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`reveal reveal--${from}${visible ? " is-visible" : ""}${className ? " " + className : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
