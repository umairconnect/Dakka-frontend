<template>
    <!-- Site footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <h6>Subscribe Here</h6>
                    <form>
                        <div class="subscribe_field">
                            <input type="email" id="email-text-field" name="email" placeholder="Enter your email...">
                            <button href="#" id="subscribe-button">Sign Up</button>
                        </div>
                    </form>
                </div>

                <div class="col-xs-6 col-md-3">
                    <h6>Categories</h6>
                    <ul class="footer-links">
                        <li>
                            <router-link to="Login"> Trainers</router-link>
                        </li>
                        <li>
                            <router-link to="courses"> Courses</router-link>
                        </li>
                        <li>
                            <router-link to="login">Contact Us</router-link>
                        </li>
                        <li>
                            <router-link to="login">Login</router-link>
                        </li>
                        <li>
                            <router-link to="register">Registration</router-link>
                        </li>
                    </ul>
                </div>

                <div class="col-xs-6 col-md-3">
                    <h6>Quick Links</h6>
                    <ul class="footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <hr>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">Copyright &copy; 2021
                    </p>
                </div>

                <div class="col-md-4 col-sm-6 col-xs-12">
                    <ul class="social-icons">
                        <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                        <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "FooterArea"
    }
</script>

<style scoped>

</style>