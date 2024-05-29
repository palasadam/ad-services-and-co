import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/foto2.jpeg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section
      title="Les voyageurs
      "
      image={{ src: imageLaptop, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            ON S&apos;OCCUPE DE TOUT & ON LE FAIT COMME SI C&apos;ETAIT CHEZ
            NOUS !{" "}
          </strong>
        </p>
      </div>
      {/* <Blockquote
        author={{ name: "Debra Fiscal", role: "CEO of Unseal" }}
        className="mt-12"
      >
        Studio_clone were so regular with their progress updates we almost began
        to think they were automated!
      </Blockquote> */}
    </Section>
  );
};

export default Build;
