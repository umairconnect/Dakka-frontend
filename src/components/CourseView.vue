<template>
    <section>
        <router-link to="/courses"> Back </router-link>
        <div class="container course_list">
            <div class="row">
                <div class="col-lg-4" v-for="course in courses" :key="course.id">
                    <div class="course_img">
                        <img src="../assets/img/courseintroimage.jpg" />
                    </div>
                    <h1>{{ course.title }}</h1>
                    <p>{{course.description}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "CourseView",
        data () {
            return {
                courses: [],
                courseId: this.$route.params.id
            }
        },
        mounted() {

            fetch("http://127.0.0.1:8000/api/getcoursesid/" + this.courseId)
                .then(res => res.json())
                .then(data => this.courses = data)
        },
    }
</script>

<style scoped>

</style>