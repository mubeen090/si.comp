jsx
import styles from "./PopularCoursesSection.module.css";
import Heading from "../common/Heading/Heading";
import AICourseCard from "../common/CourseCard/AICourseCard";
import MLCourseCard from "../common/CourseCard/MLCourseCard";
import DSCourseCard from "../common/CourseCard/DSCourseCard";
import Link from "next/link";

const PopularCoursesSection = () => {
  return (
    <>
      <div className={styles.pop_course_section} id="courses">
        <Heading
          para1={"Explore Programs"}
          heading={"Our Most Popular Class"}
          para2={
            "Let's join our famous class, the knowledge provided will definitely be useful for you."
          }
        />
        <div className={styles.pop_course_container}>
          <AICourseCard slug={"ai"} />
          <MLCourseCard slug={"ml"} />
          <DSCourseCard slug={"data-science"} />
        </div>
        <div className={styles.btn_container}>
          <Link href="/explore">
            <button className={styles.btn}>Explore All Courses</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PopularCoursesSection;