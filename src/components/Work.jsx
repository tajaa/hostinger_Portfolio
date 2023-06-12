import Workitem from "./Workitem";

const data = [
  {
    year: 2023,
    title: "Engineer",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, minima!",
  },
  {
    year: 2021,
    title: "Engineer",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, impedit in sequi obcaecati sed sit, dolore illo eveniet labore a officia rem, tenetur quas voluptatem perspiciatis distinctio facere harum dolor.",
  },
  {
    year: 2020,
    title: "Engineer",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, minima!",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
