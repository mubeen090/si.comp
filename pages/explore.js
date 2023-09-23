jsx
import React from "react";
import CourseCard from "../common/CourseCard/CourseCard";
import PythonCourseCard from "../common/CourseCard/PythonCourseCard";
import SAPCourseCard from "../common/CourseCard/SAPCourseCard";
import TallyCourseCard from "../common/CourseCard/TallyCourseCard";
import APITestingCourseCard from "../common/CourseCard/APITestingCourseCard";
import BDCourseCard from "../common/CourseCard/BDCourseCard";
import CSCourseCard from "../common/CourseCard/CSCourseCard";
import DevOpsCourseCard from "../common/CourseCard/DevOpsCourseCard";
import DjangoCourseCard from "../common/CourseCard/DjangoCourseCard";
import JavaCourseCard from "../common/CourseCard/JavaCourseCard";
import OracleCloudCourseCard from "../common/CourseCard/OracleCloudCourseCard";
import OracleCourseCard from "../common/CourseCard/OracleCourseCard";
import PowerBICourseCard from "../common/CourseCard/PowerBICourseCard";

const ExplorePage = () => {
  // Fetch and store the remaining courses data from your backend or API
  const remainingCourses = [
    { slug: "cyber-security" },
    { slug: "big-data" },
    { slug: "oracle-developer" },
    { slug: "django" },
    { slug: "tally" },
    { slug: "java" },
    { slug: "python" },
    { slug: "digital-marketing" },
  ];

  return (
    <div>
      <h1>Explore All Courses</h1>
      <div>
        {remainingCourses.map((course) => {
          switch (course.slug) {
            case "python":
              return <PythonCourseCard key={course.slug} slug={course.slug} />;
            case "sap":
              return <SAPCourseCard key={course.slug} slug={course.slug} />;
            case "tally":
              return <TallyCourseCard key={course.slug} slug={course.slug} />;
            case "api-testing":
              return <APITestingCourseCard key={course.slug} slug={course.slug} />;
            case "big-data":
              return <BDCourseCard key={course.slug} slug={course.slug} />;
            case "cyber-security":
              return <CSCourseCard key={course.slug} slug={course.slug} />;
            case "devops":
              return <DevOpsCourseCard key={course.slug} slug={course.slug} />;
            case "django":
              return <DjangoCourseCard key={course.slug} slug={course.slug} />;
            case "java":
              return <JavaCourseCard key={course.slug} slug={course.slug} />;
            case "oracle-cloud":
              return <OracleCloudCourseCard key={course.slug} slug={course.slug} />;
            case "oracle-developer":
              return <OracleCourseCard key={course.slug} slug={course.slug} />;
            case "power-bi":
              return <PowerBICourseCard key={course.slug} slug={course.slug} />;
            default:
              return <CourseCard key={course.slug} slug={course.slug} />;
          }
        })}
      </div>
    </div>
  );
};

export default ExplorePage;