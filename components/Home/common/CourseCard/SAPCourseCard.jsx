import Image from "next/image";
import styles from "./CourseCard.module.css";
import Link from "next/link";
import sap from "../../../../public/assets/courseCard/sap.png";
import lessons from "../../../../public/assets/courseCard/lessons.png";
import level from "../../../../public/assets/courseCard/level.png";
import rating4 from "../../../../public/assets/courseCard/rating4.png";
import students from "../../../../public/assets/courseCard/students.png";

const SAPCourseCard = ({ slug }) => {
  return (
    <>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src={sap}
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>
          SAP - Complete Training
        </h1>
        <div className={styles.stats_contianer}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson : 8
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            Student : 150
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Beginner
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>
    </>
  );
};

export default SAPCourseCard;