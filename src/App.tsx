// App.tsx

import Card from "./Card/card";
import "./index.css";
import iconImage1 from './Assets/peer-help.png';
import iconImage2 from './Assets/brainicon.png';
import iconImage3 from './Assets/dna-icon.png';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-screen">
      <div className="card-container">
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
    </main>
  );
}
