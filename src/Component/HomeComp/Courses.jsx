import CoursesCard from "./CourseCard";

const Courses = () => {
  return (
    <div className="py-5">
      <h2 className="text-center text-4xl font-bold py-5">Courses</h2>
      <div className="flex justify-between pb-5">
        <CoursesCard data="HTML" />
        <CoursesCard data="CSS" />
        <CoursesCard data="JS" />
      </div>
    </div>
  );
};

export default Courses;
