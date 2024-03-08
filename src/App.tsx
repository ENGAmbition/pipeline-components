import Card from "../lib/components/Card/Card";
import "./index.css";

import iconImage1 from '../lib/components/Icons/BrainIcon/brainicon.svg';
import iconImage2 from '../lib/components/Icons/DNAIcon/dna-icon-2.svg';
import iconImage3 from '../lib/components/Icons/PeerHelpIcon/peer-help.svg';

export default function Home() {
  return (
    <div className="flex justify-center"> 
      <div className="grid grid-cols-3">
        <Card
          title="Pipeline to Clinical Experience"
          content="We link students with volunteer roles at Guelph's healthcare clinics, offering training in basic clinical tasks and insights into clinic operations."
          icon={iconImage1}
        />
        <Card
          title="Pipeline to Research"
          content="We link first and second year students to research opportunities in various departments, aiming to provide early research experience and exposure in their university career."
          buttonText="Get Started"
          icon={iconImage2}
        />
        <Card
          title="MCAT@Guelph"
          content="Begin MCAT prep early at MCAT®Guelph! Our leads are content experts or high achievers on the MCAT (90+ percentile, including a top scorer). Each session costs only $2. Check our schedule for Upcoming Sessions."
          buttonText="Get Started"
          icon={iconImage3}
        />
      </div>
    </div>
  );
}
