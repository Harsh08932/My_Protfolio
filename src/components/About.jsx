import about from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={about} className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I’m a software developer with 3+ years of experience in building applications with
            React, Java, and Spring Boot. I’ve also worked with C/C++ to design
            credit models, which gave me valuable experience in problem‑solving
            and system design. I enjoy learning new technologies and creating
            solutions that are both practical and user‑friendly.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
