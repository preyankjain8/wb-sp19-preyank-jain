import courses from './courses.json';

class CourseService {
  constructor() {
    this.courses = courses;
  }
  addCourse = course => {
    if(course === undefined || course.title === '') {
      course = {
        id: (new Date()).getTime(),
        title: 'New Course'
      }
    }
    this.courses.push(course)
    return this.courses
  }

  findCourseById = courseId =>
    this.courses = this.courses.find(
      course => course.id === courseId
    )
  findAllCourses = () =>
    this.courses;
  deleteCourse = deleteCourse =>
    this.courses = this.courses.filter(
      course => course.id !== deleteCourse.id
    )

  deleteWidget = (courseId, moduleId, lessonId, topicId, widgetId) =>{
   var course = this.courses.find(c => c.id === courseId);
   var module = course.modules.find(m => m.id === moduleId);
   var lesson = module.lessons.find(l => l.id === lessonId);
   var topic = lesson.topics.find(t => t.id === lessonId);
   return topic.widgets.filter(widget => widget.id !== widgetId)
 }

   createWidget = (topicId, widget) => {
       if(widget === undefined || widget.title === '') {
         widget = {
           id: (new Date()).getTime(),
           Name: 'New Widget'
         }
       }

       for(var c in  this.courses){
        for (var mod in c.modules){
            for (var les in mod.lessons){
                for(var topic in les.topics){
                    if(topic.id === topicId)
                    {
                        topic.push(widget)
                    }
                }
          }
        }
       }
       return this.courses
     }

}
export default CourseService;