<template>
    <!-- Start Team Area -->
    <section class="team-area ptb-80 bg-f9f6f6">
        <div class="container">
            <div class="section-title">
                <h2>Notre superbe équipe</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div class="team-slides">
            <carousel 
                :items = 4
                :autoplay = "false" 
                :loop = "true"
                :autoplaySpeed = "true"
                :autoplayTimeout = "5000"
                :perPageCustom = "[[0, 1],[576, 2],[768, 2],[1200, 4], [1500, 5]]"
            >
                            
                <slide>
                    <div class="single-team">
                        <div class="team-image">
                            <img src="../../../assets/img/team-image/1.jpg" alt="image">
                        </div>

                        <div class="team-content">
                            <div class="team-info">
                                <h3>Ahmed Mohamed</h3>
                                <span>Ingenieur réseaux</span>
                            </div>

                            <ul>
                                <li><a href="#"><feather type="facebook"></feather></a></li>
                                <li><a href="#"><feather type="twitter"></feather></a></li>
                                <li><a href="#"><feather type="linkedin"></feather></a></li>
                                <li><a href="#"><feather type="gitlab"></feather></a></li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                        </div>
                    </div>
                </slide>
                
                <slide>
                    <div class="single-team">
                        <div class="team-image">
                            <img src="../../../assets/img/team-image/2.jpg" alt="image">
                        </div>

                        <div class="team-content">
                            <div class="team-info">
                                <h3>Ashraf Mohamed</h3>
                                <span>Developpeur Web</span>
                            </div>

                            <ul>
                                <li><a href="#"><feather type="facebook"></feather></a></li>
                                <li><a href="#"><feather type="twitter"></feather></a></li>
                                <li><a href="#"><feather type="linkedin"></feather></a></li>
                                <li><a href="#"><feather type="gitlab"></feather></a></li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                        </div>
                    </div>
                </slide>
                
                <slide>
                    <div class="single-team">
                        <div class="team-image">
                            <img src="../../../assets/img/team-image/3.jpg" alt="image">
                        </div>

                        <div class="team-content">
                            <div class="team-info">
                                <h3>Samatar</h3>
                                <span>XXXXXX</span>
                            </div>

                            <ul>
                                <li><a href="#"><feather type="facebook"></feather></a></li>
                                <li><a href="#"><feather type="twitter"></feather></a></li>
                                <li><a href="#"><feather type="linkedin"></feather></a></li>
                                <li><a href="#"><feather type="gitlab"></feather></a></li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                        </div>
                    </div>
                </slide>
                
                <slide>
                    <div class="single-team">
                        <div class="team-image">
                            <img src="../../../assets/img/team-image/4.jpg" alt="image">
                        </div>

                        <div class="team-content">
                            <div class="team-info">
                                <h3>Mohamed Abdallah</h3>
                                <span>XXXXXXX</span>
                            </div>

                            <ul>
                                <li><a href="#"><feather type="facebook"></feather></a></li>
                                <li><a href="#"><feather type="twitter"></feather></a></li>
                                <li><a href="#"><feather type="linkedin"></feather></a></li>
                                <li><a href="#"><feather type="gitlab"></feather></a></li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                        </div>
                    </div>
                </slide>

            </carousel>
        </div>
        
    </section>
    <!-- End Team Area -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'Team',
    components: { Carousel, Slide }
}
</script>