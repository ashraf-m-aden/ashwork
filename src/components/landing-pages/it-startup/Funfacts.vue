<template>
    <!-- Start Fun Facts Area -->
    <section class="funfacts-area ptb-80">
        <div class="container">
            <div class="section-title">
                <h2>Notre priorité est de vous satisfaire</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="map-bg">
                <img src="../../../assets/img/map.png" alt="map">
            </div>
        </div>
    </section>
    <!-- End Fun Facts Area -->
</template>

<script>


export default {
    name: 'Funfacts',
    data() {
        return {
            contributors: 111,
            workers: 70,
            feedback: 8,
            downloaded: 10
        }
    },
    mounted() {
        const that = this;
        setInterval(function() {
            that.contributors += 1;
        }, 3000);
        setInterval(function() {
            that.workers += 1;
        }, 5000);
        setInterval(function() {
            that.feedback += 1;
        }, 2000);
        setInterval(function() {
            that.downloaded += 1;
        }, 1000);
    }
}
</script>