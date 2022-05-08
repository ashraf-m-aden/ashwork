<template>
    <!-- Start Footer Area -->
    <footer class="footer-area bg-f7fafd">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <a href="/">
                                <img src="../../assets/img/spotlight.png" class="logo" alt="logo" />
                            </a>
                        </div>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Compagnie</h3>
                        <ul class="list">
                            <li><a href="#">A propos de nous</a></li>
                            <li><a href="#">Vos besoins</a></li>
                            <li><a href="#">Nos services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Address</h3>
                        
                        <ul class="footer-contact-info">
                            <li><feather type="mail"></feather> Email: <a href="#">spotlight-contact@gmail.com</a></li>
                            <li><feather type="phone-call"></feather> Phone: <a href="#">+ (253) 77 77 77 77</a></li>
                            <li><feather type="phone-call"></feather> Phone: <a href="#">+ (253) 77 77 77 77</a></li>
                        </ul>
                        <ul class="social-links">
                            <li><a href="#" class="facebook"><feather type="facebook"></feather></a></li>
                            <li><a href="#" class="twitter"><feather type="twitter"></feather></a></li>
                            <li><a href="#" class="instagram"><feather type="instagram"></feather></a></li>
                            <li><a href="#" class="linkedin"><feather type="linkedin"></feather></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="copyright-area">
                        <p>Copyright &copy;2021 Spotlight. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>

        <img src="../../assets/img/map.png" class="map" alt="map">
        <div class="shape1"><img src="../../assets/img/shape1.png" alt="shape"></div>
        <div class="shape8 rotateme"><img src="../../assets/img/shape2.svg" alt="shape"></div>
        <!-- <div class="go-top"><feather type="arrow-up"></feather></div> -->

        <back-to-top bottom="50px" right="50px">
            <div class="go-top"><feather type="arrow-up"></feather></div>
        </back-to-top>
    </footer>
    <!-- End Footer Area -->
</template>

<script>
import BackToTop from 'vue-backtotop'
export default {
    name: 'Footer',
    components: { BackToTop }
}
</script>