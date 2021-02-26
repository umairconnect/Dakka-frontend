<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="register">Registration</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="login">Contact Us</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="courses"> Courses</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="Login"> Trainers</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/"> home</router-link>
                        </li>
                    </ul>
                </div>
                <router-link class="navbar-brand" to="/">Logo</router-link>
            </div>
        </nav>
        <div class="header_banner" v-if="this.$route.name !== 'register'">
            <h3>Find & Search Course </h3>
            <input type="text" placeholder="Search courses" class="header_search" />
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header-area"
    }
</script>
<style lang="scss">
    header {
        .header_banner {
            background-image: url("../assets/img/online-learning-banner.jpg");
            height: 340px;
            background-position: center;
            background-size: cover;
            text-align: center;
            h3 {
                text-align: center;
                padding: 3rem 2rem 1rem 2rem;
                color: white;
            }
        }
    }
</style>
