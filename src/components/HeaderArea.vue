<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">

                <router-link class="navbar-brand" to="/">TEST</router-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="Login">Registration</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="Login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="Login">Contact Us</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="Login"> Courses</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="Login"> Trainers</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="Login"> Trainers</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="Login"> home</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    
</template>

<script>
    export default {
        name: "Header-area"
    }
</script>

