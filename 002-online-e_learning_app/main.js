 const instructorSection = document.querySelector('.other-details');
 const coursesCards = document.querySelector('.course-cards');
 const miniCards = document.querySelector('.mini-course-cards');
 let miniCourseCard = "";
 let courseCard = "";
 let instructorCard = "";

 const courses = [
   {
     courseId: 1,
     courseName: "Javascript Tutorial Full Course - Beginner to Pro (2024)",
     courseInstructor: "SuperSimpleDev",
     courseInstructorImg: "/002-online-e_learning_app/images/AC8565D2-4085-416E-A1E5-0813BDBB314E.jpeg",
     courseInstructorRole: "Instructor",
     coursecategory: "Javascript",
     courseUrl: "https://www.youtube.com/watch?v=EerdGm-ehJQ",
     courseImg: "./images/software-developer-writing-algorithm-front-computer-with-green-screen-chroma-key-mockup-ai-development-agency-cyber-security-app-developer-programming-machine-learning-software.jpg",
     courseIcon:"fab fa-js fa-2x"
  },
   {
     courseId: 2,
     courseName: "Node JS Full Course | Backend Development Course | Part 1 ",
     courseInstructor: "SangamMukherjee",
     courseInstructorImg: "/002-online-e_learning_app/images/black-businessman-sad-expression.jpg",
     courseInstructorRole: "Instructor",
     coursecategory: "Nodejs",
     courseUrl: "https://www.youtube.com/watch?v=MIJt9H69QVc",
     courseImg: "/002-online-e_learning_app/images/software-developer-writing-algorithm-front-computer-with-green-screen-chroma-key-mockup-ai-development-agency-cyber-security-app-developer-programming-machine-learning-software.jpg",
     courseIcon: "fab fa-node-js fa-2x"
  },
   {
     courseId: 3,
     courseName: "Express JS Full Course",
     courseInstructor: "AnsonTheDeveloper",
     courseInstructorImg: "/002-online-e_learning_app/images/AACEB2F0-E209-417D-9A4B-5A6B66C76B65.jpeg",
     courseInstructorRole: "Instructor",
     coursecategory: "Nodejs",
     courseUrl: "https://m.youtube.com/watch?v=nH9E25nkk3I",
     courseImg: "/002-online-e_learning_app/images/software-developer-writing-algorithm-front-computer-with-green-screen-chroma-key-mockup-ai-development-agency-cyber-security-app-developer-programming-machine-learning-software.jpg",
     courseIcon: "fab fa-node-js fa-2x"
  },
   {
     courseId: 4,
     courseName: "Javascript Full Course For Beginners | Complete All-in-one Tutorial | 8 hours",
     courseInstructor: "DaveGray",
     courseInstructorImg: "/002-online-e_learning_app/images/1D8B6891-1314-4881-B394-2ACAED71434C.webp",
     courseInstructorRole: "Instructor",
     coursecategory: "Javascript",
     courseUrl: "https://www.youtube.com/watch?v=EfAl9bwzVZk",
     courseImg: "/002-online-e_learning_app/images/software-developer-writing-algorithm-front-computer-with-green-screen-chroma-key-mockup-ai-development-agency-cyber-security-app-developer-programming-machine-learning-software.jpg",
     courseIcon: "fab fa-js fa-2x"
  },
   {
     courseId: 5,
     courseName: "Reactjs Full Course For Beginners | Complete All-in-one Tutorial | 9 hours",
     courseInstructor: "DaveGray",
     courseInstructorImg: "/002-online-e_learning_app/images/1D8B6891-1314-4881-B394-2ACAED71434C.webp",
     courseInstructorRole: "Instructor",
     coursecategory: "Reactjs",
     courseUrl: "https://www.youtube.com/watch?v=EfAl9bwzVZk",
     courseImg: "/002-online-e_learning_app/images/software-developer-writing-algorithm-front-computer-with-green-screen-chroma-key-mockup-ai-development-agency-cyber-security-app-developer-programming-machine-learning-software.jpg",
     courseIcon: "fab fa-react fa-2x"
}
]

 console.log(courses[0].courseIcon)

 courses.map((course) => {
   courseCard += `
    <div class="course-card">
            <img class="course-img"
              src=${course.courseImg}
              alt="course">
            <h2>${course.coursecategory}</h2>
            <p class="course-name">${course.courseName}</p>
            <div class="instructor">
              <img class="instructor-img"
                src=${course.courseInstructorImg}
                alt="instructor">
              <div class="details">
                <p class="name">${course.courseInstructor}</p>
                <p class="role">Instructor</p>
              </div>
            </div>
          </div>
  `;
   coursesCards.innerHTML = courseCard;
 })


 courses.map((course) => {

   const instCourse = courses.filter(aCourse => aCourse.courseInstructor ===
     course.courseInstructor);
   const instCoursecount = instCourse.length;

   instructorCard += `
    <div class="instructor" data-info=${course.courseInstructor}>
          <img class="instructor-img"
            src=${course.courseInstructorImg}
            alt="instructor">
          <div class="details">
            <p class="name">${course.courseInstructor}</p>
            <p class="role">${course.courseInstructorRole}</p>
          </div>
          <div class="number-of-courses">
            <h2>${instCoursecount}</h2>
            <p>Courses</p>
          </div>
        </div>
  `;
   instructorSection.innerHTML = instructorCard;

   let filteredCourse = [];

   const instructorCourses = document.querySelectorAll('.instructor');
   instructorCourses.forEach((instructorCourse) => {
     instructorCourse.addEventListener('click', () => {
       courseCard = "";
       const courseTutor = instructorCourse.getAttribute(
         'data-info');
       courses.forEach(course => {
         filteredCourse = courses.filter((course) =>
           courseTutor === course.courseInstructor);
       })

       filteredCourse.map(course => {
         courseCard += `
          <div class="course-card">
            <img class="course-img"
              src=${course.courseImg}
              alt="course">
            <h2>${course.coursecategory}</h2>
            <p class="course-name">${course.courseName}</p>
            <div class="instructor">
              <img class="instructor-img"
                src=${course.courseInstructorImg}
                alt="instructor">
              <div class="details">
                <p class="name">${course.courseInstructor}</p>
                <p class="role">Instructor</p>
              </div>
            </div>
          </div>
  `;
         coursesCards.innerHTML = courseCard;

       })
     })
   })
 });



 courses.map((course) => {
   const courseCatergories = courses.filter((cCourse) => cCourse
     .coursecategory === course.coursecategory)
   const courseCategoryCount = courseCatergories.length;

   miniCourseCard += `
    <div class="mini-course-card">
          <i class="${course.courseIcon}"></i>
          <div class="details">
            <p>${courseCategoryCount} courses</p>
            <h2>${course.coursecategory}</h2>
          </div>
        </div>
   `;
   miniCards.innerHTML = miniCourseCard;
 })