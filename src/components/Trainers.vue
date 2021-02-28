<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-4" v-for="trainer in trainers" :key="trainer.id">
                    <div class="course_profile" style="background-image: url('../assets/img/courseintroimage.jpg')"></div>
                    <h1>{{ trainer.name }}</h1>
                    <p>{{trainer.email}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Trainers",
        data () {
            return {
                trainers: []
            }
        },
        mounted() {
            fetch('http://127.0.0.1:8000/api/gettrainers')
                .then(res => res.json())
                .then(data => this.trainers = data)
        },
    }
</script>

<style scoped>

</style>