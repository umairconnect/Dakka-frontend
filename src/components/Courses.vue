<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-4" v-for="course in courses" :key="course.id">
                    <div class="course_profile" style="background-image: url('../assets/img/courseintroimage.jpg')"></div>
                    <h1>{{ course.title }}</h1>
                    <p>{{course.description}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Courses",
        data () {
            return {
                courses: []
            }
        },
        mounted() {
            fetch('http://127.0.0.1:8000/api/getcourses')
                .then(res => res.json())
                .then(data => this.courses = data)
        },
    }
</script>

<style scoped>

</style>