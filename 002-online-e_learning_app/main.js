 const instructorSection = document.querySelector('.other-details');
 const coursesCards = document.querySelector('.course-cards');
 let courseCard = "";
 
 const courses = [
   {
     courseId: 1,
     courseName: "Javascript Tutorial Full Course - Beginner to Pro (2024)",
     courseInstructor: "SuperSimpleDev",
     courseInstructorImg: "./images/portrait-businessman-office-3.jpg",
     courseInstructorRole: "Instructor",
     coursecategory: "Javascript",
     courseUrl: "https://www.youtube.com/watch?v=EerdGm-ehJQ",
     courseImg: "./images/software-developer-writing-algorithm-front-computer-with-green-screen-chroma-key-mockup-ai-development-agency-cyber-security-app-developer-programming-machine-learning-software.jpg",
  },
   {
     courseId: 2,
     courseName: "Node JS Full Course | Backend Development Course | Part 1 ",
     courseInstructor: "Sangam Mukherjee",
     courseInstructorImg: "/002-online-e_learning_app/images/black-businessman-sad-expression.jpg",
     courseInstructorRole: "Instructor",
     coursecategory: "Nodejs",
     courseUrl: "https://www.youtube.com/watch?v=MIJt9H69QVc",
     courseImg: "/002-online-e_learning_app/images/software-developer-writing-algorithm-front-computer-with-green-screen-chroma-key-mockup-ai-development-agency-cyber-security-app-developer-programming-machine-learning-software.jpg",
  },
   {
     courseId: 3,
     courseName: "Express JS Full Course",
     courseInstructor: "Anson the Developer",
     courseInstructorImg: "/002-online-e_learning_app/images/AACEB2F0-E209-417D-9A4B-5A6B66C76B65.jpeg",
     courseInstructorRole: "Instructor",
     coursecategory: "Nodejs",
     courseUrl: "https://m.youtube.com/watch?v=nH9E25nkk3I",
     courseImg: "/002-online-e_learning_app/images/software-developer-writing-algorithm-front-computer-with-green-screen-chroma-key-mockup-ai-development-agency-cyber-security-app-developer-programming-machine-learning-software.jpg",
  },
   {
     courseId: 4,
     courseName: "Javascript Full Course For Beginners | Complete All-in-one Tutorial | 8 hours",
     courseInstructor: "Dave Gray",
     courseInstructorImg: "/002-online-e_learning_app/images/AACEB2F0-E209-417D-9A4B-5A6B66C76B65.jpeg",
     courseInstructorRole: "Instructor",
     coursecategory: "Javascript",
     courseUrl: "https://www.youtube.com/watch?v=EfAl9bwzVZk",
     courseImg: "/002-online-e_learning_app/images/software-developer-writing-algorithm-front-computer-with-green-screen-chroma-key-mockup-ai-development-agency-cyber-security-app-developer-programming-machine-learning-software.jpg",
  }
]

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
 
