import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}
const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="France" invert={invert}>
          Paris
        </Office>
      </li>
      <li>
        <Office name="Contact" invert={invert}>
          ad.servicesandco@gmail.com
          <br />
          +33 6 15 90 11 33
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
