import Card from "./Card/Card";
import "./index.css";
import iconImage1 from './Icons/BrainIcon/brainicon.png';
import iconImage2 from './Icons/DNAIcon/dna-icon.png';
import iconImage3 from './Icons/PeerHelpIcon/peer-help.png';

export default function Home() {
  return (
      <div>
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
  );
}
